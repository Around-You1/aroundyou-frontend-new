"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditDiscountPage({ params }) {
  const router = useRouter();
  const { id } = params;

  const [name, setName] = useState("10% Off Main Meal");
  const [code, setCode] = useState("MEAL10");
  const [appliesTo, setAppliesTo] = useState("Restaurant");
  const [description, setDescription] = useState("10% off any main meal");

  const handleSave = () => {
    alert("Discount updated (placeholder)");
    router.push("/admin/discounts");
  };

  return (
    <div>
      <h1 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#39FF14" }}>
        Edit Discount #{id}
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
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: 8,
            border: "2px solid #39FF14",
            background: "#111",
            color: "#39FF14",
          }}
        />

        <input
          value={appliesTo}
          onChange={(e) => setAppliesTo(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: 8,
            border: "2px solid #39FF14",
            background: "#111",
            color: "#39FF14",
          }}
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: 8,
            border: "2px solid #39FF14",
            background: "#111",
            color: "#39FF14",
            minHeight: "120px",
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
