const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#siteNav");
const siteHeader = document.querySelector(".site-header");
const isEnglish = document.documentElement.lang.toLowerCase().startsWith("en");
const t = (chinese, english) => isEnglish ? english : chinese;

const setNavOpen = (open) => {
  if (!navToggle || !siteNav) return;
  siteNav.classList.toggle("is-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? t("关闭导航", "Close navigation") : t("打开导航", "Open navigation"));
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

const sectionLabels = isEnglish
  ? { projects: "Project", articles: "Article", notes: "Note" }
  : { projects: "项目", articles: "博客", notes: "笔记" };
const searchTrigger = document.createElement("button");
searchTrigger.type = "button";
searchTrigger.className = "nav-search";
searchTrigger.innerHTML = `
  <svg aria-hidden="true" viewBox="0 0 16 16"><path d="M11.5 10.5 15 14l-1 1-3.5-3.5a5.5 5.5 0 1 1 1-1ZM7.5 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"/></svg>
  <span class="nav-search-text">${t("搜索项目、文章和笔记", "Search projects, articles and notes")}</span>
  <kbd>Ctrl K</kbd>`;
searchTrigger.setAttribute("aria-label", t("打开全站搜索", "Open site search"));
searchTrigger.setAttribute("aria-haspopup", "dialog");
searchTrigger.setAttribute("aria-controls", "siteSearchDialog");

const searchDialog = document.createElement("div");
searchDialog.className = "search-overlay";
searchDialog.id = "siteSearchDialog";
searchDialog.hidden = true;
searchDialog.innerHTML = `
  <section class="search-dialog" role="dialog" aria-modal="true" aria-labelledby="siteSearchTitle">
    <div class="search-dialog-head">
      <div><p class="eyebrow">Site Search</p><h2 id="siteSearchTitle">${t("搜索全站内容", "Search the site")}</h2></div>
      <button class="search-close" type="button" aria-label="${t("关闭搜索", "Close search")}">×</button>
    </div>
    <label class="search-dialog-field"><span>${t("输入项目、文章、笔记或技术关键词", "Enter a project, article, note or technical keyword")}</span><input type="search" autocomplete="off" placeholder="${t("例如：FPGA、FreeRTOS、通信原理", "For example: FPGA, FreeRTOS, communication theory")}"></label>
    <p class="search-dialog-status" aria-live="polite">${t("输入关键词后开始搜索。", "Enter a keyword to search.")}</p>
    <div class="search-results"></div>
  </section>`;

siteHeader?.insertBefore(searchTrigger, navToggle || siteNav || null);
document.body.append(searchDialog);

const dialogInput = searchDialog.querySelector("input");
const dialogStatus = searchDialog.querySelector(".search-dialog-status");
const dialogResults = searchDialog.querySelector(".search-results");
let searchIndexPromise;

const loadSearchIndex = () => {
  searchIndexPromise ||= fetch(isEnglish ? "/assets/data/search-index.en.json" : "/assets/data/search-index.json")
    .then((response) => {
      if (!response.ok) throw new Error("Search index unavailable");
      return response.json();
    });
  return searchIndexPromise;
};

const renderSearchResults = async () => {
  if (!dialogInput || !dialogStatus || !dialogResults) return;
  const query = dialogInput.value.trim().toLowerCase();
  dialogResults.replaceChildren();
  if (!query) {
    dialogStatus.classList.remove("is-error");
    dialogStatus.textContent = t("输入关键词后开始搜索。", "Enter a keyword to search.");
    return;
  }

  dialogStatus.classList.remove("is-error");
  dialogStatus.textContent = t("正在搜索…", "Searching…");
  try {
    const index = await loadSearchIndex();
    const terms = query.split(/\s+/).filter(Boolean);
    const matches = index.filter((item) => {
      const haystack = [item.title, item.description, item.category, ...(item.tags || []), item.content || ""].join(" ").toLowerCase();
      return terms.every((term) => haystack.includes(term));
    });

    dialogStatus.textContent = matches.length ? t(`找到 ${matches.length} 项内容。`, `${matches.length} result${matches.length === 1 ? "" : "s"} found.`) : t("没有找到匹配内容，请换一个关键词。", "No matching content. Try another keyword.");
    matches.slice(0, 12).forEach((item) => {
      const link = document.createElement("a");
      link.className = "search-result";
      link.href = item.url;

      const meta = document.createElement("span");
      meta.className = "search-result-meta";
      meta.textContent = `${sectionLabels[item.section] || t("内容", "Content")} · ${item.category || t("未分类", "Uncategorized")}`;

      const title = document.createElement("strong");
      title.textContent = item.title;

      const description = document.createElement("span");
      description.textContent = item.description;
      link.append(meta, title, description);
      dialogResults.append(link);
    });
  } catch {
    dialogStatus.classList.add("is-error");
    dialogStatus.textContent = t("搜索内容暂时无法加载，请稍后重试。", "Search is temporarily unavailable. Please try again later.");
  }
};

document.querySelectorAll("img").forEach((image) => {
  const showFallback = () => {
    const fallback = document.createElement("span");
    fallback.className = "image-error";
    fallback.textContent = image.alt ? t(`图片暂时无法加载：${image.alt}`, `Image unavailable: ${image.alt}`) : t("图片暂时无法加载。", "Image unavailable.");
    (image.closest("picture") || image).replaceWith(fallback);
  };
  if (image.complete && image.naturalWidth === 0) showFallback();
  else image.addEventListener("error", showFallback, { once: true });
});

const openSearch = () => {
  setNavOpen(false);
  searchDialog.hidden = false;
  document.body.classList.add("search-open");
  dialogInput?.focus();
};

const closeSearch = () => {
  searchDialog.hidden = true;
  document.body.classList.remove("search-open");
  searchTrigger.focus();
};

searchTrigger.addEventListener("click", openSearch);
searchDialog.querySelector(".search-close")?.addEventListener("click", closeSearch);
searchDialog.addEventListener("click", (event) => {
  if (event.target === searchDialog) closeSearch();
});
dialogInput?.addEventListener("input", renderSearchResults);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !searchDialog.hidden) closeSearch();
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    openSearch();
  }
});

