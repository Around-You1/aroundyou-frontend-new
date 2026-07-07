"use client";

export default function AppLogo({
  width = 160,
  height = 160,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <img
      src="/logo-main.png"
      alt="Around You Logo"
      width={width}
      height={height}
      style={{ display: "block", margin: "0 auto", objectFit: "contain" }}
    />
  );
}
