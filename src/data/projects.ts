export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  tech: string[];
  highlights: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  status: "production" | "in-progress";
  year: string;
}

export const projects: Project[] = [
  {
    id: "starx-social-pilot",
    name: "StarX Social Pilot",
    description: "AI-powered multi-platform blog publishing platform.",
    longDescription:
      "A production-grade platform enabling AI-assisted content generation and seamless publishing across multiple sites. Built for scale with Redis caching and containerized Docker deployment.",
    tech: ["Next.js", "FastAPI", "MongoDB", "Redis", "Docker"],
    highlights: [
      "AI content generation pipeline",
      "Multi-site publishing architecture",
      "Redis-backed caching layer",
      "Docker containerized deployment",
    ],
    image: "/previews/starx-social-pilot.png",
    status: "production",
    year: "2025",
  },
  {
    id: "peggy-deadpool-coin",
    name: "Peggy The Deadpool Coin",
    description: "High-performance Web3 presale platform.",
    longDescription:
      "A full-featured Web3 presale platform with wallet integration, live tokenomics dashboard, and presale progress tracking. Optimized for performance with server-side rendering.",
    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    highlights: [
      "Wallet connect integration",
      "Live presale dashboard",
      "Tokenomics section",
      "Optimized SSR performance",
    ],
    image: "/previews/peggy-deadpool-coin.png",
    status: "production",
    year: "2025",
  },
  {
    id: "moraj-enterprises",
    name: "Moraj Enterprises",
    description: "Workforce solutions business platform.",
    longDescription:
      "A comprehensive workforce solutions platform with dynamic job listings, role-based admin management portal, and lead generation. Designed to drive business growth through a professional digital presence.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    highlights: [
      "Dynamic job listings",
      "Role-based admin management",
      "Lead generation forms",
      "SEO-optimized business site",
    ],
    image: "/previews/moraj-enterprises.png",
    status: "production",
    year: "2024",
  },
];
