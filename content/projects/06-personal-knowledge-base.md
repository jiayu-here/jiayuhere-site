---
title: 个人知识库与本地资料检索应用
slug: personal-knowledge-base
description: 可登录、可上传文档、可本地检索并可选接入 AI 回答的 Docker 化个人知识库。
category: Web 应用
status: 已完成本地验证
date: 2026-07
tags: [Python, SQLite, Docker, Search, Web]
repository: https://github.com/jiayu-here/personal-knowledge-base
---
## 项目简介
这是一个运行在本机 Docker 中的个人知识库。用户登录后可上传 TXT、Markdown、PDF 和 DOCX，系统自动提取文本、切分资料并建立本地检索索引；提问时返回相关片段，配置 OpenAI API Key 后可进一步生成基于资料的回答。

## 项目目标
- 将散落文档集中到本地可控的知识库。
- 提供登录、上传、检索、详情、删除和数据持久化。
- 在没有外部 API 时保留可用的本地检索。
- 用 Docker Compose 简化启动、迁移和备份。

## 使用技术
Python HTTP 服务、SQLite、HTML/CSS/JavaScript、文档文本提取、本地哈希向量、余弦相似度、Cookie 会话、Docker 和 Docker Compose。

## 硬件环境
不依赖专用硬件。当前在 Windows 电脑本地运行，需要能够启动 Docker Desktop，并为上传文档与索引预留磁盘空间。

## 软件环境
- Python 运行时与 `requirements.txt` 中的依赖。
- Docker Desktop、Docker Compose。
- 浏览器访问 `http://localhost:8010`。
- 可选的 OpenAI API Key；未配置时仍可使用本地检索。

## 系统架构
浏览器访问 Python 服务；服务处理认证、文件解析、文本切分、索引和问答；SQLite 保存文档元数据、分块文本和向量；`data/` 作为持久化挂载目录。前端静态资源和后端逻辑分开，敏感配置从 `.env` 读取。

```architecture
浏览器 -> Python 服务 -> 登录与文档接口 -> 检索和问答 -> 页面结果
上传文件 -> 文本解析与切分 -> SQLite 元数据和索引 -> data 持久化目录
```

## 功能模块
- 密码登录、会话 Cookie 和受保护接口。
- TXT、Markdown、PDF、DOCX 上传与文本提取。
- 文档切分、本地索引、相似度检索和可选 AI 回答。
- 文件列表、片段预览、详情查询和删除。
- Docker 构建、Compose 启动和持久化数据目录。

## 实现步骤
1. 建立最小 Python 服务和静态前端。
2. 加入登录、Cookie 和受保护路由。
3. 接入四类文件解析和重叠文本切分。
4. 在 SQLite 中保存文档、分块和本地向量。
5. 实现相似度检索与可选模型回答。
6. 用 Compose 挂载数据目录并完成端到端 HTTP 验证。

## 关键代码
### `app/server.py`：文本分块
上传文档会按固定长度切分，并保留一定重叠，降低关键信息落在边界处的影响：

```python
def chunk_text(text):
    clean = re.sub(r"\s+", " ", text).strip()
    chunks = []
    start = 0
    while start < len(clean):
        chunk = clean[start:start + CHUNK_SIZE].strip()
        if chunk:
            chunks.append(chunk)
        start += CHUNK_SIZE - CHUNK_OVERLAP
    return chunks
```

### `app/server.py`：相似度检索
提问时计算问题向量，并按余弦相似度选取最相关的分块：

```python
query_vector = embed(question)
rows = conn.execute("select filename, text, vector from chunks").fetchall()
hits = sorted(
    ({"filename": name, "text": text, "score": cosine(query_vector, json.loads(vector))}
     for name, text, vector in rows),
    key=lambda item: item["score"],
    reverse=True,
)[:5]
```

## 调试过程
先检查 `docker compose config` 和 Python 语法，再启动容器并验证端口。使用保存 Cookie 的 HTTP 请求依次测试登录、上传、提问、详情、删除和退出，同时检查重启容器后 SQLite 与上传资料是否仍在。

## 遇到的问题
- 重型向量数据库会增加个人本地部署成本。
- 密码、会话密钥、API Key 和上传资料不能提交到公开仓库。
- 只确认首页能打开，不能证明会话、解析、检索和删除流程正确。

## 解决方案
采用单个 Python 服务、SQLite 和轻量本地向量；敏感配置放入 `.env`，资料保存在未提交的挂载目录；用带 Cookie 的端到端请求检查完整用户流程。

## 最终效果
应用可在 `localhost:8010` 完成登录、资料上传、检索、片段预览和删除。配置 API Key 后可根据检索片段生成回答；不配置时仍返回相关原文。仓库提供 Dockerfile、Compose、示例环境变量和完整前后端代码。

## 项目总结
该项目优先保证个人场景下的简单、可迁移和可离线运行。当前本地向量适合个人资料检索与演示，不把它描述为商业级向量数据库或通用大模型平台。

## GitHub 仓库链接
[访问 personal-knowledge-base](https://github.com/jiayu-here/personal-knowledge-base)
