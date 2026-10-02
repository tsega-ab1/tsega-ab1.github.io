(function () {
  const U = window.DevPortfolioUtil;
  const list = document.getElementById("projectsList");

  window.PROJECTS.forEach((p) => {
    const wrap = document.createElement("div");
    wrap.className = "wrap";
    const card = document.createElement("div");
    card.className = "project-card";

    const media = document.createElement("div");
    media.className = "project-media";
    media.appendChild(U.imageWithFallback(p.image, p.title));

    const copy = document.createElement("div");
    const linkHtml = p.link
      ? `<a class="cta-link" href="${p.link}" target="_blank" rel="noopener">${p.linkLabel}</a>`
      : `<span class="status-tag">${p.linkLabel}</span>`;

    copy.innerHTML = `
      <div class="project-number">${p.number}</div>
      <h3>${p.title}</h3>
      <dl class="project-meta">
        <dt>Project Type</dt><dd>${p.type}</dd>
        <dt>Team</dt><dd>${p.team}</dd>
        <dt>Technologies</dt><dd>${p.tech}</dd>
      </dl>
      <p class="desc">${p.description}</p>
      ${linkHtml}
    `;

    card.appendChild(media);
    card.appendChild(copy);
    wrap.appendChild(card);
    list.appendChild(wrap);
  });

  const comingSoon = document.getElementById("comingSoon");
  window.COMING_SOON.forEach((c) => {
    const card = document.createElement("div");
    card.className = "coming-card";
    card.innerHTML = `
      <span class="status-tag">${c.status}</span>
      <h4>${c.title}</h4>
      <p><strong>${c.focus}</strong></p>
      <p>${c.description}</p>
    `;
    comingSoon.appendChild(card);
  });
})();
