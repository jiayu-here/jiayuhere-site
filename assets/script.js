const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector("#mobileNav");
const siteHeader = document.querySelector(".site-header");
const navLinks = Array.from(
  document.querySelectorAll('.nav a[href^="#"], .mobile-nav a[href^="#"]')
);
const filters = document.querySelectorAll(".filter");
const posts = document.querySelectorAll(".post-card");
const form = document.querySelector(".subscribe-form");
const note = document.querySelector(".form-note");
const filterStatus = document.querySelector("#filterStatus");
const filterShortcutLinks = document.querySelectorAll("[data-filter-target]");
const progressTrack = document.createElement("div");
const progressBar = document.createElement("span");
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

const applyFilter = (category) => {
  const activeButton = Array.from(filters).find((button) => button.dataset.filter === category);

  if (!activeButton) {
    return;
  }

  const label = activeButton.textContent.trim();
  let visibleCount = 0;

  filters.forEach((item) => {
    const isActive = item === activeButton;
    item.classList.toggle("active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });

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
};

filters.forEach((button) => {
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
