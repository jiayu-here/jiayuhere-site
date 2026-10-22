import MarkdownIt from "markdown-it";

const markdown = new MarkdownIt({ html: false, linkify: true });
const escape = markdown.utils.escapeHtml;
const originalFence = markdown.renderer.rules.fence;
markdown.renderer.rules.table_open = () => '<div class="note-table-scroll"><table>\n';
markdown.renderer.rules.table_close = () => '</table></div>\n';

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

export const headingAnchorFor408 = (body, title) => {
  const target = normalizedHeading(title);
  const headings = headingsIn(markdown.parse(body, {}));
  return headings.find((heading) => normalizedHeading(heading.text) === target)?.id || "";
};

export const render408Markdown = (body, locale = "zh") => {
  const tokens = markdown.parse(body, {});
  const headings = headingsIn(tokens);
  return { html: markdown.renderer.render(tokens, markdown.options, { locale }), headings };
};
