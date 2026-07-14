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

document.querySelector("[data-dds-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const clock = toNumber(form.querySelector("[name='ddsClock']")?.value);
  const frequency = toNumber(form.querySelector("[name='ddsFrequency']")?.value);
  const phaseBits = toNumber(form.querySelector("[name='phaseBits']")?.value);
  const result = form.querySelector("[data-tool-result]");
  if (!result) return;
  if (!clock || !frequency || !Number.isInteger(phaseBits) || clock <= 0 || frequency <= 0 || frequency >= clock / 2 || phaseBits < 4 || phaseBits > 52) {
    result.textContent = "请输入有效参数：频率应大于 0 且低于系统时钟的一半，位宽为 4–52 的整数。";
    return;
  }
  const phaseScale = 2 ** phaseBits;
  const tuningWord = Math.round(frequency * phaseScale / clock);
  const actualFrequency = tuningWord * clock / phaseScale;
  const errorHz = actualFrequency - frequency;
  const errorPpm = errorHz / frequency * 1e6;
  const hexWidth = Math.ceil(phaseBits / 4);
  result.textContent = `频率字 FTW       ${tuningWord} (0x${tuningWord.toString(16).toUpperCase().padStart(hexWidth, "0")})\n实际输出频率      ${actualFrequency.toFixed(6)} Hz\n频率分辨率        ${(clock / phaseScale).toExponential(6)} Hz\n频率误差          ${errorHz.toExponential(6)} Hz (${errorPpm.toFixed(3)} ppm)`;
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
    result.textContent = "请输入大于 0 的波特率、帧长、更新率和每字节线路位数。";
    return;
  }
  const frameBits = frameBytes * bitsPerByte;
  const requiredRate = frameBits * frameRate;
  const utilization = requiredRate / baud;
  const maxRate = baud / frameBits;
  const frameTime = frameBits / baud * 1000;
  const status = utilization <= 0.7 ? "利用率留有余量" : utilization <= 1 ? "可发送，但链路余量较小" : "超出当前链路带宽";
  result.textContent = `单帧线路位数      ${frameBits} bit\n所需线路带宽      ${requiredRate.toFixed(2)} bps\n链路利用率        ${(utilization * 100).toFixed(2)}%（${status}）\n理论最大更新率    ${maxRate.toFixed(2)} Hz\n单帧发送时间      ${frameTime.toFixed(3)} ms`;
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
    result.textContent = "请输入有效参数：输入电压应位于 0 到参考电压之间，位数为 1–24 的整数。";
    return;
  }
  const levels = 2 ** bits;
  const maxCode = levels - 1;
  const code = Math.round(input / vref * maxCode);
  const quantizedVoltage = code * vref / maxCode;
  const errorMv = (quantizedVoltage - input) * 1000;
  result.textContent = `理想 1 LSB        ${(vref / levels * 1000).toFixed(6)} mV\n量化码            ${code} / ${maxCode} (0x${code.toString(16).toUpperCase()})\n码值对应电压      ${quantizedVoltage.toFixed(6)} V\n量化误差          ${errorMv.toFixed(6)} mV`;
});

const erf = (value) => {
  const sign = value < 0 ? -1 : 1;
  const x = Math.abs(value);
  const t = 1 / (1 + 0.3275911 * x);
  const polynomial = (((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t);
  return sign * (1 - polynomial * Math.exp(-x * x));
};

document.querySelector("[data-qpsk-ber-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const ebn0Db = toNumber(form.querySelector("[name='ebn0']")?.value);
  const bitCount = toNumber(form.querySelector("[name='bitCount']")?.value);
  const result = form.querySelector("[data-tool-result]");
  if (!result) return;
  if (ebn0Db === null || !Number.isInteger(bitCount) || bitCount < 1 || bitCount > 1e12) {
    result.textContent = "请输入有效的 Eb/N0 和 1 到 10¹² 之间的整数统计比特数。";
    return;
  }
  const ebn0Linear = 10 ** (ebn0Db / 10);
  const ber = 0.5 * (1 - erf(Math.sqrt(ebn0Linear)));
  const expectedErrors = bitCount * ber;
  const anyErrorProbability = -Math.expm1(bitCount * Math.log1p(-ber));
  result.textContent = `Es/N0             ${(ebn0Db + 10 * Math.log10(2)).toFixed(3)} dB\n理论 BER          ${ber.toExponential(4)}\n预计误码数        ${expectedErrors.toFixed(3)} / ${bitCount}\n至少出现 1 个误码  ${(anyErrorProbability * 100).toFixed(4)}%\n模型              Gray QPSK、相干解调、理想 AWGN`;
});
