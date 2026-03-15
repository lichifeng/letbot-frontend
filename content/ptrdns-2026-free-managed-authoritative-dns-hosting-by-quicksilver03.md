+++
title = "[PTRDNS] 免费权威DNS托管服务 开放免费套餐申请"
date = "2026-02-07T10:12:54+00:00"
description = "PTRDNS是一家托管权威DNS服务提供商，本次推出面向家庭实验室和低流量个人域名的免费套餐。免费套餐支持1个DNS区域、无限记录、月度20万查询量，最低TTL 120s，支持动态DNS、DNSSEC、PowerDNS API。免费名额有限，注册需绑定信用卡，超额查询会被提醒升级，多次违规会暂停服务。"

[taxonomies]
tags = ["PTRDNS", "Managed", "Authoritative-DNS", "Global"]

[extra]
mock = "免费还要绑信用卡？套路还是防羊毛？反正先占个坑再说！"
src = "https://lowendspirit.com/discussion/10520/ptrdns-free-authoritative-dns-hosting"
model = "Doubao 1.5 Pro 202408"
raw_title = "PTRDNS - Free authoritative DNS hosting"
provider = "PTRDNS"
ai_comments = [
  { fakeid = "白嫖怪本怪", character = "为买而买没有实际用途的用户", comment = "免费！先薅为敬！虽然我域名还在Godaddy吃灰，但先注册个DNS服务备着，万一哪天想不开了呢？" },
  { fakeid = "网络老中医", character = "专业IT从业者", comment = "没有Anycast，权威解析全球延迟看脸。PowerDNS API是亮点，适合玩Infra as Code的极客，但生产环境再观望下。" },
  { fakeid = "隔壁老王VPS", character = "同行", comment = "好家伙，免费引流这招玩得溜。但用Chargebee绑卡劝退一波懒人，这转化漏斗设计得有点东西啊。" },
]
+++
## 📝摘要

PTRDNS是一家托管权威DNS服务提供商，本次推出面向家庭实验室和低流量个人域名的免费套餐。免费套餐支持1个DNS区域、无限记录、月度20万查询量，最低TTL 120s，支持动态DNS、DNSSEC、PowerDNS API。免费名额有限，注册需绑定信用卡，超额查询会被提醒升级，多次违规会暂停服务。

## 📦套餐

### 免费套餐

| 配置项 | 详情 |
|--------|------|
| 位置 | [Global](/tags/global/) |
| 类型 | [Managed](/tags/managed/) [Authoritative-DNS](/tags/authoritative-dns/) |
| 带宽 | 200K monthly queries |
| 价格 | 免费 |
| 购买地址 | [注册申请免费套餐](https://app.ptrdns.net/signup) |

**注：** 支持AXFR区域传输；暂不支持任播；免费名额有限

## ⚠️其它说明

Nameserver分布全球，同时支持IPv4和IPv6  
支持网页界面管理，可通过PowerDNS API配合IaC工具管理  
服务商推出免费计划用于收集用户反馈优化服务  