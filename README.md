# JiaYu Here

`www.jiayuhere.com` 的个人综合网站，定位为：

- 个人主页
- 技术博客
- 项目作品集
- 学习知识库
- 个人工具箱
- 资源导航与实验日志

网站采用轻量静态架构，继续兼容 GitHub Pages 根目录部署。项目、文章和笔记使用 Markdown 维护，由零依赖 Node.js 脚本生成静态详情页和站点地图。

目前支持跟随系统深浅色、全站内容搜索、分类与标签、阅读时间、代码复制、前后内容导航、返回顶部、轻量离线访问和 Google Analytics 4 访问统计。公开项目由 GitHub Actions 每小时同步，私有仓库与本站仓库不会展示。

## 目录结构

```text
index.html                  首页
about/                      关于我
projects/                   项目列表与生成后的项目详情
blog/                       博客列表与生成后的文章详情
notes/                      笔记列表与生成后的笔记详情
toolbox/                    个人工具箱
resources/                  资源导航
lab/                        实验日志
contact/                    联系方式
content/projects/*.md       项目 Markdown 源文件
content/articles/*.md       文章 Markdown 源文件
content/notes/*.md          笔记 Markdown 源文件
content/templates/          可复制的文章、笔记与项目模板
scripts/build-content.mjs   静态内容生成脚本
assets/styles.css           全站样式
assets/script.js            导航、全站搜索、阅读增强与工具交互
assets/data/search-index.json  项目、博客、笔记的全站搜索索引
sw.js                       PWA 离线缓存
```

## 新增内容

在 `content/templates` 中复制对应模板到内容目录，再修改 front matter 和正文。完整步骤见根目录的 `写作与发布说明.md`。

```md
---
title: 示例标题
slug: example-slug
description: 用于列表页和 SEO 的摘要
category: 分类
date: 2026-07-14
tags: [标签一, 标签二]
---

## 第一节
正文内容。
```

项目可额外设置 `status` 和 `repository`。正文支持二、三级标题、段落、有序/无序列表、引用、链接、行内代码和代码块；项目中的 `architecture` 代码围栏会生成响应式系统架构图。

## 构建与检查

需要 Node.js 18 或更高版本：

```powershell
npm run check
npm run build
```

`npm run build` 会重新生成项目、博客和笔记页面，同时更新正文搜索索引 `assets/data/search-index.json` 与 `sitemap.xml`。详情页的阅读时间、目录和前后内容导航也会随 Markdown 自动更新。

## 本地预览

```powershell
npm run build
npm run preview
```

浏览器访问 `http://localhost:8000`。

## 发布

仓库保留 `CNAME`，继续通过 GitHub Pages 发布到 `www.jiayuhere.com`。修改 Markdown 后提交并推送到 `main`，GitHub Actions 会自动构建生成页面、搜索索引和站点地图，再由 GitHub Pages 发布。公开项目仍会每小时同步一次。
