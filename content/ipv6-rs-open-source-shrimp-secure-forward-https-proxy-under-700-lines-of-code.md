+++
title = "[ipv6-rs] 开源轻量安全HTTPS正向代理Shrimp 代码量不足700行"
date = "2024-05-29T14:16:15+00:00"
description = "本文介绍了ipv6.rs推出的开源安全正向HTTPS代理项目Shrimp，总代码量不到700行，相比大型代理项目更易审计。项目支持常规模式和强制IPv6的Lockdown模式，采用bcrypt哈希存储密码安全性更高，适合提供代理服务的VPN厂商，使用无限制仅需署名的COOL许可证，当前已开源托管，该项目被用于开发者的Cloud Seeder服务中。"

[taxonomies]
tags = ["ipv6-rs"]

[extra]
mock = "700行搞定正向代理，比十万行Squid清爽多了，开源党狂喜！"
src = "https://lowendspirit.com/discussion/7861/foss-shrimp-a-secure-forward-https-proxy-in-700-lines-of-code"
model = "Doubao-3.5-pro 202406"
raw_title = "[FOSS] Shrimp - A Secure Forward HTTPS Proxy in < 700 Lines of Code"
provider = "ipv6-rs"
ai_comments = [
  { fakeid = "VPS小白鼠", character = "VPS圈新人", comment = "700行代码？这比我的VPS探针脚本还短！大佬们快出个一键脚本，我立马在甲骨文ARM上开测！" },
  { fakeid = "专治各种不服", character = "专业IT从业者", comment = "强制IPv6+NAT64？这思路清奇，专治某些机场的IPv4劣化线路。就是不知道对MJJ的落地机友好不。" },
  { fakeid = "隔壁老王供应商", character = "同行", comment = "好家伙，直接点名替代Squid，还自带bcrypt。这是要卷死我们这些用旧方案的小厂啊，代码审计压力山大。" },
]
+++
## 📝摘要

本文介绍了ipv6.rs推出的开源安全正向HTTPS代理项目Shrimp，总代码量不到700行，相比大型代理项目更易审计。项目支持常规模式和强制IPv6的Lockdown模式，采用bcrypt哈希存储密码安全性更高，适合提供代理服务的VPN厂商，使用无限制仅需署名的COOL许可证，当前已开源托管，该项目被用于开发者的Cloud Seeder服务中。

## ⚠️其它说明

Shrimp为开源项目，采用COOL宽松许可证，无使用限制仅需保留署名  
项目开源仓库：[GitHub](https://github.com/ipv6rslimited/shrimp)  
该项目已应用于ipv6.rs的Cloud Seeder服务  