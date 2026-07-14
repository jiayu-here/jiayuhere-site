# JiaYu Here

[![Website](https://img.shields.io/badge/Website-www.jiayuhere.com-0969da?style=flat-square)](https://www.jiayuhere.com/)
[![Languages](https://img.shields.io/badge/Languages-中文%20%7C%20English-24292f?style=flat-square)](#language)
[![Deployment](https://img.shields.io/badge/Deployment-GitHub%20Pages-2da44e?style=flat-square)](https://www.jiayuhere.com/)

<a id="language"></a>

[English](#english) | [中文](#中文)

---

<a id="english"></a>

## English

### Overview

[JiaYu Here](https://www.jiayuhere.com/en/) is a personal technology website that combines:

- A personal homepage
- A technical blog
- An engineering project portfolio
- A learning knowledge base
- A browser-based engineering toolbox
- Resource navigation and engineering lab logs

The site uses a lightweight static architecture and is deployed from the repository root with GitHub Pages. Projects, articles and notes are maintained in Markdown, then converted into static detail pages, search indexes, RSS feeds and a sitemap by a zero-dependency Node.js build script.

### Features

- Complete Chinese and English site versions
- Page-to-page language switching
- Bilingual full-text search, categories and tags
- Markdown-based projects, articles and notes
- Reading-time estimates and content navigation
- Syntax-highlighted code with copy buttons
- Responsive layouts for desktop and mobile
- Browser-based engineering calculators and preview tools
- Bilingual RSS feeds, sitemap and custom 404 pages
- Lightweight offline caching and Google Analytics 4
- Hourly synchronization of public GitHub repositories

Private repositories and this website's own repository are excluded from the public project list.

### Project Structure

```text
index.html                    Chinese homepage
en/                           Complete English site
about/                        About page
projects/                     Project index and generated project pages
blog/                         Blog index and generated article pages
notes/                        Note index and generated note pages
toolbox/                      Browser-based engineering toolbox
resources/                    Resource navigation
lab/                          Engineering lab logs
contact/                      Contact methods
content/projects/*.md         Chinese project source files
content/articles/*.md         Chinese article source files
content/notes/*.md            Chinese note source files
content/en/projects/*.md      Matching English project source files
content/en/articles/*.md      Matching English article source files
content/en/notes/*.md         Matching English note source files
content/templates/            Reusable Markdown templates
scripts/build-content.mjs     Static content generator
assets/styles.css             Global styles
assets/script.js              Navigation, search and interactive tools
assets/data/                  Chinese and English search indexes
sw.js                         Offline cache service worker
feed.xml / rss.xml            Generated Chinese RSS feeds
en/feed.xml / en/rss.xml      Generated English RSS feeds
sitemap.xml                   Generated bilingual sitemap
```

### Adding Content

Copy the appropriate file from `content/templates/` into a Chinese content directory, then create an English file with the same filename in the corresponding `content/en/` directory.

```md
---
title: Example Title
slug: example-slug
description: Summary used on index pages and by search engines
category: Category
date: 2026-07-15
tags: [Tag One, Tag Two]
---

## First Section

Article content.
```

Projects may also define `status` and `repository`. The complete workflow is documented in [`写作与发布说明.md`](写作与发布说明.md).

### Build and Validate

Node.js 18 or newer is required.

```powershell
npm run check
npm run build
```

The build validates that every Chinese Markdown file has a matching English file with the same filename and slug. Project pairs must also reference the same GitHub repository. A missing or mismatched translation stops the build before invalid language links can be published.

After validation, the build generates both language versions of all project, blog and note pages, together with search indexes, RSS feeds and `sitemap.xml`.

### Local Preview

```powershell
npm run build
npm run preview
```

Open `http://localhost:4173` in a browser.

### Deployment

The repository keeps its `CNAME` file and is published at [www.jiayuhere.com](https://www.jiayuhere.com/). Push changes to `main`; GitHub Actions builds the site and GitHub Pages deploys it automatically.

[Back to language selection](#language)

---

<a id="中文"></a>

## 中文

### 项目简介

[JiaYu Here](https://www.jiayuhere.com/) 是一个综合型个人技术网站，主要包含：

- 个人主页
- 技术博客
- 工程项目作品集
- 学习知识库
- 浏览器在线工程工具箱
- 常用资源导航与实验日志

网站采用轻量静态架构，兼容 GitHub Pages 根目录部署。项目、文章和笔记使用 Markdown 维护，再由零依赖 Node.js 构建脚本生成静态详情页、搜索索引、RSS 和站点地图。

### 主要功能

- 完整中文与英文网站
- 中英文对应页面一键切换
- 双语全文搜索、分类和标签
- 使用 Markdown 管理项目、文章和笔记
- 阅读时间、上下篇导航和返回顶部
- 代码高亮与一键复制
- 电脑端和手机端响应式布局
- 浏览器在线工程计算与预览工具
- 双语 RSS、站点地图和自定义 404 页面
- 轻量离线缓存与 Google Analytics 4
- 每小时同步 GitHub 公开仓库

私有仓库和网站自身仓库不会出现在公开项目列表中。

### 目录结构

```text
index.html                    中文首页
en/                           完整英文网站
about/                        关于我
projects/                     项目列表与生成后的项目详情
blog/                         博客列表与生成后的文章详情
notes/                        笔记列表与生成后的笔记详情
toolbox/                      浏览器在线工程工具箱
resources/                    常用资源导航
lab/                          工程实验日志
contact/                      联系方式
content/projects/*.md         中文项目源文件
content/articles/*.md         中文文章源文件
content/notes/*.md            中文笔记源文件
content/en/projects/*.md      对应的英文项目源文件
content/en/articles/*.md      对应的英文文章源文件
content/en/notes/*.md         对应的英文笔记源文件
content/templates/            可复用的 Markdown 模板
scripts/build-content.mjs     静态内容生成脚本
assets/styles.css             全站样式
assets/script.js              导航、搜索与工具交互
assets/data/                  中英文搜索索引
sw.js                         离线缓存 Service Worker
feed.xml / rss.xml            自动生成的中文 RSS
en/feed.xml / en/rss.xml      自动生成的英文 RSS
sitemap.xml                   自动生成的双语站点地图
```

### 新增内容

从 `content/templates/` 复制对应模板到中文内容目录，同时在 `content/en/` 的对应目录创建文件名相同的英文稿。

```md
---
title: 示例标题
slug: example-slug
description: 用于列表页和搜索引擎的摘要
category: 分类
date: 2026-07-15
tags: [标签一, 标签二]
---

## 第一节

正文内容。
```

项目还可以设置 `status` 和 `repository`。完整写作流程见 [`写作与发布说明.md`](写作与发布说明.md)。

### 构建与检查

需要 Node.js 18 或更高版本。

```powershell
npm run check
npm run build
```

构建脚本会校验每一篇中文 Markdown 是否存在文件名和 slug 相同的英文稿。中英文项目还必须指向同一个 GitHub 仓库。缺少翻译或配对不一致时，构建会立即失败，避免发布无效的语言切换链接。

校验通过后，构建脚本会生成中英文项目、博客和笔记页面，同时更新双语搜索索引、RSS 和 `sitemap.xml`。

### 本地预览

```powershell
npm run build
npm run preview
```

浏览器访问 `http://localhost:4173`。

### 发布方式

仓库保留 `CNAME` 文件，并通过 GitHub Pages 发布到 [www.jiayuhere.com](https://www.jiayuhere.com/)。修改内容后提交并推送到 `main`，GitHub Actions 会自动构建，随后由 GitHub Pages 完成发布。

[返回语言选择](#language)
