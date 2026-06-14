"use client";

import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ArrowRight, Download, MapPin } from "lucide-react";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

const floatVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  }),
};

const techPills = [
  { label: "Next.js",     top: "22%", left: "calc(50% - 330px)", delay: 0.7  },
  { label: "TypeScript",  top: "46%", left: "calc(50% - 450px)", delay: 0.85 },
  { label: "Node.js",     top: "70%", left: "calc(50% - 320px)", delay: 0.75 },
  { label: "FastAPI",     top: "22%", left: "calc(50% + 230px)", delay: 0.8  },
  { label: "MongoDB",     top: "46%", left: "calc(50% + 350px)", delay: 0.65 },
  { label: "Docker",      top: "70%", left: "calc(50% + 220px)", delay: 0.9  },
];

export default function Hero() {
  const scrollToWork = () =>
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-svh flex flex-col items-center justify-center overflow-hidden pt-[62px]">

      {/* ── Atmospheric layered glows ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px]"
          style={{ background: "radial-gradient(ellipse, rgba(245,158,11,0.12) 0%, transparent 65%)" }} />
        <div className="absolute top-[30%] left-[15%] w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.03) 0%, transparent 70%)", filter: "blur(30px)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-48"
          style={{ background: "linear-gradient(to top, #09090b, transparent)" }} />
      </div>

      {/* ── Decorative concentric rings ── */}
      <div className="absolute w-[520px] h-[520px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden>
        {[520, 400, 290].map((size, i) => (
          <motion.div
            key={size}
            initial={{ opacity: 0, scale: 0.88, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            transition={{ duration: 1.2, delay: i * 0.18, ease: "easeOut" }}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              top: "50%",
              left: "50%",
              border: i === 2
                ? "1px solid rgba(245,158,11,0.14)"
                : `1px solid rgba(255,255,255,${i === 0 ? "0.04" : "0.06"})`,
            }}
          />
        ))}
      </div>

      {/* ── Floating tech pills — desktop only ── */}
      {techPills.map((pill) => (
        <motion.div
          key={pill.label}
          custom={pill.delay}
          variants={floatVariants}
          initial="hidden"
          animate="visible"
          className="absolute hidden lg:inline-flex items-center gap-2 px-3 py-1.5 rounded-full pointer-events-none select-none"
          style={{
            top: pill.top,
            left: pill.left,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(4px)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] opacity-60" />
          <span className="text-[0.7rem] font-medium text-[#71717a]">{pill.label}</span>
        </motion.div>
      ))}

      {/* ── Main centered content ── */}
      <div className="relative z-10 text-center px-6 max-w-[680px] mx-auto">
        <motion.div variants={container} initial="hidden" animate="visible">

          {/* Status badge */}
          <motion.div variants={item} className="flex justify-center mb-10">
            <span
              className="inline-flex items-center gap-2 text-[0.72rem] font-semibold text-[#f59e0b] rounded-full px-4 py-1.5 tracking-[0.03em]"
              style={{ background: "var(--accent-muted)", border: "1px solid var(--accent-border)" }}
            >
              <span
                className="w-[5px] h-[5px] rounded-full bg-[#f59e0b] shrink-0"
                style={{ animation: "pulse-dot 2s ease infinite" }}
              />
              Available for work
            </span>
          </motion.div>

          {/* Name — gradient text */}
          <motion.h1
            variants={item}
            className="gradient-text text-[clamp(3.5rem,8.5vw,6.5rem)] font-extrabold tracking-[-0.048em] leading-[0.97] mb-5"
          >
            Satish Kumar
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={item}
            className="text-[clamp(1.125rem,2.5vw,1.5rem)] font-light tracking-[-0.02em] text-[#71717a] mb-7"
          >
            Full Stack{" "}
            <span className="amber-gradient-text font-semibold">Developer</span>
          </motion.p>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-[clamp(0.9rem,1.4vw,1.0rem)] text-[#71717a] leading-[1.85] max-w-[440px] mx-auto mb-10 font-light"
          >
            Building{" "}
            <span className="text-[#d4d4d8] font-normal">scalable web applications</span>
            {", "}internal tools, and{" "}
            <span className="text-[#d4d4d8] font-normal">Web3 products</span>
            {" "}with modern JavaScript.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap justify-center items-center gap-3 mb-12">
            <button onClick={scrollToWork} className="btn btn-primary">
              View Work
              <ArrowRight size={14} strokeWidth={2.5} />
            </button>
            <a href="/resume.pdf" download className="btn btn-ghost">
              <Download size={13} strokeWidth={1.75} />
              Download CV
            </a>
          </motion.div>

        </motion.div>
      </div>

      {/* ── Scroll hint ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[0.625rem] text-[#3f3f46] tracking-[0.14em] uppercase font-medium">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#3f3f46] to-transparent" />
      </motion.div>

    </section>
  );
}
