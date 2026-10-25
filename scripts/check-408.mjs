import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const list = async (directory, suffix) => (await readdir(path.join(root, directory))).filter((name) => name.endsWith(suffix));
const exists = async (url) => {
  const target = path.join(root, url.replace(/^\//, ""));
  const info = await stat(target);
  assert(info.isFile() && info.size > 0, `Empty or missing asset: ${url}`);
};
const fileHash = async (file) => {
  const hash = createHash("sha256");
  for await (const chunk of createReadStream(file)) hash.update(chunk);
  return hash.digest("hex");
};
const zh = (await list("content/notes", ".md")).filter((name) => name.startsWith("cs408-"));
const en = (await list("content/en/notes", ".md")).filter((name) => name.startsWith("cs408-"));
assert.equal(zh.length, 161, "Chinese note count");
assert.deepEqual(en, zh, "Bilingual pairs");
assert.equal((await list("assets/408/originals", ".pdf")).length, 146, "Original PDF count");
assert.equal((await list("assets/408/images", ".png")).length, 153, "Image count");

let originalLinks = 0;
let tables = 0;
let diagrams = 0;
let links = 0;
let identicalSources = 0;
let collapsedCallouts = 0;
const libraryRoot = process.argv[2] ? path.resolve(process.argv[2]) : "";
for (const file of zh) {
  const slug = file.slice(0, -3);
  const zhSource = await readFile(path.join(root, "content/notes", file), "utf8");
  const enSource = await readFile(path.join(root, "content/en/notes", file), "utf8");
  const zhHtml = await readFile(path.join(root, "notes", slug, "index.html"), "utf8");
  const enHtml = await readFile(path.join(root, "en/notes", slug, "index.html"), "utf8");
  assert(zhSource.includes(`slug: ${slug}`) && enSource.includes(`slug: ${slug}`), `Slug mismatch: ${file}`);
  assert(enHtml.includes("note-language-notice") && enHtml.includes('lang="zh-CN"'), `Missing Chinese-language notice: ${file}`);
  assert(!zhHtml.includes("�") && !enHtml.includes("�"), `Replacement character: ${file}`);
  const callouts = [...zhSource.matchAll(/^> \[![a-z]+\][-+] /gm)].length;
  if (callouts) {
    collapsedCallouts += callouts;
    assert.equal((zhHtml.match(/<details class="note-callout"/g) || []).length, callouts, `Chinese callouts missing: ${file}`);
    assert.equal((enHtml.match(/<details class="note-callout"/g) || []).length, callouts, `English callouts missing: ${file}`);
  }
  const sourceAsset = zhSource.match(/^sourceAsset: (\/assets\/408\/[^\r\n]+)/m)?.[1];
  const sourcePreview = zhSource.match(/^sourcePreview: (\/assets\/408\/[^\r\n]+)/m)?.[1];
  if (sourcePreview) {
    assert(enSource.includes(`sourcePreview: ${sourcePreview}`), `Canvas preview differs between languages: ${file}`);
    assert(zhHtml.includes(`src="${sourcePreview}"`) && enHtml.includes(`src="${sourcePreview}"`), `Canvas preview absent: ${file}`);
    await exists(sourcePreview);
  }
  if (sourceAsset) {
    originalLinks += 1;
    assert(enSource.includes(`sourceAsset: ${sourceAsset}`), `Source differs between languages: ${file}`);
    assert(zhHtml.includes(`href="${sourceAsset}"`) && enHtml.includes(`href="${sourceAsset}"`), `Source link absent: ${file}`);
    await exists(sourceAsset);
    if (libraryRoot) {
      const originalPath = zhSource.match(/^sourceOriginal: ([^\r\n]+)/m)?.[1];
      assert(originalPath, `Missing source path: ${file}`);
      const sourceFile = path.join(libraryRoot, "408笔记库", originalPath);
      const publishedFile = path.join(root, sourceAsset.slice(1));
      assert.equal(await fileHash(publishedFile), await fileHash(sourceFile), `Source bytes changed: ${file}`);
      identicalSources += 1;
    }
  }
  const hasTable = /^\|.+\|\s*$/m.test(zhSource);
  if (hasTable) {
    tables += 1;
    assert(zhHtml.includes('<div class="note-table-scroll"><table>') && enHtml.includes('<div class="note-table-scroll"><table>'), `Table not rendered: ${file}`);
  }
  const hasDiagram = /^```mermaid\s*$/m.test(zhSource);
  if (hasDiagram) {
    diagrams += 1;
    assert(zhHtml.includes('<pre class="mermaid">') && enHtml.includes('<pre class="mermaid">'), `Mermaid not rendered: ${file}`);
  }
  for (const html of [zhHtml, enHtml]) {
    for (const match of html.matchAll(/(?:href|src|srcset)="(\/(?:assets\/408\/|(?:en\/)?notes\/cs408-)[^"\s]+)"/g)) {
      const [url, fragment] = match[1].split("#", 2);
      const target = path.join(root, url.slice(1));
      const filePath = url.includes("/notes/cs408-") ? path.join(target, "index.html") : target;
      const info = await stat(filePath);
      assert(info.isFile() && info.size > 0, `Broken link: ${match[1]} in ${file}`);
      if (fragment) assert((await readFile(filePath, "utf8")).includes(`id="${fragment}"`), `Broken heading link: ${match[1]} in ${file}`);
      links += 1;
    }
  }
}
assert.equal(originalLinks, 150, "Original source link count");
assert.equal(collapsedCallouts, 8, "Collapsed Obsidian callout count");
const canvasSvg = await readFile(path.join(root, "assets/408/diagrams/network-layer.svg"), "utf8");
assert(!canvasSvg.includes("NaN") && !canvasSvg.includes("https://"), "Canvas SVG must be self-contained and use valid coordinates");
assert.equal((canvasSvg.match(/<text /g) || []).length, 27, "Canvas text element count");
console.log(`408 audit passed: ${zh.length} bilingual notes, ${originalLinks} source links, ${tables} tables, ${diagrams} diagram notes, ${links} checked local links.`);
if (libraryRoot) console.log(`Verified ${identicalSources} published originals are byte-identical to the iCloud library.`);
