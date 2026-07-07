"use client";

import { useState } from "react";

export default function AdminAnalyticsPage() {
  // Placeholder stats until backend is connected
  const [stats] = useState({
    partners: { total: 120, active: 95, inactive: 25 },
    locals: { total: 340, active: 280, inactive: 60 },
    listings: { total: 560 },
    guests: { signins: 4200, accessCodes: 3100 },
  });

  return (
    <div>
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          marginBottom: "30px",
          color: "#39FF14",
        }}
      >
        Analytics Dashboard
      </h1>

      {/* KPI CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <KPI title="Total Partners" value={stats.partners.total} />
        <KPI title="Active Partners" value={stats.partners.active} />
        <KPI title="Inactive Partners" value={stats.partners.inactive} />

        <KPI title="Total Locals" value={stats.locals.total} />
        <KPI title="Active Locals" value={stats.locals.active} />
        <KPI title="Inactive Locals" value={stats.locals.inactive} />

        <KPI title="Total Listings" value={stats.listings.total} />

        <KPI title="Guest Sign‑ins" value={stats.guests.signins} />
        <KPI title="Access Code Usage" value={stats.guests.accessCodes} />
      </div>

      {/* GRAPH PLACEHOLDERS */}
      <div style={{ marginTop: "40px" }}>
        <h2 style={{ color: "#39FF14", marginBottom: "15px" }}>
          Activity Over Time
        </h2>

        <div
          style={{
            width: "100%",
            height: "300px",
            background: "#111",
            border: "2px solid #39FF14",
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#39FF14",
            marginBottom: "40px",
          }}
        >
          Graph Placeholder (Partners / Locals / Guests)
        </div>

        <h2 style={{ color: "#39FF14", marginBottom: "15px" }}>
          Category Popularity
        </h2>

        <div
          style={{
            width: "100%",
            height: "300px",
            background: "#111",
            border: "2px solid #39FF14",
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#39FF14",
            marginBottom: "40px",
          }}
        >
          Graph Placeholder (Cuisine / Attractions / Services)
        </div>

        <h2 style={{ color: "#39FF14", marginBottom: "15px" }}>
          Province Heatmap
        </h2>

        <div
          style={{
            width: "100%",
            height: "300px",
            background: "#111",
            border: "2px solid #39FF14",
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#39FF14",
          }}
        >
          Heatmap Placeholder (Western Cape / Gauteng / etc.)
        </div>
      </div>
    </div>
  );
}

function KPI({ title, value }) {
  return (
    <div
      style={{
        background: "#111",
        border: "2px solid #39FF14",
        borderRadius: 12,
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h3 style={{ color: "#39FF14", fontSize: "1rem", marginBottom: "10px" }}>
        {title}
      </h3>
      <p style={{ color: "#39FF14", fontSize: "1.6rem", fontWeight: 700 }}>
        {value}
      </p>
    </div>
  );
}
