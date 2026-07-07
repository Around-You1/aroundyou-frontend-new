"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewLocationPage() {
  const router = useRouter();

  const [province, setProvince] = useState("");
  const [municipality, setMunicipality] = useState("");

  const handleSubmit = () => {
    alert("Location saved (placeholder)");
    router.push("/admin/locations");
  };

  return (
    <div>
      <h1 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "20px", color: "#39FF14" }}>
        Add Location
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          placeholder="Province"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: 8,
            border: "2px solid #39FF14",
            background: "#111",
            color: "#39FF14",
          }}
        />

        <input
          placeholder="Municipality"
          value={municipality}
          onChange={(e) => setMunicipality(e.target.value)}
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
          Save Location
        </button>
      </div>
    </div>
  );
}
