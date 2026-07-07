"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditLocationPage({ params }) {
  const router = useRouter();
  const { id } = params;

  const [province, setProvince] = useState("Western Cape");
  const [municipality, setMunicipality] = useState("Cape Town");

  const handleSave = () => {
    alert("Location updated (placeholder)");
    router.push("/admin/locations");
  };

  return (
    <div>
      <h1 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#39FF14" }}>
        Edit Location #{id}
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
        <input
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
