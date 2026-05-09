"use client";

import { SectionShell } from "@/components/SectionShell";
import { StatCard } from "@/components/ui/StatCard";
import { TerminalWidget } from "@/components/ui/TerminalWidget";

export function About() {
  return (
    <SectionShell id="about" eyebrow="About" title="Terminal profile">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <TerminalWidget />
        <div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <StatCard value="6" label="Projects" />
            <StatCard value="3" label="Hackathons" />
            <StatCard value="2263+" label="Records Processed" />
          </div>
          <div className="mt-6 border border-border bg-surface p-6">
            <p className="text-lg leading-8 text-muted">
              I am an Integrated M.Sc. Theoretical Computer Science student at PSG
              College of Technology, building ML pipelines, RAG systems, graph-based
              fraud detection, and data engineering workflows.
            </p>
            <p className="mt-5 text-lg leading-8 text-muted">
              My work sits at the intersection of mathematical reasoning and practical
              software: models that explain, dashboards that clarify, and pipelines
              that turn raw data into decisions.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
