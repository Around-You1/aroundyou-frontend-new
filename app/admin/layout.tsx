"use client";

import AppLogo from "../components/AppLogo";
import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex" style={{ background: "#000" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "240px",
          background: "#0a0a0a",
          borderRight: "2px solid #39FF14",
          padding: "20px",
        }}
      >
        <div className="flex flex-col items-center">
          <AppLogo width={80} height={80} />
          <h2
            style={{
              color: "#39FF14",
              marginTop: "10px",
              fontWeight: 700,
              fontSize: "1.2rem",
            }}
          >
            Admin Panel
          </h2>
        </div>

        <nav style={{ marginTop: "30px" }}>
          <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><Link href="/admin/partners" style={{ color: "#39FF14" }}>Partners</Link></li>
            <li><Link href="/admin/locals" style={{ color: "#39FF14" }}>Locals</Link></li>
            <li><Link href="/admin/listings" style={{ color: "#39FF14" }}>Listings</Link></li>
            <li><Link href="/admin/categories" style={{ color: "#39FF14" }}>Categories</Link></li>
            <li><Link href="/admin/facilities" style={{ color: "#39FF14" }}>Facilities</Link></li>
            <li><Link href="/admin/tiers" style={{ color: "#39FF14" }}>Tiers</Link></li>
            <li><Link href="/admin/emergency" style={{ color: "#39FF14" }}>Emergency</Link></li>
            <li><Link href="/admin/discounts" style={{ color: "#39FF14" }}>Discounts</Link></li>
            <li><Link href="/admin/instructions" style={{ color: "#39FF14" }}>Instructions</Link></li>
            <li><Link href="/admin/images" style={{ color: "#39FF14" }}>Images</Link></li>
            <li><Link href="/admin/locations" style={{ color: "#39FF14" }}>Locations</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: "40px", color: "#39FF14" }}>
        {children}
      </main>
    </div>
  );
}
