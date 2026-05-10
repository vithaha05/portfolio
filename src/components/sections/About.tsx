"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionShell } from "@/components/SectionShell";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <SectionShell id="about" eyebrow="About me" title="The story behind the code">
      <motion.div
        className="grid gap-12 lg:grid-cols-[1fr_1.2fr]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* LEFT: Photo + Bio */}
        <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start">
          {/* Photo */}
          <div className="relative w-64 h-64 mx-auto lg:mx-0">
            {/* Outer gold ring */}
            <div className="absolute inset-0 rounded-full border-2 border-amber-400/40 scale-110 animate-pulse" />
            {/* Gold glow behind */}
            <div className="absolute inset-0 rounded-full bg-amber-400/10 blur-xl scale-125" />
            {/* The actual photo */}
            <Image
              src="/images/avatar.jpeg"
              alt="Vithahaselvi Haribalajhee"
              fill
              quality={100}
              className="rounded-full object-cover object-center border-2 border-amber-400/30"
              priority
            />
          </div>

          {/* Name & Role */}
          <h3 className="font-space-grotesk text-3xl font-bold text-text">Vithahaselvi</h3>
          <p className="font-lora italic text-muted">ML & AI Developer · Data Scientist</p>

          {/* Bio */}
          <p className="mt-6 max-w-sm font-lora text-lg leading-7 text-muted">
            I&apos;m Vithahaselvi — a third-year M.Sc. student at PSG College of Technology, Coimbatore.
            I love building things that sit at the intersection of math, data, and real-world impact —
            from fraud detection pipelines to AI-powered document search. When I&apos;m not coding, I&apos;m probably
            in a hackathon or buried in a paper about something that&apos;ll take me three days to fully understand.
          </p>
        </motion.div>

        {/* RIGHT: Stats + Education */}
        <motion.div variants={rightVariants} className="flex flex-col gap-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { number: "6", label: "Projects Built" },
              { number: "3", label: "Hackathons" },
              { number: "2263+", label: "Records Processed" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="border-l-4 border-accent bg-surface p-5"
                whileHover={{ y: -4 }}
              >
                <p className="font-space-grotesk text-4xl font-bold text-accent">{stat.number}</p>
                <p className="mt-1 font-code text-sm text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Education Card */}
          <motion.div
            className="border border-accent/30 bg-surface p-6"
            whileHover={{ borderColor: "rgba(245, 158, 11, 0.6)" }}
          >
            <p className="font-code text-xs uppercase tracking-[0.15em] text-accent">Education</p>
            <p className="mt-3 font-space-grotesk font-semibold text-text">
              Integrated M.Sc. Theoretical Computer Science
            </p>
            <p className="mt-1 font-lora text-muted">PSG College of Technology, Coimbatore</p>
            <div className="mt-3 flex items-center justify-between border-t border-accent/20 pt-3">
              <span className="font-code text-xs text-muted">2023–Present</span>
              <span className="font-code font-semibold text-accent">7.47 CGPA</span>
            </div>
          </motion.div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <motion.a
              href="mailto:23pt40@psgtech.ac.in"
              className="border border-accent/30 bg-surface p-4 transition hover:border-accent hover:bg-surface2"
              whileHover={{ y: -2 }}
            >
              <p className="font-code text-xs uppercase tracking-[0.1em] text-muted">Email</p>
              <p className="mt-1 font-lora text-text">23pt40@psgtech.ac.in</p>
            </motion.a>
            <motion.a
              href="tel:+919952146753"
              className="border border-accent/30 bg-surface p-4 transition hover:border-accent hover:bg-surface2"
              whileHover={{ y: -2 }}
            >
              <p className="font-code text-xs uppercase tracking-[0.1em] text-muted">Phone</p>
              <p className="mt-1 font-lora text-text">+91 99521 46753</p>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}
