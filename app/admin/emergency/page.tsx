"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Phone, Edit } from "@/components/ui/icons"

export default function AdminEmergencyPage() {
  const router = useRouter();

  const [numbers] = useState([
    { id: 1, name: "Fire Department", phone: "10111", category: "National" },
    { id: 2, name: "Ambulance", phone: "10177", category: "National" },
    { id: 3, name: "Local Police", phone: "021 480 7700", category: "Local" },
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
        Emergency Numbers
      </h1>

      <button
        onClick={() => router.push("/admin/emergency/new")}
        style={{
          background: "linear-gradient(135deg, #39FF14, #2dd10f)",
          color: "#000",
          padding: "12px 20px",
          borderRadius: 8,
          fontWeight: 700,
          marginBottom: "20px",
        }}
      >
        Add Emergency Number
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
              Phone
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
          {numbers.map((n) => (
            <tr key={n.id}>
              <td style={{ padding: "10px" }}>{n.name}</td>
              <td style={{ padding: "10px" }}>{n.phone}</td>
              <td style={{ padding: "10px" }}>{n.category}</td>
              <td style={{ padding: "10px" }}>
                <button
                  onClick={() => router.push(`/admin/emergency/${n.id}`)}
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
                  onClick={() => router.push(`/admin/emergency/${n.id}/edit`)}
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