document.querySelectorAll(".prose pre").forEach((pre) => {
  const code = pre.querySelector("code");
  if (!code) return;
  const wrapper = document.createElement("div");
  wrapper.className = "code-block";
  const button = document.createElement("button");
  button.type = "button";
  button.className = "copy-code";
  button.textContent = t("复制代码", "Copy code");
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(code.textContent || "");
      button.textContent = t("已复制", "Copied");
      window.setTimeout(() => { button.textContent = t("复制代码", "Copy code"); }, 1600);
    } catch {
      button.textContent = t("复制失败", "Copy failed");
    }
  });
  const language = Array.from(code.classList).find((name) => name.startsWith("language-"))?.slice(9);
  if (language) {
    const label = document.createElement("span");
    label.className = "code-language";
    label.textContent = language.toUpperCase();
    wrapper.append(label);
  }
  pre.before(wrapper);
  wrapper.append(button, pre);
});

const backToTop = document.createElement("button");
backToTop.type = "button";
backToTop.className = "back-to-top";
backToTop.textContent = "↑";
backToTop.setAttribute("aria-label", t("返回页面顶部", "Back to top"));
backToTop.hidden = true;
document.body.append(backToTop);

const updateBackToTop = () => { backToTop.hidden = window.scrollY < 700; };
window.addEventListener("scroll", updateBackToTop, { passive: true });
backToTop.addEventListener("click", () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
});

