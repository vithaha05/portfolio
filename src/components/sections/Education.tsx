import { SectionShell } from "@/components/SectionShell";
import { TimelineItem } from "@/components/ui/TimelineItem";
import type { EducationItem } from "@/types";

const education: EducationItem[] = [
  {
    degree: "M.Sc. TCS",
    institution: "PSG College of Technology",
    year: "2023-Present",
    grade: "7.47 CGPA",
  },
  {
    degree: "XII CBSE",
    institution: "Saratha International School",
    year: "2023",
    grade: "90.20%",
  },
  {
    degree: "X CBSE",
    institution: "Subbiah Central School",
    year: "2021",
    grade: "96.20%",
  },
];

export function Education() {
  return (
    <SectionShell id="education" eyebrow="Education" title="Academic timeline">
      <div className="relative border-l border-border pl-6">
        {education.map((item) => (
          <TimelineItem key={`${item.degree}-${item.year}`} {...item} />
        ))}
      </div>
    </SectionShell>
  );
}
