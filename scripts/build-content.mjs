import { mkdir, readFile, readdir, rm, writeFile as writeFileOnce } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const writeFile = async (...args) => {
  for (let attempt = 0; ; attempt += 1) {
    try {
      return await writeFileOnce(...args);
    } catch (error) {
      if (error?.code !== "UNKNOWN" || attempt === 9) throw error;
      await new Promise((resolve) => setTimeout(resolve, 100 * (attempt + 1)));
    }
  }
};
const siteUrl = "https://www.jiayuhere.com";
const socialImageUrl = `${siteUrl}/assets/images/og.png`;
const socialImageType = "image/png";
const socialImageWidth = 1200;
const socialImageHeight = 630;
const assetVersion = "20260906a";
const lightThemeColor = "#f7f8fb";
const darkThemeColor = "#0d1117";
const githubUser = "jiayu-here";
const excludedRepositories = new Set(["jiayuhere-site", "jiayu-here"]);
const googleAnalyticsId = "G-V2VWFFLH85";
const noteImageManifest = new Map();
const googleAnalyticsTag = `  <script data-google-analytics-loader>
    (() => {
      const loadAnalytics = () => {
        if (document.querySelector("script[data-google-analytics]")) return;
        window.dataLayer = window.dataLayer || [];
        window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
        window.gtag("js", new Date());
        window.gtag("config", "${googleAnalyticsId}");
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}";
        script.dataset.googleAnalytics = "";
        document.head.append(script);
      };
      window.addEventListener("load", () => {
        if ("requestIdleCallback" in window) window.requestIdleCallback(loadAnalytics, { timeout: 3500 });
        else window.setTimeout(loadAnalytics, 1800);
      }, { once: true });
    })();
  </script>`;
