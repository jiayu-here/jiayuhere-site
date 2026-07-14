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
  projects: { source: "content/projects", output: "projects", label: "项目作品", title: "项目作品", eyebrow: "Engineering Portfolio" },
  articles: { source: "content/articles", output: "blog", label: "技术博客", title: "技术博客", eyebrow: "Technical Writing" },
  notes: { source: "content/notes", output: "notes", label: "学习笔记", title: "学习笔记", eyebrow: "Learning Notes" }
};

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

const fallbackProjectFor = (repository) => {
  const language = repository.language || "仓库未标注主要语言";
  const description = repository.description || `公开仓库 ${repository.name}，仓库暂未填写简介。`;
  const url = repository.html_url;
  return {
    meta: {
      title: repository.name,
      slug: repository.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
      description,
      category: language,
      status: "公开仓库，自动同步",
      date: String(repository.pushed_at || "").slice(0, 7),
      tags: [language],
      repository: url
    },
    body: `## 项目简介
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

const pruneOutputs = async (section, items) => {
  const outputDir = path.join(root, sections[section].output);
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

const architectureDiagram = (lines) => {
  const rows = lines
    .map((line) => line.split(/\s*(?:->|→)\s*/).filter(Boolean))
    .filter((nodes) => nodes.length > 1);
  if (!rows.length) throw new Error("Architecture diagram requires at least two nodes");
  const label = rows.map((nodes) => nodes.join(" 到 ")).join("；");
  const content = rows.map((nodes) => `<div class="system-flow-row">${nodes.map((node, index) => `${index ? '<span class="system-flow-arrow" aria-hidden="true">→</span>' : ""}<span class="system-flow-node">${escapeHtml(node)}</span>`).join("")}</div>`).join("\n");
  return `<div class="system-flow" role="img" aria-label="系统架构：${escapeHtml(label)}">${content}</div>`;
};

const rssDate = (value = "") => {
  const normalized = /^\d{4}-\d{2}-\d{2}$/.test(value) ? `${value}T00:00:00Z` : `${value}-01T00:00:00Z`;
  const date = new Date(normalized);
  if (Number.isNaN(date.valueOf())) throw new Error(`Invalid RSS date: ${value}`);
  return date.toUTCString();
};

const buildRss = async (items) => {
  const ordered = [...items].sort((left, right) => String(right.meta.date || "").localeCompare(String(left.meta.date || "")));
  const entries = ordered.map((item) => {
    const url = `https://www.jiayuhere.com/blog/${item.meta.slug}/`;
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
    <title>JiaYu Here 技术博客</title>
    <link>https://www.jiayuhere.com/blog/</link>
    <description>围绕通信、信号处理、嵌入式、FPGA 与计算机基础持续写作。</description>
    <language>zh-CN</language>
    <lastBuildDate>${latestDate}</lastBuildDate>
    <atom:link href="https://www.jiayuhere.com/feed.xml" rel="self" type="application/rss+xml" />
${entries}
  </channel>
</rss>
`;
  await writeFile(path.join(root, "feed.xml"), feed);
  await writeFile(path.join(root, "rss.xml"), feed);
};

const markdownToHtml = (markdown) => {
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
          ? architectureDiagram(codeLines)
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

const nav = (prefix, active = "") => `
  <a class="skip-link" href="#main">跳到主要内容</a>
  <header class="site-header">
    <a class="brand" href="${prefix}index.html" aria-label="JiaYu Here 首页"><span>JIAYU<span class="brand-muted">HERE</span></span></a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="siteNav" aria-label="打开导航"><span></span><span></span><span></span></button>
    <nav class="site-nav" id="siteNav" aria-label="主要导航">
      <a ${active === "projects" ? 'aria-current="page"' : ""} href="${prefix}projects/index.html">项目</a>
      <a ${active === "articles" ? 'aria-current="page"' : ""} href="${prefix}blog/index.html">博客</a>
      <a ${active === "notes" ? 'aria-current="page"' : ""} href="${prefix}notes/index.html">笔记</a>
      <a href="${prefix}toolbox/index.html">工具箱</a>
      <a href="${prefix}resources/index.html">资源</a>
      <a href="${prefix}lab/index.html">日志</a>
      <a class="nav-cta" href="${prefix}contact/index.html">联系我</a>
    </nav>
  </header>`;

const footer = (prefix) => `
  <footer class="site-footer">
    <div><a class="brand footer-brand" href="${prefix}index.html">JIAYUHERE</a><p>把工程实践、学习过程和可复用的方法整理成长期资产。</p></div>
    <div class="footer-links"><a href="${prefix}about/index.html">关于我</a><a href="https://github.com/jiayu-here" target="_blank" rel="noreferrer">GitHub</a><a href="${prefix}feed.xml">RSS</a><a href="${prefix}sitemap.xml">站点地图</a></div>
    <p class="copyright">© <span data-current-year></span> JIAYUHERE</p>
  </footer>
  <script src="${prefix}assets/script.js?v=20260714f"></script>`;

const page = ({ prefix, active, title, description, content, type = "website", keywords = [] }) => `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)} | jiayuhere</title>
  <meta name="description" content="${escapeHtml(description)}">
