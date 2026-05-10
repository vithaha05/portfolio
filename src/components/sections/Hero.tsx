"use client";

import { motion } from "framer-motion";
import { ArrowDown, GitBranch } from "lucide-react";
import { useEffect, useState } from "react";

const roles = ["ML Developer", "AI Enthusiast", "Data Analyst", "Problem Solver"];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");

  useEffect(() => {
    const role = roles[roleIndex];
    let cursor = 0;
    setTypedRole("");

    const interval = window.setInterval(() => {
      cursor += 1;
      setTypedRole(role.slice(0, cursor));

      if (cursor === role.length) {
        window.clearInterval(interval);
        window.setTimeout(() => {
          setRoleIndex((current) => (current + 1) % roles.length);
        }, 1400);
      }
    }, 72);

    return () => window.clearInterval(interval);
  }, [roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden px-5 pt-32 sm:px-8"
    >
      {/* Animated particle background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent2/5" />
        {/* Dots grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(245,158,11,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl items-center">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Location badge */}
          <motion.div
            variants={itemVariants}
            className="mb-8 inline-flex items-center gap-2 border border-accent/30 bg-surface px-4 py-2 font-code text-xs uppercase tracking-[0.22em] text-muted"
          >
            <span className="relative h-2 w-2 rounded-full bg-accent">
              <span className="absolute inset-0 animate-pulse rounded-full bg-accent" />
            </span>
            Coimbatore, India
          </motion.div>

          {/* Main heading */}
          <motion.h1 variants={itemVariants} className="max-w-5xl leading-tight text-text sm:text-6xl lg:text-7xl">
            <span className="block font-space-grotesk text-5xl font-bold sm:text-6xl lg:text-7xl">
              Vithahaselvi
            </span>
            <span className="block bg-gradient-to-r from-accent via-accent2 to-accent3 bg-clip-text font-space-grotesk text-5xl font-bold text-transparent sm:text-6xl lg:text-7xl">
              Haribalajhee
            </span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div variants={itemVariants} className="mt-8 min-h-10 font-code text-2xl text-accent sm:text-3xl">
            {typedRole}
            <span className="ml-1 inline-block h-7 w-1 animate-pulse bg-accent" />
          </motion.div>

          {/* Motto */}
          <motion.p
            variants={itemVariants}
            className="mt-4 font-lora text-lg italic text-muted sm:text-xl"
          >
            Turning equations into impact, one pipeline at a time.
          </motion.p>

          {/* Main description */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-3xl font-lora text-lg leading-8 text-muted sm:text-xl"
          >
            Third-year M.Sc. student at PSG College of Technology building ML pipelines, RAG systems,
            and data solutions. Seeking an internship from May–Dec 2026 in machine learning, data analytics,
            and AI systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 border border-accent bg-accent px-6 py-3 font-code text-sm font-semibold text-bg transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(245,158,11,0.35)]"
            >
              View Projects
              <ArrowDown size={16} className="transition group-hover:translate-y-0.5" />
            </a>
            <a
              href="https://github.com/vithaha05"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-accent/30 bg-surface px-6 py-3 font-code text-sm font-semibold text-text transition hover:border-accent hover:bg-surface2"
            >
              <GitBranch size={16} />
              GitHub
            </a>
          </motion.div>

          {/* Status indicator */}
          <motion.div variants={itemVariants} className="mt-10 flex items-center gap-3">
            <span className="relative h-2 w-2 rounded-full bg-green-500">
              <span className="absolute inset-0 animate-pulse rounded-full bg-green-500" />
            </span>
            <span className="font-code text-xs uppercase tracking-[0.15em] text-muted">
              Open to internship · May–Dec 2026
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
