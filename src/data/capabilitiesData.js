import {
  Globe,
  Smartphone
} from "lucide-react";

export const CAPABILITIES = [
  {
    icon: Globe,
    code: "WEB-01",
    title: "Web Platform",
    subtitle: "SaaS dashboards, marketplaces, internal tools",
    description:
      "Full-stack web applications engineered for scale. Authentication, role-based access, payments, and analytics — wired to a real production database from day one.",
    deliverables: [
      "Type-safe React + Node.js application",
      "Postgres schema with migrations",
      "Authentication & role-based permissions",
      "Payment & subscription integration",
      "Deployment pipeline with previews",
      "Analytics & error monitoring",
    ],
    cta: "Scope a web platform",
    href: "https://wa.me/917980669925?text=Hi%20beyondten%2C%20I'd%20like%20to%20scope%20a%20web%20platform%20engagement.",
  },
  {
    icon: Smartphone,
    code: "MOB-01",
    title: "Mobile MVP",
    subtitle: "iOS & Android from a single codebase",
    description:
      "Production-ready cross-platform applications built on React Native and Expo. Native UX, real backend integration, ready for TestFlight and Play Console submission.",
    deliverables: [
      "React Native + Expo application",
      "iOS & Android builds",
      "Backend API & data layer",
      "Push notifications & deep links",
      "TestFlight / Play Console submission",
      "OTA update channel",
    ],
    cta: "Scope a mobile MVP",
    href: "https://wa.me/917980669925?text=Hi%20beyondten%2C%20I'd%20like%20to%20scope%20a%20mobile%20MVP%20engagement.",
  },
];
