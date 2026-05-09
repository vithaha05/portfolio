import type { EducationItem } from "@/types";

export function TimelineItem({ degree, institution, year, grade }: EducationItem) {
  return (
    <div className="relative pb-8 last:pb-0">
      <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border border-accent2 bg-bg shadow-[0_0_20px_rgba(45,212,160,0.45)]" />
      <div className="border border-border bg-surface p-5 transition hover:border-accent2/50">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-text">{degree}</h3>
            <p className="mt-2 text-muted">{institution}</p>
          </div>
          <span className="w-fit border border-border bg-bg px-3 py-1 font-code text-xs text-muted">
            {year}
          </span>
        </div>
        <p className="mt-4 font-code text-sm text-accent2">{grade}</p>
      </div>
    </div>
  );
}
