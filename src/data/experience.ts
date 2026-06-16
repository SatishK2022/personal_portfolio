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
    id: "wish-geeks",
    company: "Wish Geeks Tech Serve",
    role: "Full Stack Developer",
    period: "May 2026 – Present",
    current: true,
    responsibilities: [
      "Developing and maintaining full-stack web applications using React.js, Next.js, Node.js, and MongoDB",
      "Designing and implementing scalable RESTful APIs and backend services for business-critical workflows",
      "Integrating Redis for caching, session management, and performance optimization",
      "Implementing message queue systems for asynchronous processing, notifications, and background job execution",
      "Integrating Razorpay payment gateway, handling payment flows, and implementing secure webhook processing",
      "Implementing Shiprocket APIs for order fulfillment, shipment tracking, and logistics automation",
      "Collaborating with cross-functional teams to deliver responsive, scalable, and maintainable applications"
    ]
  },
  {
    id: "starx-ai",
    company: "StarX AI Technology",
    role: "Full Stack Developer",
    period: "Apr 2025 – Apr 2026",
    current: false,
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
];
