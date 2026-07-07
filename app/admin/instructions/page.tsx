"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Edit } from "@/components/ui/icons"

export default function AdminInstructionsPage() {
  const router = useRouter();

  const [instructions] = useState([
    {
      id: 1,
      title: "Check‑in Instructions",
      appliesTo: "Accommodation",
      status: "Active",
    },
    {
      id: 2,
      title: "Parking Instructions",
      appliesTo: "Accommodation",
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
        Instructions
      </h1>

      <button
        onClick={() => router.push("/admin/instructions/new")}
        style={{
          background: "linear-gradient(135deg, #39FF14, #2dd10f)",
          color: "#000",
          padding: "12px 20px",
          borderRadius: 8,
          fontWeight: 700,
          marginBottom: "20px",
        }}
      >
        Add Instruction
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
              Title
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
          {instructions.map((i) => (
            <tr key={i.id}>
              <td style={{ padding: "10px" }}>{i.title}</td>
              <td style={{ padding: "10px" }}>{i.appliesTo}</td>
              <td style={{ padding: "10px" }}>{i.status}</td>
              <td style={{ padding: "10px" }}>
                <button
                  onClick={() => router.push(`/admin/instructions/${i.id}`)}
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
                  onClick={() => router.push(`/admin/instructions/${i.id}/edit`)}
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
