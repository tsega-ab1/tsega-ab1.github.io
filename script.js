
/* Each feature below is wrapped in its own try/catch so one failing
   piece (e.g. a missing element) can't stop everything after it from
   running. Content is visible by default in the CSS; the lines below
   only ever ADD an entrance animation on top of that — if any piece
   fails, its own catch block reveals everything immediately instead
   of leaving it hidden. */
document.documentElement.classList.add('js-ready');

  try {
    /* ============ NAV TOGGLE ============ */
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
  } catch (e) { console.error('[nav toggle]', e); }

  try {
    /* ============ SCROLL PROGRESS + BACK TO TOP + HERO PARALLAX ============ */
    const scrollBar = document.getElementById('scrollBar');
    const toTop = document.getElementById('toTop');
    const heroShapes = document.querySelectorAll('.hero-shape');
    window.addEventListener('scroll', () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      scrollBar.style.width = pct + '%';
      toTop.classList.toggle('show', h.scrollTop > 600);
      heroShapes.forEach(el => {
        const speed = parseFloat(el.dataset.speed) || 0.15;
        el.style.transform = `translateY(${h.scrollTop * speed}px)`;
      });
    }, { passive:true });
    toTop.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
  } catch (e) { console.error('[scroll progress]', e); }

  let revealObserver;
  try {
    /* ============ SCROLL REVEAL ============ */
    if ('IntersectionObserver' in window) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting){
            entry.target.classList.add('in-view');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold:0.05, rootMargin:'0px' });
      document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    } else {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
    }
  } catch (e) {
    console.error('[scroll reveal]', e);
    // fail safe: never leave content permanently invisible
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
  }

  try {
    /* ============ ACTIVE NAV ON SCROLL ============ */
    const navMap = {};
    document.querySelectorAll('[data-nav]').forEach(a => { navMap[a.getAttribute('href').slice(1)] = a; });
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const link = navMap[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          Object.values(navMap).forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    }, { rootMargin:'-45% 0px -50% 0px' });
    Object.keys(navMap).forEach(id => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });
  } catch (e) { console.error('[active nav]', e); }

  try {
    /* ============ ANIMATED COUNTERS ============ */
    const counters = document.querySelectorAll('.num[data-count]');
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || '';
        const duration = 1100;
        const start = performance.now();
        function tick(now){
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        countObserver.unobserve(el);
      });
    }, { threshold:0.6 });
    counters.forEach(el => countObserver.observe(el));
  } catch (e) { console.error('[counters]', e); }

  try {
    /* ============ MAGNETIC BUTTONS ============ */
    document.querySelectorAll('[data-magnetic]').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.25;
        const y = (e.clientY - r.top - r.height / 2) * 0.35;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = 'translate(0,0)'; });
    });
  } catch (e) { console.error('[magnetic buttons]', e); }

  /* ============ FIBONACCI GRID RHYTHM ============
     Column spans out of an 8-col grid and row spans out of a fixed
     row unit, drawn from the Fibonacci numbers 2, 3, 5, 8 — the same
     identity used to build a Fibonacci spiral (3+5=8, 2+3=5) — so
     rows tile cleanly instead of a random same-size card grid.       */
  const FIB_LAYOUT = [
    { col:8, row:3 },
    { col:5, row:3 },
    { col:3, row:2 },
    { col:3, row:2 },
    { col:2, row:2 },
    { col:5, row:3 },
    { col:3, row:2 },
    { col:2, row:2 },
  ];

  const FALLBACK_PROJECTS = [
    { name:"SelamMind", category:"Product Design · Mobile UI", statement:"A mental health app with real-time chat, voice and video calling — designed for calm, accessible conversations.", link:"#", image:"selammind.jpg" },
    { name:"PAW", category:"UX · Full-Stack", statement:"A personal AI wellness OS spanning web and mobile.", link:"#", image:"paw.jpg" },
    { name:"WeWe", category:"Product Strategy · UI", statement:"A freight-matching platform built for the Ethiopian market.", link:"#", image:"wewe.jpg" },
    { name:"DevAdmin", category:"Graphic Design · Dev Tools", statement:"A terminal developer dashboard with a bold retro-arcade visual identity.", link:"#", image:"devadmin.jpg" }
  ];

  function buildCard(project, index){
    const span = FIB_LAYOUT[index % FIB_LAYOUT.length];

    const card = document.createElement('a');
    card.className = 'card reveal';
    card.href = project.link || '#';
    card.target = '_blank';
    card.rel = 'noopener';
    card.style.gridColumn = `span ${span.col}`;
    card.style.gridRow = `span ${span.row}`;

    const media = document.createElement('div');
    media.className = 'card-media';
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = project.name + ' — cover image placeholder';
    media.appendChild(tag);

    // try to load the real image; keep the placeholder if it fails or is missing
    if (project.image){
      const probe = new Image();
      probe.onload = () => {
        media.style.backgroundImage = `url("assets/images/${project.image}")`;
        media.classList.add('has-image');
      };
      probe.src = `assets/images/${project.image}`;
    }

    // subtle cursor tilt on the image area
    media.addEventListener('mousemove', (e) => {
      const r = media.getBoundingClientRect();
      const rx = ((e.clientY - r.top) / r.height - 0.5) * -6;
      const ry = ((e.clientX - r.left) / r.width - 0.5) * 6;
      media.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    media.addEventListener('mouseleave', () => { media.style.transform = 'rotateX(0) rotateY(0)'; });

    const body = document.createElement('div');
    body.className = 'card-body';
    body.innerHTML = `
      <span class="cat"></span>
      <h3></h3>
      <p></p>
      <span class="card-link">View project ↗</span>
    `;
    body.querySelector('.cat').textContent = project.category || '';
    body.querySelector('h3').textContent = project.name || 'Untitled project';
    body.querySelector('p').textContent = project.statement || '';

    card.appendChild(media);
    card.appendChild(body);
    return card;
  }

  async function loadProjects(){
    const grid = document.getElementById('workGrid');
    if (!grid) { console.error('[projects] #workGrid element not found in the page'); return; }

    let projects = [];
    try {
      const res = await fetch('./projects.json', { cache:'no-store' });
      if (!res.ok) throw new Error('projects.json responded with status ' + res.status);
      projects = await res.json();
      if (!Array.isArray(projects) || projects.length === 0) throw new Error('projects.json is empty or not an array');
    } catch (err) {
      // projects.json can't be loaded this way (e.g. opened directly without
      // a local server, or the file has a JSON syntax error). Falling back
      // to demo data so the layout still shows — projects.json stays the
      // real source once this is hosted or served correctly.
      console.warn('[projects] Could not load projects.json — showing fallback demo data instead.', err);
      projects = FALLBACK_PROJECTS;
    }

    try {
      grid.innerHTML = '';
      projects.forEach((project, i) => {
        const card = buildCard(project, i);
        grid.appendChild(card);
        if (revealObserver) {
          revealObserver.observe(card);
        } else {
          card.classList.add('in-view'); // reveal system unavailable — show immediately
        }
      });
    } catch (err) {
      console.error('[projects] Failed to render project cards', err);
    }
  }

  loadProjects();
