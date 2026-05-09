"use client";

import { SectionShell } from "@/components/SectionShell";
import type { EducationItem } from "@/types";

const education: EducationItem[] = [
  {
    degree: "Integrated M.Sc. Theoretical Computer Science",
    institution: "PSG College of Technology, Coimbatore",
    year: "2023-Present",
    grade: "7.47 CGPA",
  },
  {
    degree: "XII AISSCE CBSE",
    institution: "Saratha International Senior Secondary School, Gobichettypalayam",
    year: "2023",
    grade: "90.20%",
  },
  {
    degree: "X AISSE CBSE",
    institution: "Subbiah Central School, Tiruppur",
    year: "2021",
    grade: "96.20%",
  },
];

export function Education() {
  return (
    <SectionShell id="education" eyebrow="Education" title="Academic timeline">
      <div className="relative border-l border-border pl-6">
        {education.map((item) => (
          <div key={item.degree} className="relative pb-10 last:pb-0">
            <span className="absolute -left-[31px] top-1 h-3 w-3 border border-teal bg-bg shadow-[0_0_18px_rgba(45,212,160,0.45)]" />
            <div className="border border-border bg-surface p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-xl font-semibold text-text-primary">{item.degree}</h3>
                <span className="font-code text-sm text-teal">{item.year}</span>
              </div>
              <p className="mt-3 text-muted">{item.institution}</p>
              <p className="mt-2 font-code text-sm text-text-primary">{item.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
