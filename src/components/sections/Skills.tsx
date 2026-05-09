"use client";

import { skillCategories } from "@/data/skills";
import { SectionShell } from "@/components/SectionShell";

export function Skills() {
  return (
    <SectionShell id="skills" eyebrow="Skills" title="Technical stack">
      <div className="grid gap-5 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="border border-border bg-surface p-6 transition hover:border-primary/60"
          >
            <h3 className="font-code text-sm uppercase tracking-[0.22em] text-text-primary">
              {category.title}
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-border bg-bg px-3 py-2 font-code text-xs text-muted transition hover:border-teal/80 hover:text-text-primary hover:shadow-[0_0_18px_rgba(45,212,160,0.18)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
