"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { highlights } from "@/data/highlights";

export default function Highlights() {
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
          <p className="section-label mb-3">Highlights</p>
          <h2 className="gradient-text text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-[-0.04em] leading-[1.1] mb-3">
            Engineering Highlights
          </h2>
          <p className="text-[0.9375rem] text-[#71717a] font-light">
            Key wins and technical achievements across projects.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-[14px] overflow-hidden"
          style={{ gap: "1px", background: "rgba(255,255,255,0.07)" }}
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
              className="highlight-card p-7 cursor-default"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[0.65rem] font-black text-[#f59e0b] tabular-nums tracking-[0.05em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 h-px bg-white/[0.07]" />
              </div>
              <h3 className="text-[0.9375rem] font-semibold text-[#fafafa] tracking-[-0.02em] mb-3 leading-[1.4]">
                {item.title}
              </h3>
              <p className="text-[0.85rem] text-[#71717a] leading-[1.72]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
