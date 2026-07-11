const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector("#mobileNav");
const mobileNavBackdrop = document.querySelector("#mobileNavBackdrop");
const siteHeader = document.querySelector(".site-header");
const mainContent = document.querySelector("#mainContent");
const navLinks = Array.from(
  document.querySelectorAll('.nav a[href^="#"], .mobile-nav a[href^="#"], .section-rail a[href^="#"]')
);
const filters = Array.from(document.querySelectorAll(".filter"));
const browseModes = Array.from(document.querySelectorAll(".browse-mode"));
const posts = Array.from(document.querySelectorAll(".post-card"));
const form = document.querySelector(".subscribe-form");
const note = document.querySelector(".form-note");
const filterStatus = document.querySelector("#filterStatus");
const readingCue = document.querySelector("#readingCue");
const readingOverview = document.querySelector("#readingOverview");
const backToTopButton = document.querySelector("#backToTop");
const filterShortcutLinks = document.querySelectorAll("[data-filter-target]");
const mobileNavLinks = Array.from(document.querySelectorAll('.mobile-nav a[href^="#"]'));
const postIndexList = document.querySelector("#postIndexList");
const postIndexEmpty = document.querySelector("#postIndexEmpty");
const copyViewLinkButton = document.querySelector("#copyViewLink");
const copyViewStatus = document.querySelector("#copyViewStatus");
const progressTrack = document.createElement("div");
const progressBar = document.createElement("span");
const availableFilters = new Set(filters.map((button) => button.dataset.filter).filter(Boolean));
const filterDescriptions = {
  all: "先快速扫一遍全部内容，再按你此刻更想看的主题切换，会更容易建立对这个站点的整体印象。",
  travel: "适合先看路线、地方、移动过程和旅途中那些更具体的现场感。",
  journal: "适合先看日常节奏、生活细节和更安静一点的个人感受。",
  insight: "适合先看方法、判断和那些可以带走继续用的想法。"
};

let activeRailHref = "";
let activeFilter = "all";
let lastFocusedElement = null;
let postIndexLinks = [];

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

const formatCount = (count) => `${count} 篇`;
const formatMinutes = (minutes) => `${minutes} 分钟`;

const buildViewUrl = (category = activeFilter) => {
  const nextUrl = new URL(window.location.href);

  if (category === "all") {
    nextUrl.searchParams.delete("view");
  } else {
    nextUrl.searchParams.set("view", category);
  }

  nextUrl.hash = "featured";
  return nextUrl;
};

const updateCopyViewStatus = (message) => {
  if (copyViewStatus) {
    copyViewStatus.textContent = message;
  }
};

const updateViewUrl = (category, { replace = true } = {}) => {
  const nextUrl = buildViewUrl(category);

  if (nextUrl.href === window.location.href) {
    return;
  }

  const state = { view: category };

  if (replace) {
    window.history.replaceState(state, "", nextUrl);
  } else {
    window.history.pushState(state, "", nextUrl);
  }
};

const getViewFromLocation = () => {
  const view = new URL(window.location.href).searchParams.get("view");
  return availableFilters.has(view) ? view : "all";
};

const extractReadingMinutes = (post) => {
  const meta = post.querySelector(".post-meta")?.textContent || "";
  const matchedMinutes = meta.match(/(\d+)/);
  return matchedMinutes ? Number(matchedMinutes[1]) : 0;
};

const buildPostIndex = () => {
  if (!postIndexList) {
    return;
  }

  const fragment = document.createDocumentFragment();

  posts.forEach((post, index) => {
    if (!post.id) {
      post.id = `post-${index + 1}`;
    }

    const link = document.createElement("a");
    const meta = document.createElement("span");
    const title = document.createElement("strong");

    link.className = "post-index-link";
    link.href = `#${post.id}`;
    link.dataset.postId = post.id;
    link.dataset.category = post.dataset.category || "all";

    meta.className = "post-index-meta";
    meta.textContent = post.querySelector(".post-meta")?.textContent?.trim() || "";
    title.textContent = post.querySelector("h3")?.textContent?.trim() || `Post ${index + 1}`;

    link.append(meta, title);
    fragment.append(link);
  });

  postIndexList.replaceChildren(fragment);
  postIndexLinks = Array.from(postIndexList.querySelectorAll(".post-index-link"));
};

