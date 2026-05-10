"use client";

import { motion } from "framer-motion";
import { GitBranch, Mail } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";

export function Contact() {
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
    <SectionShell id="contact" eyebrow="Contact" title="Let's build something.">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p variants={itemVariants} className="font-lora text-lg italic text-muted">
          Open to internship opportunities from May 2026. Reach out anytime.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
          <a
            href="mailto:23pt40@psgtech.ac.in"
            className="group inline-flex items-center justify-center gap-2 border border-accent bg-accent px-8 py-3 font-code text-sm font-semibold text-bg transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(245,158,11,0.35)]"
          >
            <Mail size={18} />
            Say Hello →
          </a>
          <a
            href="https://linkedin.com/in/vithahaselvi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-accent/30 bg-surface px-6 py-3 font-code text-sm text-text transition hover:border-accent hover:bg-surface2"
          >
            in
          </a>
          <a
            href="https://github.com/vithaha05"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-accent/30 bg-surface px-6 py-3 font-code text-sm text-text transition hover:border-accent hover:bg-surface2"
          >
            <GitBranch size={16} />
            GitHub
          </a>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}
