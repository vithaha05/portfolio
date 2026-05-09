"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionShellProps {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function SectionShell({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: SectionShellProps) {
  return (
    <motion.section
      id={id}
      className={`mx-auto w-full max-w-6xl scroll-mt-28 px-5 py-20 sm:px-8 ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="mb-10">
        <p className="font-code text-xs uppercase tracking-[0.28em] text-teal">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold text-text-primary sm:text-4xl">
          {title}
        </h2>
      </div>
      {children}
    </motion.section>
  );
}