const updatePostIndex = (visiblePosts) => {
  if (!postIndexLinks.length) {
    return;
  }

  const visiblePostIds = new Set(visiblePosts.map((post) => post.id));

  postIndexLinks.forEach((link) => {
    const shouldShow = visiblePostIds.has(link.dataset.postId || "");
    link.classList.toggle("is-hidden", !shouldShow);
  });

  if (postIndexEmpty) {
    postIndexEmpty.hidden = visiblePosts.length > 0;
  }
};

const updateReadingOverview = (label, visiblePosts) => {
  if (!readingOverview) {
    return;
  }

  const overviewLabel = readingOverview.querySelector("#overviewLabel");
  const overviewCount = readingOverview.querySelector("#overviewCount");
  const overviewTime = readingOverview.querySelector("#overviewTime");
  const overviewLead = readingOverview.querySelector("#overviewLead");
  const totalMinutes = visiblePosts.reduce((sum, post) => sum + extractReadingMinutes(post), 0);
  const leadTitle = visiblePosts[0]?.querySelector("h3")?.textContent?.trim() || "暂无推荐";

  if (overviewLabel) {
    overviewLabel.textContent = label;
  }

  if (overviewCount) {
    overviewCount.textContent = formatCount(visiblePosts.length);
  }

  if (overviewTime) {
    overviewTime.textContent = formatMinutes(totalMinutes);
  }

  if (overviewLead) {
    overviewLead.textContent = leadTitle;
  }
};

const updateCopyViewButton = (label) => {
  if (!copyViewLinkButton) {
    return;
  }

  copyViewLinkButton.dataset.filter = activeFilter;
  copyViewLinkButton.setAttribute("aria-label", `复制当前${label}视图链接`);
};

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

const updateBackToTopControl = () => {
  if (backToTopButton) {
    backToTopButton.hidden = window.scrollY < 560;
  }
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

const setMobileNavState = (isOpen) => {
  if (!mobileNav || !menuButton || !mobileNavBackdrop) {
    return;
  }

  mobileNav.classList.toggle("open", isOpen);
  mobileNav.hidden = !isOpen;
  mobileNavBackdrop.hidden = !isOpen;
  document.body.classList.toggle("nav-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "关闭导航菜单" : "打开导航菜单");
};

const closeMobileNav = ({ restoreFocus = true } = {}) => {
  const wasOpen = mobileNav?.classList.contains("open");
  setMobileNavState(false);

  if (wasOpen && restoreFocus && lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }

  lastFocusedElement = null;
};

menuButton?.addEventListener("click", () => {
  if (mobileNav?.classList.contains("open")) {
    closeMobileNav();
    return;
  }

  lastFocusedElement = document.activeElement;
  setMobileNavState(true);
  mobileNavLinks[0]?.focus();
});

mobileNav?.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    closeMobileNav({ restoreFocus: false });
  }
});

mobileNavBackdrop?.addEventListener("click", () => {
  closeMobileNav();
});

const syncFilterControls = (category) => {
  [...filters, ...browseModes].forEach((item) => {
    const isActive = item.dataset.filter === category;
    item.classList.toggle("active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });
};

const applyFilter = (category, { updateUrl = true, replaceUrl = true } = {}) => {
  const activeButton = filters.find((button) => button.dataset.filter === category);

  if (!activeButton) {
    return;
  }

  const label = activeButton.textContent.trim();
  const visiblePosts = [];
  activeFilter = category;

  syncFilterControls(category);

  posts.forEach((post) => {
    const shouldShow = category === "all" || post.dataset.category === category;
    post.classList.toggle("is-hidden", !shouldShow);

    if (shouldShow) {
      visiblePosts.push(post);
    }
  });

  if (filterStatus) {
    filterStatus.textContent = `当前显示${label} ${visiblePosts.length} 篇内容。`;
  }

  const cueCopy = readingCue?.querySelector(".reading-cue-copy");

  if (cueCopy) {
    cueCopy.textContent = filterDescriptions[category] || filterDescriptions.all;
  }

  updateReadingOverview(label, visiblePosts);
  updateCopyViewButton(label);
  updatePostIndex(visiblePosts);

  const nextStatus =
    category === "all"
      ? "当前链接对应全部精选内容。"
      : `当前链接会保留“${label}”视图。`;

  updateCopyViewStatus(nextStatus);

  if (updateUrl) {
    updateViewUrl(category, { replace: replaceUrl });
  }
};

filters.forEach((button) => {
  button.addEventListener("click", () => {
    applyFilter(button.dataset.filter, { updateUrl: true, replaceUrl: false });
  });
});

browseModes.forEach((button) => {
  button.addEventListener("click", () => {
    applyFilter(button.dataset.filter, { updateUrl: true, replaceUrl: false });
  });
});

filterShortcutLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const category = link.getAttribute("data-filter-target");

    if (category) {
      applyFilter(category, { updateUrl: true, replaceUrl: false });
    }
  });
});

