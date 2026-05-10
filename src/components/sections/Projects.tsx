"use client";

import { motion } from "framer-motion";
import { GitBranch, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { SectionShell } from "@/components/SectionShell";
import { ProjectPanel } from "@/components/ui/ProjectPanel";
import { projects } from "@/data/projects";
import type { ProjectCategory, Project } from "@/types";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = ["All", "Non-Academic", "Academic"];

const borderColors: Record<string, string> = {
  stockiq: "#F59E0B",
  fraudulens: "#F97316",
  bizquery: "#EF4444",
  machinsight: "#3B82F6",
  mindguard: "#EC4899",
  retailflow: "#22c55e",
};

const problems: Record<string, string> = {
  stockiq: "Manual equity research is slow, unstructured, and hard to scale.",
  fraudulens:
    "Transaction fraud hides in network-level patterns that row-level ML misses.",
  bizquery: "Enterprise documents are siloed, unstructured, and impossible to query.",
  machinsight: "Industrial equipment failures are costly, sudden, and preventable.",
  mindguard:
    "Mental health risk screening lacks accessible, explainable tooling.",
  retailflow:
    "Raw retail data is messy, inconsistent, and analytics-unready.",
};

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <SectionShell
        id="projects"
        eyebrow="Projects"
        title="Applied ML, AI, and data work"
      >
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 font-code text-xs uppercase tracking-[0.2em] text-muted">
            <SlidersHorizontal size={15} className="text-accent" />
            Filter
          </span>
          {filters.map((filter) => (
            <motion.button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`border px-4 py-2 font-code text-xs transition ${
                activeFilter === filter
                  ? "border-accent bg-accent text-bg"
                  : "border-accent/30 bg-surface text-muted hover:border-accent hover:text-text"
              }`}
              whileHover={{ y: -2 }}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => {
            const borderColor = borderColors[project.id] || "#F59E0B";

            return (
              <motion.div
                layout
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative flex min-h-[400px] flex-col border bg-surface p-6 text-left transition duration-300 cursor-pointer hover:bg-surface2"
                style={{
                  borderTop: `3px solid ${borderColor}`,
                  borderLeft: "1px solid rgba(245, 158, 11, 0.15)",
                  borderRight: "1px solid rgba(245, 158, 11, 0.15)",
                  borderBottom: "1px solid rgba(245, 158, 11, 0.15)",
                  transition: "transform 0.3s ease",
                }}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -8 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-space-grotesk text-2xl font-bold text-text">
                      {project.title}
                    </h3>
                    <p className="mt-2 font-code text-xs uppercase tracking-[0.18em] text-accent">
                      {project.domain}
                    </p>
                  </div>
                  <span className="shrink-0 border border-accent/30 bg-bg px-3 py-1 font-code text-[10px] uppercase tracking-[0.14em] text-muted">
                    {project.category}
                  </span>
                </div>

                {/* Problem statement */}
                <div className="mt-4">
                  <p className="font-code text-xs uppercase tracking-[0.15em] text-accent">
                    The Problem
                  </p>
                  <p className="mt-1 font-lora text-sm leading-6 text-muted">
                    {problems[project.id as keyof typeof problems] ||
                      "Building innovative solutions."}
                  </p>
                </div>

                <p className="mt-4 flex-1 font-lora leading-7 text-muted">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="border border-accent/20 bg-bg px-2.5 py-1.5 font-code text-[11px] text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <button
                  className="mt-6 inline-flex items-center justify-center gap-2 border border-accent/50 bg-bg px-4 py-3 font-code text-sm text-text transition hover:border-accent hover:bg-surface"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                >
                  <GitBranch size={16} />
                  Learn More
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </SectionShell>

      <ProjectPanel project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
