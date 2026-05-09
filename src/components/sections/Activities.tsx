"use client";

import { SectionShell } from "@/components/SectionShell";

const activities = [
  "Team Coordinator, PR & Sponsorship - Students Union, PSG College of Technology",
  "Smart India Hackathon 2025 - Real-Time Public Transport Tracking for Small Cities",
  "Neoverse 24-hour Hackathon (CIT) - AI agent for automating feedback-to-product workflows",
  "UnHack Hackathon - KLA",
  "Startup & Entrepreneurship Workshop - Petrichor '24, IIT Palakkad",
  "Workshops: Mobile App Development, Competitive Programming, Cybersecurity - PSG Tech",
];

export function Activities() {
  return (
    <SectionShell id="activities" eyebrow="Activities" title="Leadership and hackathons">
      <ol className="grid gap-4">
        {activities.map((activity, index) => (
          <li
            key={activity}
            className="flex gap-4 border border-border bg-surface p-5 transition hover:border-teal/70"
          >
            <span className="font-code text-sm text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="leading-7 text-muted">{activity}</span>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
