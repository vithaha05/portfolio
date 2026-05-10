"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SectionShell } from "@/components/SectionShell";

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="Technical stack"
      className="border-t border-b border-accent/10 bg-surface"
    >
      <motion.div
        className="grid gap-6 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            className="h-full border border-accent/20 bg-surface2 p-6 transition duration-300 hover:border-accent"
            whileHover={{ y: -4 }}
          >
            <h3 className="font-code text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              {category.title}
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  className="border border-accent/30 bg-bg px-3 py-2 font-code text-xs text-muted transition duration-300 hover:border-accent hover:text-text hover:shadow-[0_0_12px_rgba(245,158,11,0.3)]"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
