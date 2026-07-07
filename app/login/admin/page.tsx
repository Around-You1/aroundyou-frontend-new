"use client";

import AppLogo from "../../components/AppLogo";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (email.includes("@") && password.length > 5) {
      router.push(`/admin?email=${encodeURIComponent(email)}`);
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
        Admin Login
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
        Enter your admin credentials to access the dashboard.
      </p>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Admin email"
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

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        style={{
          marginTop: "15px",
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
        disabled={!email.includes("@") || password.length < 6}
        style={{
          marginTop: "20px",
          background:
            email.includes("@") && password.length >= 6
              ? "linear-gradient(135deg, #39FF14, #2dd10f)"
              : "#222",
          color:
            email.includes("@") && password.length >= 6 ? "#000" : "#555",
          padding: "14px 0",
          width: "100%",
          maxWidth: "280px",
          borderRadius: 10,
          fontWeight: 700,
          fontSize: "1rem",
          cursor:
            email.includes("@") && password.length >= 6
              ? "pointer"
              : "not-allowed",
          transition: "all 0.2s",
        }}
      >
        Continue
      </button>
    </div>
  );
}
