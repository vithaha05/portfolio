"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/SectionShell";

const activities = [
  { text: "Team Coordinator, PR & Sponsorship - Students Union, PSG College of Technology", icon: "👥" },
  { text: "Smart India Hackathon 2025 - Real-Time Public Transport Tracking for Small Cities", icon: "🏆" },
  { text: "Neoverse 24-hour Hackathon (CIT) - AI agent for automating feedback-to-product workflows", icon: "🏆" },
  { text: "UnHack Hackathon - KLA", icon: "🏆" },
  { text: "Startup & Entrepreneurship Workshop - Petrichor '24, IIT Palakkad", icon: "🎓" },
  { text: "Workshops: Mobile App Development, Competitive Programming, Cybersecurity - PSG Tech", icon: "💻" },
];

export function Activities() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <SectionShell id="activities" eyebrow="Activities" title="Leadership and hackathons">
      <motion.ol
        className="space-y-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {activities.map((activity) => (
          <motion.li
            key={activity.text}
            variants={itemVariants}
            className="group flex gap-4 border-l-3 border-l-transparent bg-surface p-4 transition duration-300 hover:border-l-accent hover:bg-surface2"
            whileHover={{ x: 4 }}
          >
            <span className="text-xl">{activity.icon}</span>
            <span className="font-lora leading-7 text-muted">{activity.text}</span>
          </motion.li>
        ))}
      </motion.ol>
    </SectionShell>
  );
}
