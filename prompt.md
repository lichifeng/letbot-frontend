## Reqirement
Analyze an original post in **Original Post** section below as an IT professional to determine if it promotes a service. If so, extract the information into a valid, parseable JSON object; otherwise return an empty JSON object.

**Top-level fields** (all required; use `null` if unavailable):

- `provider`: Provider name, hyphenated. e.g. `"Some-Host"`
- `title`: Suggested title in Chinese. e.g. `"[SomeHost] 低价CN2线路香港独立服务器 每月￥199起"`, `"[NiceServer] 德国高性能AMD VPS 圣诞特供"`
- `summary`: Chinese summary, ≤300 words. e.g. `"SomeHost在黑五期间提供了一些德国VPS套餐，支持支付宝付款。所有套餐均采用最新Ryzen CPU和DDR5内存。原贴还包含了随机赠送的内容。"`
- `comment`: 不超过50字的中文评论，风格搞笑、夸张还带些讽刺，用语和HOSTLOC/NODESEEK/LOWENDTALK/LOWENDSPIRIT论坛上的网友类似，多使用IT界、主机圈的话术.
- `lookingglass`: Markdown-formatted looking glass info; one node per line with two trailing spaces; URLs in markdown link syntax. e.g. `"[Tokyo, Japan](http://lg.example.com)  "`
- `plans`: Array of plan objects (see below).
- `additional_info`: Other **important** global info in Chinese, concise. No need to mark unimportant information. Markdown-formatted, one line per hint with two  trailing spaces.
- `slug`: Generate a slug from the content, hyphenated english. Should be a valid filename. At least 20 characters long and use flexible expressions to avoid duplication. Hyphenize the title in input if it is fit for my need. e.g. `"somehost-2025-bf-promotion-dedi-root-server-and-giveaways-by-authorname"`
- `model`: Detailed name of current AI model (normally with date and version).

**Plan object fields** (omit if unavailable):

- `name`: Plan name.
- `type`: Tags for type (virtualization, management, OS, premium route names etc.); hyphenate multi-word tags. e.g. `["KVM", "Managed", "Linux", "CMI"]`, `["Dedicated-Server", "CN2", "AS4386"]`, `["E-mail", "Domain"]`
- `location`: Location tags (continent/country/city); hyphenate multi-word names. e.g. `["Asia", "Japan", "Tokyo"]`
- `datacenter`: Datacenter name.
- `ram`: Amount and type. e.g. `"1GB DDR5"`
- `cpu`: CPU details. e.g. `"2x shared Ryzen cores"`
- `storage`: Storage config. e.g. `"30GB NVMe SSD + 120GB HDD"`
- `bandwidth`: Bandwidth and port speed. e.g. `"1TB @ 1Gbps Shared"`
- `ip`: IP allocation. e.g. `"1 IPv4, /64 IPv6"`
- `price`: Pricing. e.g. `"$11.88/month"`, `"$100/year"` Include both if available.
- `orderlink`: Order URL.
- `other`: Other plan-specific **important** info in Chinese, concise. No need to mark unimportant information. e.g. `"特殊套餐，不提供退款；含DDoS防护；超限后限速；邮件端口默认被阻止"`

**Rules**: Don't put giveaways in plans. Mention them in `additional_info` section. e.g. `"在原贴回复有机会获得免费VPS  "`

## Original Post
```
{text}
```