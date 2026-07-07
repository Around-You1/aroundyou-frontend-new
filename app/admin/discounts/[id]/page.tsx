"use client";

import { useRouter } from "next/navigation";

export default function ViewDiscountPage({ params }) {
  const router = useRouter();
  const { id } = params;

  return (
    <div>
      <h1 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#39FF14" }}>
        Discount #{id}
      </h1>

      <p style={{ color: "#aaa", marginTop: "10px" }}>
        Discount details will load here once backend is connected.
      </p>

      <button
        onClick={() => router.push(`/admin/discounts/${id}/edit`)}
        style={{
          marginTop: "20px",
          background: "#111",
          border: "2px solid #39FF14",
          color: "#39FF14",
          padding: "10px 20px",
          borderRadius: 8,
        }}
      >
        Edit Discount
      </button>
    </div>
  );
}
