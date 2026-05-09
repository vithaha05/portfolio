import { SectionShell } from "@/components/SectionShell";
import { activities } from "@/data/activities";

export function Activities() {
  return (
    <SectionShell id="activities" eyebrow="Activities" title="Beyond the Code">
      <ol className="grid gap-4">
        {activities.map((activity, index) => (
          <li
            key={activity.title}
            className="grid gap-4 border border-border bg-surface p-5 transition hover:border-accent2/70 sm:grid-cols-[92px_1fr]"
          >
            <span className="font-code text-4xl font-semibold text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>
              <span className="block text-lg font-semibold text-text">{activity.title}</span>
              <span className="mt-2 block leading-7 text-muted">{activity.context}</span>
            </span>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
