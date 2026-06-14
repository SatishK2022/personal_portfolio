"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="border-t border-white/[0.07] py-28">
      <div className="max-w-[860px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <p className="section-label mb-3">About</p>
            <h2 className="gradient-text text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-[-0.04em] leading-[1.1]">
              A little about me
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="flex flex-col gap-5"
          >
            <p className="text-[0.9375rem] text-[#d4d4d8] leading-[1.85] font-light">
              I&apos;m a Full Stack Developer with{" "}
              <span className="text-[#fafafa] font-medium">2+ years of experience</span>{" "}
              building scalable web applications, internal tools, SaaS platforms, and Web3 products.
            </p>
            <p className="text-[0.9375rem] text-[#a1a1aa] leading-[1.85] font-light">
              My focus is on{" "}
              <span className="text-[#d4d4d8]">reliable systems</span>,
              {" "}performance engineering, and delivering exceptional user experiences through{" "}
              <span className="text-[#d4d4d8]">clean architecture</span>{" "}
              and intentional design.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { n: "2+", label: "Years" },
                { n: "10+", label: "Projects" },
                { n: "3", label: "Companies" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-baseline gap-1.5 px-4 py-2 rounded-lg"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span className="amber-gradient-text text-[1.125rem] font-bold tracking-[-0.03em]">{s.n}</span>
                  <span className="text-[0.75rem] text-[#71717a] font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
