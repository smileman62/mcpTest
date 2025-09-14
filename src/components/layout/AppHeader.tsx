import Link from "next/link";

export default function AppHeader() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="font-semibold">MCP HUB</Link>
        <nav className="flex gap-4 text-sm text-gray-700">
          <Link href="/mcp">MCP</Link>
          <Link href="/admin">Admin</Link>
        </nav>
      </div>
    </header>
  );
}