const FEATURES = [
  {
    title: "Browse & Search MCPs",
    desc: "카테고리/키워드로 MCP를 탐색하고, 상세 문서/요구 토큰을 확인합니다.",
  },
  {
    title: "Try sample requests",
    desc: "샘플 파라미터로 즉시 호출하여 응답을 미리 확인합니다.",
  },
  {
    title: "Connector tokens",
    desc: "Notion/Slack/Google 등 커넥터별 인증 흐름과 필요한 스코프를 정리합니다.",
  },
  {
    title: "Serverless APIs",
    desc: "App Router의 route handlers로 간단히 백엔드 엔드포인트를 만듭니다.",
  },
  {
    title: "Docs & Snippets",
    desc: "Next.js/React 예제와 함께 통합 가이드를 제공합니다.",
  },
  {
    title: "Admin dashboard",
    desc: "요청 추이/오류율을 모니터링하고 MCP 상태를 관리합니다.",
  },
];

export default function FeatureList() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10 grid gap-6">
      <h2 className="text-2xl font-semibold">What you can do</h2>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <li key={f.title} className="rounded-2xl border border-black/10 dark:border-white/10 p-5">
            <h3 className="font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-300">{f.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}