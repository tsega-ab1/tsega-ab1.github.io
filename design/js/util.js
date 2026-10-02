// Shared across index.html / works.html / project.html.
window.PortfolioUtil = (function () {
  const PALETTE = ["#C9D94A", "#6BBF71", "#3D5A80", "#C79A3B", "#A4423A", "#7C6FA6", "#4C6B6A", "#B08D3E"];

  function colorFor(seed) {
    let h = 0;
    for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
    return PALETTE[h % PALETTE.length];
  }

  // Renders an <img>; if it 404s (no real asset dropped in yet), swap in a
  // tinted panel with the title so a half-populated site never looks broken.
  function imageWithFallback(src, alt, title, seed) {
    const wrap = document.createElement("div");
    wrap.className = "media";
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt || title || "";
    img.loading = "lazy";
    img.addEventListener(
      "error",
      () => {
        const fallback = document.createElement("div");
        fallback.className = "media-fallback";
        const color = colorFor(seed || title || src);
        fallback.style.background = `linear-gradient(155deg, ${color}CC, ${color}45)`;
        fallback.innerHTML = `<span>${title || ""}</span>`;
        img.replaceWith(fallback);
      },
      { once: true }
    );
    wrap.appendChild(img);
    return wrap;
  }

  // ---- lightbox: a simple full-screen viewer for works with no case study ----
  let items = [];
  let index = -1;
  let lastFocused = null;
  let elRefs = null;

  function ensureLightbox() {
    if (elRefs) return elRefs;
    const root = document.createElement("div");
    root.className = "lightbox";
    root.hidden = true;
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-modal", "true");
    root.innerHTML = `
      <button class="lightbox-close" aria-label="Close">✕</button>
      <button class="lightbox-nav prev" aria-label="Previous">‹</button>
      <button class="lightbox-nav next" aria-label="Next">›</button>
      <div class="lightbox-frame">
        <div class="lightbox-media-wrap"></div>
        <div class="lightbox-caption">
          <h2></h2>
          <span class="meta"></span>
        </div>
      </div>`;
    document.body.appendChild(root);

    const close = root.querySelector(".lightbox-close");
    const prev = root.querySelector(".lightbox-nav.prev");
    const next = root.querySelector(".lightbox-nav.next");

    function hide() {
      root.hidden = true;
      document.removeEventListener("keydown", onKey);
      if (lastFocused) lastFocused.focus();
    }
    function show(i) {
      index = (i + items.length) % items.length;
      const item = items[index];
      const mediaWrap = root.querySelector(".lightbox-media-wrap");
      mediaWrap.innerHTML = "";
      mediaWrap.appendChild(imageWithFallback(item.image, item.title, item.title, item.title));
      root.querySelector(".lightbox-caption h2").textContent = item.title;
      root.querySelector(".lightbox-caption .meta").textContent = `${item.category} · ${item.year}`;
    }
    function onKey(e) {
      if (e.key === "Escape") hide();
      if (e.key === "ArrowRight") show(index + 1);
      if (e.key === "ArrowLeft") show(index - 1);
    }

    close.addEventListener("click", hide);
    prev.addEventListener("click", () => show(index - 1));
    next.addEventListener("click", () => show(index + 1));
    root.addEventListener("click", (e) => { if (e.target === root) hide(); });

    elRefs = { root, show: (list, i) => {
      items = list;
      lastFocused = document.activeElement;
      show(i);
      root.hidden = false;
      close.focus();
      document.addEventListener("keydown", onKey);
    }};
    return elRefs;
  }

  function openLightbox(list, i) {
    ensureLightbox().show(list, i);
  }

  return { imageWithFallback, openLightbox, colorFor: colorFor };
})();
