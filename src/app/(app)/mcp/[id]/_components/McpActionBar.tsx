"use client";
import { useState } from "react";
import { Button } from "@/components/ui";

export default function McpActionBar({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);
  const handleTest = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/health`).then(r => r.json());
      alert(JSON.stringify(res));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-2">
      <Button onClick={handleTest} disabled={loading}>{loading ? "요청 중..." : "샘플 호출"}</Button>
      <Button variant="secondary">문서 보기</Button>
    </div>
  );
}