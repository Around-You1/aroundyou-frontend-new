"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Edit } from "@/components/ui/icons"

export default function AdminDiscountsPage() {
  const router = useRouter();

  const [discounts] = useState([
    {
      id: 1,
      name: "10% Off Main Meal",
      code: "MEAL10",
      appliesTo: "Restaurant",
      status: "Active",
    },
    {
      id: 2,
      name: "R100 Off Spa Treatment",
      code: "SPA100",
      appliesTo: "Service",
      status: "Active",
    },
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
        Discounts
      </h1>

      <button
        onClick={() => router.push("/admin/discounts/new")}
        style={{
          background: "linear-gradient(135deg, #39FF14, #2dd10f)",
          color: "#000",
          padding: "12px 20px",
          borderRadius: 8,
          fontWeight: 700,
          marginBottom: "20px",
        }}
      >
        Add Discount
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
              Code
            </th>
            <th style={{ borderBottom: "2px solid #39FF14", padding: "10px" }}>
              Applies To
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
          {discounts.map((d) => (
            <tr key={d.id}>
              <td style={{ padding: "10px" }}>{d.name}</td>
              <td style={{ padding: "10px" }}>{d.code}</td>
              <td style={{ padding: "10px" }}>{d.appliesTo}</td>
              <td style={{ padding: "10px" }}>{d.status}</td>
              <td style={{ padding: "10px" }}>
                <button
                  onClick={() => router.push(`/admin/discounts/${d.id}`)}
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
                  onClick={() => router.push(`/admin/discounts/${d.id}/edit`)}
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
