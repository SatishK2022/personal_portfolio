"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { experience } from "@/data/experience";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="border-t border-white/[0.07] py-28">
      <div className="max-w-[860px] mx-auto px-6 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Experience</p>
          <h2 className="gradient-text text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-[-0.04em] leading-[1.1] mb-3">
            Where I&apos;ve worked
          </h2>
          <p className="text-[0.9375rem] text-[#71717a] font-light">
            Building real products with real teams.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-0 top-3 bottom-0 w-px bg-gradient-to-b from-white/[0.12] via-white/[0.06] to-transparent" />

          <div className="flex flex-col gap-6">
            {experience.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.55, delay: i * 0.15,
                  ease: [0.21, 0.47, 0.32, 0.98] as const,
                }}
                className="relative pl-10"
              >
                {/* Timeline dot with glowing pulse for current role */}
                <div className="absolute -left-[9.5px] top-[17px] w-[20px] h-[20px] flex items-center justify-center pointer-events-none">
                  {item.current && (
                    <motion.div
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.6, 0, 0.6],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 rounded-full bg-[#f59e0b]/30 border border-[#f59e0b]/40"
                    />
                  )}
                  <div
                    className="w-[10px] h-[10px] rounded-full z-[1] transition-all duration-300"
                    style={{
                      background: item.current
                        ? "linear-gradient(135deg, #fbbf24, #f59e0b)"
                        : "rgba(255,255,255,0.15)",
                      border: item.current
                        ? "2px solid rgba(245,158,11,0.4)"
                        : "2px solid rgba(255,255,255,0.1)",
                      boxShadow: item.current ? "0 0 12px rgba(245,158,11,0.6)" : "none",
                    }}
                  />
                </div>

                {/* Card */}
                <div className="glass-card p-6 group">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-[1rem] font-semibold text-[#fafafa] tracking-[-0.02em] mb-1 group-hover:text-[#fbbf24] transition-colors duration-200">
                        {item.company}
                      </h3>
                      <p className="text-[0.8375rem] text-[#f59e0b] font-medium">{item.role}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[0.775rem] text-[#52525b] block whitespace-nowrap">
                        {item.period}
                      </span>
                      {item.current && (
                        <span
                          className="inline-block mt-1.5 text-[0.6rem] font-bold text-[#f59e0b] tracking-[0.1em] uppercase px-2 py-[0.2rem] rounded-full"
                          style={{ background: "var(--accent-muted)", border: "1px solid var(--accent-border)" }}
                        >
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2.5">
                    {item.responsibilities.map((r, ri) => (
                      <li key={ri} className="flex items-start gap-3 text-[0.875rem] text-[#a1a1aa] leading-[1.65]">
                        <span className="mt-[0.55em] w-[4px] h-[4px] rounded-full bg-[#f59e0b] shrink-0 opacity-40" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