const searchInput = document.querySelector("[data-content-search]");
const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const contentCards = searchInput
  ? Array.from(document.querySelectorAll("[data-content-card], .tool-grid > .tool-card, .resource-grid > .resource-group, .timeline > .timeline-item"))
  : Array.from(document.querySelectorAll("[data-content-card]"));
const resultStatus = document.querySelector("[data-result-status]");
const emptyState = document.querySelector("[data-empty-state]");
let activeFilter = "all";

const updateContentList = () => {
  if (!contentCards.length) return;
  const query = searchInput?.value.trim().toLowerCase() || "";
  let visibleCount = 0;

  contentCards.forEach((card) => {
    const matchesFilter = activeFilter === "all" || card.dataset.category === activeFilter;
    const searchableText = card.dataset.search || card.textContent?.toLowerCase() || "";
    const matchesQuery = !query || searchableText.includes(query);
    const visible = matchesFilter && matchesQuery;
    card.classList.toggle("is-hidden", !visible);
    if (visible) visibleCount += 1;
  });

  if (resultStatus) resultStatus.textContent = t(`找到 ${visibleCount} 项内容。`, `${visibleCount} item${visibleCount === 1 ? "" : "s"} shown.`);
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
    result.textContent = t("请输入与当前进制匹配的有效整数。", "Enter a valid integer for the selected base.");
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
    result.textContent = t("请输入大于 0 的时钟频率和目标波特率。", "Clock frequency and target baud rate must be greater than zero.");
    return;
  }
  const divider = Math.max(1, Math.round(clock / baud));
  const actual = clock / divider;
  const error = ((actual - baud) / baud) * 100;
  result.textContent = t(`整数分频值  ${divider}\n实际波特率  ${actual.toFixed(2)} bps\n相对误差    ${error.toFixed(3)}%`, `Integer divider  ${divider}\nActual baud rate ${actual.toFixed(2)} bps\nRelative error   ${error.toFixed(3)}%`);
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
    result.textContent = t("请输入有效的输入电压与正电阻值。", "Enter a valid input voltage and positive resistor values.");
    return;
  }
  const vout = vin * r2 / (r1 + r2);
  const current = vin / ((r1 + r2) * 1000) * 1000;
  result.textContent = t(`输出电压  ${vout.toFixed(4)} V\n回路电流  ${current.toFixed(4)} mA\n分压比例  ${(vout / vin * 100).toFixed(2)}%`, `Output voltage ${vout.toFixed(4)} V\nLoop current   ${current.toFixed(4)} mA\nDivider ratio  ${(vout / vin * 100).toFixed(2)}%`);
});

document.querySelector("[data-pwm-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const timerClock = toNumber(form.querySelector("[name='timerClock']")?.value);
  const prescaler = toNumber(form.querySelector("[name='prescaler']")?.value);
  const frequency = toNumber(form.querySelector("[name='pwmFrequency']")?.value);
  const duty = toNumber(form.querySelector("[name='dutyCycle']")?.value);
  const result = form.querySelector("[data-tool-result]");
  if (!result) return;
  if (!timerClock || !Number.isInteger(prescaler) || !frequency || duty === null || timerClock <= 0 || prescaler < 0 || frequency <= 0 || duty < 0 || duty > 100) {
    result.textContent = t("请输入有效参数：时钟和频率应大于 0，PSC 为非负整数，占空比为 0–100%。", "Enter valid parameters: clock and frequency above zero, a non-negative integer PSC, and duty cycle from 0 to 100%.");
    return;
  }
  const counterClock = timerClock / (prescaler + 1);
  const periodCounts = Math.round(counterClock / frequency);
  if (periodCounts < 1) {
    result.textContent = t("当前计数时钟低于目标 PWM 频率，请减小 PSC 或降低目标频率。", "The counter clock is below the target PWM frequency. Reduce PSC or lower the target frequency.");
    return;
  }
  const compare = Math.round(periodCounts * duty / 100);
  const actualFrequency = counterClock / periodCounts;
  const actualDuty = compare / periodCounts * 100;
  const highTimeUs = compare / counterClock * 1e6;
  result.textContent = t(`计数时钟       ${counterClock.toFixed(3)} Hz\n周期计数       ${periodCounts}\nARR            ${periodCounts - 1}\nCCR            ${compare}\n实际频率       ${actualFrequency.toFixed(6)} Hz\n实际占空比     ${actualDuty.toFixed(4)}%\n高电平时间     ${highTimeUs.toFixed(3)} μs`, `Counter clock   ${counterClock.toFixed(3)} Hz\nPeriod counts   ${periodCounts}\nARR             ${periodCounts - 1}\nCCR             ${compare}\nActual frequency ${actualFrequency.toFixed(6)} Hz\nActual duty      ${actualDuty.toFixed(4)}%\nHigh time        ${highTimeUs.toFixed(3)} μs`);
});

