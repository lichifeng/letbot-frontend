// Code for processing AI generated JSON string in a n8n code node

try {
    // prepare ai-generated JSON string
    const ai_result = $("Summarization Chain").first().json.output.text;
    if (!ai_result) {
        return { success: false, error: 'blank source' };
    }

    const ai_result2 = $('mjj comment').first().json.data[0].output.text;

    let data;
    try {
        data = JSON.parse(ai_result);
    } catch (parseError) {
        return { success: false, error: 'bad source' };
    }

    let ai_comments;
    try {
        ai_comments = JSON.parse(ai_result2);
    } catch (parseError) {
        ai_comments = null;
    }

    // 核心字段校验
    if (!data.provider || !data.title || !data.summary) {
        return { success: false, error: 'no provider/title/summary' };
    }
    if (!Array.isArray(data.plans) || data.plans.length === 0) {
        return { success: false, error: 'no plans' };
    }

    // ---------- 构建 frontmatter ----------
    // prepare fields from data
    const title = data.title || $('extract content').first().json.title || '';
    const description = data.summary ? JSON.stringify(data.summary).slice(1, -1) : '';
    const comment = data.comment ? JSON.stringify(data.comment).slice(1, -1) : '';
    const model = data.model ? JSON.stringify(data.model).slice(1, -1) : '';

    // prepare ai comments, if available. Raw data is an array of comment objects with "fakeid", "character" and "comment" fields. Format it as an array for frontmatter(TOML) in zola page.
    const ai_comments_array = Array.isArray(ai_comments) ? ai_comments : [];
    let ai_comments_formatted = '';
    if (ai_comments_array.length > 0) {
        ai_comments_formatted = 'ai_comments = [\n';
        ai_comments_array.forEach(comment => {
            const fakeid = comment.fakeid ? JSON.stringify(comment.fakeid).slice(1, -1) : '';
            const character = comment.character ? JSON.stringify(comment.character).slice(1, -1) : '';
            const comment1 = comment.comment ? JSON.stringify(comment.comment).slice(1, -1) : '';
            ai_comments_formatted += `  { fakeid = "${fakeid}", character = "${character}", comment = "${comment1}" },\n`;
        });
        ai_comments_formatted += ']';
    }

    // 收集标签
    const tagSet = new Set();

    let provider;
    if (data.provider) {
        provider = JSON.stringify(data.provider).slice(1, -1);
        tagSet.add(provider)
    }

    data.plans.forEach(plan => {
        if (Array.isArray(plan.type)) {
            plan.type.forEach(t => tagSet.add(t));
        }

        if (Array.isArray(plan.location)) {
            plan.location.forEach(loc => tagSet.add(loc));
        }
    });
    const tags = Array.from(tagSet).map(t => `"${t}"`).join(', ');

    const raw_title = $('extract content').first().json.title || '';
    const safe_title = JSON.stringify(raw_title).slice(1, -1);

    const provider_kv = provider ? `provider = "${provider}"` : '';

    const frontmatter = `+++
title = "${title}"
date = "${$('extract content').first().json.created}"
description = "${description}"

[taxonomies]
tags = [${tags}]

[extra]
mock = "${comment}"
src = "${$('read page').first().json.solution.url}"
model = "${model}"
raw_title = "${safe_title}"
${provider_kv}
${ai_comments_formatted}
+++
`;

    // ---------- 构建 Markdown 主体 ----------
    const formatTagsWithLinks = (tags) => {
        if (!(Array.isArray(tags) && tags.length > 0)) return '';
        return tags.map(tag => `[${tag}](/tags/${tag.toLowerCase()}/)`).join(' ');
    };

    let markdown = '';

    // 摘要
    if (data.summary) {
        markdown += `## 📝摘要\n\n${data.summary}\n\n`;
    }

    // 套餐
    markdown += `## 📦套餐\n`;
    data.plans.forEach((plan, index) => {
        const planName = plan.name || `Plan${index + 1}`;
        markdown += `\n### ${planName}\n\n`;

        markdown += `| 配置项 | 详情 |\n`;
        markdown += `|--------|------|\n`;

        if (plan.location) {
            markdown += `| 位置 | ${formatTagsWithLinks(plan.location)} |\n`;
        }

        if (plan.datacenter && plan.datacenter.trim() !== '') {
            markdown += `| 数据中心 | ${plan.datacenter} |\n`;
        }

        if (plan.type) {
            markdown += `| 类型 | ${formatTagsWithLinks(plan.type)} |\n`;
        }

        // 内存
        if (plan.ram && plan.ram.trim() !== '') {
            markdown += `| 内存 | ${plan.ram} |\n`;
        }

        // CPU
        if (plan.cpu && plan.cpu.trim() !== '') {
            markdown += `| 处理器 | ${plan.cpu} |\n`;
        }

        // 存储
        if (plan.storage && plan.storage.trim() !== '') {
            markdown += `| 存储 | ${plan.storage} |\n`;
        }

        // 带宽
        if (plan.bandwidth && plan.bandwidth.trim() !== '') {
            markdown += `| 带宽 | ${plan.bandwidth} |\n`;
        }

        // IP
        if (plan.ip && plan.ip.trim() !== '') {
            markdown += `| IP | ${plan.ip} |\n`;
        }

        // 价格
        if (plan.price && plan.price.trim() !== '') {
            markdown += `| 价格 | ${plan.price} |\n`;
        }

        if (Array.isArray(plan.orderlink) && plan.orderlink.length > 0) {
            const links = plan.orderlink.map(item => `[${item.hint}](${item.url})`).join(' / ');
            markdown += `| 购买地址 | ${links} |\n`;
        }

        // 其他备注
        if (plan.other && plan.other.trim() !== '') {
            markdown += `\n**注：** ${plan.other}\n`;
        }

        markdown += `\n`;
    });

    // 探针
    if (data.lookingglass && data.lookingglass.trim() !== '') {
        markdown += `## 🔍探针\n\n`;
        markdown += `${data.lookingglass}\n\n`;
    }

    if (data.additional_info && data.additional_info.trim() !== '') {
        markdown += `## ⚠️其它说明\n\n`;
        markdown += `${data.additional_info}`;
    }

    const fullMarkdown = frontmatter + markdown;

    return {
        success: true,
        markdown: fullMarkdown,
        slug: data.slug
    };

} catch (error) {
    return {
        success: false,
        error: error
    };
}