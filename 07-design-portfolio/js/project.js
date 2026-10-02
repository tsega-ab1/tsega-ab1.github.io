(function () {
  const DATA = window.PORTFOLIO_DATA;
  const U = window.PortfolioUtil;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const work = DATA.works[id];

  if (!work || !work.hasCaseStudy) {
    document.body.innerHTML = `
      <div class="wrap" style="padding:4rem 0;">
        <p>That project isn't available yet.</p>
        <a class="back-link" href="index.html" style="color:inherit;">← Back to Design Portfolio</a>
      </div>`;
    return;
  }

  document.title = `${work.title} — Design Portfolio — Tsega`;
  document.body.classList.add(`project-theme-${work.theme || "dark"}`);

  document.getElementById("metaTag").textContent = `Graphic Design Portfolio  |  ${work.year}`;

  document.getElementById("pEyebrow").textContent = work.concept.eyebrow;
  document.getElementById("pTitle").innerHTML = `${work.concept.headline.split(" ").slice(0, -2).join(" ")} <span class="accent">${work.concept.headline.split(" ").slice(-2).join(" ")}</span>`;
  document.getElementById("pDesc").textContent = work.concept.description;
  document.getElementById("pClient").textContent = work.client;
  document.getElementById("pCategory").textContent = work.projectType;
  document.getElementById("pYear").textContent = work.year;
  document.getElementById("pHeroMedia").appendChild(
    U.imageWithFallback(work.image, work.title, work.title, id)
  );

  document.getElementById("cEyebrow").textContent = "The concept";
  document.getElementById("cHeadline").textContent = work.concept.headline;
  document.getElementById("cDesc").textContent = work.concept.description;
  document.getElementById("cTraits").innerHTML = work.concept.traits
    .map((t) => `<span class="trait-chip">${t}</span>`)
    .join("");

  document.getElementById("pPalette").innerHTML = work.palette
    .map(
      (p) => `
    <div class="swatch">
      <i style="background:${p.hex}"></i>
      <span class="label">${p.label}</span>
      <span class="hex">${p.hex}</span>
    </div>`
    )
    .join("");

  document.getElementById("pType").innerHTML = work.typography
    .map((t) => `<div><div class="name">${t.name}</div><div class="role">${t.role}</div></div>`)
    .join("");

  const mockupsSection = document.getElementById("mockupsSection");
  if (work.mockups && work.mockups.length) {
    const mockupsGrid = document.getElementById("pMockups");
    work.mockups.forEach((m) => {
      const fig = document.createElement("figure");
      fig.appendChild(U.imageWithFallback(m.image, m.caption, work.title, id + m.caption));
      const cap = document.createElement("figcaption");
      cap.textContent = m.caption;
      fig.appendChild(cap);
      mockupsGrid.appendChild(fig);
    });
  } else {
    mockupsSection.remove();
  }

  const detailsSection = document.getElementById("detailsSection");
  if (work.details && work.details.length) {
    const detailsGrid = document.getElementById("pDetails");
    work.details.forEach((d) => {
      const fig = document.createElement("figure");
      fig.appendChild(U.imageWithFallback(d.image, d.caption, work.title, id + d.caption));
      const cap = document.createElement("figcaption");
      cap.textContent = d.caption;
      fig.appendChild(cap);
      detailsGrid.appendChild(fig);
    });
  } else {
    detailsSection.remove();
  }

  document.getElementById("pFooterTitle").textContent = `${work.title} — ${work.projectType} / ${work.year}`;
})();
