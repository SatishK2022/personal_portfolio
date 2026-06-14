export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  current: boolean;
  responsibilities: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "starx-ai",
    company: "StarX AI Technology",
    role: "Full Stack Developer",
    period: "Apr 2025 – Present",
    current: true,
    responsibilities: [
      "Built and maintained full-stack web applications using Next.js and Node.js",
      "Developed Web3 integrations including wallet authentication flows",
      "Designed and implemented role-based admin dashboards",
      "Optimized backend performance with Redis caching strategies",
      "Containerized applications using Docker for consistent deployments",
      "Integrated blockchain smart contracts with frontend interfaces",
    ],
  },
  {
    id: "asha-tech",
    company: "Asha Tech",
    role: "Full Stack Developer",
    period: "May 2024 – Apr 2025",
    current: false,
    responsibilities: [
      "Developed responsive React applications with TypeScript",
      "Designed and maintained RESTful APIs with Express.js",
      "Implemented JWT-based authentication and authorization",
      "Optimized backend performance and database query efficiency",
      "Collaborated in Agile sprints with cross-functional teams",
    ],
  },
  {
    id: "pixel-tech",
    company: "Pixel Tech Labs",
    role: "Junior Software Engineer",
    period: "Jul 2023 – May 2024",
    current: false,
    responsibilities: [
      "Developed client-facing user interfaces using React and Tailwind CSS",
      "Collaborated on responsive design implementations and cross-browser testing",
      "Integrated third-party APIs for processing payment workflows and messaging",
      "Wrote comprehensive unit and integration tests using Jest and React Testing Library",
      "Optimized site performance, improving Google Lighthouse SEO score to 98+",
    ],
  },
];
