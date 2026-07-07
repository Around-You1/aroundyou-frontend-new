"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditTierPage({ params }) {
  const router = useRouter();
  const { id } = params;

  const [name, setName] = useState("Tier 1 – Essentials");
  const [price, setPrice] = useState("R0");
  const [visibility, setVisibility] = useState("Low");
  const [analytics, setAnalytics] = useState("None");
  const [extras, setExtras] = useState("No");

  const handleSave = () => {
    alert("Tier updated (placeholder)");
    router.push("/admin/tiers");
  };

  return (
    <div>
      <h1 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#39FF14" }}>
        Edit Tier #{id}
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: 8,
            border: "2px solid #39FF14",
            background: "#111",
            color: "#39FF14",
          }}
        />

        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: 8,
            border: "2px solid #39FF14",
            background: "#111",
            color: "#39FF14",
          }}
        />

        <input
          value={visibility}
          onChange={(e) => setVisibility(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: 8,
            border: "2px solid #39FF14",
            background: "#111",
            color: "#39FF14",
          }}
        />

        <input
          value={analytics}
          onChange={(e) => setAnalytics(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: 8,
            border: "2px solid #39FF14",
            background: "#111",
            color: "#39FF14",
          }}
        />

        <input
          value={extras}
          onChange={(e) => setExtras(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: 8,
            border: "2px solid #39FF14",
            background: "#111",
            color: "#39FF14",
          }}
        />

        <button
          onClick={handleSave}
          style={{
            background: "linear-gradient(135deg, #39FF14, #2dd10f)",
            color: "#000",
            padding: "12px",
            borderRadius: 8,
            fontWeight: 700,
          }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
