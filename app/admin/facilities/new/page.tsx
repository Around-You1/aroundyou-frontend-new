"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewFacilityPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    alert("Facility saved (placeholder)");
    router.push("/admin/facilities");
  };

  return (
    <div>
      <h1
        style={{
          fontSize: "1.8rem",
          fontWeight: 700,
          marginBottom: "20px",
          color: "#39FF14",
        }}
      >
        Add Facility
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          placeholder="Facility Name"
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
          placeholder="Icon key (e.g. wifi, pool)"
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
          placeholder="Category (General / Leisure / Room / Safety)"
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
          onClick={handleSubmit}
          style={{
            background: "linear-gradient(135deg, #39FF14, #2dd10f)",
            color: "#000",
            padding: "12px",
            borderRadius: 8,
            fontWeight: 700,
            marginTop: "10px",
          }}
        >
          Save Facility
        </button>
      </div>
    </div>
  );
}
