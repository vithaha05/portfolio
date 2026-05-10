"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/SectionShell";

export function Now() {
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
    <SectionShell id="now" eyebrow="Currently" title="What I'm focused on">
      <motion.div
        className="mx-auto max-w-2xl space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Building */}
        <motion.div variants={itemVariants} className="flex gap-4 border border-accent/20 bg-surface p-6">
          <div className="mt-1 h-3 w-3 rounded-full bg-accent flex-shrink-0" />
          <div>
            <p className="font-code text-xs uppercase tracking-[0.15em] text-accent">Building</p>
            <p className="mt-2 font-lora text-text">
              finreason — financial reasoning pipeline for institutional research
            </p>
          </div>
        </motion.div>

        {/* Open to internship */}
        <motion.div variants={itemVariants} className="flex gap-4 border border-green-500/30 bg-surface p-6">
          <div className="mt-1 h-3 w-3 rounded-full bg-green-500 flex-shrink-0 animate-pulse" />
          <div>
            <p className="font-code text-xs uppercase tracking-[0.15em] text-green-500">Open</p>
            <p className="mt-2 font-lora text-text">
              ML/AI/Data internships · May–Dec 2026
            </p>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div variants={itemVariants} className="flex gap-4 border border-accent2/30 bg-surface p-6">
          <div className="mt-1 h-3 w-3 rounded-full bg-accent2 flex-shrink-0" />
          <div>
            <p className="font-code text-xs uppercase tracking-[0.15em] text-accent2">Based</p>
            <p className="mt-2 font-lora text-text">
              Coimbatore, India
            </p>
          </div>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}
