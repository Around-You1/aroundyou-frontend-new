"use client";

import { useRouter } from "next/navigation";

export default function ViewFacilityPage({ params }) {
  const router = useRouter();
  const { id } = params;

  return (
    <div>
      <h1 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#39FF14" }}>
        Facility #{id}
      </h1>

      <p style={{ color: "#aaa", marginTop: "10px" }}>
        Facility details will load here once backend is connected.
      </p>

      <button
        onClick={() => router.push(`/admin/facilities/${id}/edit`)}
        style={{
          marginTop: "20px",
          background: "#111",
          border: "2px solid #39FF14",
          color: "#39FF14",
          padding: "10px 20px",
          borderRadius: 8,
        }}
      >
        Edit Facility
      </button>
    </div>
  );
}
