"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Edit } from "@/components/ui/icons"

export default function AdminFacilitiesPage() {
  const router = useRouter();

  const [facilities] = useState([
    { id: 1, name: "Free Wi‑Fi", icon: "wifi", category: "General" },
    { id: 2, name: "Swimming Pool", icon: "pool", category: "Leisure" },
  ]);

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
        Facilities
      </h1>

      <button
        onClick={() => router.push("/admin/facilities/new")}
        style={{
          background: "linear-gradient(135deg, #39FF14, #2dd10f)",
          color: "#000",
          padding: "12px 20px",
          borderRadius: 8,
          fontWeight: 700,
          marginBottom: "20px",
        }}
      >
        Add Facility
      </button>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          color: "#39FF14",
        }}
      >
        <thead>
          <tr>
            <th style={{ borderBottom: "2px solid #39FF14", padding: "10px" }}>
              Name
            </th>
            <th style={{ borderBottom: "2px solid #39FF14", padding: "10px" }}>
              Icon
            </th>
            <th style={{ borderBottom: "2px solid #39FF14", padding: "10px" }}>
              Category
            </th>
            <th style={{ borderBottom: "2px solid #39FF14", padding: "10px" }}>
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {facilities.map((f) => (
            <tr key={f.id}>
              <td style={{ padding: "10px" }}>{f.name}</td>
              <td style={{ padding: "10px" }}>{f.icon}</td>
              <td style={{ padding: "10px" }}>{f.category}</td>
              <td style={{ padding: "10px" }}>
                <button
                  onClick={() => router.push(`/admin/facilities/${f.id}`)}
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
                  onClick={() => router.push(`/admin/facilities/${f.id}/edit`)}
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
