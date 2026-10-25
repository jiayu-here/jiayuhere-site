import assert from "node:assert/strict";
import test from "node:test";
import { conceptTagsFor408, render408Markdown } from "./render-408.mjs";

test("collapsed Obsidian callout keeps its content and closed state", () => {
  const body = "> [!note]- 原始知识网（点击展开）\n> [下载原件](/source.md)\n";
  const html = render408Markdown(body).html;
  assert.match(html, /<details class="note-callout"><summary>原始知识网（点击展开）<\/summary>/);
  assert.match(html, /<a href="\/source\.md">下载原件<\/a>/);
  assert.doesNotMatch(html, /\[!note\]/);
});

test("concept tags link to the correct language index without touching code or links", () => {
  const body = "### 定义：#算法 #时间复杂度\n\n`#代码` [#已有链接](/existing) 控存地址 #13\n\n```text\n#代码块\n```\n";
  const zh = render408Markdown(body, "zh").html;
  const en = render408Markdown(body, "en").html;
  assert.match(zh, /href="\/notes\/\?tag=%23%E7%AE%97%E6%B3%95"/);
  assert.match(en, /href="\/en\/notes\/\?tag=%23%E7%AE%97%E6%B3%95"/);
  assert.match(zh, /<a href="\/existing">#已有链接<\/a>/);
  assert.doesNotMatch(zh, /tag=%2313/);
  assert.deepEqual(conceptTagsFor408(body), ["#算法", "#时间复杂度"]);
});
