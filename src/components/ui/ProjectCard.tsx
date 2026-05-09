"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useMouseTilt } from "@/hooks/useMouseTilt";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { transform, handleMouseMove, handleMouseLeave } = useMouseTilt(8);

  return (
    <motion.article
      layout
      data-cursor="hover"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.99 }}
      className="group flex min-h-[520px] transform-gpu flex-col border border-border bg-surface p-6 transition duration-200 hover:border-white/20 hover:shadow-[0_24px_80px_rgba(0,0,0,0.32)]"
      style={{ borderTopColor: project.accent, borderTopWidth: 3, transform }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-code text-xs uppercase tracking-[0.2em] text-muted">
            {project.domain}
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-text">{project.title}</h3>
        </div>
        <span className="shrink-0 border border-border bg-bg px-3 py-1 font-code text-[10px] uppercase tracking-[0.14em] text-muted">
          {project.category}
        </span>
      </div>

      <div className="mt-7">
        <p className="font-code text-xs uppercase tracking-[0.18em] text-accent2">
          The Problem
        </p>
        <p className="mt-3 italic leading-7 text-muted">{project.problem}</p>
      </div>

      <div className="mt-6 flex-1">
        <p className="font-code text-xs uppercase tracking-[0.18em] text-accent">
          The Solution
        </p>
        <p className="mt-3 leading-7 text-muted">{project.solution}</p>
      </div>

      <div className="mt-7 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="border border-border bg-bg px-2.5 py-1.5 font-code text-[11px] text-muted"
          >
            {item}
          </span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="mt-7 inline-flex items-center justify-center gap-2 border border-border px-4 py-3 font-code text-sm text-text transition hover:border-accent2/80 hover:text-accent2"
      >
        GitHub
        <ExternalLink size={15} />
      </a>
    </motion.article>
  );
}
