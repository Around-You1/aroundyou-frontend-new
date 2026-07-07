"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditFacilityPage({ params }) {
  const router = useRouter();
  const { id } = params;

  const [name, setName] = useState("Free Wi‑Fi");
  const [icon, setIcon] = useState("wifi");
  const [category, setCategory] = useState("General");

  const handleSave = () => {
    alert("Facility updated (placeholder)");
    router.push("/admin/facilities");
  };

  return (
    <div>
      <h1 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#39FF14" }}>
        Edit Facility #{id}
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
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: 8,
            border: "2px solid #39FF14",
            background: "#111",
            color: "#39FF14",
          }}
        />

        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
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
