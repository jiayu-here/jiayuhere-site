---
title: 个人知识库与全文检索 Web 应用
slug: personal-knowledge-base
description: 使用 Python、MySQL 和轻量前端构建可登录、可检索、可维护的个人知识管理系统。
category: 数据库
status: 已完成
date: 2026-07
tags: [Python, MySQL, Search, Docker, Web]
repository: https://github.com/jiayu-here/personal-knowledge-base
---
## 项目背景
零散文档和浏览器收藏很难长期形成知识结构。这个项目把内容录入、分类、检索和访问控制收拢到一个本地可运行的 Web 应用中。

## 功能目标
- 提供口令登录与会话保持。
- 管理知识条目、分类、标签和摘要。
- 支持关键词搜索与清晰的内容详情页。
- 保持本地部署简单，并可完整备份迁移。

## 硬件与软件环境
- Windows 本地开发环境。
- Python Web 服务与原生 HTML/CSS/JavaScript。
- MySQL 8.0 数据库。
- Docker 方案作为可选部署路径，而非运行前提。

## 系统架构
浏览器通过 HTTP 访问 Python 应用；应用处理认证、路由和数据访问；MySQL 保存结构化内容。静态资源与后端代码分离，配置通过环境变量传入。

## 实现步骤
1. 定义条目、分类和会话的最小数据模型。
2. 实现登录、退出和受保护路由。
3. 完成条目列表、详情与搜索流程。
4. 增加初始化脚本、示例配置和运行说明。
5. 使用真实 Cookie 流程验证登录到搜索的完整路径。

## 核心代码说明
认证通过服务端会话 Cookie 完成；数据访问使用参数化查询，避免把用户输入拼接到 SQL。搜索输入在后端统一清理和限制。

```sql
SELECT id, title, summary
FROM entries
WHERE title LIKE CONCAT('%', ?, '%')
   OR content LIKE CONCAT('%', ?, '%')
ORDER BY updated_at DESC;
```

## 调试过程
先检查 MySQL 服务和 3306 端口，再验证数据库初始化。应用启动后用保存 Cookie 的 HTTP 请求依次验证登录、列表、搜索和退出，避免只确认首页能打开。

## 遇到的问题
- 依赖较重的容器方案会增加首次启动成本。
- 本地配置、数据库密码和仓库内容必须分离。
- 仅看页面状态不容易发现会话和重定向问题。

## 解决方案
默认采用轻量本地 Python + MySQL 路径；敏感配置放入未提交的环境文件；使用端到端 HTTP 流程检查 Cookie 和跳转。

## 最终效果
应用可以在本地完成登录、知识浏览和搜索，仓库包含运行文档、初始化说明和基础部署配置，并保留完整备份方案。

## 后续改进
后续可加入 Markdown 编辑器、附件管理、双向链接和定期导出，同时保持数据可迁移。
