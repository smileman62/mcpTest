export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24 grid gap-8">
      <div className="grid gap-6">
        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-[-0.02em]">
          Connect tools to LLMs with <span className="bg-black text-white dark:bg-white dark:text-black px-2 rounded-lg">MCP</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-neutral-300 max-w-2xl">
          다양한 MCP(Server-side capabilities)를 검색하고, 샘플 호출로 바로 체험해보세요. Notion/Slack/Google 등 각 커넥터의 토큰 요구사항과 예제를 한 곳에서.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="/mcp" className="rounded-xl bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-center font-medium">
            Explore MCPs
          </a>
          <a href="/admin" className="rounded-xl border border-black/10 dark:border-white/15 px-5 py-3 text-center font-medium">
            Open Admin
          </a>
        </div>
      </div>
    </section>
  );
}