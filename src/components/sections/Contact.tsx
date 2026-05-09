"use client";

import { GitBranch, Link2, Mail, MapPin, Phone } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";

export function Contact() {
  return (
    <SectionShell id="contact" eyebrow="Contact" title="Open to internship opportunities">
      <div className="border border-border bg-surface p-6 sm:p-8">
        <p className="max-w-2xl text-xl leading-8 text-text-primary">
          Open to internship opportunities from May 2026.
        </p>
        <p className="mt-3 max-w-2xl leading-7 text-muted">
          Interested in machine learning, data analytics, and AI systems roles where
          practical models can create measurable business value.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <div className="flex items-start gap-3 border border-border bg-bg p-4">
            <MapPin className="mt-1 text-teal" size={18} />
            <p className="leading-7 text-muted">
              18, LRG Layout, 3rd Street, Ranganathapuram Extn, Rayapuram,
              Tiruppur - 641601
            </p>
          </div>
          <a
            href="tel:+919952146753"
            className="flex items-center gap-3 border border-border bg-bg p-4 leading-7 text-muted transition hover:border-teal/80 hover:text-text-primary"
          >
            <Phone className="text-teal" size={18} />
            +91 99521 46753
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="mailto:23pt40@psgtech.ac.in"
            className="inline-flex items-center justify-center gap-2 border border-primary bg-primary px-5 py-3 font-code text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(124,111,247,0.35)]"
          >
            <Mail size={16} />
            Email
          </a>
          <a
            href="https://linkedin.com/in/vithahaselvi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-border px-5 py-3 font-code text-sm text-text-primary transition hover:border-teal/80"
          >
            <Link2 size={16} />
            LinkedIn
          </a>
          <a
            href="https://github.com/vithaha05"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-border px-5 py-3 font-code text-sm text-text-primary transition hover:border-teal/80"
          >
            <GitBranch size={16} />
            GitHub
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
