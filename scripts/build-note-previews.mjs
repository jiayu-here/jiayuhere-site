import { execFile } from "node:child_process";
import { mkdir, readdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";

const run = promisify(execFile);
const root = process.cwd();
const sourceDir = path.join(root, "assets/notes");
const outputDir = path.join(root, "assets/note-previews");
const files = (await readdir(sourceDir)).filter((file) => file.toLowerCase().endsWith(".png")).sort();
await mkdir(outputDir, { recursive: true });

try {
  await run("magick", ["-version"], { windowsHide: true });
} catch {
  throw new Error("ImageMagick is required to generate note previews. Install it and ensure `magick` is available.");
}

let created = 0;
let skipped = 0;
let discarded = 0;
let cursor = 0;

const worker = async () => {
  while (cursor < files.length) {
    const file = files[cursor++];
    const source = path.join(sourceDir, file);
    const target = path.join(outputDir, file.replace(/\.png$/i, ".webp"));
    const sourceStat = await stat(source);
    const targetStat = await stat(target).catch(() => null);
    if (targetStat && targetStat.mtimeMs >= sourceStat.mtimeMs) {
      skipped += 1;
      continue;
    }

    await run("magick", [
      source,
      "-auto-orient",
      "-resize", "1800x1800>",
      "-strip",
      "-quality", "88",
      "-define", "webp:method=6",
      target
    ], { windowsHide: true, maxBuffer: 1024 * 1024 });

    const previewStat = await stat(target);
    if (previewStat.size >= sourceStat.size) {
      await rm(target, { force: true });
      discarded += 1;
    } else {
      created += 1;
    }
  }
};

await Promise.all(Array.from({ length: 4 }, () => worker()));
console.log(`Note previews: ${created} created, ${skipped} unchanged, ${discarded} larger previews discarded.`);
