"use client";

import { motion } from "framer-motion";
import { GitBranch, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { SectionShell } from "@/components/SectionShell";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/types";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = ["All", "Non-Academic", "Academic"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <SectionShell id="projects" eyebrow="Projects" title="Applied ML, AI, and data work">
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 font-code text-xs uppercase tracking-[0.2em] text-muted">
          <SlidersHorizontal size={15} className="text-primary" />
          Filter
        </span>
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`border px-4 py-2 font-code text-xs transition ${
              activeFilter === filter
                ? "border-primary bg-primary text-white"
                : "border-border bg-surface text-muted hover:border-teal/70 hover:text-text-primary"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <motion.article
            layout
            key={project.title}
            className={`group flex min-h-[420px] flex-col border bg-surface p-6 transition hover:-translate-y-1 hover:border-primary/70 ${
              project.category === "Academic"
                ? "border-t-teal"
                : "border-t-primary"
            } border-x-border border-b-border border-t-2`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-text-primary">{project.title}</h3>
                <p className="mt-2 font-code text-xs uppercase tracking-[0.18em] text-teal">
                  {project.domain}
                </p>
              </div>
              <span className="shrink-0 border border-border px-3 py-1 font-code text-[10px] uppercase tracking-[0.14em] text-muted">
                {project.category}
              </span>
            </div>

            <p className="mt-5 flex-1 leading-7 text-muted">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
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
              className="mt-6 inline-flex items-center justify-center gap-2 border border-border px-4 py-3 font-code text-sm text-text-primary transition hover:border-teal/80"
            >
              <GitBranch size={16} />
              GitHub
            </a>
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  );
}
