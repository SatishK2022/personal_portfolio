"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { FileText, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        setScrolled(scrollY > 30);

        // Active section
        const ids = navLinks.map((l) => l.href.slice(1));
        for (const id of [...ids].reverse()) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= 120) {
            setActiveSection(id);
            ticking = false;
            return;
          }
        }
        setActiveSection("");
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Scroll Progress Bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
        style={{
          background: "linear-gradient(90deg, #d97706, #f59e0b, #fbbf24)",
          scaleX,
          boxShadow: "0 0 10px rgba(245,158,11,0.6)",
        }}
      />

      {/* ── Navbar ── */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 h-[62px] border-b transition-colors duration-300 ${
          scrolled
            ? "bg-[#09090b]/60 backdrop-blur-[20px] border-white/[0.07]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-[860px] mx-auto px-6 md:px-8 flex items-center justify-between h-full">

          {/* Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center select-none group/logo"
          >
            <img
              src="/logo.png"
              alt="SK Logo"
              className="w-12 h-12 rounded-md transition-opacity duration-200 group-hover/logo:opacity-90"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-[3px] left-1/2 -translate-x-1/2 w-[4px] h-[4px] rounded-full bg-[#f59e0b]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2.5">
            <a
              href="/resume.pdf"
              download
              className="btn btn-ghost hidden sm:inline-flex !py-[0.375rem] !px-3.5 !text-[0.775rem]"
            >
              <FileText size={12} strokeWidth={1.75} />
              Resume
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="sm:hidden flex items-center justify-center p-2 rounded-lg bg-white/[0.05] border border-white/[0.09] text-[#a1a1aa] transition-all duration-200 cursor-pointer hover:bg-white/[0.09]"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed top-[62px] left-0 right-0 z-40 bg-[#09090b]/95 backdrop-blur-xl border-b border-white/[0.07] px-6 pb-6 pt-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block py-3.5 text-[0.9375rem] text-[#a1a1aa] border-b border-white/[0.06] hover:text-[#fafafa] transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="btn btn-ghost mt-4 w-full justify-center"
            >
              <FileText size={13} />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
