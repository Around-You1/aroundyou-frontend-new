"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Edit } from "@/components/ui/icons"

export default function AdminTiersPage() {
  const router = useRouter();

  const [tiers] = useState([
    { id: 1, name: "Tier 1 – Essentials", price: "R0", visibility: "Low", analytics: "None", extras: "No" },
    { id: 2, name: "Tier 2 – Explorer", price: "R100", visibility: "Normal", analytics: "Basic", extras: "No" },
    { id: 3, name: "Tier 3 – Experience", price: "R200", visibility: "Featured", analytics: "Enhanced", extras: "No" },
    { id: 4, name: "Tier 4 – All Access", price: "R300", visibility: "Top", analytics: "Premium", extras: "Yes" },
  ]);

  return (
    <div>
      <h1 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "20px", color: "#39FF14" }}>
        Tiers
      </h1>

      <button
        onClick={() => router.push("/admin/tiers/new")}
        style={{
          background: "linear-gradient(135deg, #39FF14, #2dd10f)",
          color: "#000",
          padding: "12px 20px",
          borderRadius: 8,
          fontWeight: 700,
          marginBottom: "20px",
        }}
      >
        Add Tier
      </button>

      <table style={{ width: "100%", borderCollapse: "collapse", color: "#39FF14" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "2px solid #39FF14", padding: "10px" }}>Name</th>
            <th style={{ borderBottom: "2px solid #39FF14", padding: "10px" }}>Price</th>
            <th style={{ borderBottom: "2px solid #39FF14", padding: "10px" }}>Visibility</th>
            <th style={{ borderBottom: "2px solid #39FF14", padding: "10px" }}>Analytics</th>
            <th style={{ borderBottom: "2px solid #39FF14", padding: "10px" }}>Extra Fields</th>
            <th style={{ borderBottom: "2px solid #39FF14", padding: "10px" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {tiers.map((t) => (
            <tr key={t.id}>
              <td style={{ padding: "10px" }}>{t.name}</td>
              <td style={{ padding: "10px" }}>{t.price}</td>
              <td style={{ padding: "10px" }}>{t.visibility}</td>
              <td style={{ padding: "10px" }}>{t.analytics}</td>
              <td style={{ padding: "10px" }}>{t.extras}</td>
              <td style={{ padding: "10px" }}>
                <button
                  onClick={() => router.push(`/admin/tiers/${t.id}`)}
                  style={{
                    background: "#111",
                    border: "2px solid #39FF14",
                    color: "#39FF14",
                    padding: "6px 12px",
                    borderRadius: 6,
                    marginRight: "10px",
                  }}
                >
                  View
                </button>

                <button
                  onClick={() => router.push(`/admin/tiers/${t.id}/edit`)}
                  style={{
                    background: "#111",
                    border: "2px solid #39FF14",
                    color: "#39FF14",
                    padding: "6px 12px",
                    borderRadius: 6,
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
