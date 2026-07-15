import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const githubUser = "jiayu-here";
const excludedRepositories = new Set(["jiayuhere-site"]);
const googleAnalyticsId = "G-V2VWFFLH85";
const googleAnalyticsTag = `  <script async src="https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${googleAnalyticsId}');
  </script>`;

const sections = {
  projects: { source: "content/projects", output: "projects", label: "项目作品", title: "项目作品" },
  articles: { source: "content/articles", output: "blog", label: "技术博客", title: "技术博客" },
  notes: { source: "content/notes", output: "notes", label: "学习笔记", title: "学习笔记" }
};

const logConfig = { source: "content/logs", output: "lab" };

const localeConfig = {
  zh: {
    lang: "zh-CN",
    routeRoot: "",
    contentRoot: "content",
    strings: {
      skip: "跳到主要内容",
      homeLabel: "Jiayu Lab 首页",
      openNav: "打开导航",
      navLabel: "主要导航",
      projects: "项目",
      articles: "博客",
      notes: "笔记",
      toolbox: "工具箱",
      resources: "资源",
      lab: "日志",
      contact: "联系我",
      switchLabel: "Switch to English",
      switchText: "EN",
      footer: "把工程实践、学习过程和可复用的方法整理成长期资产。",
      about: "关于我",
      sitemap: "站点地图"
    }
  },
  en: {
    lang: "en",
    routeRoot: "en/",
    contentRoot: "content/en",
    strings: {
      skip: "Skip to main content",
      homeLabel: "Jiayu Lab home",
      openNav: "Open navigation",
      navLabel: "Primary navigation",
      projects: "Projects",
      articles: "Blog",
      notes: "Notes",
      toolbox: "Toolbox",
      resources: "Resources",
      lab: "Lab Log",
      contact: "Contact",
      switchLabel: "切换到中文",
      switchText: "中文",
      footer: "Turning engineering practice, learning and reusable methods into long-term assets.",
      about: "About",
      sitemap: "Sitemap"
    }
  }
};

const localizedSections = {
  zh: sections,
  en: {
    projects: { ...sections.projects, label: "Projects", title: "Projects" },
    articles: { ...sections.articles, label: "Technical Blog", title: "Technical Blog" },
    notes: { ...sections.notes, label: "Learning Notes", title: "Learning Notes" }
  }
};

const routeFromRoot = (prefix, locale, route = "") => `${prefix}${localeConfig[locale].routeRoot}${route}`;

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const escapeXml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&apos;");

