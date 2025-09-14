type Props = { title: string; value: number | string };
export default function AdminStatCard({ title, value }: Props) {
  return (
    <div className="rounded-2xl border p-4">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="mt-1 text-2xl font-semibold">{value}</p>
    </div>
  );
}