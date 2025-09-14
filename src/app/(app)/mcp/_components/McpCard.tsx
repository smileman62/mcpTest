import type { Mcp } from "@/types/mcp";

export default function McpCard({ item }: { item: Mcp }) {
  return (
    <div className="rounded-2xl border p-4 hover:shadow-sm transition">
      <p className="text-sm text-gray-500">{item.id}</p>
      <h3 className="mt-1 text-lg font-semibold">{item.name}</h3>
      <p className="mt-1 text-gray-600">{item.desc}</p>
    </div>
  );
}