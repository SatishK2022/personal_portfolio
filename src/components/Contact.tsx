"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Mail, GitBranch, Link2, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    id: "email",
    label: "Email",
    value: "satishkumar@example.com",
    href: "mailto:satishkumar@example.com",
    icon: Mail,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/satishkumar",
    href: "https://linkedin.com/in/satishkumar",
    icon: Link2,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/SatishK2022",
    href: "https://github.com/SatishK2022",
    icon: GitBranch,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="border-t border-white/[0.07] py-28 pb-20">
      <div className="max-w-[860px] mx-auto px-6 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Contact</p>
          <h2 className="gradient-text text-[clamp(1.75rem,5vw,3.25rem)] font-bold tracking-[-0.04em] leading-[1.08] max-w-[520px] mb-5">
            Interested in working together?
          </h2>
          <p className="text-[1rem] text-[#71717a] font-light">
            Let&apos;s build something{" "}
            <span className="amber-gradient-text font-semibold">meaningful</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="flex flex-col"
        >
          {contactLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                href={link.href}
                target={link.id !== "email" ? "_blank" : undefined}
                rel={link.id !== "email" ? "noopener noreferrer" : undefined}
                className={`contact-link group ${i === contactLinks.length - 1 ? "contact-link-last" : ""}`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className="flex items-center justify-center w-9 h-9 rounded-[9px] text-[#f59e0b] transition-all duration-200 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.3)]"
                    style={{ background: "var(--accent-muted)", border: "1px solid var(--accent-border)" }}
                  >
                    <Icon size={15} strokeWidth={1.75} />
                  </div>
                  <span className="text-[0.9rem] font-semibold text-[#d4d4d8] tracking-[0.01em] group-hover:text-[#fafafa] transition-colors duration-200">
                    {link.label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[0.875rem] text-[#71717a] group-hover:text-[#a1a1aa] transition-colors duration-200">
                    {link.value}
                  </span>
                  <ArrowUpRight
                    size={15}
                    className="text-[#52525b] group-hover:text-[#f59e0b] transition-all duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                  />
                </div>
              </a>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
