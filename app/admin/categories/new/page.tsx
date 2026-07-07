"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewCategoryPage() {
  const router = useRouter();

  const [group, setGroup] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    alert("Category saved (placeholder)");
    router.push("/admin/categories");
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
        Add Category
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          placeholder="Group (Cuisine / Attractions / Services)"
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: 8,
            border: "2px solid #39FF14",
            background: "#111",
            color: "#39FF14",
          }}
        />

        <input
          placeholder="Category Name"
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
          Save Category
        </button>
      </div>
    </div>
  );
}
