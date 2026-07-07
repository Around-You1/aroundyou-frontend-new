"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewInstructionPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [appliesTo, setAppliesTo] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    alert("Instruction saved (placeholder)");
    router.push("/admin/instructions");
  };

  return (
    <div>
      <h1 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "20px", color: "#39FF14" }}>
        Add Instruction
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          placeholder="Instruction Title"
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
          placeholder="Applies To (Accommodation / Listing / Category)"
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
          placeholder="Instruction Content"
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
          Save Instruction
        </button>
      </div>
    </div>
  );
}
