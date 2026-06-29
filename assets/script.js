const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector("#mobileNav");
const filters = document.querySelectorAll(".filter");
const posts = document.querySelectorAll(".post-card");
const form = document.querySelector(".subscribe-form");
const note = document.querySelector(".form-note");

menuButton?.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

mobileNav?.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    mobileNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
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
