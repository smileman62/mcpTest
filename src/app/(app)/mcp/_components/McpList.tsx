import Link from "next/link";
import McpCard from "./McpCard";
import type { Mcp } from "@/types/mcp";

type Props = { items: Mcp[] };

export default function McpList({ items }: Props) {
  if (!items?.length) return <p className="text-gray-500">등록된 MCP가 없습니다.</p>;
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((m) => (
        <li key={m.id}>
          <Link href={`/mcp/${m.id}`}><McpCard item={m} /></Link>
        </li>
      ))}
    </ul>
  );
}