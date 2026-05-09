import { SectionShell } from "@/components/SectionShell";

const currentItems = [
  {
    color: "bg-accent",
    label: "Building",
    value: "finreason - financial reasoning pipeline (Colab)",
  },
  {
    color: "bg-accent2",
    label: "Open to",
    value: "ML/AI/Data internships · May-Dec 2026",
  },
  {
    color: "bg-accent3",
    label: "Based in",
    value: "Coimbatore, India",
  },
];

export function Now() {
  return (
    <SectionShell id="now" eyebrow="Now" title="Currently" className="py-12 sm:py-16">
      <div className="grid gap-4 md:grid-cols-3">
        {currentItems.map((item) => (
          <div key={item.label} className="border border-border bg-surface p-5">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className={`absolute h-full w-full animate-ping rounded-full ${item.color}`} />
                <span className={`relative h-3 w-3 rounded-full ${item.color}`} />
              </span>
              <span className="font-code text-xs uppercase tracking-[0.2em] text-muted">
                {item.label}
              </span>
            </div>
            <p className="mt-4 leading-7 text-text">{item.value}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
