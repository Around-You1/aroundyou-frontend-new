"use client";

import React, { useEffect } from "react";

export default function AnalyticsExportPage() {
  // Auto‑trigger print dialog when page loads
  useEffect(() => {
    setTimeout(() => {
      window.print();
    }, 500);
  }, []);

  return (
    <div style={styles.page}>
      {/* HEADER */}
      <h1 style={styles.title}>Around You – Analytics Report</h1>
      <p style={styles.subtitle}>Generated on {new Date().toLocaleDateString()}</p>

      {/* KPI GRID */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Key Metrics</h2>

        <div style={styles.kpiGrid}>
          <KPI label="Total Partners" value="120" />
          <KPI label="Active Partners" value="95" />
          <KPI label="Inactive Partners" value="25" />

          <KPI label="Total Locals" value="340" />
          <KPI label="Active Locals" value="280" />
          <KPI label="Inactive Locals" value="60" />

          <KPI label="Total Listings" value="560" />

          <KPI label="Guest Sign‑ins" value="4200" />
          <KPI label="Access Code Usage" value="3100" />
        </div>
      </section>

      {/* GRAPH PLACEHOLDERS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Activity Over Time</h2>
        <div style={styles.graphPlaceholder}>Graph Placeholder</div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Category Popularity</h2>
        <div style={styles.graphPlaceholder}>Graph Placeholder</div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Province Heatmap</h2>
        <div style={styles.graphPlaceholder}>Heatmap Placeholder</div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Around You – Analytics Report</p>
      </footer>

      <style>{printStyles}</style>
    </div>
  );
}

function KPI({ label, value }: { label: string; value: string }) {
  return (
    <div style={styles.kpiCard}>
      <p style={styles.kpiLabel}>{label}</p>
      <p style={styles.kpiValue}>{value}</p>
    </div>
  );
}

/* INLINE STYLES */
const styles = {
  page: {
    width: "210mm",
    minHeight: "297mm",
    padding: "20mm",
    background: "#fff",
    color: "#000",
    fontFamily: "Arial, sans-serif",
  } as React.CSSProperties,
  title: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "5px",
  } as React.CSSProperties,
  subtitle: {
    fontSize: "12px",
    marginBottom: "20px",
  } as React.CSSProperties,
  section: {
    marginBottom: "25px",
    pageBreakInside: "avoid" as React.CSSProperties["pageBreakInside"],
  } as React.CSSProperties,
  sectionTitle: {
    fontSize: "16px",
    fontWeight: "700",
    marginBottom: "10px",
  } as React.CSSProperties,
  kpiGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
  } as React.CSSProperties,
  kpiCard: {
    border: "1px solid #000",
    padding: "10px",
    borderRadius: "6px",
    textAlign: "center",
  } as React.CSSProperties,
  kpiLabel: {
    fontSize: "12px",
    marginBottom: "5px",
  } as React.CSSProperties,
  kpiValue: {
    fontSize: "18px",
    fontWeight: "700",
  } as React.CSSProperties,
  graphPlaceholder: {
    width: "100%",
    height: "120px",
    border: "1px solid #000",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
  } as React.CSSProperties,
  footer: {
    marginTop: "30px",
    textAlign: "center",
    fontSize: "10px",
  } as React.CSSProperties,
};

/* PRINT RULES */
const printStyles = `
  @page {
    size: A4;
    margin: 0;
  }

  @media print {
    body {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    div {
      break-inside: avoid;
    }
  }
`;
