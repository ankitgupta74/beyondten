export const LIVE_PROJECTS = [
  {
    id: "libra-os",
    title: "LibraOS",
    category: "Web App",
    description:
      "An all-in-one SaaS dashboard for library owners — seat tracking, fee collection, and automated alerts.",
    image: "/LibraOS.png",
    link: "https://libra-os-landing.vercel.app/",
    accentColor: "blue",
  },
  {
    id: "dotnovexure",
    title: "dotnovexure",
    category: "Website",
    description:
      "A sharp, professional website built to capture leads from the moment it went live.",
    image: "/dotnovexure.png",
    link: "https://dotnovexure.vercel.app/",
    accentColor: "violet",
  },
];

export const ACCENT_MAP = {
  blue: {
    pill: "bg-blue-50 text-blue-600",
    dot: "bg-blue-600",
    hover: "group-hover:text-blue-600",
    glow: "hover:shadow-[0_12px_40px_-4px_rgba(59,130,246,0.12)]",
    placeholder: "from-blue-50 to-slate-50",
    placeholderText: "text-blue-300",
  },
  violet: {
    pill: "bg-violet-50 text-violet-600",
    dot: "bg-violet-600",
    hover: "group-hover:text-violet-600",
    glow: "hover:shadow-[0_12px_40px_-4px_rgba(139,92,246,0.12)]",
    placeholder: "from-violet-50 to-slate-50",
    placeholderText: "text-violet-300",
  },
};
