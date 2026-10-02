(function () {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".site-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();
