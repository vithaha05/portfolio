"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { SectionShell } from "@/components/SectionShell";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { ProjectCard } from "@/components/ui/ProjectCard";
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
    <SectionShell id="projects" eyebrow="Projects" title="Selected Work">
      <div className="mb-8 flex items-center justify-between gap-6">
        <FilterTabs filters={filters} activeFilter={activeFilter} onChange={setActiveFilter} />
      </div>

      <motion.div layout className="grid gap-6 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionShell>
  );
}
