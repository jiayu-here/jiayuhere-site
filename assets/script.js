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

menuButton?.addEventListener("click", () => {
  const isOpen = mobileNav?.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

mobileNav?.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    mobileNav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;

    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    posts.forEach((post) => {
      const shouldShow = category === "all" || post.dataset.category === category;
      post.classList.toggle("is-hidden", !shouldShow);
    });
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

updateScrollProgress();
updateActiveSection();
