"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const API_BASE = "http://127.0.0.1:4000";

// TYPES
type Service = {
  id: string;
  name: string;
  imageUrl?: string;
  category?: string;
  distance?: number;
};

type ServiceCardProps = {
  service: Service;
  onClick: () => void;
};

type FilterProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export default function GuestServicesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const accommodationId = searchParams.get("accommodationId") || "";
  const initialRadius = Number(searchParams.get("radius") || 50);

  const [radius, setRadius] = useState(initialRadius);
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState<Service[]>([]);

  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    wheelchair: "",
    childFriendly: "",
  });

  // LOAD SERVICES
  useEffect(() => {
    if (!accommodationId) return;

    const fetchServices = async () => {
      try {
        const query = new URLSearchParams({
          accommodationId,
          radius: String(radius),
          search,
          category: filters.category,
          wheelchair: filters.wheelchair,
          childFriendly: filters.childFriendly,
        });

        const response = await fetch(`${API_BASE}/guest/services?${query}`);

        if (!response.ok) return;

        const data = await response.json();
        setServices(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchServices();
  }, [accommodationId, radius, search, filters]);

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "#000", color: "#39FF14" }}
      >
        Loading services…
      </div>
    );
  }

  return (
    <div
      className="min-h-screen px-6 py-10"
      style={{ background: "#000", color: "#39FF14" }}
    >
      <h1
        style={{
          fontSize: "1.8rem",
          fontWeight: 700,
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Services Nearby
      </h1>

      {/* RADIUS */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <p style={{ color: "#aaa", marginBottom: "10px" }}>
          Showing services within {radius} km
        </p>

        <input
          type="range"
          min="0"
          max="150"
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
          style={{ width: "80%" }}
        />
      </div>

      {/* SEARCH */}
      <div style={{ maxWidth: "600px", margin: "0 auto 20px auto" }}>
        <input
          type="text"
          placeholder="Search services…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "12px",
            width: "100%",
            borderRadius: 8,
            border: "2px solid #39FF14",
            background: "#111",
            color: "#39FF14",
          }}
        />
      </div>

      {/* FILTERS */}
      <div style={{ maxWidth: "600px", margin: "0 auto 40px auto" }}>
        <Filter
          label="Category"
          value={filters.category}
          onChange={(v) => setFilters({ ...filters, category: v })}
        />
        <Filter
          label="Wheelchair Access"
          value={filters.wheelchair}
          onChange={(v) => setFilters({ ...filters, wheelchair: v })}
        />
        <Filter
          label="Child Friendly"
          value={filters.childFriendly}
          onChange={(v) => setFilters({ ...filters, childFriendly: v })}
        />
      </div>

      {/* LIST */}
      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        }}
      >
        {services.map((s) => (
          <ServiceCard
            key={s.id}
            service={s}
            onClick={() =>
              router.push(
                `/guest/services/${s.id}?accommodationId=${accommodationId}`
              )
            }
          />
        ))}
      </div>
    </div>
  );
}

// COMPONENTS
function ServiceCard({ service, onClick }: ServiceCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "#111",
        border: "2px solid #39FF14",
        borderRadius: 12,
        padding: "16px",
        cursor: "pointer",
      }}
    >
      {service.imageUrl && (
        <img
          src={service.imageUrl}
          alt={service.name}
          style={{
            width: "100%",
            height: "160px",
            objectFit: "cover",
            borderRadius: 8,
            marginBottom: "12px",
          }}
        />
      )}

      <h3 style={{ fontWeight: 700, marginBottom: "6px" }}>{service.name}</h3>

      <p style={{ color: "#aaa", marginBottom: "6px" }}>
        {service.category || "Category not specified"}
      </p>

      <p style={{ color: "#39FF14" }}>
        {service.distance?.toFixed(1)} km away
      </p>
    </div>
  );
}

function Filter({ label, value, onChange }: FilterProps) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <label style={{ display: "block", marginBottom: "6px" }}>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          borderRadius: 8,
          border: "2px solid #39FF14",
          background: "#111",
          color: "#39FF14",
        }}
      />
    </div>
  );
}
