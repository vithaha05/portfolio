"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/SectionShell";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <SectionShell id="skills" eyebrow="Skills" title="Skills & Tools">
      <motion.div
        className="grid gap-5 md:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            className="border border-border bg-surface p-6 transition hover:border-accent/60"
            variants={{
              hidden: { opacity: 0, y: 22 },
              show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
            }}
          >
            <h3 className="font-code text-sm uppercase tracking-[0.22em] text-text">
              {category.title}
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  data-cursor="hover"
                  className="border border-border bg-bg px-3 py-2 font-code text-xs text-muted transition duration-200 hover:border-accent hover:text-text hover:shadow-[0_0_24px_rgba(124,111,247,0.28)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
