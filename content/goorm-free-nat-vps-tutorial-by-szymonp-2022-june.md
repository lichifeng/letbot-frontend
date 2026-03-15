+++
title = "[Goorm] 免费NAT VPS 获取教程"
date = "2022-06-04T11:28:55+00:00"
description = "本贴分享了通过Goorm IDE免费容器服务获取免费NAT VPS的方法，附带详细操作步骤，同时指出Goorm默认Ubuntu镜像自带失效软件源，并给出对应的修复方法。"

[taxonomies]
tags = ["Goorm", "Container", "NAT-VPS", "Ubuntu"]

[extra]
mock = "白嫖党狂喜！免费车不冲等什么？就是不知道稳不稳，能用一天是一天😂"
src = "https://lowendspirit.com/discussion/4235/free-nat-vps"
model = "Doubao 1.5 Pro 202409"
raw_title = "Free NAT VPS"
provider = "Goorm"
ai_comments = [
  { fakeid = "白嫖怪本怪", character = "为买而买没有实际用途的用户", comment = "免费NAT？先薅为敬！管它能不能用，先开10个挂探针，我的探针页面又丰富了！" },
  { fakeid = "线路警察", character = "专业IT从业者", comment = "这家的NAT出口IP是广播IP吧？解锁流媒体全挂，线路绕地球三圈，也就跑个脚本了。" },
  { fakeid = "Goorm黑粉头子", character = "同行", comment = "笑死，用容器当VPS卖？资源超售到姥姥家了，隔壁邻居一爆破，全村吃饭。" },
]
+++
## 📝摘要

本贴分享了通过Goorm IDE免费容器服务获取免费NAT VPS的方法，附带详细操作步骤，同时指出Goorm默认Ubuntu镜像自带失效软件源，并给出对应的修复方法。

## 📦套餐

### Free Container NAT VPS

| 配置项 | 详情 |
|--------|------|
| 类型 | [Container](/tags/container/) [NAT-VPS](/tags/nat-vps/) [Ubuntu](/tags/ubuntu/) |
| 价格 | Free |
| 购买地址 | [访问Goorm IDE官网](https://ide.goorm.io/) |

**注：** 需将容器设置为私有容器才可正常使用

## ⚠️其它说明

默认Ubuntu镜像自带失效软件源，删除`/etc/apt/sources.list.d/cloudfoundry-cli.list`即可修复  