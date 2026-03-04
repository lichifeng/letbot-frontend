import os
import csv
import re

# 尝试导入 Python 3.11+ 自带的 TOML 解析器
try:
    import tomllib
except ImportError:
    tomllib = None

# --- 配置区域 ---
SOURCE_DIR = './content2'  # 修改为你的 md 文件夹路径
OUTPUT_CSV = 'zola_export.csv'
# ----------------

def parse_toml_frontmatter(content):
    """
    提取并解析 Zola 的 +++ TOML 前置内容
    """
    # 匹配两个 +++ 之间的内容
    match = re.search(r'^\+\+\+\s*(.*?)\s*\+\+\+', content, re.DOTALL)
    if not match:
        return None
    
    toml_string = match.group(1)
    
    # 优先使用官方解析器，否则回退到正则
    if tomllib:
        try:
            return tomllib.loads(toml_string)
        except Exception:
            return None
    else:
        # 简易正则回退方案 (处理 date 和 extra.src)
        data = {}
        date_m = re.search(r'date\s*=\s*["\']([^"\']+)["\']', toml_string)
        if date_m: data['date'] = date_m.group(1)
        
        src_m = re.search(r'src\s*=\s*["\']([^"\']+)["\']', toml_string)
        if src_m: data['extra'] = {'src': src_m.group(1)}
        return data

def main():
    if not os.path.exists(SOURCE_DIR):
        print(f"❌ 目录不存在: {SOURCE_DIR}")
        return

    all_data = []
    print(f"🔍 正在扫描: {os.path.abspath(SOURCE_DIR)}")

    # 递归遍历所有 .md 文件
    for root, _, files in os.walk(SOURCE_DIR):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    metadata = parse_toml_frontmatter(content)
                    
                    if metadata:
                        # 提取字段，如果不存在则填入空字符串
                        date_val = metadata.get('date', '')
                        extra = metadata.get('extra', {})
                        src_val = extra.get('src', '') if isinstance(extra, dict) else ''
                        
                        all_data.append({
                            "file_name": file,
                            "src": src_val,
                            "date": str(date_val) # 转为字符串方便 CSV 存储
                        })
                        print(f"✅ 处理成功: {file}")
                    else:
                        print(f"⚠️ 跳过 (未找到 Frontmatter): {file}")
                        
                except Exception as e:
                    print(f"❌ 解析出错 {file}: {e}")

    # 写入 CSV
    if all_data:
        keys = ["file_name", "src", "date"]
        try:
            with open(OUTPUT_CSV, 'w', newline='', encoding='utf-8') as f:
                writer = csv.DictWriter(f, fieldnames=keys)
                writer.writeheader()
                writer.writerows(all_data)
            print("-" * 40)
            print(f"🎉 完成! 已将 {len(all_data)} 条数据保存至: {OUTPUT_CSV}")
        except PermissionError:
            print(f"❌ 写入失败: 请确保 {OUTPUT_CSV} 没有被其他程序打开。")
    else:
        print("ℹ️ 未发现有效数据。")

if __name__ == "__main__":
    main()