(function () {
  const DATA = window.PORTFOLIO_DATA;
  const U = window.PortfolioUtil;

  const allCategories = Array.from(
    new Set(Object.values(DATA.works).map((w) => w.category))
  );

  const params = new URLSearchParams(window.location.search);
  let active = params.get("cat") || "All";
  if (!allCategories.includes(active)) active = "All";

  const filterRow = document.getElementById("filterRow");
  const grid = document.getElementById("worksGrid");

  filterRow.innerHTML = ["All", ...allCategories]
    .map((cat) => `<button class="filter-chip${cat === active ? " is-active" : ""}" data-cat="${cat}">${cat}</button>`)
    .join("");

  filterRow.querySelectorAll(".filter-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      active = btn.dataset.cat;
      filterRow.querySelectorAll(".filter-chip").forEach((b) => b.classList.toggle("is-active", b === btn));
      renderGrid();
    });
  });

  function currentList() {
    const ids = Object.keys(DATA.works).filter(
      (id) => active === "All" || DATA.works[id].category === active
    );
    return ids.map((id) => ({ id, ...DATA.works[id] }));
  }

  function renderGrid() {
    grid.innerHTML = "";
    const list = currentList();
    list.forEach((work, idx) => {
      const btn = document.createElement("button");
      btn.className = "work-tile";
      btn.appendChild(U.imageWithFallback(work.image, work.title, work.title, work.id));
      const meta = document.createElement("div");
      meta.className = "tile-meta";
      meta.innerHTML = `<span class="title">${work.title}</span><span>${work.year}</span>`;
      btn.appendChild(meta);
      btn.addEventListener("click", () => {
        if (work.hasCaseStudy) {
          window.location.href = `project.html?id=${work.id}`;
        } else {
          U.openLightbox(list, idx);
        }
      });
      grid.appendChild(btn);
    });
  }

  renderGrid();
})();
