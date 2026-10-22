import { createHash } from "node:crypto";
import { execFile } from "node:child_process";
import { createReadStream } from "node:fs";
import { copyFile, mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import { headingAnchorFor408 } from "./render-408.mjs";

const run = promisify(execFile);
const siteRoot = process.cwd();
const libraryRoot = path.resolve(process.argv[2] || "");
if (!process.argv[2]) throw new Error("Usage: node scripts/import-408.mjs <408笔记库 directory> [--check]");
const checkOnly = process.argv.includes("--check");
const contentOnly = process.argv.includes("--content-only");
const originalRoot = path.join(libraryRoot, "408笔记库");
const rewriteRoot = path.join(libraryRoot, "408重写笔记");
const assetRoot = path.join(siteRoot, "assets/408");
const collator = new Intl.Collator("zh-CN", { numeric: true });
const byName = (left, right) => collator.compare(left, right);
const slash = (value) => value.replaceAll("\\", "/");
const digest = (value) => createHash("sha256").update(value).digest("hex").slice(0, 12);
const fileHash = async (file) => {
  const hash = createHash("sha256");
  for await (const chunk of createReadStream(file)) hash.update(chunk);
  return hash.digest("hex");
};
const canonical = (value) => slash(value).normalize("NFKC")
  .replace(/\((?:原始知识图|Excalidraw 原始源)\)/g, "")
  .replace(/\s+/g, "");
const cleanMeta = (value) => String(value || "").replace(/[\r\n]/g, " ").trim().replace(/^["']|["']$/g, "");
const markdownLinkText = (value) => value.replaceAll("[", "\\[").replaceAll("]", "\\]");

const walk = async (directory, base = directory) => {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full, base));
    else if (entry.isFile()) files.push(slash(path.relative(base, full)));
  }
  return files.sort(byName);
};

