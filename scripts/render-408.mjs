import MarkdownIt from "markdown-it";

const markdown = new MarkdownIt({ html: false, linkify: true });
const escape = markdown.utils.escapeHtml;
const originalFence = markdown.renderer.rules.fence;
const conceptPattern = /(?<![\p{L}\p{N}_/])#([\p{L}_][\p{L}\p{N}_/-]*)/gu;
markdown.renderer.rules.table_open = () => '<div class="note-table-scroll"><table>\n';
markdown.renderer.rules.table_close = () => '</table></div>\n';
markdown.renderer.rules.blockquote_open = (tokens, index) => {
  const callout = tokens[index].meta?.callout;
  return callout
    ? `<details class="note-callout"${callout.open ? " open" : ""}><summary>${escape(callout.title)}</summary>\n`
    : "<blockquote>\n";
};
markdown.renderer.rules.blockquote_close = (tokens, index) => tokens[index].meta?.callout ? "</details>\n" : "</blockquote>\n";

markdown.renderer.rules.text = (tokens, index, _options, environment) => {
  const value = tokens[index].content;
  let linkDepth = 0;
  for (let sibling = 0; sibling < index; sibling += 1) {
    if (tokens[sibling].type === "link_open") linkDepth += 1;
    if (tokens[sibling].type === "link_close") linkDepth -= 1;
  }
  if (linkDepth || !conceptPattern.test(value)) return escape(value);
  conceptPattern.lastIndex = 0;
  let result = "";
  let previous = 0;
  for (const match of value.matchAll(conceptPattern)) {
    result += escape(value.slice(previous, match.index));
    const tag = `#${match[1]}`;
    result += `<a class="note-concept-tag" href="/${environment.locale === "en" ? "en/" : ""}notes/?tag=${encodeURIComponent(tag)}">${escape(tag)}</a>`;
    previous = match.index + tag.length;
  }
  return result + escape(value.slice(previous));
};

markdown.renderer.rules.fence = (tokens, index, options, environment, self) => {
  const token = tokens[index];
  if (token.info.trim() === "mermaid") {
    return `<pre class="mermaid">${escape(token.content)}</pre>\n`;
  }
  return originalFence(tokens, index, options, environment, self);
};

markdown.renderer.rules.image = (tokens, index, _options, environment) => {
  const token = tokens[index];
  const src = token.attrGet("src") || "";
  const alt = token.content || "";
  const safeSrc = escape(src);
  const image = `<img class="note-image" src="${safeSrc}" alt="${escape(alt)}" loading="lazy" decoding="async">`;
  const preview = src.startsWith("/assets/408/images/")
    ? src.replace("/images/", "/previews/").replace(/\.png$/i, ".webp")
    : "";
  const picture = preview && largeImagePreviews.has(preview)
    ? `<picture><source srcset="${escape(preview)}" type="image/webp">${image}</picture>`
    : image;
  return src.startsWith("/assets/408/")
    ? `<a class="note-image-link" href="${safeSrc}" target="_blank" rel="noreferrer" aria-label="${environment.locale === "en" ? "Open original image" : "打开原图"}: ${escape(alt)}">${picture}</a>`
    : image;
};

let largeImagePreviews = new Set();

export const set408ImagePreviews = (previews) => {
  largeImagePreviews = new Set(previews);
};

const normalizedHeading = (value) => value
  .normalize("NFKC")
  .replace(/<[^>]+>/g, "")
  .replace(/[\*_`]/g, "")
  .replace(/\s+/g, " ")
  .trim();

const headingsIn = (tokens) => {
  const headings = [];
  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index];
    if (token.type !== "heading_open") continue;
    const text = tokens[index + 1]?.content || "";
    const id = `section-${headings.length + 1}`;
    token.attrSet("id", id);
    headings.push({ id, text, sourceLevel: Number(token.tag.slice(1)), level: Number(token.tag.slice(1)) });
  }
  return headings;
};

const prepareCallouts = (tokens) => {
  const stack = [];
  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index];
    if (token.type === "blockquote_open") {
      const inline = tokens[index + 2];
      const first = inline?.type === "inline" ? inline.children?.[0] : null;
      const match = first?.type === "text" && first.content.match(/^\[!([a-z]+)\]([-+])\s*(.*)$/i);
      const callout = match ? { open: match[2] === "+", title: match[3] || match[1].toUpperCase() } : null;
      stack.push(callout);
      if (callout) {
        token.meta = { callout };
        inline.children.shift();
        if (inline.children[0]?.type === "softbreak") inline.children.shift();
      }
    } else if (token.type === "blockquote_close") {
      const callout = stack.pop();
      if (callout) token.meta = { callout };
    }
  }
};

export const conceptTagsFor408 = (body) => {
  const tags = new Set();
  for (const token of markdown.parse(body, {})) {
    if (token.type !== "inline") continue;
    let inLink = false;
    for (const child of token.children || []) {
      if (child.type === "link_open") inLink = true;
      else if (child.type === "link_close") inLink = false;
      else if (child.type === "text" && !inLink) {
        for (const match of child.content.matchAll(conceptPattern)) tags.add(`#${match[1]}`);
      }
    }
  }
  return [...tags];
};

export const headingAnchorFor408 = (body, title) => {
  const target = normalizedHeading(title);
  const headings = headingsIn(markdown.parse(body, {}));
  return headings.find((heading) => normalizedHeading(heading.text) === target)?.id || "";
};

export const render408Markdown = (body, locale = "zh") => {
  const tokens = markdown.parse(body, {});
  prepareCallouts(tokens);
  const headings = headingsIn(tokens);
  return { html: markdown.renderer.render(tokens, markdown.options, { locale }), headings };
};
