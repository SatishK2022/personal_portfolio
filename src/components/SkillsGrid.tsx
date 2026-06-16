"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { skillCategories } from "@/data/skills";

export default function SkillsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="border-t border-white/[0.07] py-28">
      <div className="max-w-[860px] mx-auto px-6 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Expertise</p>
          <h2 className="gradient-text text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-[-0.04em] leading-[1.1] mb-3">
            Engineering Expertise
          </h2>
          <p className="text-[0.9375rem] text-[#71717a] font-light">
            Technologies I use to ship production software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5, delay: i * 0.09,
                ease: [0.21, 0.47, 0.32, 0.98] as const,
              }}
              className="glass-card p-5 group/card hover:border-[#f59e0b]/20 hover:shadow-[0_8px_30px_rgb(245,158,11,0.02)]"
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.07]">
                <span
                  className="w-[6px] h-[6px] rounded-full bg-[#f59e0b] shrink-0 transition-transform duration-300 group-hover/card:scale-125"
                  style={{ boxShadow: "0 0 6px rgba(245,158,11,0.55)" }}
                />
                <h3 className="text-[0.7rem] font-bold tracking-[0.09em] uppercase text-[#d4d4d8]">
                  {category.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="tech-badge !py-[0.25rem] !px-2.5 !text-[0.725rem] font-normal hover:border-[#f59e0b]/40 hover:text-[#fafafa] transition-colors duration-200 select-none cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
