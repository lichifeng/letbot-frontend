+++
title = "[IPv6rs-Limited] 开源Delorean IPv4转IPv6反向代理工具"
date = "2024-05-21T14:30:26+00:00"
description = "IPv6rs公司致力于推广基于IPv6的去中心化互联网，本次开源了自身生产网络正在使用的Delorean反向代理工具。该工具可通过IPv4接收HTTP/TLS流量，匹配对应域名后转发至目标IPv6地址，能为IPv6-only网站提供IPv4入口，代码已托管在GitHub。"

[taxonomies]
tags = ["IPv6rs-Limited"]

[extra]
mock = "好活！开箱即用的IPv4转IPv6反代，mjj赶紧clone下来测一波！"
src = "https://lowendspirit.com/discussion/7835/foss-delorean-an-opinionated-tls-sni-and-http-reverse-proxy-for-ipv4-to-ipv6"
model = "doubao-1.5-pro-20250401"
raw_title = "[FOSS] Delorean - An opinionated TLS+SNI and HTTP Reverse Proxy for IPv4 to IPv6"
provider = "IPv6rs-Limited"
ai_comments = [
  { fakeid = "VPS萌新小白", character = "VPS圈新人", comment = "这项目名字叫德罗宁？是不是用了它，我的小鸡就能像《回到未来》的汽车一样穿越网络阻塞？" },
  { fakeid = "抠门老哥", character = "什么都嫌贵的用户", comment = "开源是好事，但你们公司靠这个“促进自由”的生意经，是不是比ONEMAN卖的NAT还暴利？" },
  { fakeid = "网络工程师老王", character = "专业IT从业者", comment = "IPv4 to IPv6的反代，想法不错。但看描述只提了SNI和TLS，对UDP和WebSocket等协议的支持情况只字未提啊。" },
]
+++
## 📝摘要

IPv6rs公司致力于推广基于IPv6的去中心化互联网，本次开源了自身生产网络正在使用的Delorean反向代理工具。该工具可通过IPv4接收HTTP/TLS流量，匹配对应域名后转发至目标IPv6地址，能为IPv6-only网站提供IPv4入口，代码已托管在GitHub。

## ⚠️其它说明

项目完全免费开源  
代码仓库：[GitHub](https://github.com/ipv6rslimited/delorean)  