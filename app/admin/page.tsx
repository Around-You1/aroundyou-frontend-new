"use client";

import AppLogo from "../components/AppLogo";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  const sections = [
    { label: "Partners", path: "/admin/partners" },
    { label: "Locals", path: "/admin/locals" },

    // ⭐ NEW LISTING SECTIONS
    { label: "Accommodations", path: "/admin/accommodations" },
    { label: "Restaurants", path: "/admin/restaurants" },
    { label: "Services", path: "/admin/services" },
    { label: "Attractions", path: "/admin/attractions" },

    // ⭐ Existing admin sections
    { label: "Categories", path: "/admin/categories" },
    { label: "Facilities", path: "/admin/facilities" },
    { label: "Tiers", path: "/admin/tiers" },
    { label: "Emergency Numbers", path: "/admin/emergency" },
    { label: "Discounts", path: "/admin/discounts" },
    { label: "Instructions", path: "/admin/instructions" },
    { label: "Images", path: "/admin/images" },
    { label: "Provinces & Municipalities", path: "/admin/locations" },
  ];

  return (
    <div
      className="min-h-screen px-6 py-10"
      style={{ background: "#000", color: "#39FF14" }}
    >
      <div className="flex flex-col items-center">
        <AppLogo width={120} height={120} />

        <h1
          style={{
            marginTop: "20px",
            fontSize: "1.8rem",
            fontWeight: 700,
            letterSpacing: "0.03em",
          }}
        >
          Admin Dashboard
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
          Manage all platform data, partners, locals, listings, categories, and
          system configuration.
        </p>
      </div>

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
