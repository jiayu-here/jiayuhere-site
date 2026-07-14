---
title: 个人知识库与全文检索 Web 应用
slug: personal-knowledge-base
description: 使用 Python、SQLite、本地向量检索和轻量前端构建可登录、可检索、可维护的个人知识管理系统。
category: 数据库
status: 已完成
date: 2026-07
tags: [Python, SQLite, Search, Docker, Web]
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
- SQLite 用于保存文档、文本分块和本地检索向量。
- Docker 方案作为可选部署路径，而非运行前提。

## 系统架构
浏览器通过 HTTP 访问 Python 应用；应用处理认证、路由、文件解析和数据访问；SQLite 保存文档元数据、文本分块和本地检索向量。静态资源与后端代码分离，配置通过环境变量传入；Docker 只负责把应用和持久化目录以可重复方式启动。

## 实现步骤
1. 定义条目、分类和会话的最小数据模型。
2. 实现登录、退出和受保护路由。
3. 完成条目列表、详情与搜索流程。
4. 增加初始化脚本、示例配置和运行说明。
5. 使用真实 Cookie 流程验证登录到搜索的完整路径。

## 核心代码说明
认证通过服务端会话 Cookie 完成；数据访问使用参数化查询，避免把用户输入拼接到 SQL。检索时先把问题和文本分块转换为本地向量，再按余弦相似度返回最相关的资料片段；未配置 API Key 时，页面仍能提供本地检索结果。

```python
query_vector = embed(question)
rows = conn.execute("select filename, text, vector from chunks").fetchall()
hits = sorted(rows, key=lambda row: cosine(query_vector, json.loads(row[2])), reverse=True)[:5]
```

## 调试过程
先检查 `docker compose config`、容器状态和 `http://localhost:8010`，再验证 SQLite 初始化。应用启动后用保存 Cookie 的 HTTP 请求依次验证登录、上传、提问、资料详情、删除和退出，避免只确认首页能打开。

## 遇到的问题
- 依赖较重的容器和向量数据库方案会增加首次启动成本，且网络不稳定时会影响镜像拉取。
- 本地密码、会话密钥和可选 OpenAI API Key 不能进入版本控制；上传资料也不应作为公开仓库内容。
- 仅看页面状态不容易发现会话、文件解析、检索结果和删除操作是否真正成功。

## 解决方案
默认采用单个 Python 服务 + SQLite 本地索引的轻量路径；敏感配置放入未提交的 `.env` 文件，上传数据保存在挂载的 `data/` 目录；使用端到端 HTTP 流程检查 Cookie、接口返回和持久化结果。

## 最终效果
应用可以在本地完成登录、资料上传、知识浏览、语义检索、详情预览和删除；配置 OpenAI API Key 后可以基于检索片段生成回答。仓库包含运行文档、初始化说明和基础部署配置，并保留完整备份方案。

## 数据流与持久化设计
上传 `.txt`、`.md`、`.pdf` 或 `.docx` 后，服务先保存原文件，再提取文本、按重叠窗口切分内容，并为每个分块生成本地哈希向量。SQLite 中的 `documents` 表保存文件名、分块数量和创建时间，`chunks` 表保存分块文本、所属文档和向量。提问时按余弦相似度取前五个候选；如果没有配置 OpenAI Key，仍会把最相关的原文片段直接返回，因此核心检索功能不依赖外部模型服务。

## 运行边界与配置方式
Docker Compose 将主机 `8010` 映射到容器 `8000`，并把本地 `data/` 挂载到容器 `/data`，使重启容器后资料和 SQLite 索引仍然保留。`APP_PASSWORD`、`SESSION_SECRET`、`OPENAI_API_KEY` 和模型名从环境变量读取；登录成功后设置 `HttpOnly`、`SameSite=Lax` 的 `kb_session` Cookie。项目代码、环境变量和用户上传资料三者分开管理，便于备份且避免误公开敏感信息。

## 验证与交付范围
- 已使用 `docker compose up -d --build` 和 `python -m py_compile app/server.py` 检查构建与 Python 语法。
- 已用 Cookie 保存方式逐项验证登录、上传、提问、详情查询和删除，而不是只做首页访问测试。
- 默认访问地址为 `http://localhost:8010`；项目源目录为 `C:\Users\jiayu\Desktop\personal-knowledge-base`，完整备份目录为 `E:\personal-knowledge-base-backup`。
- 当前检索向量是轻量、本地、可离线运行的实现，适合个人资料管理与项目演示；它不是云端通用大模型或高精度商业向量数据库的替代品。

## 后续改进
后续可加入 Markdown 编辑器、附件管理、双向链接和定期导出，同时保持数据可迁移。
