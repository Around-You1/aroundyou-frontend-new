"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const API_BASE = "http://127.0.0.1:4000";

export default function GuestAccommodationPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const { id } = params;

  const [loading, setLoading] = useState(true);
  const [accommodation, setAccommodation] = useState(null);
  const [radius, setRadius] = useState(50); // default 50km
  const [counts, setCounts] = useState({
    restaurants: 0,
    services: 0,
    attractions: 0,
  });

  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    cuisine: "",
    wheelchair: "",
    childFriendly: "",
  });

  // -------------------------------
  // LOAD ACCOMMODATION PROFILE
  // -------------------------------
  useEffect(() => {
    const fetchAccommodation = async () => {
      try {
        const response = await fetch(`${API_BASE}/guest/accommodation/${id}`);

        if (!response.ok) {
          alert("Accommodation not found");
          router.push("/login/guest");
          return;
        }

        const data = await response.json();
        setAccommodation(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        alert("Could not connect to backend");
      }
    };

    fetchAccommodation();
  }, [id, router]);

  // -------------------------------
  // LOAD COUNTS FOR PARTNERS
  // -------------------------------
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await fetch(
          `${API_BASE}/guest/nearby-counts?accommodationId=${id}&radius=${radius}`
        );

        if (!response.ok) return;

        const data = await response.json();
        setCounts(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCounts();
  }, [id, radius]);

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "#000", color: "#39FF14" }}
      >
        Loading accommodation…
      </div>
    );
  }

  return (
    <div
      className="min-h-screen px-6 py-10"
      style={{ background: "#000", color: "#39FF14" }}
    >
      {/* HEADER */}
      <h1
        style={{
          fontSize: "1.8rem",
          fontWeight: 700,
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        {accommodation.name}
      </h1>

      {/* IMAGE */}
      {accommodation.imageUrl && (
        <img
          src={accommodation.imageUrl}
          alt="Accommodation"
          style={{
            width: "100%",
            maxWidth: "600px",
            borderRadius: 12,
            margin: "0 auto 20px auto",
            display: "block",
          }}
        />
      )}

      {/* DETAILS */}
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <Detail label="Address" value={accommodation.address} />
        <Detail label="Contact" value={accommodation.contact} />
        <Detail label="Description" value={accommodation.description} />
        <Detail label="Amenities" value={accommodation.amenities} />
        <Detail label="Facilities" value={accommodation.facilities} />
        <Detail label="Guidelines" value={accommodation.guidelines} />
        <Detail label="Check‑In Instructions" value={accommodation.checkIn} />
        <Detail label="Check‑Out Instructions" value={accommodation.checkOut} />
      </div>

      {/* RADIUS SLIDER */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700 }}>
          Explore Nearby Partners
        </h2>

        <p style={{ color: "#aaa", marginBottom: "10px" }}>
          Showing partners within {radius} km
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

      {/* CATEGORY BUTTONS */}
      <div
        className="grid gap-4 mt-10"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        }}
      >
        <CategoryButton
          label={`Restaurants (${counts.restaurants})`}
          onClick={() =>
            router.push(
              `/guest/restaurants?accommodationId=${id}&radius=${radius}`
            )
          }
        />

        <CategoryButton
          label={`Services (${counts.services})`}
          onClick={() =>
            router.push(
              `/guest/services?accommodationId=${id}&radius=${radius}`
            )
          }
        />

        <CategoryButton
          label={`Attractions (${counts.attractions})`}
          onClick={() =>
            router.push(
              `/guest/attractions?accommodationId=${id}&radius=${radius}`
            )
          }
        />
      </div>

      {/* SEARCH BAR */}
      <div style={{ marginTop: "40px", maxWidth: "600px", marginInline: "auto" }}>
        <input
          type="text"
          placeholder="Search restaurants, services, attractions…"
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

        {/* FILTERS */}
        <div style={{ marginTop: "20px" }}>
          <Filter
            label="Cuisine Type"
            value={filters.cuisine}
            onChange={(v) => setFilters({ ...filters, cuisine: v })}
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
      </div>
    </div>
  );
}

// -------------------------------
// REUSABLE COMPONENTS
// -------------------------------
function Detail({ label, value }) {
  if (!value) return null;

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3 style={{ fontWeight: 700, marginBottom: "6px" }}>{label}</h3>
      <p style={{ color: "#aaa", lineHeight: 1.5 }}>{value}</p>
    </div>
  );
}

function CategoryButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "#111",
        border: "2px solid #39FF14",
        color: "#39FF14",
        padding: "20px 0",
        borderRadius: 12,
        fontWeight: 700,
        fontSize: "1rem",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}

function Filter({ label, value, onChange }) {
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