document.querySelector("[data-serial-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const baud = toNumber(form.querySelector("[name='serialBaud']")?.value);
  const dataBits = toNumber(form.querySelector("[name='dataBits']")?.value);
  const parity = form.querySelector("[name='parity']")?.value || "N";
  const stopBits = toNumber(form.querySelector("[name='stopBits']")?.value);
  const result = form.querySelector("[data-tool-result]");
  if (!result) return;
  if (!baud || !Number.isInteger(dataBits) || stopBits === null || baud <= 0 || dataBits < 5 || dataBits > 9 || ![1, 1.5, 2].includes(stopBits) || !["N", "E", "O"].includes(parity)) {
    result.textContent = t("请选择有效的数据位、校验位和停止位，并输入大于 0 的波特率。", "Choose valid data, parity and stop bits, and enter a baud rate greater than zero.");
    return;
  }
  const parityBits = parity === "N" ? 0 : 1;
  const frameBits = 1 + dataBits + parityBits + stopBits;
  const framesPerSecond = baud / frameBits;
  const payloadBytesPerSecond = framesPerSecond * dataBits / 8;
  const parityText = isEnglish ? { N: "no parity", E: "even parity", O: "odd parity" }[parity] : { N: "无校验", E: "偶校验", O: "奇校验" }[parity];
  result.textContent = t(`串口格式       ${dataBits}${parity}${stopBits}\n含义           ${dataBits} 数据位、${parityText}、${stopBits} 停止位\n单帧结构       1 起始 + ${dataBits} 数据 + ${parityBits} 校验 + ${stopBits} 停止\n每帧线路位数   ${frameBits}\n最大字符速率   ${framesPerSecond.toFixed(2)} 字符/s\n有效载荷       ${payloadBytesPerSecond.toFixed(2)} Byte/s\n线路效率       ${(dataBits / frameBits * 100).toFixed(2)}%`, `Serial format   ${dataBits}${parity}${stopBits}\nMeaning         ${dataBits} data bits, ${parityText}, ${stopBits} stop bits\nFrame structure 1 start + ${dataBits} data + ${parityBits} parity + ${stopBits} stop\nLine bits/frame ${frameBits}\nMax frame rate  ${framesPerSecond.toFixed(2)} frames/s\nPayload         ${payloadBytesPerSecond.toFixed(2)} Byte/s\nLine efficiency ${(dataBits / frameBits * 100).toFixed(2)}%`);
});

