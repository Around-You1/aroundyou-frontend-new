export default async function AdminLocalDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const localId = params.id;

  // Fetch local
  const response = await fetch(`http://127.0.0.1:4000/local/${localId}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return (
      <div style={{ color: "#39FF14" }}>
        Local not found or unable to load.
      </div>
    );
  }

  const local = await response.json();

  return (
    <div style={{ color: "#39FF14" }}>
      <h1
        style={{
          fontSize: "1.8rem",
          fontWeight: 700,
          marginBottom: "20px",
        }}
      >
        Local Details
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
          <strong>Name:</strong> {local.name}
        </p>
        <p>
          <strong>Email:</strong> {local.email}
        </p>
        <p>
          <strong>Phone:</strong> {local.phone}
        </p>
        <p>
          <strong>Country:</strong> {local.country}
        </p>
        <p>
          <strong>Status:</strong> {local.is_active ? "Active" : "Inactive"}
        </p>
        <p>
          <strong>Created:</strong> {local.created_at}
        </p>
        <p>
          <strong>Updated:</strong> {local.updated_at}
        </p>
      </div>

      <div style={{ display: "flex", gap: "12px" }}>
        <a
          href={`/admin/locals/${localId}/edit`}
          style={{
            background: "#111",
            border: "2px solid #39FF14",
            color: "#39FF14",
            padding: "10px 18px",
            borderRadius: 6,
            fontWeight: 700,
          }}
        >
          Edit Local
        </a>
      </div>
    </div>
  );
}
