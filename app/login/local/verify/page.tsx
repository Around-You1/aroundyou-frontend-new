"use client";
export const dynamic = "force-dynamic";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function LocalVerifyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const code = searchParams?.get("code") || "";
  const [verifying, setVerifying] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (!code) return;
    let cancelled = false;
    const verify = async () => {
      setVerifying(true);
      try {
        const res = await fetch(`/api/auth/verify?code=${encodeURIComponent(code)}`);
        if (!res.ok) {
          const text = await res.text();
          if (!cancelled) setMessage(`Verification failed: ${text}`);
          return;
        }
        if (!cancelled) {
          setMessage("Verification successful. Redirecting…");
          setTimeout(() => router.push("/"), 1200);
        }
      } catch (err) {
        console.error(err);
        if (!cancelled) setMessage("Verification error");
      } finally {
        if (!cancelled) setVerifying(false);
      }
    };
    verify();
    return () => { cancelled = true; };
  }, [code, router]);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#000", color: "#39FF14" }}>
      <div style={{ maxWidth: 600, padding: 24, textAlign: "center" }}>
        <h1 style={{ fontSize: "1.6rem", marginBottom: 12 }}>Verify</h1>
        {verifying ? <p>Verifying…</p> : <p>{message || "Waiting for verification code…"}</p>}
      </div>
    </div>
  );
}
