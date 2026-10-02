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
      id: "book-covers",
      number: "01",
      label: "Book Covers",
      kicker: "Stories in every cover",
      description:
        "Conceptual and editorial book covers designed to capture emotion, mood, and the essence of the story.",
      bg: "#10221f",
      theme: "dark",
      featuredWork: "cover-last-path",
      thumbWorks: ["cover-silent-voices", "cover-dreamer", "cover-folktales"],
    },
    {
      id: "illustrations",
      number: "02",
      label: "Illustrations",
      kicker: "Ideas, emotions, worlds",
      description:
        "A mix of digital and traditional illustrations that bring stories, culture and imagination to life.",
      bg: "#f1ede3",
      theme: "light",
      featuredWork: "illus-highland-castle",
      thumbWorks: ["illus-sketch-castle", "illus-portrait-leaves"],
    },
    {
      id: "branding",
      number: "03",
      label: "Branding",
      kicker: "Identities that connect",
      description:
        "Logos, color systems, and visual identities that help brands tell their story and build lasting connections.",
      bg: "#0b1715",
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
      title: "Gena at Lalibela",
      category: "Posters",
      year: "2026",
      image: "assets/works/poster-timkat.jpg",
      hasCaseStudy: false,
    },
    "poster-coffee": {
      title: "Mursi Tribe",
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
    "girl-running-leaves": {
      title: "Among the Leaves",
      category: "Illustrations",
      year: "2026",
      image: "assets/works/girl-running-leaves.jpg",
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
        description:
          "The design draws inspiration from nature and wellness, using organic shapes and soft, earthy colors to reflect calm, balance and harmony. The clean layout ensures the brand feels modern, trustworthy and approachable.",
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
        {
          image: "assets/works/brand-zena-mockup-1.jpg",
          caption: "Card stack",
        },
        {
          image: "assets/works/brand-zena-mockup-2.jpg",
          caption: "Standing card",
        },
        {
          image: "assets/works/brand-zena-mockup-3.jpg",
          caption: "Contact side",
        },
      ],
      details: [
        {
          image: "assets/works/brand-zena-detail-1.jpg",
          caption: "Embossed logo",
        },
        {
          image: "assets/works/brand-zena-detail-2.jpg",
          caption: "Colored edge",
        },
        {
          image: "assets/works/brand-zena-detail-3.jpg",
          caption: "Organic shapes",
        },
      ],
    },

    "brand-tsega-card": {
      title: "Tse — Personal Brand Identity",
      category: "Branding",
      year: "2026",
      image: "assets/works/brand-tsega-card.jpg",
      hasCaseStudy: true,
      theme: "dark",
      client: "Personal project",
      projectType: "Branding / Print Design",
      concept: {
        eyebrow: "Business Card",
        headline: "Ideas Into Visuals",
        description:
          "A refreshed personal identity built around a bold leaf-mark monogram and a confident navy-and-orange palette — designed to read clearly as both a graphic designer and a frontend developer.",
        traits: ["Bold", "Modern", "Memorable"],
      },
      palette: [
        { hex: "#14273F", label: "Navy" },
        { hex: "#F26B1D", label: "Orange" },
        { hex: "#F1ECE2", label: "Paper" },
        { hex: "#1B1B1B", label: "Ink" },
      ],
      typography: [
        { name: "Poppins", role: "Headings" },
        { name: "Inter", role: "Body" },
      ],
      mockups: [
        { image: "assets/works/brand-tsega-card.jpg", caption: "Front & back" },
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
    "brand-habesha-beauty": {
      title: "Habesha Beauty Rituals",
      category: "Branding",
      year: "2026",
      image: "assets/works/brand-habesha-beauty.jpg",
      hasCaseStudy: false,
    },
    "brand-zena-natural": {
      title: "Zena Natural Skincare",
      category: "Branding",
      year: "2026",
      image: "assets/works/brand-zena-natural.jpg",
      hasCaseStudy: false,
    },
    "brand-zenea": {
      title: "Zenéa — Natural Skincare",
      category: "Branding",
      year: "2026",
      image: "assets/works/brand-zenea.jpg",
      hasCaseStudy: false,
    },
    "brand-qenet": {
      title: "Qenet — Modern Ethiopian Wear",
      category: "Branding",
      year: "2026",
      image: "assets/works/brand-qenet.jpg",
      hasCaseStudy: false,
    },
    "brand-skyline": {
      title: "Skyline Properties",
      category: "Branding",
      year: "2026",
      image: "assets/works/brand-skyline.jpg",
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

    "brand-selam": {
      title: "Selam Flower Shop",
      category: "Branding",
      year: "2026",
      image: "assets/works/brand-selam-hero.jpg",
      hasCaseStudy: true,
      theme: "dark",
      client: "Selam Flower Shop",
      projectType: "Branding / Packaging",
      concept: {
        eyebrow: "Brand Identity",
        headline: "Flowers for Every Feeling",
        description:
          "An elegant tulip mark and a rich scarlet-to-blush palette carry the brand from storefront signage to gift packaging, aiming for a warm, romantic feel with a premium finish.",
        traits: ["Elegant", "Feminine", "Memorable"],
      },
      palette: [
        { hex: "#D0021B", label: "Scarlet Red" },
        { hex: "#B10F67", label: "Magenta" },
        { hex: "#E89BB7", label: "Rose Pink" },
        { hex: "#F7D7E5", label: "Blush Pink" },
      ],
      typography: [
        { name: "Playfair Display", role: "Headings" },
        { name: "Inter", role: "Body" },
      ],
      mockups: [
        {
          image: "assets/works/brand-selam-colors.jpg",
          caption: "Brand color system",
        },
        { image: "assets/works/brand-selam-bag.jpg", caption: "Shopping bag" },
        {
          image: "assets/works/brand-selam-cards.jpg",
          caption: "Business cards",
        },
        {
          image: "assets/works/brand-selam-sign.jpg",
          caption: "Storefront sign",
        },
      ],
      details: [],
    },

    "brand-buna": {
      title: "Buna — Ethiopian Coffee Cafe",
      category: "Branding",
      year: "2026",
      image: "assets/works/brand-buna-board.jpg",
      hasCaseStudy: true,
      theme: "dark",
      client: "Buna Ethiopian Coffee Cafe",
      projectType: "Branding / Packaging",
      concept: {
        eyebrow: "Brand Identity",
        headline: "Pure Origin, Rich Flavor",
        description:
          "A mountain-and-coffee-bean mark paired with an Amharic wordmark (ቡና) roots the brand in Ethiopian coffee culture, carried through an earthy palette across cups, bags and signage.",
        traits: ["Cultural", "Warm", "Authentic"],
      },
      palette: [
        { hex: "#3B2418", label: "Coffee Brown" },
        { hex: "#B88B5A", label: "Earth Gold" },
        { hex: "#556B4F", label: "Highland Green" },
        { hex: "#EBDCC8", label: "Sand Beige" },
      ],
      typography: [
        { name: "Marcellus", role: "Headings" },
        { name: "Inter", role: "Body" },
      ],
      mockups: [
        {
          image: "assets/works/brand-buna-cup-bag.jpg",
          caption: "Cup & coffee bag",
        },
        {
          image: "assets/works/brand-buna-sign-cards.jpg",
          caption: "Signage & business cards",
        },
      ],
      details: [],
    },
  },
};
