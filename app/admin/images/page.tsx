"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Edit } from "@/components/ui/icons"

export default function AdminImagesPage() {
  const router = useRouter();

  const [images] = useState([
    {
      id: 1,
      name: "Seaside Villa Hero",
      type: "Listing",
      refId: 12,
      status: "Active",
    },
    {
      id: 2,
      name: "Partner Logo – Ocean Tours",
      type: "Partner",
      refId: 5,
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
        Images
      </h1>

      <button
        onClick={() => router.push("/admin/images/new")}
        style={{
          background: "linear-gradient(135deg, #39FF14, #2dd10f)",
          color: "#000",
          padding: "12px 20px",
          borderRadius: 8,
          fontWeight: 700,
          marginBottom: "20px",
        }}
      >
        Add Image
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
              Type
            </th>
            <th style={{ borderBottom: "2px solid #39FF14", padding: "10px" }}>
              Reference ID
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
          {images.map((img) => (
            <tr key={img.id}>
              <td style={{ padding: "10px" }}>{img.name}</td>
              <td style={{ padding: "10px" }}>{img.type}</td>
              <td style={{ padding: "10px" }}>{img.refId}</td>
              <td style={{ padding: "10px" }}>{img.status}</td>
              <td style={{ padding: "10px" }}>
                <button
                  onClick={() => router.push(`/admin/images/${img.id}`)}
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
                  onClick={() => router.push(`/admin/images/${img.id}/edit`)}
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
