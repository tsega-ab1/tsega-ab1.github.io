// Design Portfolio — data.
// Add a new piece of work by adding an entry to WORKS.
// Add a new landing-page section by adding an entry to CATEGORIES
// (only needs a featuredWork + a couple of thumbWorks to appear).
// Everything else (works.html grid, project.html case studies) is
// generated from this file — nothing else needs to change.

window.PORTFOLIO_DATA = {
  hero: {
    kicker: "Design Portfolio",
    titleLine1: "Visual Ideas,",
    titleLine2: "Real Impact.",
    body: "A collection of my graphic design work — from book covers and illustrations to branding and visual identities. Each piece tells a story, with purpose.",
    image: "assets/works/hero.jpg",
  },

  categories: [
    {
      id: "posters",
      number: "01",
      label: "Posters",
      kicker: "Create. Explore. Express.",
      description: "Cultural and event posters that turn a single idea into one striking image.",
      bg: "#12140F",
      theme: "dark",
      featuredWork: "poster-culture",
      thumbWorks: ["poster-timkat", "poster-coffee"],
    },
    {
      id: "book-covers",
      number: "02",
      label: "Book Covers",
      kicker: "Stories in every cover",
      description: "Conceptual and editorial book covers designed to capture emotion, mood, and the essence of the story.",
      bg: "#16241B",
      theme: "dark",
      featuredWork: "cover-last-path",
      thumbWorks: ["cover-silent-voices", "cover-dreamer", "cover-folktales"],
    },
    {
      id: "illustrations",
      number: "03",
      label: "Illustrations",
      kicker: "Ideas, emotions, worlds",
      description: "A mix of digital and traditional illustrations that bring stories, culture and imagination to life.",
      bg: "#F2EEE4",
      theme: "light",
      featuredWork: "illus-highland-castle",
      thumbWorks: ["illus-sketch-castle", "illus-portrait-leaves"],
    },
    {
      id: "branding",
      number: "04",
      label: "Branding",
      kicker: "Identities that connect",
      description: "Logos, color systems, and visual identities that help brands tell their story and build lasting connections.",
      bg: "#0B0D09",
      theme: "dark",
      featuredWork: "brand-zena",
      thumbWorks: ["brand-abay", "brand-mesfin", "brand-habesha"],
    },
  ],

  // categories shown in the "view all" grid but without their own
  // landing-page section yet — add a `categories` entry above and
  // these appear there automatically once one does.
  extraCategories: ["Social Media", "Art"],

  works: {
    "poster-culture": {
      title: "Ethiopian Culture",
      category: "Posters",
      year: "2026",
      image: "assets/works/poster-culture.jpg",
      hasCaseStudy: false,
    },
    "poster-timkat": {
      title: "Timkat Festival",
      category: "Posters",
      year: "2026",
      image: "assets/works/poster-timkat.jpg",
      hasCaseStudy: false,
    },
    "poster-coffee": {
      title: "Coffee Ceremony",
      category: "Posters",
      year: "2025",
      image: "assets/works/poster-coffee.jpg",
      hasCaseStudy: false,
    },

    "cover-last-path": {
      title: "The Last Path",
      category: "Book Covers",
      year: "2026",
      image: "assets/works/cover-last-path.jpg",
      hasCaseStudy: false,
    },
    "cover-silent-voices": {
      title: "Silent Voices",
      category: "Book Covers",
      year: "2025",
      image: "assets/works/cover-silent-voices.jpg",
      hasCaseStudy: false,
    },
    "cover-dreamer": {
      title: "The Dreamer",
      category: "Book Covers",
      year: "2026",
      image: "assets/works/cover-dreamer.jpg",
      hasCaseStudy: false,
    },
    "cover-folktales": {
      title: "Habesha Folktales",
      category: "Book Covers",
      year: "2024",
      image: "assets/works/cover-folktales.jpg",
      hasCaseStudy: false,
    },

    "illus-highland-castle": {
      title: "Kingdom on the Cliffs",
      category: "Illustrations",
      year: "2026",
      image: "assets/works/illus-highland-castle.jpg",
      hasCaseStudy: false,
    },
    "illus-sketch-castle": {
      title: "Hilltop Sketch",
      category: "Illustrations",
      year: "2025",
      image: "assets/works/illus-sketch-castle.jpg",
      hasCaseStudy: false,
    },
    "illus-portrait-leaves": {
      title: "Among the Leaves",
      category: "Illustrations",
      year: "2026",
      image: "assets/works/illus-portrait-leaves.jpg",
      hasCaseStudy: false,
    },

    "brand-zena": {
      title: "Zena — Wellness & Lifestyle",
      category: "Branding",
      year: "2026",
      image: "assets/works/brand-zena.jpg",
      hasCaseStudy: true,
      theme: "light",
      client: "Zena Wellness",
      projectType: "Branding / Print Design",
      concept: {
        eyebrow: "Brand Identity",
        headline: "Nature, Balance and Self-Care",
        description: "The design draws inspiration from nature and wellness, using organic shapes and soft, earthy colors to reflect calm, balance and harmony. The clean layout ensures the brand feels modern, trustworthy and approachable.",
        traits: ["Natural feel", "Clean layout", "Memorable identity"],
      },
      palette: [
        { hex: "#6BBF71", label: "Leaf" },
        { hex: "#A7C4A0", label: "Sage" },
        { hex: "#F7E9D7", label: "Cream" },
        { hex: "#E9A89A", label: "Peach" },
        { hex: "#3A4A3F", label: "Pine" },
      ],
      typography: [
        { name: "Montserrat", role: "Headings" },
        { name: "Inter", role: "Body" },
      ],
      mockups: [
        { image: "assets/works/brand-zena-mockup-1.jpg", caption: "Card stack" },
        { image: "assets/works/brand-zena-mockup-2.jpg", caption: "Standing card" },
        { image: "assets/works/brand-zena-mockup-3.jpg", caption: "Contact side" },
      ],
      details: [
        { image: "assets/works/brand-zena-detail-1.jpg", caption: "Embossed logo" },
        { image: "assets/works/brand-zena-detail-2.jpg", caption: "Colored edge" },
        { image: "assets/works/brand-zena-detail-3.jpg", caption: "Organic shapes" },
      ],
    },

    "brand-tsega-card": {
      title: "TSEGA — Personal Brand Identity",
      category: "Branding",
      year: "2026",
      image: "assets/works/brand-tsega-card.jpg",
      hasCaseStudy: true,
      theme: "dark",
      client: "Personal project",
      projectType: "Branding / Print Design",
      concept: {
        eyebrow: "Business Card",
        headline: "Brand Identity in Your Hand",
        description: "A clean and modern business card design for a creative brand, combining simplicity, elegance and a bold visual identity.",
        traits: ["Simple", "Bold", "Memorable"],
      },
      palette: [
        { hex: "#C9D94A", label: "Lime" },
        { hex: "#12140F", label: "Ink" },
        { hex: "#F2EEE4", label: "Paper" },
        { hex: "#B08D3E", label: "Gold foil" },
      ],
      typography: [
        { name: "Archivo", role: "Headings" },
        { name: "Space Grotesk", role: "Labels" },
      ],
      mockups: [
        { image: "assets/works/brand-tsega-mockup-1.jpg", caption: "Front side (brand)" },
        { image: "assets/works/brand-tsega-mockup-2.jpg", caption: "Back side (contact)" },
        { image: "assets/works/brand-tsega-mockup-3.jpg", caption: "Color variations" },
        { image: "assets/works/brand-tsega-mockup-4.jpg", caption: "Details" },
      ],
      details: [],
    },

    "brand-abay": {
      title: "Abay Travel & Tours",
      category: "Branding",
      year: "2025",
      image: "assets/works/brand-abay.jpg",
      hasCaseStudy: false,
    },
    "brand-mesfin": {
      title: "Mesfin Construction",
      category: "Branding",
      year: "2025",
      image: "assets/works/brand-mesfin.jpg",
      hasCaseStudy: false,
    },
    "brand-habesha": {
      title: "Habesha Coffee",
      category: "Branding",
      year: "2024",
      image: "assets/works/brand-habesha.jpg",
      hasCaseStudy: false,
    },

    "social-newyear": {
      title: "New Year Campaign",
      category: "Social Media",
      year: "2026",
      image: "assets/works/social-newyear.jpg",
      hasCaseStudy: false,
    },
    "social-launch": {
      title: "Launch Week Carousel",
      category: "Social Media",
      year: "2025",
      image: "assets/works/social-launch.jpg",
      hasCaseStudy: false,
    },

    "art-ochre": {
      title: "Study in Ochre",
      category: "Art",
      year: "2026",
      image: "assets/works/art-ochre.jpg",
      hasCaseStudy: false,
    },
    "art-lalibela": {
      title: "Lalibela, Ink",
      category: "Art",
      year: "2024",
      image: "assets/works/art-lalibela.jpg",
      hasCaseStudy: false,
    },
  },
};
