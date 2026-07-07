export default async function AdminAttractionCategoryDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const categoryId = params.id;

  // Fetch attraction category
  const response = await fetch(
    `http://127.0.0.1:4000/attraction-categories/${categoryId}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    return (
      <div style={{ color: "#39FF14" }}>
        Attraction category not found or unable to load.
      </div>
    );
  }

  const category = await response.json();

  return (
    <div style={{ color: "#39FF14" }}>
      <h1
        style={{
          fontSize: "1.8rem",
          fontWeight: 700,
          marginBottom: "20px",
        }}
      >
        Attraction Category Details
      </h1>

      <div
        style={{
          background: "#111",
          border: "2px solid #39FF14",
          padding: "20px",
          borderRadius: 8,
          marginBottom: "20px",
        }}
      >
        <p>
          <strong>Name:</strong> {category.name}
        </p>
        <p>
          <strong>Created:</strong> {category.created_at}
        </p>
        <p>
          <strong>Updated:</strong> {category.updated_at}
        </p>
      </div>

      <a
        href={`/admin/categories/attraction/${categoryId}/edit`}
        style={{
          background: "#111",
          border: "2px solid #39FF14",
          color: "#39FF14",
          padding: "10px 18px",
          borderRadius: 6,
          fontWeight: 700,
        }}
      >
        Edit Attraction Category
      </a>
    </div>
  );
}
