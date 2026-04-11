export const PHASES = [
  {
    code: "P-00",
    name: "Discovery",
    duration: "Pre-sprint",
    body: "A planning session to align on scope, success criteria, and the architectural shape of the build. We translate your idea into an engineering brief.",
  },
];

export const TIMELINE = [
  {
    day: "01",
    range: "Day 1",
    title: "Design system & brand foundation",
    desc: "Color, typography, components, and tokens locked into a shared design library.",
    deliverable: "Design System",
  },
  {
    day: "02",
    range: "Day 2",
    title: "Live landing surface",
    desc: "Public-facing landing page deploys to a real URL and evolves with the product.",
    deliverable: "Landing Page",
  },
  {
    day: "03",
    range: "Day 3",
    title: "Information architecture",
    desc: "Sitemap, user flows, and screen inventory documented and approved.",
    deliverable: "Sitemap",
  },
  {
    day: "04",
    range: "Day 4",
    title: "Data architecture",
    desc: "Database schema designed, deployed, and seeded. Migrations versioned from day one.",
  },
  {
    day: "05–06",
    range: "Days 5–6",
    title: "Backend & API layer",
    desc: "Authentication, business logic, and API endpoints. The engine under the hood.",
  },
  {
    day: "07–09",
    range: "Days 7–9",
    title: "Frontend implementation",
    desc: "All screens built, wired to the API, and refined to production quality.",
  },
  {
    day: "10",
    range: "Day 10",
    title: "Production deployment",
    desc: "Final QA, deployment to production, monitoring setup, and handover. The product ships.",
    deliverable: "Live Product",
    isLast: true,
  },
];
