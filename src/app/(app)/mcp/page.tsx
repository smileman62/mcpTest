import McpList from "./_components/McpList";

export const revalidate = 60; // ISR 예시: 60초마다 갱신

export default async function McpListPage() {
  // 서버에서 데이터 패칭 (예시)
  // const data = await fetch(`${process.env.API_URL}/mcp`, { next: { revalidate: 60 } }).then(r => r.json());
  const data = [
    { id: "search", name: "Search MCP", desc: "웹 검색 기능 연결" },
    { id: "notion", name: "Notion MCP", desc: "Notion 연결" },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">MCP 목록</h2>
      <McpList items={data} />
    </section>
  );
}