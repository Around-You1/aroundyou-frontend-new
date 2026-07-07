"use client";
export const dynamic = "force-dynamic";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const API_BASE = "http://127.0.0.1:4000";

type Restaurant = { id: string; name: string; imageUrl?: string; category?: string; distance?: number };

export default function GuestRestaurantsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const accommodationId = searchParams?.get("accommodationId") || "";
  const initialRadius = Number(searchParams?.get("radius") || 50);

  const [radius, setRadius] = useState<number>(initialRadius);
  const [loading, setLoading] = useState<boolean>(true);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (!accommodationId) { setLoading(false); return; }
    let cancelled = false;
    const fetchRestaurants = async () => {
      setLoading(true);
      try {
        const q = new URLSearchParams({ accommodationId, radius: String(radius), search });
        const res = await fetch(`${API_BASE}/guest/restaurants?${q.toString()}`);
        if (!res.ok) { if (!cancelled) setRestaurants([]); return; }
        const data = await res.json();
        if (!cancelled) setRestaurants(data || []);
      } catch (err) {
        console.error(err);
        if (!cancelled) setRestaurants([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchRestaurants();
    return () => { cancelled = true; };
  }, [accommodationId, radius, search]);

  if (loading) return <div className="min-h-screen flex items-center justify-center" style={{ background: "#000", color: "#39FF14" }}>Loading restaurants…</div>;

  return (
    <div className="min-h-screen px-6 py-10" style={{ background: "#000", color: "#39FF14" }}>
      <h1 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: 20, textAlign: "center" }}>Restaurants Nearby</h1>

      <div style={{ textAlign: "center", marginBottom: 30 }}>
        <p style={{ color: "#aaa", marginBottom: 10 }}>Showing restaurants within {radius} km</p>
        <input type="range" min={0} max={150} value={radius} onChange={(e) => setRadius(Number(e.target.value))} style={{ width: "80%" }} />
      </div>

      <div style={{ maxWidth: 600, margin: "0 auto 20px auto" }}>
        <input type="text" placeholder="Search restaurants…" value={search} onChange={(e) => setSearch(e.target.value)} style={{ padding: 12, width: "100%", borderRadius: 8, border: "2px solid #39FF14", background: "#111", color: "#39FF14" }} />
      </div>

      <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
        {restaurants.map((r) => (
          <div key={r.id} onClick={() => router.push(`/guest/restaurants/${r.id}?accommodationId=${accommodationId}`)} style={{ background: "#111", border: "2px solid #39FF14", borderRadius: 12, padding: 16, cursor: "pointer" }}>
            {r.imageUrl && <img src={r.imageUrl} alt={r.name} style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 8, marginBottom: 12 }} />}
            <h3 style={{ fontWeight: 700, marginBottom: 6 }}>{r.name}</h3>
            <p style={{ color: "#aaa", marginBottom: 6 }}>{r.category || "Category not specified"}</p>
            <p style={{ color: "#39FF14" }}>{r.distance?.toFixed(1)} km away</p>
          </div>
        ))}
      </div>
    </div>
  );
}