const legacyGoogleAnalyticsSourcePattern = new RegExp(
  `<script\\b[^>]*src=["']https://www\\.googletagmanager\\.com/gtag/js\\?id=${googleAnalyticsId}["'][^>]*></script>\\s*`,
  "gi"
);
const googleAnalyticsConfigPattern = new RegExp(`gtag\\(['"]config['"]\\s*,\\s*['"]${googleAnalyticsId}['"]\\)`);
const themeRestoreTag = `  <script data-theme-restore>
    (() => {
      try {
        const theme = localStorage.getItem("jiayuhere-theme");
        if (theme === "light" || theme === "dark") document.documentElement.dataset.theme = theme;
      } catch {}
    })();
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
      privacy: "隐私说明",
      footerNavLabel: "页脚导航",
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
      privacy: "Privacy",
      footerNavLabel: "Footer navigation",
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

const jsonForHtml = (value) => JSON.stringify(value, null, 2).replaceAll("<", "\\u003c");

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

const normalizeLastmod = (value, fallback = "2026-08-01") => {
  const date = String(value || "");
  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) return date;
  if (/^\d{4}-\d{2}$/.test(date)) return `${date}-01`;
  if (/^\d{4}$/.test(date)) return `${date}-01-01`;
  return fallback;
};

const loadNoteImageManifest = async () => {
  const sourceDir = path.join(root, "assets/notes");
  const previewDir = path.join(root, "assets/note-previews");
  const sourceFiles = (await readdir(sourceDir)).filter((file) => /\.(?:png|svg)$/i.test(file));
  const previewFiles = new Set(await readdir(previewDir).catch((error) => {
    if (error.code === "ENOENT") return [];
    throw error;
  }));

  for (const file of sourceFiles) {
    const sourcePath = path.join(sourceDir, file);
    const buffer = await readFile(sourcePath);
    let width = 0;
    let height = 0;
    if (/\.png$/i.test(file) && buffer.length >= 24 && buffer.toString("ascii", 1, 4) === "PNG") {
      width = buffer.readUInt32BE(16);
      height = buffer.readUInt32BE(20);
    } else if (/\.svg$/i.test(file)) {
      const source = buffer.toString("utf8");
      const widthMatch = source.match(/\bwidth=["']([\d.]+)(?:px)?["']/i);
      const heightMatch = source.match(/\bheight=["']([\d.]+)(?:px)?["']/i);
      const viewBoxMatch = source.match(/\bviewBox=["'][\d.-]+\s+[\d.-]+\s+([\d.]+)\s+([\d.]+)["']/i);
      width = Number(widthMatch?.[1] || viewBoxMatch?.[1] || 0);
      height = Number(heightMatch?.[1] || viewBoxMatch?.[2] || 0);
    }

    const previewName = file.replace(/\.png$/i, ".webp");
    noteImageManifest.set(`/assets/notes/${file}`, {
      width: Math.round(width),
      height: Math.round(height),
      preview: previewFiles.has(previewName) ? `/assets/note-previews/${previewName}` : ""
    });
  }
};

const parseInlineList = (value) => {
  const items = [];
  let current = "";
  let quote = "";
  for (const character of value.slice(1, -1)) {
    if (quote) {
      if (character === quote) quote = "";
      else current += character;
    } else if (character === '"' || character === "'") {
      quote = character;
    } else if (character === ",") {
      if (current.trim()) items.push(current.trim());
      current = "";
    } else {
      current += character;
    }
  }
  if (quote) throw new Error(`Unterminated quoted list value: ${value}`);
  if (current.trim()) items.push(current.trim());
  return items;
};

const parseValue = (raw) => {
  const value = raw.trim();
  if (value.startsWith("[") && value.endsWith("]")) {
    return parseInlineList(value);
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

const pruneLogOutputs = async (items, locale) => {
  const outputDir = path.join(root, localeConfig[locale].routeRoot, logConfig.output);
  await mkdir(outputDir, { recursive: true });
  const activeSlugs = new Set(items.map((item) => item.meta.slug));
  const entries = await readdir(outputDir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory() && !activeSlugs.has(entry.name)) {
      await rm(path.join(outputDir, entry.name), { recursive: true, force: true });
    }
  }
};

const renderNoteImage = ({ alt, src, locale, heading }) => {
  const image = noteImageManifest.get(src);
  const filenameAlt = /^(?:Pasted\s+Image|Drawing)\b/i.test(alt) || /\.(?:png|jpe?g|gif|webp|svg)$/i.test(alt);
  const contextualAlt = filenameAlt
    ? locale === "en"
      ? `Study-note illustration: ${heading || "related topic"}`
      : `学习笔记插图：${heading || "相关内容"}`
    : alt;
  const dimensions = image?.width && image?.height ? ` width="${image.width}" height="${image.height}"` : "";
  const img = `<img class="note-image" src="${escapeHtml(src)}" alt="${escapeHtml(contextualAlt)}"${dimensions} loading="lazy" decoding="async">`;
  const picture = image?.preview
    ? `<picture><source srcset="${escapeHtml(image.preview)}" type="image/webp">${img}</picture>`
    : img;
  const openLabel = locale === "en"
    ? `Open original image: ${contextualAlt || "study-note illustration"}`
    : `打开原图：${contextualAlt || "学习笔记插图"}`;
  return `<a class="note-image-link" href="${escapeHtml(src)}" target="_blank" rel="noreferrer" aria-label="${escapeHtml(openLabel)}">${picture}</a>`;
};

const inline = (value, locale = "zh", { heading = "" } = {}) => {
  const images = [];
  const withPlaceholders = String(value).replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (match, alt, src) => {
    const index = images.push(renderNoteImage({ alt, src, locale, heading })) - 1;
    return `@@NOTE_IMAGE_${index}@@`;
  });
  let rendered = escapeHtml(withPlaceholders)
  .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (match, label, href) => {
    if (!/^(?:https?:\/\/|mailto:|\/|\.\.?\/|#)/.test(href)) return match;
    const external = /^https?:\/\//.test(href);
    return `<a href="${href}"${external ? ' target="_blank" rel="noreferrer"' : ""}>${label}</a>`;
  })
  .replace(/`([^`]+)`/g, "<code>$1</code>")
  .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
  .replace(/&lt;u&gt;([\s\S]*?)&lt;\/u&gt;/g, "<u>$1</u>")
  .replace(/&lt;font\s+color=(?:&quot;|&#39;)(#[0-9a-f]{3,8})(?:&quot;|&#39;)\s*&gt;/gi, '<span style="color:$1">')
  .replace(/&lt;\/font\s*&gt;/gi, "</span>")
  .replace(/&lt;font\b[\s\S]*?&gt;/gi, "")
  .replace(/&lt;span\s+style=(?:&quot;|&#39;)background:(#[0-9a-f]{3,8})(?:&quot;|&#39;)\s*&gt;/gi, '<mark style="background:$1">')
  .replace(/&lt;\/span\s*&gt;/gi, "</mark>")
  .replace(/(^|[\s（(：:,，;；、])(?<!color:)(?<!background:)#([\p{L}\p{N}_/-]+)/gu, '$1<span class="note-tag">$2</span>')
  .replace(/==([^=]+)==/g, "<mark>$1</mark>")
  .replace(/(^|[^*])\*([^*]+)\*(?!\*)/g, "$1<em>$2</em>");
  rendered = rendered.replace(/@@NOTE_IMAGE_(\d+)@@/g, (match, index) => images[Number(index)] || match);
  return rendered;
};

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
  let inMath = false;
  let codeLanguage = "";
  let codeLines = [];
  let mathLines = [];
  let listType = "";
  let headingIndex = 0;
  let currentHeading = "";

  const closeList = () => {
    if (listType) html.push(`</${listType}>`);
    listType = "";
  };

  const closeMath = () => {
    html.push(`<div class="math-display">$$\n${escapeHtml(mathLines.join("\n"))}\n$$</div>`);
    mathLines = [];
    inMath = false;
  };

  for (const line of lines) {
    if (inMath) {
      const displayMathEnd = line.match(/^([\s\S]*?)\$\$(.*)$/);
      if (displayMathEnd) {
        closeList();
        if (displayMathEnd[1].trim()) mathLines.push(displayMathEnd[1].trimEnd());
        closeMath();
        const trailingText = displayMathEnd[2].trim();
        if (trailingText) html.push(`<p>${inline(trailingText, locale, { heading: currentHeading })}</p>`);
      } else {
        mathLines.push(line.trimEnd());
      }
      continue;
    }

    const displayMathStart = line.match(/^\s*(?:[-*+]\s+)?\$\$(.*)$/);
    if (displayMathStart && !displayMathStart[1].includes("$$")) {
      closeList();
      inMath = true;
      if (displayMathStart[1].trim()) mathLines.push(displayMathStart[1].trim());
      continue;
    }

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

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      closeList();
      headingIndex += 1;
      const level = Math.min(6, Math.max(2, heading[1].length));
      const id = `section-${headingIndex}`;
      headings.push({ level, id, text: heading[2] });
      currentHeading = plainText(heading[2]);
      html.push(`<h${level} id="${id}">${inline(heading[2], locale, { heading: currentHeading })}</h${level}>`);
      continue;
    }

    if (/^---\s*$/.test(line)) {
      closeList();
      html.push("<hr>");
      continue;
    }

    const unordered = line.match(/^(\s*)[-*+]\s+(.+)$/);
    const ordered = line.match(/^(\s*)\d+\.\s+(.+)$/);
    if (unordered || ordered) {
      const nextType = unordered ? "ul" : "ol";
      if (listType !== nextType) {
        closeList();
        listType = nextType;
        html.push(`<${listType}>`);
      }
      const [, indentation, item] = unordered || ordered;
      const depth = Math.min(5, Math.floor(indentation.replace(/\t/g, "  ").length / 2));
      html.push(`<li${depth ? ` class="list-indent-${depth}"` : ""}>${inline(item, locale, { heading: currentHeading })}</li>`);
      continue;
    }

    closeList();
    if (!line.trim()) continue;
    if (line.startsWith("> ")) {
      html.push(`<blockquote>${inline(line.slice(2), locale, { heading: currentHeading })}</blockquote>`);
    } else {
      html.push(`<p>${inline(line, locale, { heading: currentHeading })}</p>`);
    }
  }

  closeList();
  if (inCode) throw new Error("Unclosed code fence");
  if (inMath) throw new Error("Unclosed display-math block");
  return { html: html.join("\n"), headings };
};

const expandSplitNotes = (items, locale) => items.flatMap((item) => {
  if (item.meta.split !== "chapters") return [item];
  const chapterMatches = [...item.body.matchAll(/^#\s+Chapter\s+(\d+)\s*[：:]\s*(.+)$/gm)];
  if (!chapterMatches.length) throw new Error(`Split note has no chapter headings: ${item.meta.slug}`);

  const parts = chapterMatches.map((match, index) => {
    const next = chapterMatches[index + 1];
    const number = match[1].padStart(2, "0");
    const chapterTitle = `Chapter ${match[1]}${locale === "en" ? ": " : "："}${match[2].trim()}`;
    const slug = `${item.meta.slug}-chapter-${number}`;
    return {
      ...item,
      meta: {
        ...item.meta,
        title: `${chapterTitle} — ${item.meta.title}`,
        slug,
        description: locale === "en"
          ? `${chapterTitle} from the formula collection, kept as a focused chapter for faster reading and image loading.`
          : `${item.meta.title}中的${chapterTitle}，拆分为独立章节以便查阅并减少单页图片负载。`,
        parentSlug: item.meta.slug
      },
      body: item.body.slice(match.index, next?.index ?? item.body.length).trim()
    };
  });

  const introduction = item.body.slice(0, chapterMatches[0].index).trim();
  const navigationTitle = locale === "en" ? "Chapter navigation" : "章节导航";
  const navigation = parts.map((part) => `- [${part.meta.title.replace(` — ${item.meta.title}`, "")}](../${part.meta.slug}/)`).join("\n");
  const overview = {
    ...item,
    meta: {
      ...item.meta,
      description: locale === "en"
        ? "An index to the advanced-mathematics formula collection, split by chapter for faster loading while preserving the original source."
        : "高等数学公式合集索引；在保留原始 Markdown 的同时按章节生成页面，便于查找并降低单页负载。"
    },
    body: [introduction, `## ${navigationTitle}`, navigation].filter(Boolean).join("\n\n")
  };
  return [overview, ...parts];
});

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
  <footer class="site-footer" role="contentinfo">
    <div><a class="brand footer-brand" href="${routeFromRoot(prefix, locale, "index.html")}">Jiayu Lab</a><p>${strings.footer}</p></div>
    <nav class="footer-links" aria-label="${strings.footerNavLabel}"><a href="${routeFromRoot(prefix, locale, "about/index.html")}">${strings.about}</a><a href="${routeFromRoot(prefix, locale, "privacy/index.html")}">${strings.privacy}</a><a href="https://github.com/jiayu-here" target="_blank" rel="me noreferrer">GitHub</a><a href="${routeFromRoot(prefix, locale, "feed.xml")}">RSS</a><a href="${prefix}sitemap.xml">${strings.sitemap}</a></nav>
    <p class="copyright">© <span data-current-year></span> Jiayu Lab</p>
  </footer>
  <script src="${prefix}assets/script.js?v=${assetVersion}"></script>`;
};

const page = ({ prefix, locale, route, active, title, description, content, type = "website", keywords = [], blogPostingDate = "", modifiedDate = "", usesMath = false, robots = "" }) => {
  const isEnglish = locale === "en";
  const canonical = `${siteUrl}/${localeConfig[locale].routeRoot}${route}`;
  const chinese = `${siteUrl}/${route}`;
  const english = `${siteUrl}/en/${route}`;
  const structuredData = blogPostingDate ? `  <script type="application/ld+json">
${jsonForHtml({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  datePublished: blogPostingDate,
  dateModified: modifiedDate || blogPostingDate,
  inLanguage: localeConfig[locale].lang,
  image: socialImageUrl,
  author: {
    "@type": "Person",
    name: "JiaYu",
    url: `https://www.jiayuhere.com/${localeConfig[locale].routeRoot}about/`
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonical
  }
})}
  </script>` : "";
  return `<!doctype html>
<html lang="${localeConfig[locale].lang}">
<head>
  <meta charset="utf-8">
${themeRestoreTag}
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light dark">
  <title>${escapeHtml(title)} | Jiayu Lab</title>
  <meta name="description" content="${escapeHtml(description)}">
${robots ? `  <meta name="robots" content="${escapeHtml(robots)}">` : ""}
${keywords.length ? `  <meta name="keywords" content="${escapeHtml(keywords.join(", "))}">` : ""}
  <meta name="theme-color" content="${lightThemeColor}" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="${darkThemeColor}" media="(prefers-color-scheme: dark)">
  <meta property="og:type" content="${type}">
  <meta property="og:title" content="${escapeHtml(title)} | Jiayu Lab">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:image" content="${socialImageUrl}">
  <meta property="og:image:type" content="${socialImageType}">
  <meta property="og:image:width" content="${socialImageWidth}">
  <meta property="og:image:height" content="${socialImageHeight}">
  <meta property="og:image:alt" content="Jiayu Lab">
  <meta property="og:url" content="${canonical}">
  <meta property="og:locale" content="${isEnglish ? "en_US" : "zh_CN"}">
  <meta property="og:locale:alternate" content="${isEnglish ? "zh_CN" : "en_US"}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)} | Jiayu Lab">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="${socialImageUrl}">
  <meta name="twitter:image:alt" content="Jiayu Lab">${structuredData ? `\n${structuredData}` : ""}
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="zh-CN" href="${chinese}">
  <link rel="alternate" hreflang="en" href="${english}">
  <link rel="alternate" hreflang="x-default" href="${chinese}">
  <link rel="alternate" type="application/rss+xml" title="${isEnglish ? "Jiayu Lab Technical Blog" : "Jiayu Lab 技术博客"}" href="${routeFromRoot(prefix, locale, "feed.xml")}">
  <link rel="icon" href="${prefix}favicon.ico?v=${assetVersion}" sizes="any">
  <link rel="apple-touch-icon" href="${prefix}assets/images/app-icon-192.png" sizes="192x192">
  <link rel="manifest" href="${prefix}site.webmanifest">
  <link rel="stylesheet" href="${prefix}assets/styles.css?v=${assetVersion}">
${usesMath ? `  <script>
    window.MathJax = {
      tex: {
        inlineMath: [["$", "$"]],
        displayMath: [["$$", "$$"]],
        processEscapes: true,
        processEnvironments: true
      },
      options: { skipHtmlTags: ["script", "noscript", "style", "textarea", "pre", "code"] }
    };
  </script>
  <script defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>` : ""}
</head>
<body>
${nav(prefix, locale, route, active)}
<main id="main" tabindex="-1">${content}</main>
${footer(prefix, locale)}
</body>
</html>`;
};

const buildPrivacyPage = async (locale) => {
  const isEnglish = locale === "en";
  const sourcePath = path.join(root, localeConfig[locale].contentRoot, "pages/privacy.md");
  const item = parseDocument(await readFile(sourcePath, "utf8"), `${locale}/pages/privacy.md`);
  const rendered = markdownToHtml(item.body, locale);
  const content = `
    <section class="page-hero compact-hero index-hero"><div class="container"><h1>${escapeHtml(item.meta.title)}</h1><p>${escapeHtml(item.meta.description)}</p></div></section>
    <section class="section container"><div class="panel prose standalone-prose">${rendered.html}</div></section>`;
  const output = path.join(root, localeConfig[locale].routeRoot, "privacy");
  await mkdir(output, { recursive: true });
  await writeFile(path.join(output, "index.html"), page({
    prefix: isEnglish ? "../../" : "../",
    locale,
    route: "privacy/",
    active: "",
    title: item.meta.title,
    description: item.meta.description,
    content,
    modifiedDate: item.meta.updated || item.meta.date || ""
  }));
  return item;
};

const buildOfflinePage = async (locale) => {
  const isEnglish = locale === "en";
  const content = `
    <section class="page-hero compact-hero index-hero"><div class="container"><h1>${isEnglish ? "You are offline" : "当前处于离线状态"}</h1><p>${isEnglish ? "This page has not been cached yet. Reconnect and try again, or return to the cached homepage." : "这个页面尚未缓存。恢复网络后可重新访问，也可以返回已缓存的主页。"}</p><div class="button-row"><a class="button primary-button" href="${isEnglish ? "/en/" : "/"}">${isEnglish ? "Return home" : "返回主页"}</a></div></div></section>`;
  const output = path.join(root, localeConfig[locale].routeRoot, "offline");
  await mkdir(output, { recursive: true });
  await writeFile(path.join(output, "index.html"), page({
    prefix: "/",
    locale,
    route: "offline/",
    active: "",
    title: isEnglish ? "Offline" : "离线提示",
    description: isEnglish ? "Offline fallback page for Jiayu Lab." : "Jiayu Lab 的离线回退页面。",
    content,
    robots: "noindex, nofollow"
  }));
};

const homeStructuredData = (locale) => `  <script type="application/ld+json">
${jsonForHtml({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "JiaYu",
      url: `${siteUrl}/`,
      sameAs: [
        "https://github.com/jiayu-here",
        "https://www.linkedin.com/in/jiayuhere",
        "https://www.instagram.com/jiayuhere_/",
        "https://jiayuhere.blogspot.com",
        "https://v.douyin.com/lisWB6e9ImQ/"
      ],
      knowsAbout: ["Embedded Systems", "FPGA", "Digital Signal Processing", "Communication Systems", "Databases"]
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "Jiayu Lab",
      description: locale === "en"
        ? "A personal space for engineering, code and continuous learning."
        : "工程、代码与长期学习的个人数字空间",
      inLanguage: localeConfig[locale].lang,
      author: { "@id": `${siteUrl}/#person` }
    }
  ]
})}
  </script>`;

const pagePrefixForUrl = (url) => {
  const depth = url.split("/").filter(Boolean).length;
  return "../".repeat(url.endsWith(".html") ? Math.max(0, depth - 1) : depth);
};

const ensureEarlyCharset = (html) => {
  const charsetPattern = /[ \t]*<meta\s+charset=(?:"[^"]*"|'[^']*')[^>]*>[ \t]*(?:\r?\n)?/gi;
  const charset = html.match(charsetPattern);
  const tag = charset?.[0].trim() || '<meta charset="utf-8">';
  html = html.replace(charsetPattern, "");
  return html.replace(/<head\b[^>]*>/i, (head) => `${head}\n  ${tag}`);
};

const ensureSharedPageShell = (html, url) => {
  const isEnglish = url.startsWith("en/");
  const locale = isEnglish ? "en" : "zh";
  const prefix = pagePrefixForUrl(url);
  const privacyHref = `${prefix}${localeConfig[locale].routeRoot}privacy/index.html`;
  const footerNavOpening = `<nav class="footer-links" aria-label="${localeConfig[locale].strings.footerNavLabel}">`;
  html = html.replace(
    /<div class="footer-links">([\s\S]*?)<\/div>(?=\s*<p class="copyright">)/i,
    `${footerNavOpening}$1</nav>`
  );
  html = html.replace(/<nav class="footer-links"(?:\s+aria-label="[^"]*")?>/i, footerNavOpening);
  if (!html.includes(`href="${privacyHref}"`)) {
    html = html.replace(footerNavOpening, `${footerNavOpening}<a href="${privacyHref}">${localeConfig[locale].strings.privacy}</a>`);
  }
  html = html.replace(/<a\b[^>]*\bhref=(["'])https:\/\/github\.com\/jiayu-here\/?\1[^>]*>/gi, (link) => {
    if (/\brel=(["'])[^"']*\bme\b[^"']*\1/i.test(link)) return link;
    if (/\brel=(["'])([^"']*)\1/i.test(link)) {
      return link.replace(/\brel=(["'])([^"']*)\1/i, (_, quote, value) => `rel=${quote}me ${value}${quote}`);
    }
    return link.replace(/>$/, ' rel="me">');
  });
  html = html.replace(
    /<div\b([^>]*\bclass=(["'])[^"']*\bcontent-controls\b[^"']*\2[^>]*)>(?=\s*<label\b[^>]*\bclass=(["'])[^"']*\bsearch-box\b[^"']*\3[^>]*>\s*<span>([^<]+)<\/span>\s*<input\b[^>]*\bdata-content-search\b)/gi,
    (tag, _attributes, _classQuote, _labelQuote, label) => {
      let landmark = tag;
      if (!/\brole=(["'])search\1/i.test(landmark)) landmark = landmark.replace(/>$/, ' role="search">');
      if (!/\baria-label=/.test(landmark)) landmark = landmark.replace(/>$/, ` aria-label="${escapeHtml(label.trim())}">`);
      return landmark;
    }
  );
  if (!/<meta\b(?=[^>]*\bname=["']color-scheme["'])[^>]*>/i.test(html)) {
    html = html.replace(
      /(<meta\b(?=[^>]*\bname=["']viewport["'])[^>]*>)/i,
      '$1\n  <meta name="color-scheme" content="light dark">'
    );
  }
  const themeTags = [];
  if (!/<meta name="theme-color"[^>]*prefers-color-scheme:\s*light/i.test(html)) {
    themeTags.push(`  <meta name="theme-color" content="${lightThemeColor}" media="(prefers-color-scheme: light)">`);
  }
  if (!/<meta name="theme-color"[^>]*prefers-color-scheme:\s*dark/i.test(html)) {
    themeTags.push(`  <meta name="theme-color" content="${darkThemeColor}" media="(prefers-color-scheme: dark)">`);
  }
  if (themeTags.length) html = html.replace("</head>", `${themeTags.join("\n")}\n</head>`);
  if (!html.includes("data-theme-restore")) html = html.replace("<head>", `<head>\n${themeRestoreTag}`);
  if (!/<link\b[^>]*\brel=["']apple-touch-icon["']/i.test(html)) {
    html = html.replace("</head>", `  <link rel="apple-touch-icon" href="${prefix}assets/images/app-icon-192.png" sizes="192x192">\n</head>`);
  }
  html = html.replace(/<main\b(?=[^>]*\bid=["']main["'])[^>]*>/gi, (tag) => (
    /\btabindex=/.test(tag) ? tag : tag.replace(/>$/, ' tabindex="-1">')
  ));
  html = html.replace(/<footer class="site-footer"(?![^>]*\brole=)>/g, '<footer class="site-footer" role="contentinfo">');
  if (url === "" || url === "en/") {
    const identityProfiles = new Set([
      "https://github.com/jiayu-here",
      "https://www.linkedin.com/in/jiayuhere",
      "https://www.instagram.com/jiayuhere_/",
      "https://jiayuhere.blogspot.com",
      "https://v.douyin.com/lisWB6e9ImQ/"
    ]);
    html = html.replace(/<a\b[^>]*>/gi, (tag) => {
      const href = tag.match(/\bhref=["']([^"']+)["']/i)?.[1];
      if (!identityProfiles.has(href)) return tag;
      const rel = tag.match(/\brel=["']([^"']*)["']/i);
      if (!rel) return tag.replace(/>$/, ' rel="me">');
      const tokens = rel[1].split(/\s+/).filter((token) => token && token !== "me");
      return tag.replace(rel[0], `rel="${["me", ...tokens].join(" ")}"`);
    });
  }
  return html
    .replace(/(<meta name="theme-color" content=")[^"]+(" media="\(prefers-color-scheme: light\)">)/g, `$1${lightThemeColor}$2`)
    .replace(/favicon\.ico(?:\?v=[^"]+)?/g, `favicon.ico?v=${assetVersion}`)
    .replace(/assets\/styles\.css\?v=[^"]+/g, `assets/styles.css?v=${assetVersion}`)
    .replace(/assets\/script\.js\?v=[^"]+/g, `assets/script.js?v=${assetVersion}`);
};

const ensureStaticSearchAnchors = (html, url) => {
  const addIds = (className, prefix) => {
    let index = 0;
    html = html.replace(new RegExp(`<article\\b([^>]*\\bclass="[^"]*\\b${className}\\b[^"]*"[^>]*)>`, "g"), (tag) => {
      index += 1;
      let hasId = false;
      const normalizedTag = tag.replace(/\s+id="[^"]+"/g, (attribute) => {
        if (hasId) return "";
        hasId = true;
        return attribute;
      });
      if (hasId) return normalizedTag;
      return tag.replace("<article", `<article id="${prefix}-${String(index).padStart(2, "0")}"`);
    });
  };
  if (url === "toolbox/" || url === "en/toolbox/") addIds("tool-card", "tool");
  if (url === "resources/" || url === "en/resources/") addIds("resource-group", "resource");
  return html;
};

const ensurePageMetadata = (html, url) => {
  html = ensureStaticSearchAnchors(html, url);
  const isEnglish = url.startsWith("en/");
  const locale = isEnglish ? "en" : "zh";
  const route = isEnglish ? url.slice(3) : url;
  const canonical = `${siteUrl}/${url}`;
  const chinese = `${siteUrl}/${route}`;
  const english = `${siteUrl}/en/${route}`;
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() || "Jiayu Lab";
  const descriptionTag = html.match(/<meta\b(?=[^>]*\bname=["']description["'])[^>]*>/i)?.[0] || "";
  const description = descriptionTag.match(/\bcontent="([^"]*)"/i)?.[1]
    || descriptionTag.match(/\bcontent='([^']*)'/i)?.[1]
    || "";
  const additions = [];
  const add = (pattern, tag) => {
    if (!pattern.test(html)) additions.push(tag);
  };

  add(/<link\b[^>]*\brel=["']canonical["']/i, `  <link rel="canonical" href="${canonical}">`);
  add(/<link\b[^>]*\bhreflang=["']zh-CN["']/i, `  <link rel="alternate" hreflang="zh-CN" href="${chinese}">`);
  add(/<link\b[^>]*\bhreflang=["']en["']/i, `  <link rel="alternate" hreflang="en" href="${english}">`);
  add(/<link\b[^>]*\bhreflang=["']x-default["']/i, `  <link rel="alternate" hreflang="x-default" href="${chinese}">`);
  add(/<meta\b[^>]*\bproperty=["']og:type["']/i, `  <meta property="og:type" content="website">`);
  add(/<meta\b[^>]*\bproperty=["']og:title["']/i, `  <meta property="og:title" content="${title}">`);
  add(/<meta\b[^>]*\bproperty=["']og:description["']/i, `  <meta property="og:description" content="${description}">`);
  add(/<meta\b[^>]*\bproperty=["']og:image["']/i, `  <meta property="og:image" content="${socialImageUrl}">`);
  add(/<meta\b[^>]*\bproperty=["']og:image:type["']/i, `  <meta property="og:image:type" content="${socialImageType}">`);
  add(/<meta\b[^>]*\bproperty=["']og:image:width["']/i, `  <meta property="og:image:width" content="${socialImageWidth}">`);
  add(/<meta\b[^>]*\bproperty=["']og:image:height["']/i, `  <meta property="og:image:height" content="${socialImageHeight}">`);
  add(/<meta\b[^>]*\bproperty=["']og:image:alt["']/i, `  <meta property="og:image:alt" content="Jiayu Lab">`);
  add(/<meta\b[^>]*\bproperty=["']og:url["']/i, `  <meta property="og:url" content="${canonical}">`);
  add(/<meta\b[^>]*\bproperty=["']og:locale["']/i, `  <meta property="og:locale" content="${isEnglish ? "en_US" : "zh_CN"}">`);
  add(/<meta\b[^>]*\bproperty=["']og:locale:alternate["']/i, `  <meta property="og:locale:alternate" content="${isEnglish ? "zh_CN" : "en_US"}">`);
  add(/<meta\b[^>]*\bname=["']twitter:card["']/i, `  <meta name="twitter:card" content="summary_large_image">`);
  add(/<meta\b[^>]*\bname=["']twitter:title["']/i, `  <meta name="twitter:title" content="${title}">`);
  add(/<meta\b[^>]*\bname=["']twitter:description["']/i, `  <meta name="twitter:description" content="${description}">`);
  add(/<meta\b[^>]*\bname=["']twitter:image["']/i, `  <meta name="twitter:image" content="${socialImageUrl}">`);
  add(/<meta\b[^>]*\bname=["']twitter:image:alt["']/i, `  <meta name="twitter:image:alt" content="Jiayu Lab">`);
  if (additions.length) html = html.replace("</head>", `${additions.join("\n")}\n</head>`);

  if ((url === "" || url === "en/") && !html.includes('"@type": "WebSite"') && !html.includes('"@type":"WebSite"')) {
    html = html.replace("</head>", `${homeStructuredData(locale)}\n</head>`);
  }

  html = ensureSharedPageShell(html, url);
  html = ensureDeferredAnalytics(html);
  return ensureEarlyCharset(html);
};

const ensureDeferredAnalytics = (html) => {
  html = html.replace(legacyGoogleAnalyticsSourcePattern, "");
  html = html.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>\s*/gi, (script, attributes, body) => {
    if (attributes.includes("data-google-analytics-loader")) return script;
    return googleAnalyticsConfigPattern.test(body) ? "" : script;
  });
  if (!html.includes("data-google-analytics-loader")) html = html.replace("<head>", `<head>\n${googleAnalyticsTag}`);
  return html;
};

const tagList = (tags = []) => `<div class="tag-list">${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>`;

const recordDateFor = (item) => String(item.meta.updated || item.meta.date || "");

const statusToneFor = (status = "") => {
  const value = String(status).toLowerCase();
  if (/(归档|archived)/.test(value)) return "archived";
  if (/(待|未验证|pending|unverified|not verified|awaiting)/.test(value)) return "pending";
  if (/(验证|仿真|编译|测试|verified|validated|simulation|simulated|compiled|tested|build complete)/.test(value)) return "verified";
  return "neutral";
};

const evidenceBadge = (status, locale) => status
  ? `<span class="evidence-badge evidence-${statusToneFor(status)}" aria-label="${locale === "en" ? "Record status: " : "记录状态："}${escapeHtml(status)}">${escapeHtml(status)}</span>`
  : "";

const cardRecordMeta = (item, locale) => {
  const date = recordDateFor(item);
  const dateMarkup = date
    ? `<time class="card-date" datetime="${escapeHtml(date)}" title="${locale === "en" ? "Record date" : "记录日期"}">${escapeHtml(date)}</time>`
    : "";
  const statusMarkup = evidenceBadge(item.meta.status, locale);
  return dateMarkup || statusMarkup ? `<span class="card-record-meta">${dateMarkup}${statusMarkup}</span>` : "";
};

const noteHierarchyFor = (item, locale = "zh") => {
  const tags = item.meta.tags || [];
  const isEnglish = locale === "en";
  const labels = isEnglish
    ? { mathematics: "Mathematics", english: "English", other: "Other Study Notes", engineering: "Engineering Mathematics", unclassified: "Unclassified", engineeringChapter: "Complex Numbers, Fourier Transforms, Probability and Linear Algebra", mathTag: "Graduate Entrance Examination Mathematics" }
    : { mathematics: "数学", english: "英语", other: "其他学习笔记", engineering: "工程数学", unclassified: "未分类", engineeringChapter: "复数、傅里叶变换、概率与线性代数", mathTag: "考研数学" };
  if (item.meta.category === labels.mathematics) {
    if (tags[0] === labels.mathTag || tags[0] === "Postgraduate Mathematics") return { major: labels.mathematics, course: tags[1] || labels.unclassified, chapter: tags[2] || labels.unclassified };
    return { major: labels.mathematics, course: labels.engineering, chapter: labels.engineeringChapter };
  }
  if (item.meta.category === labels.english) {
    return { major: labels.english, course: tags[1] || labels.unclassified, chapter: tags[2] || labels.unclassified };
  }
  return { major: labels.other, course: item.meta.category || labels.unclassified, chapter: isEnglish ? "Other" : "其他" };
};

const cardFor = (item, section, locale, prefix, noteHierarchy) => {
  const config = localizedSections[locale][section];
  const isEnglish = locale === "en";
  const targetFolder = section === "articles" ? "blog" : section;
  const href = `${routeFromRoot(prefix, locale, `${targetFolder}/${escapeHtml(item.meta.slug)}/index.html`)}`;
  const searchText = [item.meta.title, item.meta.description, item.meta.category, ...(item.meta.tags || [])].join(" ");
  const categoryLabel = noteHierarchy ? `${noteHierarchy.course} · ${noteHierarchy.chapter}` : (item.meta.category || config.label);
  const headingTag = noteHierarchy ? "h5" : "h2";
  return `<article class="content-card" data-content-card data-category="${escapeHtml(item.meta.category || (isEnglish ? "All" : "全部"))}" data-search="${escapeHtml(searchText.toLowerCase())}">
    <div class="card-topline"><span class="card-category">${escapeHtml(categoryLabel)}</span>${cardRecordMeta(item, locale)}</div>
    <${headingTag}><a href="${href}">${escapeHtml(item.meta.title)}</a></${headingTag}>
    <p>${escapeHtml(item.meta.description)}</p>
    ${tagList(item.meta.tags || [])}
    <a class="text-link" href="${href}">${isEnglish ? "View details" : "查看详情"} <span aria-hidden="true">→</span></a>
  </article>`;
};

const relationScore = (source, candidate) => {
  const sourceTags = new Set((source.meta.tags || []).map((tag) => String(tag).trim().toLowerCase()).filter(Boolean));
  const candidateTags = (candidate.meta.tags || []).map((tag) => String(tag).trim().toLowerCase()).filter(Boolean);
  const sharedTags = candidateTags.filter((tag) => sourceTags.has(tag)).length;
  return sharedTags * 4;
};

const relatedUrl = (section, item, locale) => {
  const output = section === "articles" ? "blog" : section === "logs" ? logConfig.output : section;
  return `/${localeConfig[locale].routeRoot}${output}/${escapeHtml(item.meta.slug)}/`;
};

const relatedContentFor = (item, section, catalog, locale) => {
  const isEnglish = locale === "en";
  const sourceProject = section === "projects"
    ? item
    : section === "logs"
      ? catalog.projects.find((project) => project.meta.slug === item.meta.projectSlug)
      : null;
  const seed = sourceProject || item;
  const related = [];
  let selectedProject = sourceProject || null;

  for (const candidateSection of ["projects", "articles", "notes"]) {
    const candidates = catalog[candidateSection]
      .filter((candidate) => !(candidateSection === section && candidate.meta.slug === item.meta.slug))
      .map((candidate) => ({ candidate, score: section === "logs" && candidateSection === "projects" && candidate.meta.slug === item.meta.projectSlug ? 1000 : relationScore(seed, candidate) }))
      .filter(({ score }) => score > 0)
      .sort((left, right) => right.score - left.score || String(left.candidate.meta.title).localeCompare(String(right.candidate.meta.title), isEnglish ? "en-US" : "zh-CN"));
    if (!candidates.length) continue;
    const chosen = candidates[0].candidate;
    related.push({ section: candidateSection, item: chosen });
    if (candidateSection === "projects" && !selectedProject) selectedProject = chosen;
  }

  if (selectedProject) {
    const log = catalog.logs.find((candidate) => candidate.meta.projectSlug === selectedProject.meta.slug && !(section === "logs" && candidate.meta.slug === item.meta.slug));
    if (log) related.push({ section: "logs", item: log });
  }

  const unique = related.filter((entry, index, entries) => entries.findIndex((candidate) => candidate.section === entry.section && candidate.item.meta.slug === entry.item.meta.slug) === index).slice(0, 4);
  if (!unique.length) return "";
  const labels = isEnglish
    ? { projects: "Project", articles: "Blog", notes: "Note", logs: "Lab log" }
    : { projects: "项目", articles: "博客", notes: "笔记", logs: "日志" };
  return `<aside class="related-content container" aria-labelledby="related-content-title">
    <div class="related-heading"><p class="eyebrow">${isEnglish ? "Continue exploring" : "继续阅读"}</p><h2 id="related-content-title">${isEnglish ? "Related records" : "相关内容"}</h2></div>
    <div class="related-grid">${unique.map((entry) => `<a class="related-card" href="${relatedUrl(entry.section, entry.item, locale)}"><span class="related-type">${labels[entry.section]}</span><strong>${escapeHtml(entry.item.meta.title)}</strong><span>${escapeHtml(entry.item.meta.description)}</span></a>`).join("")}</div>
  </aside>`;
};

const buildNoteIndex = async (items, locale = "zh", hierarchyItems = items) => {
  const isEnglish = locale === "en";
  const prefix = isEnglish ? "../../" : "../";
  const route = "notes/";
  const groupOrder = isEnglish ? ["Mathematics", "English", "Other Study Notes"] : ["数学", "英语", "其他学习笔记"];
  const courseOrder = isEnglish ? {
    Mathematics: ["Mathematics Summary", "Advanced Mathematics", "Linear Algebra", "Engineering Mathematics"],
    English: ["English Grammar", "English Reading", "English Writing"]
  } : {
    数学: ["数学总结", "高等数学", "线性代数", "工程数学"],
    英语: ["英语语法", "英语阅读", "英语写作"]
  };
  const groups = new Map();
  const hierarchyBySlug = new Map(hierarchyItems.map((item) => [item.meta.slug, noteHierarchyFor(item, locale)]));
  for (const item of items) {
    const hierarchy = hierarchyBySlug.get(item.meta.slug) || noteHierarchyFor(item, locale);
    if (!groups.has(hierarchy.major)) groups.set(hierarchy.major, new Map());
    const courses = groups.get(hierarchy.major);
    if (!courses.has(hierarchy.course)) courses.set(hierarchy.course, new Map());
    const chapters = courses.get(hierarchy.course);
    if (!chapters.has(hierarchy.chapter)) chapters.set(hierarchy.chapter, []);
    chapters.get(hierarchy.chapter).push({ item, hierarchy });
  }
  const sortNames = (names, order = []) => [...names].sort((left, right) => {
    const leftIndex = order.indexOf(left);
    const rightIndex = order.indexOf(right);
    if (leftIndex !== -1 || rightIndex !== -1) return (leftIndex === -1 ? Number.MAX_SAFE_INTEGER : leftIndex) - (rightIndex === -1 ? Number.MAX_SAFE_INTEGER : rightIndex);
    return left.localeCompare(right, isEnglish ? "en-US" : "zh-CN");
  });
  const noteGroupId = (...parts) => `notes-${locale}-${parts.map((part) => encodeURIComponent(part).replace(/%/g, "-")).join("-")}`;
  const categories = sortNames([...new Set(items.map((item) => item.meta.category).filter(Boolean))], isEnglish ? ["Mathematics", "English"] : ["数学", "英语"]);
  const controls = `<div class="content-controls compact-controls">
    <label class="search-box"><span>${isEnglish ? "Search notes" : "搜索笔记"}</span><input type="search" enterkeyhint="search" data-content-search placeholder="${isEnglish ? "Enter a title, tag or keyword" : "输入标题、标签或关键词"}"></label>
    <div class="filter-control"><span>${isEnglish ? "Filter by category" : "按分类筛选"}</span><div class="filter-row" role="group" aria-label="${isEnglish ? "Note categories" : "笔记大类"}"><button class="filter-chip is-active" type="button" data-filter="all" aria-pressed="true">${isEnglish ? "All" : "全部"}</button>${categories.map((category) => `<button class="filter-chip" type="button" data-filter="${escapeHtml(category)}" aria-pressed="false">${escapeHtml(category)}</button>`).join("")}</div></div>
    <p class="result-status" data-result-status aria-live="polite"></p>
  </div>`;
  const hierarchy = sortNames(groups.keys(), groupOrder).map((major) => {
    const courses = groups.get(major);
    const courseContent = sortNames(courses.keys(), courseOrder[major] || []).map((course) => {
      const chapters = courses.get(course);
      const chapterContent = [...chapters.keys()].map((chapter) => {
        const entries = chapters.get(chapter);
        return `<details class="notes-chapter-section" data-note-group data-note-details data-note-group-id="${noteGroupId(major, course, chapter)}">
          <summary class="notes-chapter-header"><h4>${escapeHtml(chapter)}</h4><span>${entries.length} ${isEnglish ? "items" : "篇"}</span></summary>
          <div class="content-grid">${entries.map(({ item, hierarchy: itemHierarchy }) => cardFor(item, "notes", locale, prefix, itemHierarchy)).join("")}</div>
        </details>`;
      }).join("");
      const count = [...chapters.values()].reduce((total, entries) => total + entries.length, 0);
      const courseClass = course === "英语写作" || course === "English Writing" ? " notes-writing-course" : "";
      return `<details class="notes-course-section${courseClass}" data-note-group data-note-details data-note-group-id="${noteGroupId(major, course)}">
        <summary class="notes-course-header"><h3>${escapeHtml(course)}</h3><span>${count} ${isEnglish ? "items" : "篇"}</span></summary>
        <div class="notes-chapter-list">${chapterContent}</div>
      </details>`;
    }).join("");
    const count = [...courses.values()].reduce((total, chapters) => total + [...chapters.values()].reduce((chapterTotal, entries) => chapterTotal + entries.length, 0), 0);
    return `<details class="notes-major-section" data-note-group data-note-details data-note-group-id="${noteGroupId(major)}">
      <summary class="notes-major-header"><p>${isEnglish ? "Learning note category" : "学习笔记大类"}</p><h2>${escapeHtml(major)}</h2><span>${count} ${isEnglish ? "items" : "篇"}</span></summary>
      <div class="notes-course-list">${courseContent}</div>
    </details>`;
  }).join("");
  const content = `
    <section class="page-hero compact-hero index-hero content-index-hero section-index-hero">
      <div class="container"><div class="section-index-heading"><h1>${isEnglish ? "Learning Notes" : "学习笔记"}</h1></div>${controls}</div>
    </section>
    <section class="section container content-index-section"><div class="notes-major-list" data-notes-index>${hierarchy}</div><p class="empty-state" data-empty-state hidden>${isEnglish ? "No matching notes." : "暂时没有匹配的内容。"}</p></section>`;
  const output = path.join(root, localeConfig[locale].routeRoot, "notes");
  await mkdir(output, { recursive: true });
  await writeFile(path.join(output, "index.html"), page({ prefix, locale, route, active: "notes", title: isEnglish ? "Learning Notes" : "学习笔记", description: isEnglish ? "Mathematics and English learning notes" : "数学与英语学习笔记", content }));
};

const buildIndex = async (section, items, locale) => {
  if (section === "notes") return buildNoteIndex(items, locale);
  const config = localizedSections[locale][section];
  const isEnglish = locale === "en";
  const prefix = isEnglish ? "../../" : "../";
  const route = `${config.output}/`;
  const categories = [...new Set(items.map((item) => item.meta.category).filter(Boolean))];
  const searchLabel = isEnglish
    ? section === "projects" ? "Search projects" : section === "articles" ? "Search articles" : "Search notes"
    : section === "projects" ? "搜索项目" : section === "articles" ? "搜索文章" : "搜索笔记";
  const controls = `<div class="content-controls compact-controls">
    <label class="search-box"><span>${searchLabel}</span><input type="search" enterkeyhint="search" data-content-search placeholder="${isEnglish ? "Enter a title, tag or keyword" : "输入标题、标签或关键词"}"></label>
    <div class="filter-control"><span>${isEnglish ? "Filter by category" : "按分类筛选"}</span><div class="filter-row" role="group" aria-label="${isEnglish ? "Content categories" : "内容分类"}"><button class="filter-chip is-active" type="button" data-filter="all" aria-pressed="true">${isEnglish ? "All" : "全部"}</button>${categories.map((category) => `<button class="filter-chip" type="button" data-filter="${escapeHtml(category)}" aria-pressed="false">${escapeHtml(category)}</button>`).join("")}</div></div>
    <p class="result-status" data-result-status aria-live="polite"></p>
  </div>`;
  const hero = `
    <section class="page-hero compact-hero index-hero content-index-hero section-index-hero">
      <div class="container"><div class="section-index-heading"><h1>${config.title}</h1></div>${controls}</div>
    </section>`;
  const content = `${hero}
    <section class="section container content-index-section"><div class="content-grid" data-content-grid>${items.map((item) => cardFor(item, section, locale, prefix)).join("")}</div><p class="empty-state" data-empty-state hidden>${isEnglish ? "No matching content." : "暂时没有匹配的内容。"}</p></section>`;
  const output = path.join(root, localeConfig[locale].routeRoot, config.output);
  await mkdir(output, { recursive: true });
  await writeFile(path.join(output, "index.html"), page({ prefix, locale, route, active: section, title: config.title, description: config.title, content }));
};

const buildDetail = async (section, item, index, items, catalog, locale) => {
  const config = localizedSections[locale][section];
  const isEnglish = locale === "en";
  const rendered = markdownToHtml(item.body, locale);
  const toc = rendered.headings.filter((heading) => heading.level === 2).map((heading) => `<a href="#${heading.id}">${escapeHtml(heading.text)}</a>`).join("");
  const recordDate = recordDateFor(item);
  const recordDateLabel = item.meta.updated
    ? (isEnglish ? "Updated" : "更新")
    : section === "articles"
      ? (isEnglish ? "Published" : "发布")
      : (isEnglish ? "Record date" : "记录日期");
  const recordMeta = [
    item.meta.category ? `<span class="record-category">${escapeHtml(item.meta.category)}</span>` : "",
    recordDate ? `<span class="record-date"><span>${recordDateLabel}</span><time datetime="${escapeHtml(recordDate)}">${escapeHtml(recordDate)}</time></span>` : "",
    evidenceBadge(item.meta.status, locale)
  ].filter(Boolean).join("");
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
      <header class="article-header container"><a class="back-link" href="../index.html"${section === "notes" ? " data-notes-back-link" : ""}>← ${isEnglish ? `Back to ${config.label}` : `返回${config.label}`}</a><h1>${escapeHtml(item.meta.title)}</h1><p class="article-lead">${escapeHtml(item.meta.description)}</p><div class="article-meta">${recordMeta ? `<span class="record-meta">${recordMeta}</span>` : ""}<span>${isEnglish ? `${readingMinutes(item.body)} min read` : `约 ${readingMinutes(item.body)} 分钟阅读`}</span>${tagList(item.meta.tags || [])}</div>${repository}</header>
      <div class="article-layout container"><details class="article-toc" open><summary>${isEnglish ? "On this page" : "本页目录"}</summary><nav aria-label="${isEnglish ? "On this page" : "本页目录"}">${toc}</nav></details><div class="prose">${rendered.html}${pagination}</div></div>
${relatedContentFor(item, section, catalog, locale)}
    </article>`;
  const output = path.join(root, localeConfig[locale].routeRoot, config.output, item.meta.slug);
  await mkdir(output, { recursive: true });
  const prefix = isEnglish ? "../../../" : "../../";
  const route = `${config.output}/${item.meta.slug}/`;
  const usesMath = section === "notes" && /(^|[^\\])\$(?:\$|[^$])/.test(item.body);
  await writeFile(path.join(output, "index.html"), page({ prefix, locale, route, active: section, title: item.meta.title, description: item.meta.description, content, type: "article", keywords: item.meta.tags || [], blogPostingDate: section === "articles" ? item.meta.date : "", modifiedDate: item.meta.updated || "", usesMath }));
};

const logField = (item, label) => {
  const pattern = new RegExp(`\\*\\*${label}[:：]\\*\\*\\s*([^\\n]+)`);
  return item.body.match(pattern)?.[1]?.trim() || "";
};

const buildLogDetail = async (item, catalog, locale) => {
  const isEnglish = locale === "en";
  const rendered = markdownToHtml(item.body, locale).html;
  const projectSlug = String(item.meta.projectSlug || "");
  if (!projectSlug) throw new Error(`Log projectSlug missing: ${item.meta.title}`);
  const content = `
    <article class="article-page">
      <header class="article-header container"><a class="back-link" href="../index.html">← ${isEnglish ? "Back to lab logs" : "返回实验日志"}</a><h1>${escapeHtml(item.meta.title)}</h1><p class="article-lead">${escapeHtml(item.meta.description)}</p><div class="article-meta"><span class="record-meta"><span class="record-date"><span>${isEnglish ? "Record date" : "记录日期"}</span><time datetime="${escapeHtml(item.meta.date)}">${escapeHtml(item.meta.date)}</time></span></span></div></header>
      <section class="section container"><div class="panel prose standalone-prose">${rendered}<div class="button-row"><a class="button secondary-button" href="../../projects/${escapeHtml(projectSlug)}/index.html">${isEnglish ? "View project record" : "查看项目档案"}</a></div></div></section>
${relatedContentFor(item, "logs", catalog, locale)}
    </article>`;
  const output = path.join(root, localeConfig[locale].routeRoot, logConfig.output, item.meta.slug);
  await mkdir(output, { recursive: true });
  await writeFile(path.join(output, "index.html"), page({
    prefix: isEnglish ? "../../../" : "../../",
    locale,
    route: `${logConfig.output}/${item.meta.slug}/`,
    active: "logs",
    title: item.meta.title,
    description: item.meta.description,
    content,
    type: "article",
    modifiedDate: item.meta.updated || item.meta.date || ""
  }));
};

const buildLabIndex = async (items, locale) => {
  const isEnglish = locale === "en";
  const prefix = isEnglish ? "../../" : "../";
  const route = `${logConfig.output}/`;
  const labels = isEnglish
    ? { symptom: "Symptom", cause: "Root cause", lesson: "Lesson" }
    : { symptom: "问题", cause: "根因", lesson: "结论" };
  const timeline = items.map((item) => {
    const projectSlug = String(item.meta.projectSlug || "");
    if (!projectSlug) throw new Error(`Log projectSlug missing: ${item.meta.title}`);
    const searchText = [item.meta.title, item.meta.description, plainText(item.body)].join(" ").toLowerCase();
    const project = logField(item, isEnglish ? "Project" : "项目");
    const symptom = logField(item, isEnglish ? "Symptom" : "问题现象") || item.meta.description;
    const cause = logField(item, isEnglish ? "Root cause" : "最终原因");
    const lesson = logField(item, isEnglish ? "Lesson" : "经验总结");
    return `<article class="timeline-item" id="${escapeHtml(item.meta.slug)}" data-search="${escapeHtml(searchText)}"><time datetime="${escapeHtml(item.meta.date)}">${escapeHtml(item.meta.date)}</time><div><h2>${escapeHtml(item.meta.title)}</h2><p class="log-project">${escapeHtml(project || item.meta.description)}</p><dl class="log-summary-list"><div><dt>${labels.symptom}</dt><dd>${escapeHtml(symptom)}</dd></div><div><dt>${labels.cause}</dt><dd>${escapeHtml(cause)}</dd></div><div><dt>${labels.lesson}</dt><dd>${escapeHtml(lesson)}</dd></div></dl><div class="log-links"><a class="text-link" href="${escapeHtml(item.meta.slug)}/index.html">${isEnglish ? "Read full review" : "阅读完整复盘"} <span aria-hidden="true">→</span></a><a class="text-link" href="../projects/${escapeHtml(projectSlug)}/index.html">${isEnglish ? "View project" : "查看项目档案"} <span aria-hidden="true">→</span></a></div></div></article>`;
  }).join("\n");
  const heroDescription = isEnglish
    ? `${items.length} public-project debugging records preserving the symptom, hypothesis, investigation, evidence-supported cause, fix and reusable lesson.`
    : `${items.length} 条公开项目调试记录，保留问题现象、初步判断、排查过程、证据支持的根因、解决方法与可复用经验。`;
  const controls = `<div class="content-controls compact-controls content-controls-search-only"><label class="search-box"><span>${isEnglish ? "Search lab logs" : "搜索日志"}</span><input type="search" enterkeyhint="search" data-content-search placeholder="${isEnglish ? "Enter a project, issue or keyword" : "输入项目、问题或关键词"}"></label><p class="result-status" data-result-status aria-live="polite"></p></div>`;
  const content = `
    <section class="page-hero compact-hero index-hero content-index-hero section-index-hero section-index-hero-search-only"><div class="container"><div class="section-index-heading"><h1>${isEnglish ? "Lab Notes and Bug Reviews" : "实验记录与 Bug 复盘"}</h1></div>${controls}</div></section>
    <section class="section container content-index-section"><div class="timeline">${timeline}</div><p class="empty-state" data-empty-state hidden>${isEnglish ? "No matching lab logs." : "暂时没有匹配的日志。"}</p></section>`;
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

const homepageUpdates = (recentItems, lastUpdated, locale) => {
  const isEnglish = locale === "en";
  const labels = isEnglish
    ? { projects: "Project", articles: "Blog", notes: "Note", logs: "Lab log" }
    : { projects: "项目", articles: "博客", notes: "笔记", logs: "日志" };
  const links = recentItems.map(({ section, item }) => {
    const output = section === "articles" ? "blog" : section === "logs" ? logConfig.output : section;
    const date = recordDateFor(item);
    return `<li><a href="${output}/${escapeHtml(item.meta.slug)}/index.html"><span class="recent-update-meta"><span class="record-type">${labels[section]}</span><time datetime="${escapeHtml(date)}">${escapeHtml(date)}</time></span><strong>${escapeHtml(item.meta.title)}</strong><span>${escapeHtml(item.meta.description)}</span></a></li>`;
  }).join("");
  return `<section class="section recent-updates" data-home-updates aria-labelledby="recent-updates-title">
      <div class="container">
        <div class="section-heading"><div><p class="eyebrow">${isEnglish ? "Latest records" : "最近记录"}</p><h2 id="recent-updates-title">${isEnglish ? "Recently updated" : "最近更新"}</h2></div><p>${isEnglish ? "Latest source-backed additions across projects, writing, notes and lab logs." : "按内容源中的真实日期汇总项目、文章、笔记与实验日志。"}<br>${isEnglish ? "Latest update: " : "最近一次更新："}<time data-site-updated datetime="${escapeHtml(lastUpdated)}">${escapeHtml(lastUpdated)}</time></p></div>
        <ol class="recent-update-list">${links}</ol>
      </div>
    </section>`;
};

const updateHomeStats = async (counts, lastUpdated, recentItems, locale) => {
  const homePath = path.join(root, localeConfig[locale].routeRoot, "index.html");
  let home = await readFile(homePath, "utf8");

  for (const [key, count] of Object.entries(counts)) {
    const pattern = new RegExp(`(<strong data-site-stat="${key}">)\\d+(</strong>)`, "g");
    if (pattern.test(home)) home = home.replace(pattern, `$1${count}$2`);
  }

  const updatesPattern = /<!-- HOME_UPDATES_START -->[\s\S]*?<!-- HOME_UPDATES_END -->/;
  if (!updatesPattern.test(home)) throw new Error("Homepage recent-updates markers missing");
  home = home.replace(updatesPattern, `<!-- HOME_UPDATES_START -->\n    ${homepageUpdates(recentItems, lastUpdated, locale)}\n    <!-- HOME_UPDATES_END -->`);

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

const searchEntryFor = (item, section, output, locale) => {
  const headings = [...String(item.body || "").matchAll(/^#{1,4}\s+(.+)$/gm)].map((match) => plainText(match[1])).join(" ");
  const excerpt = plainText(item.body || "").slice(0, 260);
  return {
    section,
    title: item.meta.title,
    description: item.meta.description,
    category: item.meta.category || "",
    tags: item.meta.tags || [],
    keywords: [headings, excerpt].filter(Boolean).join(" "),
    url: `/${localeConfig[locale].routeRoot}${output}/${item.meta.slug}/`
  };
};

const htmlText = (value = "") => String(value)
  .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
  .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/&nbsp;/g, " ")
  .replace(/&amp;/g, "&")
  .replace(/&quot;/g, '"')
  .replace(/&#(?:39|x27);/gi, "'")
  .replace(/&lt;/g, "<")
  .replace(/&gt;/g, ">")
  .replace(/\s+/g, " ")
  .trim();

const staticSearchEntries = async (locale) => {
  const routeRoot = localeConfig[locale].routeRoot;
  const toolboxHtml = await readFile(path.join(root, routeRoot, "toolbox/index.html"), "utf8");
  const resourcesHtml = await readFile(path.join(root, routeRoot, "resources/index.html"), "utf8");
  const entries = [];
  const toolPattern = /<article\b([^>]*\bclass="[^"]*\btool-card\b[^"]*"[^>]*)>([\s\S]*?)<\/article>/g;
  [...toolboxHtml.matchAll(toolPattern)].forEach((match, index) => {
    const id = match[1].match(/\bid="([^"]+)"/)?.[1] || `tool-${String(index + 1).padStart(2, "0")}`;
    const title = htmlText(match[2].match(/<h2\b[^>]*>([\s\S]*?)<\/h2>/i)?.[1] || "");
    const description = htmlText(match[2].match(/<\/h2>\s*<p\b[^>]*>([\s\S]*?)<\/p>/i)?.[1] || "");
    const eyebrow = htmlText(match[2].match(/<p\b[^>]*\bclass="[^"]*\beyebrow\b[^"]*"[^>]*>([\s\S]*?)<\/p>/i)?.[1] || "");
    const category = eyebrow.split("·").at(-1)?.trim() || (locale === "en" ? "Toolbox" : "工具箱");
    entries.push({ section: "toolbox", title, description, category, tags: [], keywords: htmlText(match[2]).slice(0, 520), url: `/${routeRoot}toolbox/#${id}` });
  });

  const resourcePattern = /<article\b([^>]*\bclass="[^"]*\bresource-group\b[^"]*"[^>]*)>([\s\S]*?)<\/article>/g;
  [...resourcesHtml.matchAll(resourcePattern)].forEach((match, index) => {
    const id = match[1].match(/\bid="([^"]+)"/)?.[1] || `resource-${String(index + 1).padStart(2, "0")}`;
    const title = htmlText(match[2].match(/<h2\b[^>]*>([\s\S]*?)<\/h2>/i)?.[1] || "");
    const links = [...match[2].matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/gi)].map((link) => htmlText(link[1])).filter(Boolean);
    entries.push({ section: "resources", title, description: links.join(" · "), category: locale === "en" ? "Resources" : "资源", tags: [], keywords: links.join(" "), url: `/${routeRoot}resources/#${id}` });
  });
  return entries;
};

const build = async () => {
  await loadNoteImageManifest();
  const authoredContent = await loadPairedContent();
  const authoredLogs = await loadPairedLogs();
  const publicRepositories = await fetchPublicRepositories();
  const privacyItems = {};
  for (const locale of Object.keys(localeConfig)) {
    privacyItems[locale] = await buildPrivacyPage(locale);
    await buildOfflinePage(locale);
  }
  const splitNotes = {
    zh: expandSplitNotes(authoredContent.zh.notes, "zh"),
    en: expandSplitNotes(authoredContent.en.notes, "en")
  };
  const chineseSplitSlugs = splitNotes.zh.map((item) => item.meta.slug);
  const englishSplitSlugs = splitNotes.en.map((item) => item.meta.slug);
  if (chineseSplitSlugs.join("\n") !== englishSplitSlugs.join("\n")) {
    throw new Error("Bilingual split-note slug mismatch");
  }
  const localeBuilds = {};

  for (const locale of Object.keys(localeConfig)) {
    const searchIndex = [];
    const sitemapEntries = [];
    const summaryItems = [];
    const sectionCounts = {};
    const contentDates = [privacyItems[locale].meta.updated || privacyItems[locale].meta.date || ""].filter(Boolean);
    const preparedSections = {};
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
      const detailItems = section === "notes" ? splitNotes[locale] : items;
      preparedSections[section] = { config, items, detailItems };
    }
    const catalog = {
      projects: preparedSections.projects.items,
      articles: preparedSections.articles.items,
      notes: preparedSections.notes.detailItems,
      logs: authoredLogs[locale]
    };

    for (const [section, { config, items, detailItems }] of Object.entries(preparedSections)) {
      await pruneOutputs(section, detailItems, locale);
      for (const [index, item] of detailItems.entries()) {
        await buildDetail(section, item, index, detailItems, catalog, locale);
        const searchEntry = searchEntryFor(item, section, config.output, locale);
        searchIndex.push(searchEntry);
        sitemapEntries.push({
          url: searchEntry.url.replace(/^\//, ""),
          lastmod: normalizeLastmod(item.meta.updated || item.meta.date)
        });
      }
      sectionCounts[section] = items.length;
      summaryItems.push(...items);
      contentDates.push(...items.map((item) => String(item.meta.updated || item.meta.date || "")).filter(Boolean));
      await buildIndex(section, items, locale);
    }
    await pruneLogOutputs(authoredLogs[locale], locale);
    for (const item of authoredLogs[locale]) {
      await buildLogDetail(item, catalog, locale);
      searchIndex.push(searchEntryFor(item, "logs", logConfig.output, locale));
      sitemapEntries.push({
        url: `${localeConfig[locale].routeRoot}${logConfig.output}/${item.meta.slug}/`,
        lastmod: normalizeLastmod(item.meta.updated || item.meta.date)
      });
    }
    await buildLabIndex(authoredLogs[locale], locale);
    contentDates.push(...authoredLogs[locale].map((item) => String(item.meta.updated || item.meta.date || "")).filter(Boolean));
    await buildRss(preparedSections.articles.items, locale);
    searchIndex.push(...await staticSearchEntries(locale));
    const searchFile = locale === "en" ? "search-index.en.json" : "search-index.json";
    await mkdir(path.join(root, "assets/data"), { recursive: true });
    await writeFile(path.join(root, "assets/data", searchFile), `${JSON.stringify(searchIndex)}\n`);
    const recentItems = [
      ...Object.entries(preparedSections).flatMap(([section, entry]) => entry.items.map((item) => ({ section, item }))),
      ...authoredLogs[locale].map((item) => ({ section: "logs", item }))
    ]
      .filter(({ item }) => recordDateFor(item))
      .sort((left, right) => normalizeLastmod(recordDateFor(right.item)).localeCompare(normalizeLastmod(recordDateFor(left.item))) || String(left.item.meta.title).localeCompare(String(right.item.meta.title), locale === "en" ? "en-US" : "zh-CN"))
      .slice(0, 6);
    localeBuilds[locale] = { searchIndex, sitemapEntries, summaryItems, sectionCounts, contentDates, recentItems, logCount: authoredLogs[locale].length };
  }

  const toolbox = await readFile(path.join(root, "toolbox/index.html"), "utf8");
  const toolCount = (toolbox.match(/<article\b[^>]*\bclass="[^"]*\btool-card\b[^"]*"/g) || []).length;
  const chineseBuild = localeBuilds.zh;
  const topicCount = (terms) => chineseBuild.summaryItems.filter((item) => {
    const text = [item.meta.title, item.meta.description, item.meta.category, ...(item.meta.tags || [])].join(" ").toLowerCase();
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
  const lastUpdated = chineseBuild.contentDates.map((date) => normalizeLastmod(date)).sort().at(-1) || "暂无更新";
  await updateHomeStats(homeStats, lastUpdated, localeBuilds.zh.recentItems, "zh");
  await updateHomeStats(homeStats, lastUpdated, localeBuilds.en.recentItems, "en");

  const staticUrls = ["", "about/", "resume/", "projects/", "blog/", "notes/", "toolbox/", "resources/", "lab/", "contact/", "wechat/", "privacy/"];
  const englishStaticUrls = staticUrls.map((url) => `en/${url}`);
  const sitemapByUrl = new Map([...staticUrls, ...englishStaticUrls].map((url) => [url, lastUpdated]));
  for (const { sitemapEntries } of Object.values(localeBuilds)) {
    for (const entry of sitemapEntries) sitemapByUrl.set(entry.url, entry.lastmod);
  }
  const urls = [...sitemapByUrl.keys()];
  for (const url of urls) {
    const htmlPath = url ? path.join(root, url, "index.html") : path.join(root, "index.html");
    const html = ensurePageMetadata(await readFile(htmlPath, "utf8"), url);
    await writeFile(htmlPath, html);
  }
  for (const url of ["404.html", "en/404.html"]) {
    const htmlPath = path.join(root, url);
    const html = ensureEarlyCharset(ensureDeferredAnalytics(ensureSharedPageShell(await readFile(htmlPath, "utf8"), url)));
    await writeFile(htmlPath, html);
  }
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...sitemapByUrl].map(([url, lastmod]) => `  <url><loc>${siteUrl}/${url}</loc><lastmod>${lastmod}</lastmod></url>`).join("\n")}\n</urlset>\n`;
  await writeFile(path.join(root, "sitemap.xml"), sitemap);
  console.log(`Built ${Object.values(localeBuilds).reduce((total, item) => total + item.searchIndex.length, 0)} bilingual search entries and ${authoredLogs.zh.length} bilingual log entries.`);
};

await build();