document.querySelector("[data-dds-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const clock = toNumber(form.querySelector("[name='ddsClock']")?.value);
  const frequency = toNumber(form.querySelector("[name='ddsFrequency']")?.value);
  const phaseBits = toNumber(form.querySelector("[name='phaseBits']")?.value);
  const result = form.querySelector("[data-tool-result]");
  if (!result) return;
  if (!clock || !frequency || !Number.isInteger(phaseBits) || clock <= 0 || frequency <= 0 || frequency >= clock / 2 || phaseBits < 4 || phaseBits > 52) {
    result.textContent = t("请输入有效参数：频率应大于 0 且低于系统时钟的一半，位宽为 4–52 的整数。", "Frequency must be above zero and below half the system clock; width must be an integer from 4 to 52.");
    return;
  }
  const phaseScale = 2 ** phaseBits;
  const tuningWord = Math.round(frequency * phaseScale / clock);
  const actualFrequency = tuningWord * clock / phaseScale;
  const errorHz = actualFrequency - frequency;
  const errorPpm = errorHz / frequency * 1e6;
  const hexWidth = Math.ceil(phaseBits / 4);
  result.textContent = t(`频率字 FTW       ${tuningWord} (0x${tuningWord.toString(16).toUpperCase().padStart(hexWidth, "0")})\n实际输出频率      ${actualFrequency.toFixed(6)} Hz\n频率分辨率        ${(clock / phaseScale).toExponential(6)} Hz\n频率误差          ${errorHz.toExponential(6)} Hz (${errorPpm.toFixed(3)} ppm)`, `Frequency word FTW ${tuningWord} (0x${tuningWord.toString(16).toUpperCase().padStart(hexWidth, "0")})\nActual frequency    ${actualFrequency.toFixed(6)} Hz\nResolution          ${(clock / phaseScale).toExponential(6)} Hz\nFrequency error     ${errorHz.toExponential(6)} Hz (${errorPpm.toFixed(3)} ppm)`);
});

document.querySelector("[data-uart-budget-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const baud = toNumber(form.querySelector("[name='uartBaud']")?.value);
  const frameBytes = toNumber(form.querySelector("[name='frameBytes']")?.value);
  const frameRate = toNumber(form.querySelector("[name='frameRate']")?.value);
  const bitsPerByte = toNumber(form.querySelector("[name='bitsPerByte']")?.value);
  const result = form.querySelector("[data-tool-result]");
  if (!result) return;
  if (!baud || !Number.isInteger(frameBytes) || !frameRate || !Number.isInteger(bitsPerByte) || baud <= 0 || frameBytes <= 0 || frameRate <= 0 || bitsPerByte <= 0) {
    result.textContent = t("请输入大于 0 的波特率、帧长、更新率和每字节线路位数。", "Baud rate, frame length, update rate and line bits per byte must be greater than zero.");
    return;
  }
  const frameBits = frameBytes * bitsPerByte;
  const requiredRate = frameBits * frameRate;
  const utilization = requiredRate / baud;
  const maxRate = baud / frameBits;
  const frameTime = frameBits / baud * 1000;
  const status = utilization <= 0.7 ? t("利用率留有余量", "healthy margin") : utilization <= 1 ? t("可发送，但链路余量较小", "feasible with little margin") : t("超出当前链路带宽", "exceeds link capacity");
  result.textContent = t(`单帧线路位数      ${frameBits} bit\n所需线路带宽      ${requiredRate.toFixed(2)} bps\n链路利用率        ${(utilization * 100).toFixed(2)}%（${status}）\n理论最大更新率    ${maxRate.toFixed(2)} Hz\n单帧发送时间      ${frameTime.toFixed(3)} ms`, `Line bits/frame   ${frameBits} bit\nRequired bandwidth ${requiredRate.toFixed(2)} bps\nLink utilization   ${(utilization * 100).toFixed(2)}% (${status})\nMaximum update rate ${maxRate.toFixed(2)} Hz\nFrame time          ${frameTime.toFixed(3)} ms`);
});

