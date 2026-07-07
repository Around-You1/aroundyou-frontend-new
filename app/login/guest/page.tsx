"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const API_BASE = "http://127.0.0.1:4000";

export default function GuestLoginPage() {
  const router = useRouter();

  const [accessCode, setAccessCode] = useState("");
  const [accommodationName, setAccommodationName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleGuestLogin = async () => {
    // PRIORITY 1: Access Code
    if (accessCode.trim() !== "") {
      try {
        const response = await fetch(`${API_BASE}/guest/lookup-by-access-code`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ accessCode }),
        });

        if (!response.ok) {
          alert("Invalid access code");
          return;
        }

        const data = await response.json();
        router.push(`/guest/accommodation/${data.accommodationId}`);
        return;
      } catch (err) {
        console.error(err);
        alert("Could not connect to backend");
        return;
      }
    }

    // PRIORITY 2: Accommodation Details
    if (
      accommodationName.trim() === "" ||
      address.trim() === "" ||
      country.trim() === "" ||
      province.trim() === "" ||
      postalCode.trim() === ""
    ) {
      alert("Please enter ALL accommodation details");
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/guest/lookup-by-details`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accommodationName,
          address,
          country,
          province,
          postalCode,
        }),
      });

      if (!response.ok) {
        alert("Accommodation not found");
        return;
      }

      const data = await response.json();
      router.push(`/guest/accommodation/${data.accommodationId}`);
    } catch (err) {
      console.error(err);
      alert("Could not connect to backend");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center px-6 py-10"
      style={{ background: "#000", color: "#39FF14" }}
    >
      <h1
        style={{
          fontSize: "1.8rem",
          fontWeight: 700,
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Guest Access
      </h1>

      <p style={{ color: "#aaa", textAlign: "center", marginBottom: "20px" }}>
        Enter your access code <strong>OR</strong> fill in the accommodation
        details below.
      </p>

      {/* ACCESS CODE */}
      <input
        type="text"
        placeholder="Access Code"
        value={accessCode}
        onChange={(e) => setAccessCode(e.target.value)}
        style={{
          padding: "12px",
          width: "100%",
          maxWidth: "350px",
          borderRadius: 8,
          border: "2px solid #39FF14",
          background: "#111",
          color: "#39FF14",
          marginBottom: "20px",
          textAlign: "center",
        }}
      />

      <div
        style={{
          color: "#39FF14",
          fontWeight: 700,
          margin: "10px 0",
          fontSize: "1rem",
        }}
      >
        — OR —
      </div>

      {/* ACCOMMODATION DETAILS */}
      <input
        type="text"
        placeholder="Accommodation Name"
        value={accommodationName}
        onChange={(e) => setAccommodationName(e.target.value)}
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Province"
        value={province}
        onChange={(e) => setProvince(e.target.value)}
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Postal Code"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        style={inputStyle}
      />

      <button
        onClick={handleGuestLogin}
        style={{
          background: "linear-gradient(135deg, #39FF14, #2dd10f)",
          color: "#000",
          padding: "14px 0",
          borderRadius: 10,
          fontWeight: 700,
          fontSize: "1rem",
          cursor: "pointer",
          width: "100%",
          maxWidth: "350px",
          marginTop: "20px",
        }}
      >
        Continue
      </button>

      <button
        onClick={() => router.push("/login")}
        style={{
          marginTop: "20px",
          color: "#39FF14",
          textDecoration: "underline",
          fontSize: "0.9rem",
        }}
      >
        Back to Login
      </button>
    </div>
  );
}

const inputStyle = {
  padding: "12px",
  width: "100%",
  maxWidth: "350px",
  borderRadius: 8,
  border: "2px solid #39FF14",
  background: "#111",
  color: "#39FF14",
  marginBottom: "12px",
};
