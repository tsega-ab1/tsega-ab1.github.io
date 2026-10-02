// Add a project by adding an entry here — projects.html renders this list
// directly, in order. Set `comingSoon: true` for the "Coming Soon" shelf
// instead of a full case-study row.

window.PROJECTS = [
  {
    number: "Project 01",
    title: "AMR Intelligence Platform",
    type: "Data visualization platform — portfolio project",
    team: "Individual",
    tech: "HTML, CSS, JavaScript, SVG",
    description: "An evidence map of antimicrobial resistance across Africa — filterable by pathogen, antibiotic, specimen and year, with resistance timelines, an antibiotic × pathogen matrix, and records linked back to their source publication.",
    image: "assets/images/amr-intelligence.jpg",
    link: null,
    linkLabel: "Not yet deployed",
  },
  {
    number: "Project 02",
    title: "Design Portfolio Gallery",
    type: "Graphic design showcase",
    team: "Individual",
    tech: "HTML, CSS, JavaScript (JSON-driven)",
    description: "A gallery for posters, book covers, illustration and brand identity work — numbered category sections, a filterable all-work grid, and case-study pages with concept notes, color palette and typography.",
    image: "assets/images/design-portfolio.jpg",
    link: "https://tsega-ab1.github.io/frontend-projects/07-design-portfolio/",
    linkLabel: "Visit Gallery →",
  },
  {
    number: "Project 03",
    title: "Hotel Booking Websites",
    type: "Freelance client websites",
    team: "Individual (freelance)",
    tech: "HTML, CSS, JavaScript",
    description: "Three static hotel-booking sites of increasing complexity: The Verandah (5-page boutique hotel with multi-step booking), Harborline (live-filtering room search), and Meridian Stays (booking site plus an admin dashboard with revenue and occupancy charts).",
    image: "assets/images/hotel-sites.jpg",
    link: null,
    linkLabel: "Private client deliverables",
  },
  {
    number: "Project 04",
    title: "Retro Terminal Music Visualizer",
    type: "Personal creative / technical project",
    team: "Individual",
    tech: "Python, Bash, Termux (Android)",
    description: "A terminal music visualizer that runs on an Android phone via Termux — renders a portrait as Braille-character ASCII art, with animated, audio-synced lyrics layered on top and per-letter adaptive coloring.",
    image: "assets/images/termux-visualizer.jpg",
    link: null,
    linkLabel: "Runs locally in Termux",
  },
  {
    number: "Project 05",
    title: "Startup Pitch Decks — EAII Incubation Program",
    type: "Programmatic presentation design",
    team: "Individual",
    tech: "Node.js, pptxgenjs",
    description: "Two investor pitch decks built programmatically rather than by hand — COREPACK (Android-first edge-AI hardware) and Tsega (an offline-first maternal health platform) — each with a scripted slide-by-slide visual QA pass.",
    image: "assets/images/pitch-decks.jpg",
    link: null,
    linkLabel: "Built for EAII 2026",
  },
];

window.COMING_SOON = [
  {
    title: "PAW — Personal Life OS",
    status: "In development",
    focus: "Personal productivity & life management",
    description: "A personal \"life OS\" monorepo: a Node/SQLite backend, a React web app, and an Expo React Native mobile app, kept in sync.",
  },
];
