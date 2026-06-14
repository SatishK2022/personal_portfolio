export interface Highlight {
  id: string;
  title: string;
  description: string;
}

export const highlights: Highlight[] = [
  {
    id: "scalable-apps",
    title: "Production-Grade Applications",
    description:
      "Built and shipped scalable web applications serving real users, from initial architecture to deployment.",
  },
  {
    id: "redis-caching",
    title: "API Performance Optimization",
    description:
      "Reduced API response times significantly through Redis caching strategies and query optimization.",
  },
  {
    id: "wallet-auth",
    title: "Web3 Authentication",
    description:
      "Implemented wallet-based authentication systems enabling seamless Web3 user onboarding.",
  },
  {
    id: "admin-dashboards",
    title: "Admin Dashboard Systems",
    description:
      "Developed role-based admin dashboards with granular permission controls and data management interfaces.",
  },
  {
    id: "docker",
    title: "Containerized Deployments",
    description:
      "Containerized multiple applications using Docker, ensuring consistent, reproducible production environments.",
  },
  {
    id: "rest-apis",
    title: "Scalable REST API Design",
    description:
      "Designed and implemented scalable REST APIs following best practices for security, performance, and maintainability.",
  },
];
