"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/SectionShell";
import type { EducationItem } from "@/types";

const education: EducationItem[] = [
  {
    degree: "Integrated M.Sc. Theoretical Computer Science",
    institution: "PSG College of Technology, Coimbatore",
    year: "2023-Present",
    grade: "7.47 CGPA",
    initials: "PSG",
  },
  {
    degree: "XII AISSCE CBSE",
    institution: "Saratha International Senior Secondary School, Gobichettypalayam",
    year: "2023",
    grade: "90.20%",
    initials: "SIS",
  },
  {
    degree: "X AISSE CBSE",
    institution: "Subbiah Central School, Tiruppur",
    year: "2021",
    grade: "96.20%",
    initials: "SCS",
  },
];

export function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <SectionShell id="education" eyebrow="Education" title="Academic timeline">
      <motion.div
        className="relative border-l-2 border-accent/30 pl-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {education.map((item) => (
          <motion.div
            key={item.degree}
            variants={itemVariants}
            className="relative pb-12 last:pb-0"
          >
            {/* Circle dot */}
            <div className="absolute -left-11 top-2 h-4 w-4 rounded-full border-2 border-accent bg-bg shadow-[0_0_12px_rgba(245,158,11,0.4)]" />

            {/* Content card */}
            <motion.div
              className="border border-accent/20 bg-surface p-6"
              whileHover={{ borderColor: "rgba(245, 158, 11, 0.6)" }}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <h3 className="font-space-grotesk font-bold text-text">{item.degree}</h3>
                  <p className="mt-2 font-lora text-muted">{item.institution}</p>
                </div>

                {/* Initials badge */}
                <div className="mt-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-bg">
                  <span className="font-code text-xs font-bold text-accent">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {(item as any).initials}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2 border-t border-accent/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-code text-sm text-muted">{item.year}</span>
                <span className="font-code font-bold text-xl text-accent">{item.grade}</span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
