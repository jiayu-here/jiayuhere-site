---
title: first-repo Git 与 GitHub 入门练习
slug: first-repo
description: 用简单文本与 Shell 文件练习仓库创建、README、提交和推送的第一个 GitHub 仓库。
category: 工程基础
status: 学习仓库
date: 2026-07
tags: [Git, GitHub, Shell, README]
repository: https://github.com/jiayu-here/first-repo
---
## 项目简介
这是第一个 GitHub 学习仓库，用少量文本和 Shell 文件记录从本地修改到远程提交的基础流程。仓库定位是版本控制练习，不是完整业务应用。

## 项目目标
- 学会创建仓库和编写 README。
- 理解工作区、暂存区、本地提交和远程仓库。
- 跑通修改、提交、推送和网页确认流程。

## 使用技术
Git、GitHub、Markdown、Shell 和命令行。

## 硬件环境
不需要专用硬件，普通电脑即可完成练习。

## 软件环境
Git 命令行、文本编辑器、终端和 GitHub 账号。

## 系统架构
仓库结构保持最小：README 说明用途，三个文本练习文件用于观察变更，一个 Shell 文件用于练习可执行脚本和版本记录。

```architecture
README 与练习文件 -> 工作区变更 -> Git 暂存区 -> 本地提交 -> 历史记录
Shell 练习文件 -> 权限与内容修改 -> 版本差异
```

## 功能模块
- `README.md`：项目说明。
- `file3.txt`、`file4.txt`：文本修改练习。
- `file5.sh`：Shell 文件练习。

## 实现步骤
1. 创建 GitHub 仓库并建立本地目录。
2. 添加 README 和练习文件。
3. 使用 `git status` 检查变化。
4. 暂存、提交并推送。
5. 在 GitHub 页面核对文件与提交历史。

## 关键代码
核心练习是完整执行最小 Git 提交流程：

```bash
git status
git add README.md file3.txt file4.txt file5.sh
git commit -m "Update practice files"
git push
```

## 调试过程
通过 `git status`、`git log` 和 GitHub 提交页面对照本地与远程状态；文件未出现时检查是否已暂存、是否提交到正确分支以及 remote 地址是否正确。

## 遇到的问题
初学阶段容易混淆“保存文件”“本地提交”和“推送远程”三个动作，也容易遗漏 README 或错误文件。

## 解决方案
每一步都先运行 `git status`，提交后查看 `git log`，推送后再到 GitHub 页面核对，建立可重复的检查顺序。

## 最终效果
仓库已公开保存 README、文本文件、Shell 文件和提交记录，完成了最基础的 GitHub 工作流练习。

## 项目总结
这个仓库的价值是建立版本控制操作习惯。它明确标注为学习仓库，避免与完整工程项目混淆。

## GitHub 仓库链接
[访问 first-repo](https://github.com/jiayu-here/first-repo)
