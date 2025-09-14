export default function McpDetailHeader({ name, desc }: { name: string; desc?: string }) {
  return (
    <header className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">{name}</h1>
      {desc && <p className="text-gray-600">{desc}</p>}
    </header>
  );
}