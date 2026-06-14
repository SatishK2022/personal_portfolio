"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import type { Variants } from "motion/react";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, GitBranch } from "lucide-react";
import { projects } from "@/data/projects";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: {
      duration: 0.55, delay: i * 0.13,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }),
};

export default function SelectedWork() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" ref={ref} className="border-t border-white/[0.07] py-28">
      <div className="max-w-[860px] mx-auto px-6 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Selected Work</p>
          <h2 className="gradient-text text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-[-0.04em] leading-[1.1] mb-3">
            Things I&apos;ve built
          </h2>
          <p className="text-[0.9375rem] text-[#71717a] font-light max-w-[420px] leading-relaxed">
            Production projects — real systems, real users, real impact.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectRow({
  project, index, inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      className="project-row py-10 group"
    >
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-8 items-start">

        {/* Content */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-[1.0625rem] font-semibold text-[#fafafa] tracking-[-0.025em] transition-colors duration-200 group-hover:text-[#fbbf24]">
              {project.name}
            </h3>
            <span
              className="text-[0.625rem] font-bold text-[#f59e0b] rounded-full px-2.5 py-[0.18rem] tracking-[0.07em] uppercase"
              style={{ background: "var(--accent-muted)", border: "1px solid var(--accent-border)" }}
            >
              {project.year}
            </span>
          </div>

          <p className="text-[0.9rem] text-[#a1a1aa] leading-[1.75] mb-5 max-w-[480px]">
            {project.longDescription}
          </p>

          <ul className="flex flex-col gap-2 mb-6">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-[0.85rem] text-[#d4d4d8]">
                <span className="mt-[0.5em] w-[5px] h-[5px] rounded-full bg-[#f59e0b] shrink-0 opacity-60" />
                {h}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>

          <div className="flex gap-5 items-center">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[0.8125rem] text-[#71717a] hover:text-[#f59e0b] transition-colors duration-200 font-medium">
                <ExternalLink size={13} /> Live Site
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[0.8125rem] text-[#71717a] hover:text-[#f59e0b] transition-colors duration-200 font-medium">
                <GitBranch size={13} /> Source
              </a>
            )}
            {!project.liveUrl && !project.githubUrl && (
              <span className="inline-flex items-center gap-1.5 text-[0.8125rem] text-[#52525b] font-medium">
                <ArrowUpRight size={13} /> In Production
              </span>
            )}
          </div>
        </div>

        {/* Preview */}
        <div
          className="hidden sm:block relative w-[260px] h-[162px] rounded-[10px] overflow-hidden shrink-0 transition-all duration-400 group-hover:shadow-[0_0_0_1px_rgba(245,158,11,0.25),0_12px_40px_rgba(0,0,0,0.6)]"
          style={{ border: "1px solid rgba(255,255,255,0.09)", background: "rgba(255,255,255,0.03)" }}
        >
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            fill
            className="object-cover opacity-70 transition-all duration-500 group-hover:opacity-100 group-hover:scale-[1.04]"
            sizes="260px"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
        </div>

      </div>
    </motion.div>
  );
}
