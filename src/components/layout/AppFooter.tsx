export default function AppFooter() {
  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-6xl p-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MCP HUB
      </div>
    </footer>
  );
}