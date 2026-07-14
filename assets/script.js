const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#siteNav");

const setNavOpen = (open) => {
  if (!navToggle || !siteNav) return;
  siteNav.classList.toggle("is-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "关闭导航" : "打开导航");
};

navToggle?.addEventListener("click", () => setNavOpen(!siteNav?.classList.contains("is-open")));
siteNav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) setNavOpen(false);
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setNavOpen(false);
    navToggle?.focus();
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 820) setNavOpen(false);
});

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const searchInput = document.querySelector("[data-content-search]");
const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const contentCards = Array.from(document.querySelectorAll("[data-content-card]"));
const resultStatus = document.querySelector("[data-result-status]");
const emptyState = document.querySelector("[data-empty-state]");
let activeFilter = "all";

const updateContentList = () => {
  if (!contentCards.length) return;
  const query = searchInput?.value.trim().toLowerCase() || "";
  let visibleCount = 0;

  contentCards.forEach((card) => {
    const matchesFilter = activeFilter === "all" || card.dataset.category === activeFilter;
    const matchesQuery = !query || (card.dataset.search || "").includes(query);
    const visible = matchesFilter && matchesQuery;
    card.classList.toggle("is-hidden", !visible);
    if (visible) visibleCount += 1;
  });

  if (resultStatus) resultStatus.textContent = `找到 ${visibleCount} 项内容。`;
  if (emptyState) emptyState.hidden = visibleCount > 0;
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter || "all";
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    updateContentList();
  });
});
searchInput?.addEventListener("input", updateContentList);
updateContentList();

const toNumber = (value) => {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
};

document.querySelector("[data-base-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const input = form.querySelector("[name='baseValue']");
  const sourceBase = Number(form.querySelector("[name='sourceBase']")?.value);
  const result = form.querySelector("[data-tool-result]");
  const rawValue = input?.value.trim() || "";
  const patterns = { 2: /^-?[01]+$/, 8: /^-?[0-7]+$/, 10: /^-?\d+$/, 16: /^-?[\da-f]+$/i };
  const decimal = patterns[sourceBase]?.test(rawValue) ? Number.parseInt(rawValue, sourceBase) : Number.NaN;
  if (!result) return;
  if (!Number.isFinite(decimal)) {
    result.textContent = "请输入与当前进制匹配的有效整数。";
    return;
  }
  result.textContent = `BIN  ${decimal.toString(2)}\nDEC  ${decimal}\nHEX  ${decimal.toString(16).toUpperCase()}\nOCT  ${decimal.toString(8)}`;
});

document.querySelector("[data-baud-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const clock = toNumber(form.querySelector("[name='clock']")?.value);
  const baud = toNumber(form.querySelector("[name='baud']")?.value);
  const result = form.querySelector("[data-tool-result]");
  if (!result) return;
  if (!clock || !baud || clock <= 0 || baud <= 0) {
    result.textContent = "请输入大于 0 的时钟频率和目标波特率。";
    return;
  }
  const divider = Math.max(1, Math.round(clock / baud));
  const actual = clock / divider;
  const error = ((actual - baud) / baud) * 100;
  result.textContent = `整数分频值  ${divider}\n实际波特率  ${actual.toFixed(2)} bps\n相对误差    ${error.toFixed(3)}%`;
});

document.querySelector("[data-divider-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const vin = toNumber(form.querySelector("[name='vin']")?.value);
  const r1 = toNumber(form.querySelector("[name='r1']")?.value);
  const r2 = toNumber(form.querySelector("[name='r2']")?.value);
  const result = form.querySelector("[data-tool-result]");
  if (!result) return;
  if (vin === null || !r1 || !r2 || r1 <= 0 || r2 <= 0) {
    result.textContent = "请输入有效的输入电压与正电阻值。";
    return;
  }
  const vout = vin * r2 / (r1 + r2);
  const current = vin / ((r1 + r2) * 1000) * 1000;
  result.textContent = `输出电压  ${vout.toFixed(4)} V\n回路电流  ${current.toFixed(4)} mA\n分压比例  ${(vout / vin * 100).toFixed(2)}%`;
});