document.querySelector("[data-adc-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const vref = toNumber(form.querySelector("[name='vref']")?.value);
  const bits = toNumber(form.querySelector("[name='adcBits']")?.value);
  const input = toNumber(form.querySelector("[name='adcInput']")?.value);
  const result = form.querySelector("[data-tool-result]");
  if (!result) return;
  if (!vref || !Number.isInteger(bits) || input === null || vref <= 0 || input < 0 || input > vref || bits < 1 || bits > 24) {
    result.textContent = t("请输入有效参数：输入电压应位于 0 到参考电压之间，位数为 1–24 的整数。", "Input voltage must be between zero and Vref, and ADC width must be an integer from 1 to 24.");
    return;
  }
  const levels = 2 ** bits;
  const maxCode = levels - 1;
  const code = Math.round(input / vref * maxCode);
  const quantizedVoltage = code * vref / maxCode;
  const errorMv = (quantizedVoltage - input) * 1000;
  result.textContent = t(`理想 1 LSB        ${(vref / levels * 1000).toFixed(6)} mV\n量化码            ${code} / ${maxCode} (0x${code.toString(16).toUpperCase()})\n码值对应电压      ${quantizedVoltage.toFixed(6)} V\n量化误差          ${errorMv.toFixed(6)} mV`, `Ideal 1 LSB      ${(vref / levels * 1000).toFixed(6)} mV\nQuantized code    ${code} / ${maxCode} (0x${code.toString(16).toUpperCase()})\nCode voltage      ${quantizedVoltage.toFixed(6)} V\nQuantization error ${errorMv.toFixed(6)} mV`);
});

const erf = (value) => {
  const sign = value < 0 ? -1 : 1;
  const x = Math.abs(value);
  const t = 1 / (1 + 0.3275911 * x);
  const polynomial = (((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t);
  return sign * (1 - polynomial * Math.exp(-x * x));
};

document.querySelector("[data-snr-ber-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const modulation = form.querySelector("[name='modulation']")?.value || "qpsk";
  const ebn0Db = toNumber(form.querySelector("[name='ebn0']")?.value);
  const bitRate = toNumber(form.querySelector("[name='bitRate']")?.value);
  const noiseBandwidth = toNumber(form.querySelector("[name='noiseBandwidth']")?.value);
  const bitCount = toNumber(form.querySelector("[name='bitCount']")?.value);
  const result = form.querySelector("[data-tool-result]");
  if (!result) return;
  if (ebn0Db === null || !bitRate || !noiseBandwidth || !Number.isInteger(bitCount) || bitRate <= 0 || noiseBandwidth <= 0 || bitCount < 1 || bitCount > 1e12 || !["bpsk", "qpsk"].includes(modulation)) {
    result.textContent = t("请输入有效的 Eb/N0、比特率、噪声带宽和 1 到 10¹² 之间的整数统计比特数。", "Enter valid Eb/N0, bit rate, noise bandwidth and an integer bit count from 1 to 10¹².");
    return;
  }
  const ebn0Linear = 10 ** (ebn0Db / 10);
  const ber = 0.5 * (1 - erf(Math.sqrt(ebn0Linear)));
  const bitsPerSymbol = modulation === "qpsk" ? 2 : 1;
  const esn0Db = ebn0Db + 10 * Math.log10(bitsPerSymbol);
  const snrDb = ebn0Db + 10 * Math.log10(bitRate / noiseBandwidth);
  const expectedErrors = bitCount * ber;
  const anyErrorProbability = -Math.expm1(bitCount * Math.log1p(-ber));
  const model = modulation === "qpsk" ? "Gray QPSK" : "BPSK";
  result.textContent = t(`等效 SNR          ${snrDb.toFixed(3)} dB\nEs/N0             ${esn0Db.toFixed(3)} dB\n理论 BER          ${ber.toExponential(4)}\n预计误码数        ${expectedErrors.toFixed(3)} / ${bitCount}\n至少出现 1 个误码  ${(anyErrorProbability * 100).toFixed(4)}%\n模型              ${model}、相干解调、理想 AWGN`, `Equivalent SNR    ${snrDb.toFixed(3)} dB\nEs/N0             ${esn0Db.toFixed(3)} dB\nTheoretical BER   ${ber.toExponential(4)}\nExpected errors   ${expectedErrors.toFixed(3)} / ${bitCount}\nP(at least 1 error) ${(anyErrorProbability * 100).toFixed(4)}%\nModel             ${model}, coherent detection, ideal AWGN`);
});

const escapeToolHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const renderMarkdownInline = (value) => escapeToolHtml(value)
  .replace(/`([^`]+)`/g, "<code>$1</code>")
  .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
  .replace(/\*([^*]+)\*/g, "<em>$1</em>")
  .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');

const renderMarkdownPreview = (source) => {
  const html = [];
  let listType = "";
  let inCode = false;
  let codeLines = [];
  const closeList = () => {
    if (listType) html.push(`</${listType}>`);
    listType = "";
  };

  for (const line of String(source).split(/\r?\n/)) {
    if (line.startsWith("```")) {
      closeList();
      if (inCode) {
        html.push(`<pre><code>${escapeToolHtml(codeLines.join("\n"))}</code></pre>`);
        codeLines = [];
      }
      inCode = !inCode;
      continue;
    }
    if (inCode) {
      codeLines.push(line);
      continue;
    }
    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      closeList();
      const level = heading[1].length;
      html.push(`<h${level}>${renderMarkdownInline(heading[2])}</h${level}>`);
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
      html.push(`<li>${renderMarkdownInline((unordered || ordered)[1])}</li>`);
      continue;
    }
    closeList();
    if (!line.trim()) continue;
    if (line.startsWith("> ")) html.push(`<blockquote>${renderMarkdownInline(line.slice(2))}</blockquote>`);
    else html.push(`<p>${renderMarkdownInline(line)}</p>`);
  }
  closeList();
  if (inCode) html.push(`<pre><code>${escapeToolHtml(codeLines.join("\n"))}</code></pre>`);
  return html.join("");
};

