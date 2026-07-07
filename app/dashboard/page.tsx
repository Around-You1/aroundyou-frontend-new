"use client";

import { useRouter } from "next/navigation";
import AppLogo from "../components/AppLogo";

export default function DashboardPage() {
  const router = useRouter();

  const sections = [
    { label: "My Profile", path: "/profile" },
    { label: "My Bookings", path: "/bookings" },
    { label: "Nearby Places", path: "/nearby" },
    { label: "Settings", path: "/settings" },
  ];

  const logout = () => {
    router.push("/login");
  };

  return (
    <div
      className="min-h-screen px-6 py-10"
      style={{ background: "#000", color: "#39FF14" }}
    >
      {/* HEADER */}
      <div className="flex flex-col items-center">
        <AppLogo width={120} height={120} />

        <h1
          style={{
            marginTop: "20px",
            fontSize: "1.8rem",
            fontWeight: 700,
            letterSpacing: "0.03em",
            textAlign: "center",
          }}
        >
          Welcome to Around You
        </h1>

        <p
          style={{
            color: "#aaa",
            marginTop: "10px",
            textAlign: "center",
            maxWidth: "400px",
            lineHeight: 1.5,
          }}
        >
          You are now logged in. Explore your dashboard below.
        </p>

        <button
          onClick={logout}
          style={{
            marginTop: "20px",
            background: "#111",
            border: "2px solid #39FF14",
            color: "#39FF14",
            padding: "10px 20px",
            borderRadius: 10,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      {/* GRID */}
      <div
        className="grid gap-4 mt-10"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        }}
      >
        {sections.map((section) => (
          <button
            key={section.path}
            onClick={() => router.push(section.path)}
            style={{
              background: "#111",
              border: "2px solid #39FF14",
              color: "#39FF14",
              padding: "20px 0",
              borderRadius: 12,
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {section.label}
          </button>
        ))}
      </div>
    </div>
  );
}
