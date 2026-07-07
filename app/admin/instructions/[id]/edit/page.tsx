"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditInstructionPage({ params }) {
  const router = useRouter();
  const { id } = params;

  const [title, setTitle] = useState("Check‑in Instructions");
  const [appliesTo, setAppliesTo] = useState("Accommodation");
  const [content, setContent] = useState("Please collect keys from reception.");

  const handleSave = () => {
    alert("Instruction updated (placeholder)");
    router.push("/admin/instructions");
  };

  return (
    <div>
      <h1 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#39FF14" }}>
        Edit Instruction #{id}
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: 8,
            border: "2px solid #39FF14",
            background: "#111",
            color: "#39FF14",
            minHeight: "150px",
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
