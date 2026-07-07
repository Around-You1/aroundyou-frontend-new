"use client";

import AppLogo from "../../components/AppLogo";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PartnerLoginPage() {
  const router = useRouter();
  const [accessCode, setAccessCode] = useState("");

  const handleSubmit = () => {
    if (accessCode.length === 12) {
      router.push(`/partner?accessCode=${accessCode}`);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ background: "#000" }}
    >
      <AppLogo width={140} height={140} />

      <h1
        style={{
          color: "#39FF14",
          fontSize: "1.6rem",
          fontWeight: 700,
          marginTop: "20px",
          textAlign: "center",
          letterSpacing: "0.03em",
        }}
      >
        Partner Login
      </h1>

      <p
        style={{
          color: "#aaa",
          marginTop: "10px",
          textAlign: "center",
          maxWidth: "300px",
          lineHeight: 1.5,
        }}
      >
        Enter your 12‑digit access code to view your business listing.
      </p>

      <input
        type="text"
        value={accessCode}
        onChange={(e) => setAccessCode(e.target.value)}
        maxLength={12}
        placeholder="Enter Access Code"
        style={{
          marginTop: "20px",
          width: "100%",
          maxWidth: "280px",
          padding: "12px",
          borderRadius: 8,
          border: "2px solid #39FF14",
          background: "#111",
          color: "#39FF14",
          fontSize: "1rem",
          textAlign: "center",
          outline: "none",
        }}
      />

      <button
        onClick={handleSubmit}
        disabled={accessCode.length !== 12}
        style={{
          marginTop: "20px",
          background:
            accessCode.length === 12
              ? "linear-gradient(135deg, #39FF14, #2dd10f)"
              : "#222",
          color: accessCode.length === 12 ? "#000" : "#555",
          padding: "14px 0",
          width: "100%",
          maxWidth: "280px",
          borderRadius: 10,
          fontWeight: 700,
          fontSize: "1rem",
          cursor: accessCode.length === 12 ? "pointer" : "not-allowed",
          transition: "all 0.2s",
        }}
      >
        Continue
      </button>
    </div>
  );
}
