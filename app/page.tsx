"use client";

import React, { useEffect, useState } from "react";

export default function Page() {
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    // any startup logic you had can remain here
  }, []);

  function submitRating(v: number) {
    setRating(v);

    fetch("/api/ratings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating: v }),
    }).catch(() => {
      // network error ignored
    });
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Around You</h1>

      <p>Current rating: {rating}</p>

      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => submitRating(1)}>Rate 1</button>
        <button onClick={() => submitRating(2)}>Rate 2</button>
        <button onClick={() => submitRating(3)}>Rate 3</button>
        <button onClick={() => submitRating(4)}>Rate 4</button>
        <button onClick={() => submitRating(5)}>Rate 5</button>
      </div>
    </main>
  );
}
