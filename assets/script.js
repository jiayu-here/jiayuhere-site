const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector("#mobileNav");
const siteHeader = document.querySelector(".site-header");
const navLinks = Array.from(
  document.querySelectorAll('.nav a[href^="#"], .mobile-nav a[href^="#"], .section-rail a[href^="#"]')
);
const filters = document.querySelectorAll(".filter");
const browseModes = document.querySelectorAll(".browse-mode");
const posts = document.querySelectorAll(".post-card");
const form = document.querySelector(".subscribe-form");
const note = document.querySelector(".form-note");
const filterStatus = document.querySelector("#filterStatus");
const readingCue = document.querySelector("#readingCue");
const filterShortcutLinks = document.querySelectorAll("[data-filter-target]");
const progressTrack = document.createElement("div");
const progressBar = document.createElement("span");
const filterDescriptions = {
  all: "先快速扫一遍全部内容，再按你此刻更想看的主题切换，会更容易建立对这个站点的整体印象。",
  travel: "适合先看路线、地方、移动过程和旅途中那些更具体的现场感。",
  journal: "适合先看日常节奏、生活细节和更安静一点的个人感受。",
  insight: "适合先看方法、判断和那些可以带走继续用的想法。"
};
let activeRailHref = "";
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
progressTrack.className = "scroll-progress";
progressTrack.setAttribute("aria-hidden", "true");
progressBar.className = "scroll-progress-bar";
progressTrack.append(progressBar);
siteHeader?.insertAdjacentElement("afterend", progressTrack);
const trackedSections = Array.from(
  new Set(
    navLinks
      .map((link) => link.getAttribute("href"))
      .filter((href) => href && href.startsWith("#"))
      .map((href) => document.querySelector(href))
      .filter(Boolean)
  )
);

const setActiveSection = (sectionId) => {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${sectionId}`;
    link.classList.toggle("is-active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  const nextRailHref = `#${sectionId}`;

  if (nextRailHref !== activeRailHref) {
    activeRailHref = nextRailHref;
    const activeRailLink = document.querySelector(`.section-rail a[href="${nextRailHref}"]`);
    activeRailLink?.scrollIntoView({
      behavior: prefersReducedMotion.matches ? "auto" : "smooth",
      inline: "nearest",
      block: "nearest"
    });
  }
};

const updateScrollProgress = () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
  document.documentElement.style.setProperty("--scroll-progress", `${progress}%`);
};

const updateActiveSection = () => {
  const headerOffset = 140;
  let currentSection = trackedSections[0];

  trackedSections.forEach((section) => {
    if (section.offsetTop - headerOffset <= window.scrollY) {
      currentSection = section;
    }
  });

  if (currentSection?.id) {
    setActiveSection(currentSection.id);
  }
};

const closeMobileNav = () => {
  mobileNav?.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "打开导航菜单");
};

menuButton?.addEventListener("click", () => {
  const isOpen = mobileNav?.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(Boolean(isOpen)));
  menuButton.setAttribute("aria-label", isOpen ? "关闭导航菜单" : "打开导航菜单");
});

mobileNav?.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    closeMobileNav();
  }
});

const syncFilterControls = (category) => {
  [...filters, ...browseModes].forEach((item) => {
    const isActive = item.dataset.filter === category;
    item.classList.toggle("active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });
};

const applyFilter = (category) => {
  const activeButton = Array.from(filters).find((button) => button.dataset.filter === category);

  if (!activeButton) {
    return;
  }

  const label = activeButton.textContent.trim();
  let visibleCount = 0;

  syncFilterControls(category);

  posts.forEach((post) => {
    const shouldShow = category === "all" || post.dataset.category === category;
    post.classList.toggle("is-hidden", !shouldShow);

    if (shouldShow) {
      visibleCount += 1;
    }
  });

  if (filterStatus) {
    filterStatus.textContent = `当前显示${label} ${visibleCount} 篇内容。`;
  }

  const cueCopy = readingCue?.querySelector(".reading-cue-copy");

  if (cueCopy) {
    cueCopy.textContent = filterDescriptions[category] || filterDescriptions.all;
  }
};

filters.forEach((button) => {
  button.addEventListener("click", () => {
    applyFilter(button.dataset.filter);
  });
});

browseModes.forEach((button) => {
  button.addEventListener("click", () => {
    applyFilter(button.dataset.filter);
  });
});

filterShortcutLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const category = link.getAttribute("data-filter-target");

    if (category) {
      applyFilter(category);
    }
  });
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(form).get("email");
  note.textContent = `${email} 已加入本地演示订阅列表。上线后可接入真实邮件服务。`;
  form.reset();
});

window.addEventListener("scroll", () => {
  updateScrollProgress();
  updateActiveSection();
});

window.addEventListener("resize", updateActiveSection);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileNav();
  }
});

updateScrollProgress();
updateActiveSection();