const parseSource = (source, relative) => {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw new Error(`Missing source front matter: ${relative}`);
  const meta = {};
  for (const line of match[1].split(/\r?\n/)) {
    const pair = line.match(/^([\w-]+):\s*(.*)$/);
    if (pair) meta[pair[1]] = cleanMeta(pair[2]);
  }
  if (!meta.title) throw new Error(`Missing title: ${relative}`);
  let body = match[2].trim();
  const opening = body.match(/^#\s+([^\r\n]+)\r?\n/);
  if (opening && opening[1].trim() === meta.title) body = body.slice(opening[0].length).trimStart();
  return { relative, meta, body };
};

const courseNames = {
  "01_数据结构": ["数据结构", "Data Structures"],
  "02_操作系统": ["操作系统", "Operating Systems"],
  "03_计算机组成原理": ["计算机组成原理", "Computer Organization"],
  "04_计算机网络": ["计算机网络", "Computer Networks"],
  "05_复试常考科目": ["复试扩展", "Interview Subjects"]
};
const chapterNames = {
  绪论: "Introduction", 线性表: "Linear Lists", "栈、队列": "Stacks and Queues",
  串: "Strings", 树: "Trees", 图: "Graphs", 查找: "Searching", 排序: "Sorting",
  计算机系统概述: "Computer System Overview", 进程与线程: "Processes and Threads",
  内存管理: "Memory Management", 文件管理: "File Management", IO管理: "I/O Management",
  数据的表示和运算: "Data Representation and Arithmetic", 存储器层次结构: "Memory Hierarchy",
  指令系统: "Instruction Set", 中央处理器: "Central Processor", 总线: "Bus and I/O",
  计算机网络体系结构: "Network Architecture", 物理层: "Physical Layer",
  数据链路层: "Data Link Layer", 网络层: "Network Layer", 运输层: "Transport Layer",
  应用层: "Application Layer", 机器学习: "Machine Learning", 深度学习: "Deep Learning",
  数据库: "Databases", 软件工程: "Software Engineering",
  顺序表: "Sequential Lists", 链表: "Linked Lists", "栈与队列": "Stacks and Queues",
  二叉树: "Binary Trees", 总结: "Summary", 重点算法汇总: "Key Algorithms"
};
const cleanFolder = (value) => value.replace(/^\d+(?:\.|_)\s*/, "").replace(/^第[一二三四五六七八九十]+章：/, "");
const chapterFor = (relative) => {
  const parts = relative.split("/");
  if (!courseNames[parts[0]]) {
    return parts[0] === "00_重写说明"
      ? ["总览与说明", "Overview and Records", "重写与复核记录", "Rewrite and Review Records"]
      : ["总览与说明", "Overview and Records", "知识图谱", "Knowledge Map"];
  }
  const [zhCourse, enCourse] = courseNames[parts[0]];
  if (parts[1]?.startsWith("00_")) return [zhCourse, enCourse, "科目导航", "Subject Guide"];
  if (parts[0] === "05_复试常考科目") {
    const chapter = cleanFolder(parts[1]);
    return [zhCourse, enCourse, chapter, chapterNames[chapter] || chapter];
  }
  const code = parts[1] === "2. 代码";
  const folder = code ? parts[2] : parts[1] === "1. 知识" ? parts[2] : parts[1];
  const chapter = cleanFolder(folder || "");
  const number = folder?.match(/^(\d+)\./)?.[1];
  const topic = chapterNames[chapter] || chapter;
  const qualifier = parts.includes("题型") ? [" · 题型", " · Problems"]
    : parts.includes("知识") ? [" · 知识", " · Concepts"] : ["", ""];
  if (code) return [zhCourse, enCourse, `代码 · ${chapter}`, `Code · ${topic}`];
  return [zhCourse, enCourse,
    `${number ? `第${number}章 · ` : ""}${chapter}${qualifier[0]}`,
    `${number ? `Chapter ${number} · ` : ""}${topic}${qualifier[1]}`];
};

const allMarkdownFiles = (await walk(rewriteRoot)).filter((file) => file.endsWith(".md"));
const rewrittenFiles = allMarkdownFiles.filter((file) => !file.endsWith("（Excalidraw 原始源）.md"));
const originals = (await walk(originalRoot)).filter((file) => /\.(?:pdf|png|md)$/i.test(file));
const images = (await walk(rewriteRoot)).filter((file) => file.toLowerCase().endsWith(".png"));
if (allMarkdownFiles.length !== 162 || rewrittenFiles.length !== 161 || originals.length !== 150 || images.length !== 153) {
  throw new Error(`Source count changed: ${allMarkdownFiles.length} Markdown, ${originals.length} originals, ${images.length} images`);
}
const originalByKey = new Map();
for (const relative of originals) {
  const key = canonical(relative);
  if (originalByKey.has(key)) throw new Error(`Duplicate original: ${relative}`);
  originalByKey.set(key, relative);
}
const imageByName = new Map();
const imageByKey = new Map();
for (const relative of images) {
  const name = path.posix.basename(relative);
  if (imageByName.has(name)) throw new Error(`Duplicate image basename: ${name}`);
  const web = `/assets/408/images/${digest(relative)}.png`;
  imageByName.set(name, { relative, web });
  imageByKey.set(canonical(relative), { relative, web });
}
const notes = await Promise.all(rewrittenFiles.map(async (relative) => parseSource(await readFile(path.join(rewriteRoot, relative), "utf8"), relative)));
const noteByPath = new Map();
const noteByName = new Map();
for (const [index, note] of notes.entries()) {
  note.slug = `cs408-${digest(note.relative)}`;
  note.order = index + 1;
  const key = canonical(note.relative.replace(/\.md$/i, ""));
  noteByPath.set(key, note);
  const name = canonical(path.posix.basename(note.relative, ".md"));
  if (!noteByName.has(name)) noteByName.set(name, []);
  noteByName.get(name).push(note);
}

const sourceLinks = new Map();
for (const relative of originals) {
  if (relative.endsWith(".png")) {
    const image = imageByKey.get(canonical(relative));
    if (!image) throw new Error(`Original image not found among rewritten attachments: ${relative}`);
    sourceLinks.set(relative, image.web);
  } else {
    sourceLinks.set(relative, `/assets/408/originals/${digest(relative)}${path.posix.extname(relative).toLowerCase()}`);
  }
}

const resolveWiki = (raw, note, locale) => {
  const [target, ...alias] = raw.replaceAll("\\|", "|").split("|");
  const label = alias.join("|") && !/^\d+$/.test(alias.join("|"))
    ? alias.join("|")
    : path.posix.basename(target.replaceAll("\\", "/"));
  const [targetPath, anchor] = target.split("#", 2);
  if (targetPath.endsWith(".png")) {
    const image = imageByName.get(path.posix.basename(targetPath));
    if (!image) throw new Error(`Missing image ${target} in ${note.relative}`);
    return { href: image.web, label };
  }
  if (targetPath.endsWith(".csv")) return { href: "/assets/408/pdf-rewrite-index.csv", label };
  if (targetPath.endsWith("（Excalidraw 原始源）.md")) {
    const source = originals.find((file) => file.endsWith(".md") && canonical(path.posix.basename(file)) === canonical(path.posix.basename(targetPath)));
    if (!source) throw new Error(`Missing Excalidraw source ${target} in ${note.relative}`);
    return { href: sourceLinks.get(source), label };
  }
  const candidate = targetPath.replace(/^408重写笔记\//, "").replace(/\.md$/i, "");
  const key = canonical(candidate || note.relative.replace(/\.md$/i, ""));
  const destination = noteByPath.get(key) || (noteByName.get(canonical(path.posix.basename(candidate))) || [])[0];
  if (!destination) throw new Error(`Unresolved wiki link ${target} in ${note.relative}`);
  const matchingNames = noteByName.get(canonical(path.posix.basename(candidate))) || [];
  if (!noteByPath.has(key) && matchingNames.length !== 1) throw new Error(`Ambiguous wiki link ${target} in ${note.relative}`);
  const fragment = anchor ? headingAnchorFor408(destination.body, anchor) : "";
  if (anchor && !fragment) throw new Error(`Unresolved heading ${anchor} in ${destination.relative}`);
  return { href: `/${locale === "en" ? "en/" : ""}notes/${destination.slug}/${fragment ? `#${fragment}` : ""}`, label };
};

const convertBody = (note, locale) => {
  let code = false;
  return note.body.split(/\r?\n/).map((line) => {
    if (/^\s*```/.test(line)) {
      code = !code;
      return line;
    }
    if (code) return line;
    const normalized = line
      .replace(/<font\s+color=["']#[0-9a-f]{3,8}["']>/gi, "")
      .replace(/<\/font>/gi, "")
      .replace(/^(\s*>\s*)\[!([a-z]+)\][-+]?\s*(.*)$/i, (_, prefix, type, content) => `${prefix}**${type.toUpperCase()}**${content ? ` · ${content}` : ""}`);
    let result = "";
    let inlineCode = false;
    for (let index = 0; index < normalized.length;) {
      if (normalized[index] === "`") {
        inlineCode = !inlineCode;
        result += normalized[index++];
        continue;
      }
      const embedded = !inlineCode && normalized.startsWith("![[", index);
      const linked = !inlineCode && normalized.startsWith("[[", index);
      if (embedded || linked) {
        const start = index + (embedded ? 3 : 2);
        const end = normalized.indexOf("]]", start);
        if (end !== -1) {
          const raw = normalized.slice(start, end);
          const { href, label } = resolveWiki(raw, note, locale);
          result += embedded
            ? href.endsWith(".png")
              ? `![${markdownLinkText(label)}](${href})`
              : `[${locale === "en" ? "Download original Excalidraw canvas" : "下载原始 Excalidraw 画布"}](${href})`
            : `[${markdownLinkText(label)}](${href})`;
          index = end + 2;
          continue;
        }
      }
      result += normalized[index++];
    }
    return result;
  }).join("\n");
};

const output = [];
const referencedSources = new Set();
for (const note of notes) {
  const sourcePath = note.meta.source && originalByKey.get(canonical(note.meta.source));
  if (note.meta.source && !sourcePath) throw new Error(`Missing original source ${note.meta.source} in ${note.relative}`);
  if (sourcePath) referencedSources.add(sourcePath);
  const sourceAsset = sourcePath ? sourceLinks.get(sourcePath) : "";
  const [zhCourse, enCourse, zhChapter, enChapter] = chapterFor(note.relative);
  for (const locale of ["zh", "en"]) {
    const english = locale === "en";
    const description = english
      ? `Chinese-language Computer Science 408 note: ${note.meta.title}. Original source available where applicable.`
      : `408 学习笔记：${note.meta.title}。保留原有知识内容、公式与图示；有对应原件时提供查看和下载入口。`;
    const metadata = [
      "---", `title: ${note.meta.title}`, `slug: ${note.slug}`, `description: ${description}`,
      `category: ${english ? "Computer Science 408" : "408 计算机"}`,
      `noteMajor: ${english ? "Computer Science 408" : "408 计算机"}`,
      `noteCourse: ${english ? enCourse : zhCourse}`,
      `noteChapter: ${english ? enChapter : zhChapter}`,
      `order: ${note.order}`, "contentFormat: obsidian408",
      ...(english ? ["contentLanguage: zh-CN"] : []),
      ...(note.meta.date ? [`date: ${note.meta.date}`] : []),
      `tags: [408, ${english ? enCourse : zhCourse}]`,
      ...(note.meta.supplement === "true" ? ["supplement: true"] : []),
      ...(sourceAsset ? [`sourceAsset: ${sourceAsset}`, `sourceName: ${path.posix.basename(sourcePath)}`, `sourceOriginal: ${sourcePath}`] : []),
      "---", ""
    ];
    const directory = english ? "content/en/notes" : "content/notes";
    output.push({ file: path.join(siteRoot, directory, `${note.slug}.md`), content: `${metadata.join("\n")}\n${convertBody(note, locale)}\n` });
  }
}
if (referencedSources.size !== originals.length) {
  throw new Error(`Unreferenced original files: ${originals.filter((file) => !referencedSources.has(file)).join(", ")}`);
}
for (const relative of originals.filter((file) => file.endsWith(".png"))) {
  const rewritten = imageByKey.get(canonical(relative));
  if (await fileHash(path.join(originalRoot, relative)) !== await fileHash(path.join(rewriteRoot, rewritten.relative))) {
    throw new Error(`Original and rewritten image bytes differ: ${relative}`);
  }
}
console.log(`Validated ${notes.length} rewritten notes, ${originals.length} originals, ${images.length} images, ${referencedSources.size} source links.`);
if (checkOnly) process.exit(0);
if (contentOnly) {
  for (const item of output) await writeFile(item.file, item.content, "utf8");
  console.log(`Updated ${output.length} bilingual Markdown files without recopying assets.`);
  process.exit(0);
}

for (const directory of ["images", "originals", "previews"]) await mkdir(path.join(assetRoot, directory), { recursive: true });
for (const [index, relative] of images.entries()) {
  const target = path.join(siteRoot, imageByName.get(path.posix.basename(relative)).web.slice(1));
  await copyFile(path.join(rewriteRoot, relative), target);
  if ((index + 1) % 50 === 0) console.log(`Copied ${index + 1}/${images.length} images.`);
}
for (const [index, relative] of originals.entries()) {
  if (relative.endsWith(".png")) continue;
  await copyFile(path.join(originalRoot, relative), path.join(siteRoot, sourceLinks.get(relative).slice(1)));
  if ((index + 1) % 25 === 0) console.log(`Copied ${index + 1}/${originals.length} original files.`);
}
await copyFile(path.join(rewriteRoot, "_PDF重写清单.csv"), path.join(assetRoot, "pdf-rewrite-index.csv"));
for (const relative of images) {
  const original = path.join(rewriteRoot, relative);
  if ((await stat(original)).size < 1_000_000) continue;
  const preview = path.join(assetRoot, "previews", `${digest(relative)}.webp`);
  await run("magick", [original, "-auto-orient", "-resize", "1800x1800>", "-strip", "-quality", "85", "-define", "webp:method=6", preview], { windowsHide: true });
  console.log(`Created preview for ${path.posix.basename(relative)}.`);
}
for (const item of output) await writeFile(item.file, item.content, "utf8");
console.log(`Wrote ${output.length} bilingual Markdown files.`);
