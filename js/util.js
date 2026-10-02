window.DevPortfolioUtil = (function () {
  function imageWithFallback(src, title) {
    const wrap = document.createElement("div");
    wrap.style.width = "100%";
    wrap.style.height = "100%";
    const img = document.createElement("img");
    img.src = src;
    img.alt = title || "";
    img.loading = "lazy";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    img.addEventListener(
      "error",
      () => {
        const fallback = document.createElement("div");
        fallback.className = "media-fallback";
        fallback.innerHTML = `<span>${title || ""}</span>`;
        img.replaceWith(fallback);
      },
      { once: true }
    );
    wrap.appendChild(img);
    return wrap;
  }
  return { imageWithFallback };
})();
