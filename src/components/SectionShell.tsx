"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`mx-auto w-full max-w-6xl scroll-mt-28 px-5 py-16 sm:px-8 sm:py-24 ${className}`}
      initial={{ opacity: 0, y: 34 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="mb-10">
        <p className="font-code text-xs uppercase tracking-[0.28em] text-accent2">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold text-text sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>
      {children}
    </motion.section>
  );
}
