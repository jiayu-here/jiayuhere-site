# JiaYu Here

`www.jiayuhere.com` 的个人综合网站，定位为：

- 个人主页
- 技术博客
- 项目作品集
- 学习知识库
- 个人工具箱
- 资源导航与实验日志

网站采用轻量静态架构，继续兼容 GitHub Pages 根目录部署。项目、文章和笔记使用 Markdown 维护，由零依赖 Node.js 脚本生成静态详情页和站点地图。

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
scripts/build-content.mjs   静态内容生成脚本
assets/styles.css           全站样式
assets/script.js            导航、筛选、搜索与工具交互
```

## 新增内容

在对应 `content` 子目录复制一个现有 Markdown 文件，修改 front matter 和正文：

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

项目可额外设置 `status` 和 `repository`。正文支持二、三级标题、段落、有序/无序列表、引用、链接、行内代码和代码块。

## 构建与检查

需要 Node.js 18 或更高版本：

```powershell
npm run check
npm run build
```

`npm run build` 会重新生成项目、博客和笔记页面，同时更新 `assets/data/search-index.json` 与 `sitemap.xml`。

## 本地预览

```powershell
python -m http.server 8000
```

浏览器访问 `http://localhost:8000`。

## 发布

仓库保留 `CNAME`，继续通过 GitHub Pages 发布到 `www.jiayuhere.com`。提交前应运行构建、链接检查和本地浏览器检查，并把 Markdown 源文件与生成后的 HTML 一起提交。