${keywords.length ? `  <meta name="keywords" content="${escapeHtml(keywords.join(", "))}">` : ""}
  <meta name="theme-color" content="#f6f8fa" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#0d1117" media="(prefers-color-scheme: dark)">
  <meta property="og:type" content="${type}">
  <meta property="og:title" content="${escapeHtml(title)} | JiaYu Here">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:image" content="https://www.jiayuhere.com/assets/images/og.png">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="alternate" type="application/rss+xml" title="JiaYu Here 技术博客" href="${prefix}feed.xml">
  <link rel="icon" href="${prefix}assets/images/github-avatar.jpg" type="image/jpeg">
  <link rel="manifest" href="${prefix}site.webmanifest">
  <link rel="stylesheet" href="${prefix}assets/styles.css?v=20260714k">
</head>
<body>
${nav(prefix, active)}
<main id="main">${content}</main>
${footer(prefix)}
</body>
</html>`;

const tagList = (tags = []) => `<div class="tag-list">${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>`;

const cardFor = (item, section, prefix = "../") => {
  const targetFolder = section === "articles" ? "blog" : section;
  const href = `${prefix}${targetFolder}/${escapeHtml(item.meta.slug)}/index.html`;
  const searchText = [item.meta.title, item.meta.description, item.meta.category, ...(item.meta.tags || [])].join(" ");
  return `<article class="content-card" data-content-card data-category="${escapeHtml(item.meta.category || "全部")}" data-search="${escapeHtml(searchText.toLowerCase())}">
    <div class="card-topline"><span>${escapeHtml(item.meta.category || sections[section].label)}</span><span>${escapeHtml(item.meta.status || item.meta.date || "持续更新")}</span></div>
    <h2><a href="${href}">${escapeHtml(item.meta.title)}</a></h2>
    <p>${escapeHtml(item.meta.description)}</p>
    ${tagList(item.meta.tags || [])}
    <a class="text-link" href="${href}">查看详情 <span aria-hidden="true">→</span></a>
  </article>`;
};

const buildIndex = async (section, items) => {
  const config = sections[section];
  const categories = [...new Set(items.map((item) => item.meta.category).filter(Boolean))];
  const controls = section === "articles" ? `<div class="content-controls">
    <label class="search-box"><span>搜索文章</span><input type="search" data-content-search placeholder="输入标题、标签或关键词"></label>
    <div class="filter-row" role="group" aria-label="内容分类"><button class="filter-chip is-active" type="button" data-filter="all">全部</button>${categories.map((category) => `<button class="filter-chip" type="button" data-filter="${escapeHtml(category)}">${escapeHtml(category)}</button>`).join("")}</div>
    <p class="result-status" data-result-status aria-live="polite"></p>
  </div>` : `<div class="filter-row section-filter" role="group" aria-label="内容分类"><button class="filter-chip is-active" type="button" data-filter="all">全部</button>${categories.map((category) => `<button class="filter-chip" type="button" data-filter="${escapeHtml(category)}">${escapeHtml(category)}</button>`).join("")}</div>`;
  const content = `
    <section class="page-hero compact-hero">
      <div class="container"><p class="eyebrow">${config.eyebrow}</p><h1>${config.title}</h1><p>${section === "projects" ? "记录从需求分析、系统设计到调试交付的完整工程过程。" : section === "articles" ? "围绕通信、信号处理、嵌入式、FPGA 与计算机基础持续写作。" : "把数学、英语、专业课与编程语言整理成可以长期查找的知识树。"}</p></div>
    </section>
    <section class="section container">${controls}<div class="content-grid" data-content-grid>${items.map((item) => cardFor(item, section)).join("")}</div><p class="empty-state" data-empty-state hidden>暂时没有匹配的内容。</p></section>`;
  await writeFile(path.join(root, config.output, "index.html"), page({ prefix: "../", active: section, title: config.title, description: config.title, content }));
};

const buildDetail = async (section, item, index, items) => {
  const config = sections[section];
  const rendered = markdownToHtml(item.body);
  const toc = rendered.headings.filter((heading) => heading.level === 2).map((heading) => `<a href="#${heading.id}">${escapeHtml(heading.text)}</a>`).join("");
  const metaLine = [item.meta.category, item.meta.date, item.meta.status].filter(Boolean).map(escapeHtml).join(" · ");
  const repositoryBase = String(item.meta.repository || "").replace(/\/$/, "");
  const repository = repositoryBase ? `<div class="button-row" aria-label="GitHub 仓库入口">
        <a class="button primary-button" href="${escapeHtml(repositoryBase)}" target="_blank" rel="noreferrer">查看源码</a>
        <a class="button secondary-button" href="${escapeHtml(repositoryBase)}#readme" target="_blank" rel="noreferrer">查看 README</a>
        <a class="button secondary-button" href="${escapeHtml(repositoryBase)}/commits" target="_blank" rel="noreferrer">提交记录</a>
        <a class="button secondary-button" href="${escapeHtml(repositoryBase)}/issues" target="_blank" rel="noreferrer">Issues</a>
        <a class="button secondary-button" href="${escapeHtml(repositoryBase)}/releases" target="_blank" rel="noreferrer">版本日志</a>
      </div>` : "";
  const previous = items[index - 1];
  const next = items[index + 1];
  const previousLabel = section === "articles" ? "上一篇" : "上一项";
  const nextLabel = section === "articles" ? "下一篇" : "下一项";
  const pagination = previous || next ? `<nav class="article-pagination" aria-label="相邻内容">
${previous ? `    <a href="../${escapeHtml(previous.meta.slug)}/index.html"><span>← ${previousLabel}</span><strong>${escapeHtml(previous.meta.title)}</strong></a>` : ""}
${next ? `    <a class="article-pagination-next" href="../${escapeHtml(next.meta.slug)}/index.html"><span>${nextLabel} →</span><strong>${escapeHtml(next.meta.title)}</strong></a>` : ""}
  </nav>` : "";
  const content = `
    <article class="article-page">
      <header class="article-header container"><a class="back-link" href="../index.html">← 返回${config.label}</a><p class="eyebrow">${escapeHtml(config.eyebrow)}</p><h1>${escapeHtml(item.meta.title)}</h1><p class="article-lead">${escapeHtml(item.meta.description)}</p><div class="article-meta">${metaLine ? `<span>${metaLine}</span>` : ""}<span>约 ${readingMinutes(item.body)} 分钟阅读</span>${tagList(item.meta.tags || [])}</div>${repository}</header>
      <div class="article-layout container"><aside class="article-toc"><p>本页目录</p>${toc}</aside><div class="prose">${rendered.html}${pagination}</div></div>
    </article>`;
  const output = path.join(root, config.output, item.meta.slug);
  await mkdir(output, { recursive: true });
  await writeFile(path.join(output, "index.html"), page({ prefix: "../../", active: section, title: item.meta.title, description: item.meta.description, content, type: "article", keywords: item.meta.tags || [] }));
};

const updateHomeStats = async (counts, lastUpdated) => {
  const homePath = path.join(root, "index.html");
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

const build = async () => {
  const searchIndex = [];
  const sectionCounts = {};
  const contentDates = [];
  let articleItems = [];
  const publicRepositories = await fetchPublicRepositories();
  for (const [section, config] of Object.entries(sections)) {
    const sourceDir = path.join(root, config.source);
    const outputDir = path.join(root, config.output);
    await mkdir(outputDir, { recursive: true });
    const files = (await readdir(sourceDir)).filter((file) => file.endsWith(".md")).sort();
    let items = [];
    for (const file of files) {
      const source = await readFile(path.join(sourceDir, file), "utf8");
      const item = parseDocument(source, file);
      items.push(item);
    }
    if (section === "projects") {
      const publicByName = new Map(publicRepositories.map((repository) => [repository.name.toLowerCase(), repository]));
      const authoredNames = new Set(items.map(repositoryNameFor));
      items = items.filter((item) => publicByName.has(repositoryNameFor(item)));
      items.push(...publicRepositories.filter((repository) => !authoredNames.has(repository.name.toLowerCase())).map(fallbackProjectFor));
    }
    await pruneOutputs(section, items);
    for (const [index, item] of items.entries()) {
      await buildDetail(section, item, index, items);
      searchIndex.push({ section, title: item.meta.title, description: item.meta.description, category: item.meta.category, tags: item.meta.tags || [], content: plainText(item.body), url: `/${config.output}/${item.meta.slug}/` });
      if (item.meta.date) contentDates.push(String(item.meta.date));
    }
    sectionCounts[section] = items.length;
    if (section === "articles") articleItems = items;
    await buildIndex(section, items);
  }
  await buildRss(articleItems);
  const toolbox = await readFile(path.join(root, "toolbox/index.html"), "utf8");
  const toolCount = (toolbox.match(/<article\b[^>]*\bclass="[^"]*\btool-card\b[^"]*"/g) || []).length;
  const lab = await readFile(path.join(root, "lab/index.html"), "utf8");
  const logCount = (lab.match(/<article\b[^>]*\bclass="[^"]*\btimeline-item\b[^"]*">\s*<time>\d{4}/g) || []).length;
  const topicCount = (terms) => searchIndex.filter((item) => {
    const text = [item.title, item.description, item.category, ...(item.tags || [])].join(" ").toLowerCase();
    return terms.some((term) => text.includes(term));
  }).length;
  await updateHomeStats({
    projects: sectionCounts.projects,
    articles: sectionCounts.articles,
    notes: sectionCounts.notes,
    tools: toolCount,
    logs: logCount,
    repositories: publicRepositories.length,
    embedded: topicCount(["嵌入式", "stm32", "freertos", "adc", "pwm"]),
    fpga: topicCount(["fpga", "verilog", "quartus", "modelsim", "dds"]),
    communications: topicCount(["通信", "qpsk", "调制", "信号", "fft", "ber"]),
    software: topicCount(["python", "数据库", "mysql", "docker", "web", "算法", "git"])
  }, contentDates.sort().at(-1) || "暂无更新");
  await mkdir(path.join(root, "assets/data"), { recursive: true });
  await writeFile(path.join(root, "assets/data/search-index.json"), `${JSON.stringify(searchIndex, null, 2)}\n`);
  const staticUrls = ["", "about/", "projects/", "blog/", "notes/", "toolbox/", "resources/", "lab/", "contact/"];
  const urls = [...staticUrls, ...searchIndex.map((item) => item.url.replace(/^\//, ""))];
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
  console.log(`Built ${searchIndex.length} Markdown pages.`);
};

await build();
