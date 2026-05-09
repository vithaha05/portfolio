"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, ExternalLink, MapPin } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";

const roles = ["ML Developer", "AI Systems Builder", "Data Engineer", "RAG Pipeline Architect"];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export function Hero() {
  const role = useTypewriter({ words: roles });

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden px-5 pt-32 sm:px-8"
    >
      <div className="absolute inset-0 -z-30 bg-bg" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(124,111,247,0.24),transparent_28%),radial-gradient(circle_at_82%_16%,rgba(45,212,160,0.15),transparent_25%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_42%)]" />
      <motion.div
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.16) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "28px 28px"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      />

      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl"
        >
          <motion.div
            variants={item}
            className="mb-7 inline-flex items-center gap-2 border border-border bg-surface/70 px-3 py-2 font-code text-xs uppercase tracking-[0.22em] text-muted backdrop-blur"
          >
            <MapPin size={14} className="text-accent2" />
            Coimbatore, India
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl font-semibold leading-[0.95] text-text sm:text-7xl lg:text-8xl"
          >
            <span className="block">Vithahaselvi</span>
            <span className="block bg-gradient-to-r from-accent via-text to-accent2 bg-clip-text text-transparent">
              Haribalajhee
            </span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-7 min-h-10 font-code text-lg text-accent2 sm:text-2xl"
          >
            {role}
            <span className="terminal-cursor ml-1 inline-block h-6 w-2 translate-y-1 bg-accent" />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-5 max-w-2xl text-xl leading-8 text-text sm:text-2xl"
          >
            Building AI-driven systems with mathematical rigor.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 border border-accent bg-accent px-6 py-3 font-code text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(124,111,247,0.45)]"
            >
              View Projects
              <ArrowDown size={16} className="transition group-hover:translate-y-0.5" />
            </a>
            <a
              href="https://github.com/vithaha05"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border bg-surface/80 px-6 py-3 font-code text-sm font-semibold text-text transition hover:-translate-y-0.5 hover:border-accent2/70"
            >
              GitHub ↗
              <ExternalLink size={15} />
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 inline-flex items-center gap-3 font-code text-sm text-muted"
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent2 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-accent2" />
            </span>
            Open to internship · May-Dec 2026
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
