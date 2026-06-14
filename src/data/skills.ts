export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "React Native"],
  },
  {
    id: "backend",
    label: "Backend",
    skills: ["Node.js", "Express", "FastAPI", "MongoDB", "MySQL", "Redis"],
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    skills: ["Docker", "CI/CD", "Nginx", "GCP", "GitHub"],
  },
  {
    id: "web3",
    label: "Web3",
    skills: [
      "Ethers.js",
      "Web3.js",
      "Wallet Authentication",
      "Smart Contract Integration",
    ],
  },
];
