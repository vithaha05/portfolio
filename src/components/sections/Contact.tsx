import { ExternalLink, GitBranch, Link2, Mail } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";

export function Contact() {
  return (
    <SectionShell id="contact" eyebrow="Contact" title="Let's Build Something.">
      <div className="mx-auto max-w-3xl border border-border bg-surface p-8 text-center sm:p-12">
        <p className="text-lg leading-8 text-muted">
          Open to internship opportunities from May 2026. Reach out anytime.
        </p>

        <a
          href="mailto:23pt40@psgtech.ac.in"
          className="mt-8 inline-flex items-center justify-center gap-2 border border-accent bg-accent px-7 py-4 font-code text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(124,111,247,0.42)]"
        >
          Say Hello →
          <Mail size={16} />
        </a>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="https://github.com/vithaha05"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-12 w-12 place-items-center border border-border text-muted transition hover:border-accent2/70 hover:text-accent2"
          >
            <GitBranch size={18} />
          </a>
          <a
            href="https://linkedin.com/in/vithahaselvi"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-12 w-12 place-items-center border border-border text-muted transition hover:border-accent2/70 hover:text-accent2"
          >
            <Link2 size={18} />
          </a>
          <a
            href="mailto:23pt40@psgtech.ac.in"
            aria-label="Email"
            className="grid h-12 w-12 place-items-center border border-border text-muted transition hover:border-accent2/70 hover:text-accent2"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </SectionShell>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="font-code text-accent">VH</span>
          <span>Built by Vithahaselvi Haribalajhee with Next.js & Tailwind · May 2026</span>
        </div>
        <div className="flex gap-3">
          <a
            href="https://github.com/vithaha05"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 transition hover:text-accent2"
          >
            GitHub <ExternalLink size={13} />
          </a>
          <a
            href="https://linkedin.com/in/vithahaselvi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 transition hover:text-accent2"
          >
            LinkedIn <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
