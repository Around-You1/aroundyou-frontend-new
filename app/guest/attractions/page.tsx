"use client";
export const dynamic = "force-dynamic";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const API_BASE = "http://127.0.0.1:4000";

type Attraction = { id: string; name: string; imageUrl?: string; category?: string; distance?: number };

export default function GuestAttractionsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const accommodationId = searchParams?.get("accommodationId") || "";
  const initialRadius = Number(searchParams?.get("radius") || 50);

  const [radius, setRadius] = useState<number>(initialRadius);
  const [loading, setLoading] = useState<boolean>(true);
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState({ category: "", wheelchair: "", childFriendly: "" });

  useEffect(() => {
    if (!accommodationId) { setLoading(false); return; }
    let cancelled = false;
    const fetchAttractions = async () => {
      setLoading(true);
      try {
        const q = new URLSearchParams({
          accommodationId,
          radius: String(radius),
          search,
          category: filters.category,
          wheelchair: filters.wheelchair,
          childFriendly: filters.childFriendly,
        });
        const res = await fetch(`${API_BASE}/guest/attractions?${q.toString()}`);
        if (!res.ok) { if (!cancelled) setAttractions([]); return; }
        const data = await res.json();
        if (!cancelled) setAttractions(data || []);
      } catch (err) {
        console.error(err);
        if (!cancelled) setAttractions([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchAttractions();
    return () => { cancelled = true; };
  }, [accommodationId, radius, search, filters]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center" style={{ background: "#000", color: "#39FF14" }}>Loading attractions…</div>;
  }

  return (
    <div className="min-h-screen px-6 py-10" style={{ background: "#000", color: "#39FF14" }}>
      <h1 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: 20, textAlign: "center" }}>Attractions Nearby</h1>

      <div style={{ textAlign: "center", marginBottom: 30 }}>
        <p style={{ color: "#aaa", marginBottom: 10 }}>Showing attractions within {radius} km</p>
        <input type="range" min={0} max={150} value={radius} onChange={(e) => setRadius(Number(e.target.value))} style={{ width: "80%" }} />
      </div>

      <div style={{ maxWidth: 600, margin: "0 auto 20px auto" }}>
        <input type="text" placeholder="Search attractions…" value={search} onChange={(e) => setSearch(e.target.value)} style={{ padding: 12, width: "100%", borderRadius: 8, border: "2px solid #39FF14", background: "#111", color: "#39FF14" }} />
      </div>

      <div style={{ maxWidth: 600, margin: "0 auto 40px auto" }}>
        <Filter label="Category" value={filters.category} onChange={(v) => setFilters({ ...filters, category: v })} />
        <Filter label="Wheelchair Access" value={filters.wheelchair} onChange={(v) => setFilters({ ...filters, wheelchair: v })} />
        <Filter label="Child Friendly" value={filters.childFriendly} onChange={(v) => setFilters({ ...filters, childFriendly: v })} />
      </div>

      <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
        {attractions.map((a) => (
          <AttractionCard key={a.id} attraction={a} onClick={() => router.push(`/guest/attractions/${a.id}?accommodationId=${accommodationId}`)} />
        ))}
      </div>
    </div>
  );
}

function AttractionCard({ attraction, onClick }: { attraction: Attraction; onClick: () => void }) {
  return (
    <div onClick={onClick} style={{ background: "#111", border: "2px solid #39FF14", borderRadius: 12, padding: 16, cursor: "pointer" }}>
      {attraction.imageUrl && <img src={attraction.imageUrl} alt={attraction.name} style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 8, marginBottom: 12 }} />}
      <h3 style={{ fontWeight: 700, marginBottom: 6 }}>{attraction.name}</h3>
      <p style={{ color: "#aaa", marginBottom: 6 }}>{attraction.category || "Category not specified"}</p>
      <p style={{ color: "#39FF14" }}>{attraction.distance?.toFixed(1)} km away</p>
    </div>
  );
}

function Filter({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <label style={{ display: "block", marginBottom: 6 }}>{label}</label>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} style={{ padding: 10, width: "100%", borderRadius: 8, border: "2px solid #39FF14", background: "#111", color: "#39FF14" }} />
    </div>
  );
}
