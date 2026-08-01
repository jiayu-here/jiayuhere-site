import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const buildSource = await readFile(path.join(root, "scripts/build-content.mjs"), "utf8");
const serviceWorker = await readFile(path.join(root, "sw.js"), "utf8");
const manifest = JSON.parse(await readFile(path.join(root, "site.webmanifest"), "utf8"));
const assetVersion = buildSource.match(/const assetVersion = "([^"]+)"/)?.[1];
const cacheVersion = serviceWorker.match(/const CACHE_NAME = "jiayuhere-([^"]+)"/)?.[1];

if (!assetVersion || cacheVersion !== assetVersion) {
  throw new Error(`Cache version mismatch: build=${assetVersion || "missing"}, service worker=${cacheVersion || "missing"}`);
}

for (const asset of ["/assets/styles.css", "/assets/script.js", "/favicon.ico"]) {
  if (!serviceWorker.includes(`"${asset}?v=${assetVersion}"`)) {
    throw new Error(`Service worker app shell is missing ${asset}?v=${assetVersion}`);
  }
}

for (const icon of manifest.icons || []) {
  if (!serviceWorker.includes(`"${icon.src}"`)) throw new Error(`Service worker app shell is missing ${icon.src}`);
  await access(path.join(root, icon.src.replace(/^\//, "")));
}

const htmlFiles = [];
const collectHtml = async (directory) => {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if ([".git", "node_modules", ".playwright-cli"].includes(entry.name)) continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) await collectHtml(fullPath);
    else if (entry.name.endsWith(".html")) htmlFiles.push(fullPath);
  }
};
await collectHtml(root);

const mismatches = [];
for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  for (const match of html.matchAll(/(?:assets\/(?:styles\.css|script\.js)|favicon\.ico)\?v=([^"'&]+)/g)) {
    if (match[1] !== assetVersion) mismatches.push(`${path.relative(root, file)} -> ${match[1]}`);
  }
}
if (mismatches.length) throw new Error(`Generated asset versions are stale:\n${mismatches.join("\n")}`);

console.log(`Cache version ${assetVersion} is consistent across ${htmlFiles.length} HTML files.`);
