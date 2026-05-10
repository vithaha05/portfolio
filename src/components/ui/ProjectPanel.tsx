"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, GitBranch } from "lucide-react";
import type { Project } from "@/types";

interface ProjectPanelProps {
  project: Project | null;
  onClose: () => void;
}

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

export function ProjectPanel({ project, onClose }: ProjectPanelProps) {
  if (!project) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-40 flex items-start justify-end overflow-y-auto bg-black/60 pt-16 md:pt-0 md:items-center md:justify-center"
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full bg-surface md:max-w-lg md:rounded-lg"
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="relative border-b border-accent/20 p-6">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 flex h-8 w-8 items-center justify-center border border-accent/30 text-muted transition hover:bg-surface2 hover:text-text"
              >
                <X size={18} />
              </button>

              <div className="pr-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-space-grotesk text-2xl font-bold text-text">
                      {project.title}
                    </h3>
                    <p className="mt-2 font-code text-sm uppercase tracking-[0.15em] text-accent">
                      {project.domain}
                    </p>
                  </div>
                  <span className="shrink-0 border border-accent/20 bg-bg px-3 py-1 font-code text-xs uppercase text-muted">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6 p-6">
              {/* Problem */}
              <div>
                <p className="mb-2 font-code text-xs uppercase tracking-[0.15em] text-accent">
                  The Problem
                </p>
                <p className="font-lora text-muted leading-7">
                  {problems[project.id as keyof typeof problems] ||
                    "Building innovative solutions."}
                </p>
              </div>

              {/* Solution */}
              <div>
                <p className="mb-2 font-code text-xs uppercase tracking-[0.15em] text-accent">
                  The Solution
                </p>
                <p className="font-lora text-muted leading-7">{project.description}</p>
              </div>

              {/* Stack */}
              <div>
                <p className="mb-3 font-code text-xs uppercase tracking-[0.15em] text-accent">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="border border-accent/20 bg-bg px-3 py-1.5 font-code text-xs text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 border border-accent bg-accent px-4 py-3 font-code text-sm font-semibold text-bg transition hover:shadow-[0_0_28px_rgba(245,158,11,0.35)]"
              >
                <GitBranch size={16} />
                View on GitHub
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
