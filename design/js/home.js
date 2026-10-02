(function () {
  const DATA = window.PORTFOLIO_DATA;
  const U = window.PortfolioUtil;

  // ---- hero ----
  document.getElementById("heroKicker").textContent = DATA.hero.kicker;
  document.getElementById("heroTitle").innerHTML =
    `${DATA.hero.titleLine1}<span class="accent">${DATA.hero.titleLine2}</span>`;
  document.getElementById("heroBody").textContent = DATA.hero.body;
  document.getElementById("heroMedia").appendChild(
    U.imageWithFallback(DATA.hero.image, "Featured design work", "Tsega", "hero")
  );

  // ---- category sections ----
  const sectionsRoot = document.getElementById("sections");

  DATA.categories.forEach((cat) => {
    const featured = DATA.works[cat.featuredWork];
    const section = document.createElement("section");
    section.className = `feature theme-${cat.theme}`;
    section.style.background = cat.bg;
    section.id = cat.id;

    const wrap = document.createElement("div");
    wrap.className = "wrap";

    // copy column
    const copy = document.createElement("div");
    copy.className = "feature-copy";
    copy.innerHTML = `
      <div class="number">${cat.number} —</div>
      <h2>${cat.label}</h2>
      <p class="kicker">${cat.kicker}</p>
      <p class="desc">${cat.description}</p>
    `;
    const viewAll = document.createElement("a");
    viewAll.className = "view-all";
    viewAll.href = `works.html?cat=${encodeURIComponent(cat.label)}`;
    viewAll.textContent = "View all →";
    copy.appendChild(viewAll);

    if (featured.hasCaseStudy && featured.palette) {
      const row = document.createElement("div");
      row.className = "palette-preview";
      featured.palette.forEach((p) => {
        const dot = document.createElement("i");
        dot.style.background = p.hex;
        row.appendChild(dot);
      });
      copy.appendChild(row);
    }

    // main featured image
    const mainLink = document.createElement("a");
    mainLink.className = "feature-main";
    if (featured.hasCaseStudy) {
      mainLink.href = `project.html?id=${cat.featuredWork}`;
    } else {
      mainLink.href = "#";
      mainLink.addEventListener("click", (e) => {
        e.preventDefault();
        openWorkLightbox(cat.featuredWork);
      });
    }
    mainLink.appendChild(U.imageWithFallback(featured.image, featured.title, featured.title, cat.featuredWork));

    // thumbnail column
    const thumbCol = document.createElement("div");
    thumbCol.className = "feature-thumbs";
    cat.thumbWorks.forEach((workId) => {
      const w = DATA.works[workId];
      const a = document.createElement("a");
      if (w.hasCaseStudy) {
        a.href = `project.html?id=${workId}`;
      } else {
        a.href = "#";
        a.addEventListener("click", (e) => {
          e.preventDefault();
          openWorkLightbox(workId);
        });
      }
      a.appendChild(U.imageWithFallback(w.image, w.title, w.title, workId));
      const label = document.createElement("span");
      label.className = "thumb-title";
      label.textContent = w.title;
      a.appendChild(label);
      thumbCol.appendChild(a);
    });

    wrap.appendChild(copy);
    wrap.appendChild(mainLink);
    wrap.appendChild(thumbCol);
    section.appendChild(wrap);
    sectionsRoot.appendChild(section);
  });

  function openWorkLightbox(workId) {
    // build the list from this work's category so prev/next stays relevant
    const cat = DATA.works[workId].category;
    const list = Object.keys(DATA.works)
      .filter((id) => DATA.works[id].category === cat)
      .map((id) => ({ id, ...DATA.works[id] }));
    const startIndex = list.findIndex((w) => w.id === workId);
    U.openLightbox(list, startIndex);
  }
})();
