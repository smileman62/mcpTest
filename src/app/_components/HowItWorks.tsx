export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10 grid gap-6">
      <h2 className="text-2xl font-semibold">How it works</h2>
      <ol className="grid gap-4 sm:grid-cols-3 list-decimal list-inside">
        <li className="rounded-2xl border border-black/10 dark:border-white/10 p-5">
          <p className="font-medium">Browse MCPs</p>
          <p className="mt-1 text-sm text-gray-600 dark:text-neutral-300">목록에서 원하는 MCP를 선택합니다.</p>
        </li>
        <li className="rounded-2xl border border-black/10 dark:border-white/10 p-5">
          <p className="font-medium">Check tokens</p>
          <p className="mt-1 text-sm text-gray-600 dark:text-neutral-300">필요한 인증 정보(Scopes/OAuth)를 확인합니다.</p>
        </li>
        <li className="rounded-2xl border border-black/10 dark:border-white/10 p-5">
          <p className="font-medium">Try & Integrate</p>
          <p className="mt-1 text-sm text-gray-600 dark:text-neutral-300">샘플 호출로 응답을 확인하고 코드 스니펫을 적용합니다.</p>
        </li>
      </ol>
    </section>
  );
}