const plainText = (value = "") => String(value)
  .replace(/^---[\s\S]*?---/m, " ")
  .replace(/```[\s\S]*?```/g, " ")
  .replace(/!?(?:\[([^\]]*)\])\([^)]*\)/g, "$1")
  .replace(/[#>*_`~-]/g, " ")
  .replace(/\s+/g, " ")
  .trim();

const readingMinutes = (value) => {
  const text = plainText(value);
  const chineseCharacters = (text.match(/[\u3400-\u9fff]/g) || []).length;
  const latinWords = (text.replace(/[\u3400-\u9fff]/g, " ").match(/[A-Za-z0-9]+/g) || []).length;
  return Math.max(1, Math.ceil(chineseCharacters / 300 + latinWords / 200));
};

const parseValue = (raw) => {
  const value = raw.trim();
  if (value.startsWith("[") && value.endsWith("]")) {
    return value.slice(1, -1).split(",").map((item) => item.trim().replace(/^['"]|['"]$/g, "")).filter(Boolean);
  }
  return value.replace(/^['"]|['"]$/g, "");
};

const parseDocument = (source, filePath) => {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw new Error(`Missing front matter: ${filePath}`);

  const meta = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    meta[line.slice(0, separator).trim()] = parseValue(line.slice(separator + 1));
  }

  if (!meta.title || !meta.slug || !meta.description) {
    throw new Error(`Required front matter missing: ${filePath}`);
  }

  return { meta, body: match[2].trim() };
};

const repositoryNameFor = (item) => {
  if (!item.meta.repository) throw new Error(`Project repository missing: ${item.meta.title}`);
  const repositoryUrl = new URL(item.meta.repository);
  const [owner, name] = repositoryUrl.pathname.split("/").filter(Boolean);
  if (owner?.toLowerCase() !== githubUser || !name) throw new Error(`Unexpected project repository: ${item.meta.repository}`);
  return name.toLowerCase();
};

const fetchPublicRepositories = async () => {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "jiayuhere-site-build"
  };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  const response = await fetch(`https://api.github.com/users/${githubUser}/repos?per_page=100&sort=updated&direction=desc`, { headers });
  if (!response.ok) throw new Error(`GitHub repository sync failed: ${response.status} ${response.statusText}`);
  const repositories = await response.json();
  return repositories.filter((repository) => !repository.fork && !excludedRepositories.has(repository.name));
};

const fallbackProjectFor = (repository, locale) => {
  const isEnglish = locale === "en";
  const language = repository.language || (isEnglish ? "Primary language not specified" : "仓库未标注主要语言");
  const description = repository.description || (isEnglish
    ? `Public repository ${repository.name}; no repository description is currently available.`
    : `公开仓库 ${repository.name}，仓库暂未填写简介。`);
  const url = repository.html_url;
  return {
    meta: {
      title: repository.name,
      slug: repository.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
      description,
      category: language,
      status: isEnglish ? "Public repository · auto-synced" : "公开仓库，自动同步",
      date: String(repository.pushed_at || "").slice(0, 7),
      tags: [language],
      repository: url
    },
    body: isEnglish ? `## Project Overview
${description}

## Project Goal
This page is generated from the public repository metadata. See the repository README and project files for the authoritative scope.

## Technology
GitHub currently identifies ${language} as the primary language or technology.

## Hardware Environment
The public repository metadata does not describe dedicated hardware.

## Software Environment
The complete software versions are not present in the repository metadata. See the README for current requirements.

## System Architecture
A separate architecture description has not yet been authored for this website.

## Functional Modules
The current directory structure and README in the repository are the source of truth.

## Implementation
Implementation steps have not yet been documented separately on this website.

## Key Code
Open the GitHub repository to inspect the source code directly.

## Debugging
No debugging record is available from repository metadata.

## Problems and Solutions
Repository metadata does not provide a problem-and-solution log.

## Current Result
The repository is public, so it is automatically included in the project list.

## Summary
This is an auto-synced project record that can later be expanded with an authored case study.

## GitHub Repository
[Open ${repository.name}](${url})` : `## 项目简介
${description}

## 项目目标
此页面由公开仓库状态自动生成。更完整的目标以仓库 README 和后续项目文档为准。

## 使用技术
GitHub 标注的主要语言或技术为 ${language}。

## 硬件环境
当前公开仓库元数据未记录专用硬件环境。

## 软件环境
当前公开仓库元数据未记录完整软件版本，请查看仓库 README。

## 系统架构
系统架构尚未在网站内容源中单独整理。

## 功能模块
功能模块以仓库当前目录和 README 为准。

## 实现步骤
实现步骤尚未在网站内容源中单独整理。

## 关键代码
关键代码请直接进入 GitHub 仓库查看。

## 调试过程
调试记录尚未在网站内容源中单独整理。

## 遇到的问题
仓库元数据未提供问题记录。

## 解决方案
仓库元数据未提供解决方案记录。

## 最终效果
该仓库当前为公开状态，因此自动出现在项目列表中。

## 项目总结
这是一份自动同步的基础项目档案，后续可补充为完整手写说明。

## GitHub 仓库链接
[访问 ${repository.name}](${url})`
  };
};

const pruneOutputs = async (section, items, locale) => {
  const outputDir = path.join(root, localeConfig[locale].routeRoot, sections[section].output);
  await mkdir(outputDir, { recursive: true });
  const activeSlugs = new Set(items.map((item) => item.meta.slug));
  const entries = await readdir(outputDir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory() && !activeSlugs.has(entry.name)) {
      await rm(path.join(outputDir, entry.name), { recursive: true, force: true });
    }
  }
};

const inline = (value) => escapeHtml(value)
  .replace(/`([^`]+)`/g, "<code>$1</code>")
  .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
  .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');

const architectureDiagram = (lines, locale) => {
  const rows = lines
    .map((line) => line.split(/\s*(?:->|→)\s*/).filter(Boolean))
    .filter((nodes) => nodes.length > 1);
  if (!rows.length) throw new Error("Architecture diagram requires at least two nodes");
  const label = rows.map((nodes) => nodes.join(locale === "en" ? " to " : " 到 ")).join(locale === "en" ? "; " : "；");
  const content = rows.map((nodes) => `<div class="system-flow-row">${nodes.map((node, index) => `${index ? '<span class="system-flow-arrow" aria-hidden="true">→</span>' : ""}<span class="system-flow-node">${escapeHtml(node)}</span>`).join("")}</div>`).join("\n");
  return `<div class="system-flow" role="img" aria-label="${locale === "en" ? "System architecture" : "系统架构"}：${escapeHtml(label)}">${content}</div>`;
};

const rssDate = (value = "") => {
  const normalized = /^\d{4}-\d{2}-\d{2}$/.test(value) ? `${value}T00:00:00Z` : `${value}-01T00:00:00Z`;
  const date = new Date(normalized);
  if (Number.isNaN(date.valueOf())) throw new Error(`Invalid RSS date: ${value}`);
  return date.toUTCString();
};

const buildRss = async (items, locale) => {
  const isEnglish = locale === "en";
  const ordered = [...items].sort((left, right) => String(right.meta.date || "").localeCompare(String(left.meta.date || "")));
  const entries = ordered.map((item) => {
    const url = `https://www.jiayuhere.com/${isEnglish ? "en/" : ""}blog/${item.meta.slug}/`;
    const categories = (item.meta.tags || []).map((tag) => `      <category>${escapeXml(tag)}</category>`).join("\n");
    return `    <item>
      <title>${escapeXml(item.meta.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${rssDate(item.meta.date)}</pubDate>
      <description>${escapeXml(item.meta.description)}</description>
${categories}
    </item>`;
  }).join("\n");
  const latestDate = ordered.length ? rssDate(ordered[0].meta.date) : new Date(0).toUTCString();
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${isEnglish ? "Jiayu Lab Technical Blog" : "Jiayu Lab 技术博客"}</title>
    <link>https://www.jiayuhere.com/${isEnglish ? "en/" : ""}blog/</link>
    <description>${isEnglish ? "Writing about communications, signal processing, embedded systems, FPGA and computing fundamentals." : "围绕通信、信号处理、嵌入式、FPGA 与计算机基础持续写作。"}</description>
    <language>${isEnglish ? "en" : "zh-CN"}</language>
    <lastBuildDate>${latestDate}</lastBuildDate>
    <atom:link href="https://www.jiayuhere.com/${isEnglish ? "en/" : ""}feed.xml" rel="self" type="application/rss+xml" />
${entries}
  </channel>
</rss>
`;
  const feedRoot = path.join(root, localeConfig[locale].routeRoot);
  await mkdir(feedRoot, { recursive: true });
  await writeFile(path.join(feedRoot, "feed.xml"), feed);
  await writeFile(path.join(feedRoot, "rss.xml"), feed);
};

const markdownToHtml = (markdown, locale) => {
  const lines = markdown.split(/\r?\n/);
  const html = [];
  const headings = [];
  let inCode = false;
  let codeLanguage = "";
  let codeLines = [];
  let listType = "";
  let headingIndex = 0;

  const closeList = () => {
    if (listType) html.push(`</${listType}>`);
    listType = "";
  };

  for (const line of lines) {
    const fence = line.match(/^```([\w-]*)/);
    if (fence) {
      closeList();
      if (inCode) {
        html.push(codeLanguage === "architecture"
          ? architectureDiagram(codeLines, locale)
          : `<pre><code${codeLanguage ? ` class="language-${escapeHtml(codeLanguage)}"` : ""}>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
        codeLines = [];
        codeLanguage = "";
        inCode = false;
      } else {
        inCode = true;
        codeLanguage = fence[1];
      }
      continue;
    }

    if (inCode) {
      codeLines.push(line);
      continue;
    }

    const heading = line.match(/^(##|###)\s+(.+)$/);
    if (heading) {
      closeList();
      headingIndex += 1;
      const level = heading[1].length;
      const id = `section-${headingIndex}`;
      headings.push({ level, id, text: heading[2] });
      html.push(`<h${level} id="${id}">${inline(heading[2])}</h${level}>`);
      continue;
    }

    const unordered = line.match(/^[-*]\s+(.+)$/);
    const ordered = line.match(/^\d+\.\s+(.+)$/);
    if (unordered || ordered) {
      const nextType = unordered ? "ul" : "ol";
      if (listType !== nextType) {
        closeList();
        listType = nextType;
        html.push(`<${listType}>`);
      }
      html.push(`<li>${inline((unordered || ordered)[1])}</li>`);
      continue;
    }

    closeList();
    if (!line.trim()) continue;
    if (line.startsWith("> ")) {
      html.push(`<blockquote>${inline(line.slice(2))}</blockquote>`);
    } else {
      html.push(`<p>${inline(line)}</p>`);
    }
  }

  closeList();
  if (inCode) throw new Error("Unclosed code fence");
  return { html: html.join("\n"), headings };
};

const nav = (prefix, locale, route, active = "") => {
  const strings = localeConfig[locale].strings;
  const languageHref = locale === "en" ? `${prefix}${route}` : `${prefix}en/${route}`;
  return `
  <a class="skip-link" href="#main">${strings.skip}</a>
  <header class="site-header">
    <a class="brand" href="${routeFromRoot(prefix, locale, "index.html")}" aria-label="${strings.homeLabel}"><span>Jiayu <span class="brand-muted">Lab</span></span></a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="siteNav" aria-label="${strings.openNav}"><span></span><span></span><span></span></button>
    <nav class="site-nav" id="siteNav" aria-label="${strings.navLabel}">
      <a ${active === "projects" ? 'aria-current="page"' : ""} href="${routeFromRoot(prefix, locale, "projects/index.html")}">${strings.projects}</a>
      <a ${active === "articles" ? 'aria-current="page"' : ""} href="${routeFromRoot(prefix, locale, "blog/index.html")}">${strings.articles}</a>
      <a ${active === "notes" ? 'aria-current="page"' : ""} href="${routeFromRoot(prefix, locale, "notes/index.html")}">${strings.notes}</a>
      <a href="${routeFromRoot(prefix, locale, "toolbox/index.html")}">${strings.toolbox}</a>
      <a href="${routeFromRoot(prefix, locale, "resources/index.html")}">${strings.resources}</a>
      <a${active === "logs" ? ' aria-current="page"' : ""} href="${routeFromRoot(prefix, locale, "lab/index.html")}">${strings.lab}</a>
      <a class="nav-cta" href="${routeFromRoot(prefix, locale, "contact/index.html")}">${strings.contact}</a>
      <a class="language-switch" href="${languageHref}" lang="${locale === "en" ? "zh-CN" : "en"}" hreflang="${locale === "en" ? "zh-CN" : "en"}" aria-label="${strings.switchLabel}">${strings.switchText}</a>
    </nav>
  </header>`;
};

const footer = (prefix, locale) => {
  const strings = localeConfig[locale].strings;
  return `
  <footer class="site-footer">
    <div><a class="brand footer-brand" href="${routeFromRoot(prefix, locale, "index.html")}">Jiayu Lab</a><p>${strings.footer}</p></div>
    <div class="footer-links"><a href="${routeFromRoot(prefix, locale, "about/index.html")}">${strings.about}</a><a href="https://github.com/jiayu-here" target="_blank" rel="noreferrer">GitHub</a><a href="${routeFromRoot(prefix, locale, "feed.xml")}">RSS</a><a href="${prefix}sitemap.xml">${strings.sitemap}</a></div>
    <p class="copyright">© <span data-current-year></span> Jiayu Lab</p>
  </footer>
  <script src="${prefix}assets/script.js?v=20260714s"></script>`;
};

const page = ({ prefix, locale, route, active, title, description, content, type = "website", keywords = [] }) => {
  const isEnglish = locale === "en";
  const styleVersion = /^(projects|blog|notes|lab)\/$/.test(route) ? "20260715d" : "20260714s";
  const canonical = `https://www.jiayuhere.com/${localeConfig[locale].routeRoot}${route}`;
  const chinese = `https://www.jiayuhere.com/${route}`;
  const english = `https://www.jiayuhere.com/en/${route}`;
  return `<!doctype html>
<html lang="${localeConfig[locale].lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)} | Jiayu Lab</title>
  <meta name="description" content="${escapeHtml(description)}">
${keywords.length ? `  <meta name="keywords" content="${escapeHtml(keywords.join(", "))}">` : ""}
  <meta name="theme-color" content="#f6f8fa" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#0d1117" media="(prefers-color-scheme: dark)">
  <meta property="og:type" content="${type}">
  <meta property="og:title" content="${escapeHtml(title)} | Jiayu Lab">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:image" content="https://www.jiayuhere.com/assets/images/og.png">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="zh-CN" href="${chinese}">
  <link rel="alternate" hreflang="en" href="${english}">
  <link rel="alternate" hreflang="x-default" href="${chinese}">
  <link rel="alternate" type="application/rss+xml" title="${isEnglish ? "Jiayu Lab Technical Blog" : "Jiayu Lab 技术博客"}" href="${routeFromRoot(prefix, locale, "feed.xml")}">
  <link rel="icon" href="${prefix}favicon.ico" sizes="any">
  <link rel="manifest" href="${prefix}site.webmanifest">
  <link rel="stylesheet" href="${prefix}assets/styles.css?v=${styleVersion}">
</head>
<body>
${nav(prefix, locale, route, active)}
<main id="main">${content}</main>
${footer(prefix, locale)}
</body>
</html>`;
};

const tagList = (tags = []) => `<div class="tag-list">${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>`;

const cardFor = (item, section, locale, prefix) => {
  const config = localizedSections[locale][section];
  const isEnglish = locale === "en";
  const targetFolder = section === "articles" ? "blog" : section;
  const href = `${routeFromRoot(prefix, locale, `${targetFolder}/${escapeHtml(item.meta.slug)}/index.html`)}`;
  const searchText = [item.meta.title, item.meta.description, item.meta.category, ...(item.meta.tags || [])].join(" ");
  return `<article class="content-card" data-content-card data-category="${escapeHtml(item.meta.category || (isEnglish ? "All" : "全部"))}" data-search="${escapeHtml(searchText.toLowerCase())}">
    <div class="card-topline"><span>${escapeHtml(item.meta.category || config.label)}</span><span>${escapeHtml(item.meta.status || item.meta.date || (isEnglish ? "Ongoing" : "持续更新"))}</span></div>
    <h2><a href="${href}">${escapeHtml(item.meta.title)}</a></h2>
    <p>${escapeHtml(item.meta.description)}</p>
    ${tagList(item.meta.tags || [])}
    <a class="text-link" href="${href}">${isEnglish ? "View details" : "查看详情"} <span aria-hidden="true">→</span></a>
  </article>`;
};

const buildIndex = async (section, items, locale) => {
  const config = localizedSections[locale][section];
  const isEnglish = locale === "en";
  const prefix = isEnglish ? "../../" : "../";
  const route = `${config.output}/`;
  const categories = [...new Set(items.map((item) => item.meta.category).filter(Boolean))];
  const searchLabel = isEnglish
    ? section === "projects" ? "Search projects" : section === "articles" ? "Search articles" : "Search notes"
    : section === "projects" ? "搜索项目" : section === "articles" ? "搜索文章" : "搜索笔记";
  const controls = `<div class="content-controls compact-controls">
    <label class="search-box"><span>${searchLabel}</span><input type="search" data-content-search placeholder="${isEnglish ? "Enter a title, tag or keyword" : "输入标题、标签或关键词"}"></label>
    <div class="filter-row" role="group" aria-label="${isEnglish ? "Content categories" : "内容分类"}"><button class="filter-chip is-active" type="button" data-filter="all">${isEnglish ? "All" : "全部"}</button>${categories.map((category) => `<button class="filter-chip" type="button" data-filter="${escapeHtml(category)}">${escapeHtml(category)}</button>`).join("")}</div>
    <p class="result-status" data-result-status aria-live="polite"></p>
  </div>`;
  const content = `
    <section class="page-hero compact-hero index-hero">
      <div class="container"><h1>${config.title}</h1><p>${isEnglish
        ? section === "projects" ? "Complete engineering records from requirements and architecture through debugging and delivery." : section === "articles" ? "Writing about communications, signal processing, embedded systems, FPGA and computing fundamentals." : "A long-term knowledge tree covering mathematics, English, engineering courses and programming."
        : section === "projects" ? "记录从需求分析、系统设计到调试交付的完整工程过程。" : section === "articles" ? "围绕通信、信号处理、嵌入式、FPGA 与计算机基础持续写作。" : "把数学、英语、专业课与编程语言整理成可以长期查找的知识树。"}</p></div>
    </section>
    <section class="section container content-index-section">${controls}<div class="content-grid" data-content-grid>${items.map((item) => cardFor(item, section, locale, prefix)).join("")}</div><p class="empty-state" data-empty-state hidden>${isEnglish ? "No matching content." : "暂时没有匹配的内容。"}</p></section>`;
  const output = path.join(root, localeConfig[locale].routeRoot, config.output);
  await mkdir(output, { recursive: true });
  await writeFile(path.join(output, "index.html"), page({ prefix, locale, route, active: section, title: config.title, description: config.title, content }));
};

const buildDetail = async (section, item, index, items, locale) => {
  const config = localizedSections[locale][section];
  const isEnglish = locale === "en";
  const rendered = markdownToHtml(item.body, locale);
  const toc = rendered.headings.filter((heading) => heading.level === 2).map((heading) => `<a href="#${heading.id}">${escapeHtml(heading.text)}</a>`).join("");
  const metaLine = [item.meta.category, item.meta.date, item.meta.status].filter(Boolean).map(escapeHtml).join(" · ");
  const repositoryBase = String(item.meta.repository || "").replace(/\/$/, "");
  const repository = repositoryBase ? `<div class="button-row" aria-label="${isEnglish ? "GitHub repository links" : "GitHub 仓库入口"}">
        <a class="button primary-button" href="${escapeHtml(repositoryBase)}" target="_blank" rel="noreferrer">${isEnglish ? "View source" : "查看源码"}</a>
        <a class="button secondary-button" href="${escapeHtml(repositoryBase)}#readme" target="_blank" rel="noreferrer">${isEnglish ? "View README" : "查看 README"}</a>
        <a class="button secondary-button" href="${escapeHtml(repositoryBase)}/commits" target="_blank" rel="noreferrer">${isEnglish ? "Commits" : "提交记录"}</a>
        <a class="button secondary-button" href="${escapeHtml(repositoryBase)}/issues" target="_blank" rel="noreferrer">Issues</a>
        <a class="button secondary-button" href="${escapeHtml(repositoryBase)}/releases" target="_blank" rel="noreferrer">${isEnglish ? "Releases" : "版本日志"}</a>
      </div>` : "";
  const previous = items[index - 1];
  const next = items[index + 1];
  const previousLabel = isEnglish ? (section === "articles" ? "Previous article" : "Previous item") : (section === "articles" ? "上一篇" : "上一项");
  const nextLabel = isEnglish ? (section === "articles" ? "Next article" : "Next item") : (section === "articles" ? "下一篇" : "下一项");
  const pagination = previous || next ? `<nav class="article-pagination" aria-label="${isEnglish ? "Adjacent content" : "相邻内容"}">
${previous ? `    <a href="../${escapeHtml(previous.meta.slug)}/index.html"><span>← ${previousLabel}</span><strong>${escapeHtml(previous.meta.title)}</strong></a>` : ""}
${next ? `    <a class="article-pagination-next" href="../${escapeHtml(next.meta.slug)}/index.html"><span>${nextLabel} →</span><strong>${escapeHtml(next.meta.title)}</strong></a>` : ""}
  </nav>` : "";
  const content = `
    <article class="article-page">
      <header class="article-header container"><a class="back-link" href="../index.html">← ${isEnglish ? `Back to ${config.label}` : `返回${config.label}`}</a><h1>${escapeHtml(item.meta.title)}</h1><p class="article-lead">${escapeHtml(item.meta.description)}</p><div class="article-meta">${metaLine ? `<span>${metaLine}</span>` : ""}<span>${isEnglish ? `${readingMinutes(item.body)} min read` : `约 ${readingMinutes(item.body)} 分钟阅读`}</span>${tagList(item.meta.tags || [])}</div>${repository}</header>
      <div class="article-layout container"><aside class="article-toc"><p>${isEnglish ? "On this page" : "本页目录"}</p>${toc}</aside><div class="prose">${rendered.html}${pagination}</div></div>
    </article>`;
  const output = path.join(root, localeConfig[locale].routeRoot, config.output, item.meta.slug);
  await mkdir(output, { recursive: true });
  const prefix = isEnglish ? "../../../" : "../../";
  const route = `${config.output}/${item.meta.slug}/`;
  await writeFile(path.join(output, "index.html"), page({ prefix, locale, route, active: section, title: item.meta.title, description: item.meta.description, content, type: "article", keywords: item.meta.tags || [] }));
};

const buildLabIndex = async (items, locale) => {
  const isEnglish = locale === "en";
  const prefix = isEnglish ? "../../" : "../";
  const route = `${logConfig.output}/`;
  const timeline = items.map((item) => {
    const projectSlug = String(item.meta.projectSlug || "");
    if (!projectSlug) throw new Error(`Log projectSlug missing: ${item.meta.title}`);
    const rendered = markdownToHtml(item.body, locale).html;
    const searchText = [item.meta.title, item.meta.description, plainText(item.body)].join(" ").toLowerCase();
    return `<article class="timeline-item" id="${escapeHtml(item.meta.slug)}" data-search="${escapeHtml(searchText)}"><time>${escapeHtml(item.meta.date)}</time><div><h2>${escapeHtml(item.meta.title)}</h2><div class="log-details">${rendered}</div><a class="text-link" href="../projects/${escapeHtml(projectSlug)}/index.html">${isEnglish ? "View project" : "查看项目详情"} <span aria-hidden="true">→</span></a></div></article>`;
  }).join("\n");
  const template = isEnglish
    ? `<article class="timeline-item"><time>TEMPLATE</time><div><h2>Future Log Template</h2><p><strong>Date:</strong> YYYY-MM-DD · <strong>Project:</strong> name</p><p><strong>Symptom:</strong> Repeatable and observable behavior.</p><p><strong>Hypothesis:</strong> Ranked possibilities, not conclusions.</p><p><strong>Investigation:</strong> Environment → reproduction → minimal experiment → comparison.</p><p><strong>Root cause:</strong> Evidence-supported explanation.</p><p><strong>Fix:</strong> Change plus regression evidence.</p><p><strong>Lesson:</strong> Reusable method and remaining limits.</p></div></article>`
    : `<article class="timeline-item"><time>TEMPLATE</time><div><h2>后续日志记录模板</h2><p><strong>日期：</strong>YYYY-MM-DD　<strong>项目：</strong>项目名称</p><p><strong>问题现象：</strong>可复现、可观察的异常。</p><p><strong>初步判断：</strong>按可能性列出假设，不把猜测写成结论。</p><p><strong>排查过程：</strong>环境与版本 → 复现步骤 → 最小实验 → 对照结果。</p><p><strong>最终原因：</strong>由证据支持的根因。</p><p><strong>解决方法：</strong>修改内容与回归验证。</p><p><strong>经验总结：</strong>可复用的方法和仍未解决的限制。</p></div></article>`;
  const heroDescription = isEnglish
    ? `${items.length} public-project debugging records preserving the symptom, hypothesis, investigation, evidence-supported cause, fix and reusable lesson.`
    : `${items.length} 条公开项目调试记录，保留问题现象、初步判断、排查过程、证据支持的根因、解决方法与可复用经验。`;
  const content = `
    <section class="page-hero compact-hero index-hero"><div class="container"><h1>${isEnglish ? "Lab Notes and Bug Reviews" : "实验记录与 Bug 复盘"}</h1><p>${heroDescription}</p></div></section>
    <section class="section container content-index-section"><div class="content-controls compact-controls"><label class="search-box"><span>${isEnglish ? "Search lab logs" : "搜索日志"}</span><input type="search" data-content-search placeholder="${isEnglish ? "Enter a project, issue or keyword" : "输入项目、问题或关键词"}"></label><p class="result-status" data-result-status aria-live="polite"></p></div><div class="timeline">${timeline}\n${template}</div><p class="empty-state" data-empty-state hidden>${isEnglish ? "No matching lab logs." : "暂时没有匹配的日志。"}</p></section>`;
  const output = path.join(root, localeConfig[locale].routeRoot, logConfig.output);
  await mkdir(output, { recursive: true });
  await writeFile(path.join(output, "index.html"), page({
    prefix,
    locale,
    route,
    active: "logs",
    title: isEnglish ? "Engineering Lab Log" : "工程实验日志",
    description: heroDescription,
    content
  }));
};

const updateHomeStats = async (counts, lastUpdated, locale) => {
  const homePath = path.join(root, localeConfig[locale].routeRoot, "index.html");
  let home = await readFile(homePath, "utf8");

  for (const [key, count] of Object.entries(counts)) {
    const pattern = new RegExp(`(<strong data-site-stat="${key}">)\\d+(</strong>)`, "g");
    if (!pattern.test(home)) throw new Error(`Homepage statistic marker missing: ${key}`);
    home = home.replace(pattern, `$1${count}$2`);
  }

  const updatedPattern = /(<time data-site-updated>)[^<]+(<\/time>)/;
  if (!updatedPattern.test(home)) throw new Error("Homepage last-updated marker missing");
  home = home.replace(updatedPattern, `$1${lastUpdated}$2`);

  await writeFile(homePath, home);
};

const loadPairedContent = async () => {
  const content = { zh: {}, en: {} };
  for (const [section, config] of Object.entries(sections)) {
    const relativeSource = config.source.replace(/^content\//, "");
    const directories = {
      zh: path.join(root, config.source),
      en: path.join(root, localeConfig.en.contentRoot, relativeSource)
    };
    await mkdir(directories.en, { recursive: true });
    const files = {};
    for (const locale of Object.keys(localeConfig)) {
      files[locale] = (await readdir(directories[locale])).filter((file) => file.endsWith(".md")).sort();
    }
    const missingEnglish = files.zh.filter((file) => !files.en.includes(file));
    const missingChinese = files.en.filter((file) => !files.zh.includes(file));
    if (missingEnglish.length || missingChinese.length) {
      const details = [
        missingEnglish.length ? `missing English: ${missingEnglish.join(", ")}` : "",
        missingChinese.length ? `missing Chinese: ${missingChinese.join(", ")}` : ""
      ].filter(Boolean).join("; ");
      throw new Error(`Bilingual pair validation failed for ${section}: ${details}`);
    }
    for (const locale of Object.keys(localeConfig)) {
      content[locale][section] = [];
      for (const file of files[locale]) {
        const source = await readFile(path.join(directories[locale], file), "utf8");
        content[locale][section].push({ ...parseDocument(source, `${locale}/${section}/${file}`), file });
      }
    }
    for (let index = 0; index < files.zh.length; index += 1) {
      const chinese = content.zh[section][index];
      const english = content.en[section][index];
      if (chinese.file !== english.file || chinese.meta.slug !== english.meta.slug) {
        throw new Error(`Bilingual slug mismatch: ${chinese.file} (${chinese.meta.slug}) / ${english.file} (${english.meta.slug})`);
      }
      if (section === "projects" && chinese.meta.repository !== english.meta.repository) {
        throw new Error(`Bilingual repository mismatch: ${chinese.file}`);
      }
    }
  }
  return content;
};

const loadPairedLogs = async () => {
  const directories = {
    zh: path.join(root, logConfig.source),
    en: path.join(root, localeConfig.en.contentRoot, "logs")
  };
  await mkdir(directories.zh, { recursive: true });
  await mkdir(directories.en, { recursive: true });
  const files = {};
  for (const locale of Object.keys(localeConfig)) {
    files[locale] = (await readdir(directories[locale])).filter((file) => file.endsWith(".md")).sort();
  }
  const missingEnglish = files.zh.filter((file) => !files.en.includes(file));
  const missingChinese = files.en.filter((file) => !files.zh.includes(file));
  if (missingEnglish.length || missingChinese.length) {
    const details = [
      missingEnglish.length ? `missing English: ${missingEnglish.join(", ")}` : "",
      missingChinese.length ? `missing Chinese: ${missingChinese.join(", ")}` : ""
    ].filter(Boolean).join("; ");
    throw new Error(`Bilingual pair validation failed for logs: ${details}`);
  }

  const logs = { zh: [], en: [] };
  for (const locale of Object.keys(localeConfig)) {
    for (const file of files[locale]) {
      const source = await readFile(path.join(directories[locale], file), "utf8");
      logs[locale].push({ ...parseDocument(source, `${locale}/logs/${file}`), file });
    }
  }
  for (let index = 0; index < files.zh.length; index += 1) {
    const chinese = logs.zh[index];
    const english = logs.en[index];
    if (chinese.file !== english.file || chinese.meta.slug !== english.meta.slug) {
      throw new Error(`Bilingual log slug mismatch: ${chinese.file} (${chinese.meta.slug}) / ${english.file} (${english.meta.slug})`);
    }
    if (chinese.meta.date !== english.meta.date || chinese.meta.projectSlug !== english.meta.projectSlug) {
      throw new Error(`Bilingual log metadata mismatch: ${chinese.file}`);
    }
  }
  return logs;
};

const build = async () => {
  const authoredContent = await loadPairedContent();
  const authoredLogs = await loadPairedLogs();
  const publicRepositories = await fetchPublicRepositories();
  const localeBuilds = {};

  for (const locale of Object.keys(localeConfig)) {
    const searchIndex = [];
    const sectionCounts = {};
    const contentDates = [];
    let articleItems = [];
    for (const [section, config] of Object.entries(sections)) {
      let items = [...authoredContent[locale][section]];
      if (section === "projects") {
        const publicByName = new Map(publicRepositories.map((repository) => [repository.name.toLowerCase(), repository]));
        const authoredNames = new Set(items.map(repositoryNameFor));
        items = items.filter((item) => publicByName.has(repositoryNameFor(item)));
        items.push(...publicRepositories
          .filter((repository) => !authoredNames.has(repository.name.toLowerCase()))
          .map((repository) => fallbackProjectFor(repository, locale)));
      }
      await pruneOutputs(section, items, locale);
      for (const [index, item] of items.entries()) {
        await buildDetail(section, item, index, items, locale);
        searchIndex.push({
          section,
          title: item.meta.title,
          description: item.meta.description,
          category: item.meta.category,
          tags: item.meta.tags || [],
          content: plainText(item.body),
          url: `/${localeConfig[locale].routeRoot}${config.output}/${item.meta.slug}/`
        });
        if (item.meta.date) contentDates.push(String(item.meta.date));
      }
      sectionCounts[section] = items.length;
      if (section === "articles") articleItems = items;
      await buildIndex(section, items, locale);
    }
    await buildLabIndex(authoredLogs[locale], locale);
    contentDates.push(...authoredLogs[locale].map((item) => String(item.meta.date || "")).filter(Boolean));
    await buildRss(articleItems, locale);
    const searchFile = locale === "en" ? "search-index.en.json" : "search-index.json";
    await mkdir(path.join(root, "assets/data"), { recursive: true });
    await writeFile(path.join(root, "assets/data", searchFile), `${JSON.stringify(searchIndex, null, 2)}\n`);
    localeBuilds[locale] = { searchIndex, sectionCounts, contentDates, logCount: authoredLogs[locale].length };
  }

  const toolbox = await readFile(path.join(root, "toolbox/index.html"), "utf8");
  const toolCount = (toolbox.match(/<article\b[^>]*\bclass="[^"]*\btool-card\b[^"]*"/g) || []).length;
  const chineseBuild = localeBuilds.zh;
  const topicCount = (terms) => chineseBuild.searchIndex.filter((item) => {
    const text = [item.title, item.description, item.category, ...(item.tags || [])].join(" ").toLowerCase();
    return terms.some((term) => text.includes(term));
  }).length;
  const homeStats = {
    projects: chineseBuild.sectionCounts.projects,
    articles: chineseBuild.sectionCounts.articles,
    notes: chineseBuild.sectionCounts.notes,
    tools: toolCount,
    logs: chineseBuild.logCount,
    repositories: publicRepositories.length,
    embedded: topicCount(["嵌入式", "stm32", "freertos", "adc", "pwm"]),
    fpga: topicCount(["fpga", "verilog", "quartus", "modelsim", "dds"]),
    communications: topicCount(["通信", "qpsk", "调制", "信号", "fft", "ber"]),
    software: topicCount(["python", "数据库", "mysql", "docker", "web", "算法", "git"])
  };
  const lastUpdated = chineseBuild.contentDates.sort().at(-1) || "暂无更新";
  await updateHomeStats(homeStats, lastUpdated, "zh");
  await updateHomeStats(homeStats, lastUpdated, "en");

  const staticUrls = ["", "about/", "resume/", "projects/", "blog/", "notes/", "toolbox/", "resources/", "lab/", "contact/", "wechat/"];
  const englishStaticUrls = staticUrls.map((url) => `en/${url}`);
  const urls = [...staticUrls, ...englishStaticUrls, ...Object.values(localeBuilds).flatMap(({ searchIndex }) => searchIndex.map((item) => item.url.replace(/^\//, "")))];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>https://www.jiayuhere.com/${url}</loc><lastmod>2026-07-14</lastmod></url>`).join("\n")}\n</urlset>\n`;
  await writeFile(path.join(root, "sitemap.xml"), sitemap);
  for (const url of urls) {
    const htmlPath = url ? path.join(root, url, "index.html") : path.join(root, "index.html");
    let html = await readFile(htmlPath, "utf8");
    if (!html.includes(`gtag/js?id=${googleAnalyticsId}`)) {
      html = html.replace("<head>", `<head>\n${googleAnalyticsTag}`);
      await writeFile(htmlPath, html);
    }
  }
  console.log(`Built ${Object.values(localeBuilds).reduce((total, item) => total + item.searchIndex.length, 0)} bilingual Markdown pages and ${authoredLogs.zh.length} bilingual log entries.`);
};

await build();
