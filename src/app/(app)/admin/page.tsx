import AdminStatCard from "./_components/AdminStatCard";

export default function AdminPage() {
  const stats = [
    { title: "Active MCPs", value: 12 },
    { title: "Requests (24h)", value: 341 },
    { title: "Errors (24h)", value: 3 },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">관리자 대시보드</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s) => (
          <AdminStatCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  );
}