const registerFilterKeyboardNavigation = (controls) => {
  controls.forEach((control, index) => {
    control.addEventListener("keydown", (event) => {
      let nextIndex = index;

      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        nextIndex = (index + 1) % controls.length;
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        nextIndex = (index - 1 + controls.length) % controls.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = controls.length - 1;
      } else {
        return;
      }

      event.preventDefault();
      const nextControl = controls[nextIndex];
      nextControl.focus();
      applyFilter(nextControl.dataset.filter, { updateUrl: true, replaceUrl: false });
    });
  });
};

registerFilterKeyboardNavigation(filters);
registerFilterKeyboardNavigation(browseModes);

copyViewLinkButton?.addEventListener("click", async () => {
  const targetUrl = buildViewUrl().toString();

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(targetUrl);
    } else {
      const fallbackField = document.createElement("input");
      fallbackField.value = targetUrl;
      fallbackField.setAttribute("readonly", "true");
      fallbackField.style.position = "absolute";
      fallbackField.style.left = "-9999px";
      document.body.append(fallbackField);
      fallbackField.select();
      document.execCommand("copy");
      fallbackField.remove();
    }

    updateCopyViewStatus("当前视图链接已复制，可以直接分享或继续看。");
  } catch (error) {
    updateCopyViewStatus("当前浏览器不允许自动复制，可以从地址栏手动复制这个链接。");
  }
});

postIndexList?.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) {
    return;
  }

  const link = event.target.closest(".post-index-link");

  if (!(link instanceof HTMLAnchorElement)) {
    return;
  }

  const target = document.querySelector(link.getAttribute("href"));

  if (!(target instanceof HTMLElement)) {
    return;
  }

  window.setTimeout(() => {
    target.focus({ preventScroll: true });
  }, 0);
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(form).get("email");
  note.textContent = `${email} 已加入本地演示订阅列表。上线后可接入真实邮件服务。`;
  form.reset();
});

backToTopButton?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion.matches ? "auto" : "smooth"
  });
});

window.addEventListener("scroll", () => {
  updateScrollProgress();
  updateBackToTopControl();
  updateActiveSection();
});

window.addEventListener("resize", updateActiveSection);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileNav();
  }

  if (event.key === "Tab" && mobileNav?.classList.contains("open") && mobileNavLinks.length > 0) {
    const firstLink = mobileNavLinks[0];
    const lastLink = mobileNavLinks[mobileNavLinks.length - 1];

    if (event.shiftKey && document.activeElement === firstLink) {
      event.preventDefault();
      lastLink.focus();
    } else if (!event.shiftKey && document.activeElement === lastLink) {
      event.preventDefault();
      firstLink.focus();
    }
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 860 && mobileNav?.classList.contains("open")) {
    closeMobileNav({ restoreFocus: false });
  }
});

window.addEventListener("popstate", () => {
  applyFilter(getViewFromLocation(), { updateUrl: false });
});

mainContent?.addEventListener("focus", () => {
  if (mobileNav?.classList.contains("open")) {
    closeMobileNav({ restoreFocus: false });
  }
});

updateScrollProgress();
updateBackToTopControl();
updateActiveSection();
buildPostIndex();
applyFilter(getViewFromLocation(), { updateUrl: true });
