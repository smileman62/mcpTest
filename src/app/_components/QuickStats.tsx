const STATS = [
  { k: "Active MCPs", v: "12" },
  { k: "Requests (24h)", v: "341" },
  { k: "Avg. Latency", v: "182ms" },
  { k: "Error Rate", v: "0.9%" },
];

export default function QuickStats() {
  return (
    <section className="mx-auto max-w-6xl px-5">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {STATS.map((s) => (
          <div key={s.k} className="rounded-2xl border border-black/10 dark:border-white/10 p-4">
            <p className="text-xs text-gray-500 dark:text-neutral-400">{s.k}</p>
            <p className="mt-1 text-xl font-semibold">{s.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}