document.querySelector("[data-markdown-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const result = form.querySelector("[data-markdown-result]");
  const markdown = form.querySelector("[name='markdown']")?.value || "";
  if (result) result.innerHTML = renderMarkdownPreview(markdown) || `<p>${t("请输入 Markdown 内容。", "Enter Markdown content.")}</p>`;
});

const formulasZh = {
  ohm: "欧姆定律\nV = I × R\nV：电压（V），I：电流（A），R：电阻（Ω）",
  power: "电功率\nP = V × I = I²R = V²/R\nP：功率（W）",
  divider: "电阻分压\nVout = Vin × R2 / (R1 + R2)\nR1 接输入端，R2 接地",
  rc: "RC 截止频率\nfc = 1 / (2πRC)\nR：Ω，C：F，fc：Hz",
  lc: "LC 谐振频率\nf0 = 1 / (2π√(LC))\nL：H，C：F，f0：Hz",
  shannon: "香农信道容量\nC = B × log₂(1 + S/N)\nB：带宽（Hz），S/N：线性信噪比",
  nyquist: "奈奎斯特采样定理\nfs ≥ 2fmax\n采样率至少为最高信号频率的两倍",
  wavelength: "波长与频率\nλ = v / f\n电磁波在真空中 v ≈ 3 × 10⁸ m/s",
  db: "功率比与 dB\nGdB = 10 × log₁₀(P2/P1)\n电压比且阻抗相同时：GdB = 20 × log₁₀(V2/V1)"
};
const formulasEn = {
  ohm: "Ohm's law\nV = I × R\nV: voltage (V), I: current (A), R: resistance (Ω)",
  power: "Electrical power\nP = V × I = I²R = V²/R\nP: power (W)",
  divider: "Resistor divider\nVout = Vin × R2 / (R1 + R2)\nR1 connects to input and R2 to ground",
  rc: "RC cutoff frequency\nfc = 1 / (2πRC)\nR: Ω, C: F, fc: Hz",
  lc: "LC resonant frequency\nf0 = 1 / (2π√(LC))\nL: H, C: F, f0: Hz",
  shannon: "Shannon channel capacity\nC = B × log₂(1 + S/N)\nB: bandwidth (Hz), S/N: linear SNR",
  nyquist: "Nyquist sampling theorem\nfs ≥ 2fmax\nSample rate is at least twice the highest signal frequency",
  wavelength: "Wavelength and frequency\nλ = v / f\nFor electromagnetic waves in vacuum, v ≈ 3 × 10⁸ m/s",
  db: "Power ratio and dB\nGdB = 10 × log₁₀(P2/P1)\nFor equal impedance voltage ratios: GdB = 20 × log₁₀(V2/V1)"
};
const formulas = isEnglish ? formulasEn : formulasZh;

