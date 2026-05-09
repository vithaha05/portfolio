interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="border border-border bg-surface2/80 p-5">
      <p className="font-code text-3xl font-semibold text-text">{value}</p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}
