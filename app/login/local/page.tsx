"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AppLogo from "../../components/AppLogo";

const API_BASE = "http://127.0.0.1:4000";

export default function LocalLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const sendOtp = async () => {
    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }

    try {
      // ✔ FIXED: Correct backend endpoint
      const response = await fetch(`${API_BASE}/auth/request-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        alert("Failed to send OTP");
        return;
      }

      router.push(`/login/local/verify?email=${encodeURIComponent(email)}`);
    } catch (err) {
      console.error(err);
      alert("Could not connect to backend");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ background: "#000" }}
    >
      {/* LOGO */}
      <AppLogo width={150} height={150} />

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
        Local Login
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
        Enter your email to receive a one‑time login code.
      </p>

      {/* EMAIL INPUT */}
      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          marginTop: "20px",
          padding: "12px",
          width: "100%",
          maxWidth: "300px",
          borderRadius: 8,
          border: "2px solid #39FF14",
          background: "#111",
          color: "#39FF14",
        }}
      />

      {/* SEND OTP BUTTON */}
      <button
        onClick={sendOtp}
        style={{
          background: "linear-gradient(135deg, #39FF14, #2dd10f)",
          color: "#000",
          padding: "14px 0",
          borderRadius: 10,
          fontWeight: 700,
          fontSize: "1rem",
          cursor: "pointer",
          width: "100%",
          maxWidth: "300px",
          marginTop: "15px",
        }}
      >
        Send Login Code
      </button>

      {/* BACK BUTTON */}
      <button
        onClick={() => router.push("/login")}
        style={{
          marginTop: "20px",
          color: "#39FF14",
          textDecoration: "underline",
          fontSize: "0.9rem",
        }}
      >
        Back to Login
      </button>
    </div>
  );
}
