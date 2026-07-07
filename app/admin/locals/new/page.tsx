"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewLocalPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [province, setProvince] = useState("");
  const [municipality, setMunicipality] = useState("");

  const handleSubmit = () => {
    alert("Local saved (placeholder)");
    router.push("/admin/locals");
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
        Add Local
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          placeholder="Full Name"
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
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: 8,
            border: "2px solid #39FF14",
            background: "#111",
            color: "#39FF14",
          }}
        />

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
          Save Local
        </button>
      </div>
    </div>
  );
}
