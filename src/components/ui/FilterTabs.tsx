"use client";

import { motion } from "framer-motion";
import type { ProjectCategory } from "@/types";

type Filter = "All" | ProjectCategory;

interface FilterTabsProps {
  filters: Filter[];
  activeFilter: Filter;
  onChange: (filter: Filter) => void;
}

export function FilterTabs({ filters, activeFilter, onChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onChange(filter)}
          className="relative px-1 pb-3 pt-2 font-code text-sm text-muted transition hover:text-text"
        >
          <span className={activeFilter === filter ? "text-text" : ""}>{filter}</span>
          {activeFilter === filter ? (
            <motion.span
              layoutId="project-filter-underline"
              className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-accent to-accent2"
            />
          ) : null}
        </button>
      ))}
    </div>
  );
}
