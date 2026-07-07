"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewTierPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [visibility, setVisibility] = useState("");
  const [analytics, setAnalytics] = useState("");
  const [extras, setExtras] = useState("");

  const handleSubmit = () => {
    alert("Tier saved (placeholder)");
    router.push("/admin/tiers");
  };

  return (
    <div>
      <h1 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "20px", color: "#39FF14" }}>
        Add Tier
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          placeholder="Tier Name"
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
          placeholder="Price (e.g. R100)"
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
          placeholder="Visibility (Low / Normal / Featured / Top)"
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
          placeholder="Analytics (None / Basic / Enhanced / Premium)"
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
          placeholder="Extra Fields (Yes / No)"
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
          Save Tier
        </button>
      </div>
    </div>
  );
}
