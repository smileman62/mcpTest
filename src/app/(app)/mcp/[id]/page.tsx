import { notFound } from "next/navigation";
import McpDetailHeader from "./_components/McpDetailHeader";
import McpActionBar from "./_components/McpActionBar";

type Params = { params: { id: string } };

export async function generateStaticParams() {
  // 빌드 타임에 미리 생성할 상세 경로들 (예시)
  return [{ id: "search" }, { id: "notion" }];
}

export default async function McpDetailPage({ params: { id } }: Params) {
  // const data = await fetch(`${process.env.API_URL}/mcp/${id}`, { cache: "no-store" }).then(r => r.json());
  const data = { id, name: id.toUpperCase(), desc: `${id} 상세` };
  if (!data) return notFound();

  return (
    <section className="space-y-6">
      <McpDetailHeader name={data.name} desc={data.desc} />
      <McpActionBar id={data.id} />
      {/* 상세 정보 / 문서 / 샘플 요청 UI 등 */}
    </section>
  );
}