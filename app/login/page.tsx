"use client";

import { useRouter } from "next/navigation";
import AppLogo from "../components/AppLogo";

export default function LoginLandingPage() {
  const router = useRouter();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ background: "#000" }}
    >
      <AppLogo width={180} height={180} />

      <h1
        style={{
          color: "#39FF14",
          fontSize: "1.8rem",
          fontWeight: 700,
          marginTop: "20px",
          textAlign: "center",
          letterSpacing: "0.03em",
        }}
      >
        Sign In
      </h1>

      <p
        style={{
          color: "#aaa",
          marginTop: "10px",
          textAlign: "center",
          maxWidth: "320px",
          lineHeight: 1.5,
        }}
      >
        Choose your access method below.
      </p>

      <div className="flex flex-col gap-4 mt-10 w-full max-w-xs">
        <button
          onClick={() => router.push("/login/guest")}
          style={{
            background: "linear-gradient(135deg, #39FF14, #2dd10f)",
            color: "#000",
            padding: "14px 0",
            borderRadius: 10,
            fontWeight: 700,
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Guest
        </button>

        <button
          onClick={() => router.push("/login/local")}
          style={{
            background: "#111",
            border: "2px solid #39FF14",
            color: "#39FF14",
            padding: "14px 0",
            borderRadius: 10,
            fontWeight: 700,
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Local
        </button>

        <button
          onClick={() => router.push("/login/partner")}
          style={{
            background: "#111",
            border: "2px solid #39FF14",
            color: "#39FF14",
            padding: "14px 0",
            borderRadius: 10,
            fontWeight: 700,
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Partner
        </button>

        <button
          onClick={() => router.push("/login/admin")}
          style={{
            background: "#111",
            border: "2px solid #39FF14",
            color: "#39FF14",
            padding: "14px 0",
            borderRadius: 10,
            fontWeight: 700,
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Admin
        </button>
      </div>
    </div>
  );
}
