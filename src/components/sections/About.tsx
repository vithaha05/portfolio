"use client";

import { BrainCircuit, Calendar, Languages, Mail, MapPin, Phone, User } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";

const profileDetails = [
  { label: "Register No.", value: "23PT40", icon: User },
  { label: "Date of Birth", value: "25 July 2005", icon: Calendar },
  { label: "Languages Known", value: "English, Tamil, Hindi", icon: Languages },
  {
    label: "Address",
    value: "18, LRG Layout, 3rd Street, Ranganathapuram Extn, Rayapuram, Tiruppur - 641601",
    icon: MapPin,
  },
];

export function About() {
  return (
    <SectionShell id="about" eyebrow="About" title="Building data-driven systems">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="border border-border bg-surface p-6 sm:p-8">
          <BrainCircuit className="mb-6 text-primary" size={34} />
          <p className="text-lg leading-8 text-muted">
            I am currently pursuing the 3rd year of a 5 year Integrated M.Sc. in
            Theoretical Computer Science at the Department of Applied Mathematics
            and Computational Sciences, PSG College of Technology.
          </p>
          <p className="mt-5 text-lg leading-8 text-muted">
            My objective is to secure an internship from May 2026 to December 2026,
            where I can apply my skills in machine learning, data analytics and AI
            systems to build impactful, data-driven solutions for real-world
            business problems.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {profileDetails.map((detail) => {
              const Icon = detail.icon;

              return (
                <div key={detail.label} className="border border-border bg-bg p-4">
                  <div className="flex items-center gap-2 font-code text-xs uppercase tracking-[0.16em] text-muted">
                    <Icon className="text-teal" size={15} />
                    {detail.label}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-text-primary">{detail.value}</p>
                </div>
              );
            })}
          </div>
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
          <div className="border border-border bg-surface p-5">
            <span className="block font-code text-xs uppercase tracking-[0.2em] text-muted">
              Academic Qualification
            </span>
            <p className="mt-2 leading-7 text-text-primary">
              Integrated M.Sc. in Theoretical Computer Science
            </p>
            <p className="mt-1 leading-7 text-muted">
              PSG College of Technology, Coimbatore · 2023-Present · 7.47 CGPA
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
