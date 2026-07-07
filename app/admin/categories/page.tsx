export default function AdminCategoriesHome() {
  const sections = [
    { label: "Cuisine Types", path: "/admin/categories/cuisine" },
    { label: "Service Categories", path: "/admin/categories/service" },
    { label: "Service Subcategories", path: "/admin/categories/service-sub" },
    { label: "Attraction Categories", path: "/admin/categories/attraction" },
    { label: "Attraction Subcategories", path: "/admin/categories/attraction-sub" },
  ];

  return (
    <div style={{ color: "#39FF14" }}>
      <h1
        style={{
          fontSize: "1.8rem",
          fontWeight: 700,
          marginBottom: "20px",
        }}
      >
        Categories
      </h1>

      <div
        style={{
          display: "grid",
          gap: "16px",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        }}
      >
        {sections.map((s) => (
          <a
            key={s.path}
            href={s.path}
            style={{
              background: "#111",
              border: "2px solid #39FF14",
              color: "#39FF14",
              padding: "20px",
              borderRadius: 8,
              fontWeight: 700,
              textAlign: "center",
              display: "block",
            }}
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}
