"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Phone } from "@/components/ui/icons"

export default function NewEmergencyPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    alert("Emergency number saved (placeholder)");
    router.push("/admin/emergency");
  };

  return (
    <div>
      <h1 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "20px", color: "#39FF14" }}>
        Add Emergency Number
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          placeholder="Name (e.g. Fire Department)"
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
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: 8,
            border: "2px solid #39FF14",
            background: "#111",
            color: "#39FF14",
          }}
        />

        <input
          placeholder="Category (National / Local / Accommodation)"
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
          Save Number
        </button>
      </div>
    </div>
  );
}