document.querySelector("[data-formula-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const key = form.querySelector("[name='formula']")?.value || "ohm";
  const result = form.querySelector("[data-formula-result]");
  if (result) result.textContent = formulas[key] || t("没有找到该公式。", "Formula not found.");
});

let mathJaxPromise;
const loadMathJax = () => {
  if (window.MathJax?.tex2svgPromise) return Promise.resolve(window.MathJax);
  if (mathJaxPromise) return mathJaxPromise;
  window.MathJax = { svg: { fontCache: "global" } };
  mathJaxPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg.js";
    script.async = true;
    script.addEventListener("load", () => {
      const ready = window.MathJax?.startup?.promise || Promise.resolve();
      ready.then(() => resolve(window.MathJax), reject);
    });
    script.addEventListener("error", () => reject(new Error("MathJax load failed")));
    document.head.append(script);
  });
  return mathJaxPromise;
};

document.querySelector("[data-latex-form]")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const latex = form.querySelector("[name='latex']")?.value.trim() || "";
  const result = form.querySelector("[data-latex-result]");
  if (!result) return;
  if (!latex) {
    result.textContent = t("请输入 LaTeX 公式。", "Enter a LaTeX expression.");
    return;
  }
  result.textContent = t("正在加载并渲染公式…", "Loading and rendering the formula…");
  try {
    const mathJax = await loadMathJax();
    const rendered = await mathJax.tex2svgPromise(latex, { display: true });
    result.replaceChildren(rendered);
  } catch {
    result.textContent = t("公式渲染失败，请检查 LaTeX 语法或网络连接。", "Formula rendering failed. Check the LaTeX syntax or network connection.");
  }
});

const toolErrorPattern = /请输入|请选择|失败|无效|超出|不能为空|没有找到|低于|enter|choose|must|failed|invalid|unavailable|not found|exceeds|below/i;
document.querySelectorAll(".tool-form").forEach((form) => {
  const result = form.querySelector(".tool-result, [data-markdown-result], [data-latex-result]");
  if (result) {
    result.setAttribute("role", "status");
    result.setAttribute("aria-live", "polite");
    const updateResultState = () => {
      const isError = toolErrorPattern.test(result.textContent || "");
      result.classList.toggle("is-error", isError);
      result.setAttribute("aria-live", isError ? "assertive" : "polite");
    };
    new MutationObserver(updateResultState).observe(result, { childList: true, subtree: true, characterData: true });
    updateResultState();
  }

  form.addEventListener("invalid", (event) => {
    const control = event.target;
    if (!(control instanceof HTMLInputElement || control instanceof HTMLTextAreaElement || control instanceof HTMLSelectElement)) return;
    control.setAttribute("aria-invalid", "true");
    if (result) {
      const label = control.closest("label")?.childNodes[0]?.textContent?.trim() || t("输入内容", "Input");
      result.textContent = `${label}: ${control.validationMessage || t("输入不符合要求", "Input does not meet the requirement")}`;
    }
  }, true);

  form.addEventListener("input", (event) => {
    if (event.target instanceof HTMLElement) event.target.removeAttribute("aria-invalid");
  });
});

if ("serviceWorker" in navigator && ["http:", "https:"].includes(window.location.protocol)) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}
