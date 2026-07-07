"use client";
export const dynamic = "force-dynamic";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const API_BASE = "http://127.0.0.1:4000";

type RestaurantDetail = { id: string; name: string; description?: string; imageUrl?: string; category?: string };

export default function RestaurantDetailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = (typeof window !== "undefined") ? window.location.pathname.split("/").pop() || "" : "";
  const accommodationId = searchParams?.get("accommodationId") || "";

  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState<RestaurantDetail | null>(null);

  useEffect(() => {
    if (!id) { setLoading(false); return; }
    let cancelled = false;
    const fetchDetail = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/guest/restaurants/${id}?accommodationId=${encodeURIComponent(accommodationId)}`);
        if (!res.ok) { if (!cancelled) setDetail(null); return; }
        const data = await res.json();
        if (!cancelled) setDetail(data);
      } catch (err) {
        console.error(err);
        if (!cancelled) setDetail(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchDetail();
    return () => { cancelled = true; };
  }, [id, accommodationId]);

  if (loading) return <div className="min-h-screen flex items-center justify-center" style={{ background: "#000", color: "#39FF14" }}>Loading…</div>;
  if (!detail) return <div className="min-h-screen flex items-center justify-center" style={{ background: "#000", color: "#39FF14" }}>Not found</div>;

  return (
    <div className="min-h-screen px-6 py-10" style={{ background: "#000", color: "#39FF14" }}>
      <button onClick={() => router.back()} style={{ marginBottom: 12 }}>Back</button>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 700 }}>{detail.name}</h1>
      {detail.imageUrl && <img src={detail.imageUrl} alt={detail.name} style={{ width: "100%", maxHeight: 420, objectFit: "cover", borderRadius: 8, marginTop: 12 }} />}
      <p style={{ color: "#aaa", marginTop: 12 }}>{detail.description}</p>
    </div>
  );
}
