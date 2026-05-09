"use client";

import { motion } from "framer-motion";
import { ArrowDown, GitBranch, MapPin } from "lucide-react";
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

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden px-5 pt-32 sm:px-8"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(124,111,247,0.18),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(45,212,160,0.13),transparent_28%)]" />
      <motion.div
        className="absolute inset-0 -z-10 opacity-45"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "42px 42px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl items-center">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 border border-border bg-surface/70 px-3 py-2 font-code text-xs uppercase tracking-[0.22em] text-muted">
            <MapPin size={14} className="text-teal" />
            Coimbatore, India
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold leading-tight text-text-primary sm:text-7xl lg:text-8xl">
            Vithahaselvi{" "}
            <span className="bg-gradient-to-r from-primary via-text-primary to-teal bg-clip-text text-transparent">
              Haribalajhee
            </span>
          </h1>

          <div className="mt-6 min-h-10 font-code text-lg text-teal sm:text-2xl">
            {typedRole}
            <span className="ml-1 inline-block h-6 w-2 translate-y-1 bg-primary" />
          </div>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
            ML & AI Developer and Integrated M.Sc. Theoretical Computer Science
            student seeking an internship from May-Dec 2026 in machine learning,
            data analytics, and AI systems.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 border border-primary bg-primary px-6 py-3 font-code text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(124,111,247,0.35)]"
            >
              View Projects
              <ArrowDown size={16} className="transition group-hover:translate-y-0.5" />
            </a>
            <a
              href="https://github.com/vithaha05"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border bg-surface px-6 py-3 font-code text-sm font-semibold text-text-primary transition hover:-translate-y-0.5 hover:border-teal/70"
            >
              <GitBranch size={16} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
