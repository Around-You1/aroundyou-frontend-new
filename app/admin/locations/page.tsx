"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Edit } from "@/components/ui/icons"

export default function AdminLocationsPage() {
  const router = useRouter();

  const [locations] = useState([
    { id: 1, province: "Western Cape", municipality: "Cape Town", status: "Active" },
    { id: 2, province: "Gauteng", municipality: "Johannesburg", status: "Active" },
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
        Provinces & Municipalities
      </h1>

      <button
        onClick={() => router.push("/admin/locations/new")}
        style={{
          background: "linear-gradient(135deg, #39FF14, #2dd10f)",
          color: "#000",
          padding: "12px 20px",
          borderRadius: 8,
          fontWeight: 700,
          marginBottom: "20px",
        }}
      >
        Add Location
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
              Province
            </th>
            <th style={{ borderBottom: "2px solid #39FF14", padding: "10px" }}>
              Municipality
            </th>
            <th style={{ borderBottom: "2px solid #39FF14", padding: "10px" }}>
              Status
            </th>
            <th style={{ borderBottom: "2px solid #39FF14", padding: "10px" }}>
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {locations.map((loc) => (
            <tr key={loc.id}>
              <td style={{ padding: "10px" }}>{loc.province}</td>
              <td style={{ padding: "10px" }}>{loc.municipality}</td>
              <td style={{ padding: "10px" }}>{loc.status}</td>
              <td style={{ padding: "10px" }}>
                <button
                  onClick={() => router.push(`/admin/locations/${loc.id}`)}
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
                  onClick={() => router.push(`/admin/locations/${loc.id}/edit`)}
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
