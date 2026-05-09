"use client";

import { BrainCircuit, Mail, Phone } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";

export function About() {
  return (
    <SectionShell id="about" eyebrow="About" title="Building data-driven systems">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="border border-border bg-surface p-6 sm:p-8">
          <BrainCircuit className="mb-6 text-primary" size={34} />
          <p className="text-lg leading-8 text-muted">
            I am an ML & AI developer focused on turning data into useful systems:
            analytics pipelines, fraud detection, RAG workflows, predictive
            maintenance, and explainable AI dashboards. I am currently pursuing an
            Integrated M.Sc. in Theoretical Computer Science at PSG College of
            Technology with a 7.47 CGPA.
          </p>
          <p className="mt-5 text-lg leading-8 text-muted">
            My objective is to contribute to machine learning, data analytics, and
            AI systems projects during a May-Dec 2026 internship, building practical
            solutions for real-world business problems.
          </p>
        </div>

        <div className="grid content-start gap-4">
          <a
            href="mailto:23pt40@psgtech.ac.in"
            className="group flex items-center gap-4 border border-border bg-surface p-5 transition hover:border-primary/70"
          >
            <Mail className="text-teal" size={20} />
            <span>
              <span className="block font-code text-xs uppercase tracking-[0.2em] text-muted">
                Email
              </span>
              <span className="mt-1 block text-text-primary">23pt40@psgtech.ac.in</span>
            </span>
          </a>
          <a
            href="tel:+919952146753"
            className="group flex items-center gap-4 border border-border bg-surface p-5 transition hover:border-primary/70"
          >
            <Phone className="text-teal" size={20} />
            <span>
              <span className="block font-code text-xs uppercase tracking-[0.2em] text-muted">
                Phone
              </span>
              <span className="mt-1 block text-text-primary">+91 99521 46753</span>
            </span>
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
