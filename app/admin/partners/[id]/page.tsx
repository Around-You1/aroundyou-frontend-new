export default async function AdminPartnerDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const partnerId = params.id;

  // Fetch partner
  const response = await fetch(`http://127.0.0.1:4000/partner/${partnerId}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return (
      <div style={{ color: "#39FF14" }}>
        Partner not found or unable to load.
      </div>
    );
  }

  const partner = await response.json();

  return (
    <div style={{ color: "#39FF14" }}>
      <h1
        style={{
          fontSize: "1.8rem",
          fontWeight: 700,
          marginBottom: "20px",
        }}
      >
        Partner Details
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
          <strong>Name:</strong> {partner.name}
        </p>
        <p>
          <strong>Email:</strong> {partner.email}
        </p>
        <p>
          <strong>Phone:</strong> {partner.phone}
        </p>
        <p>
          <strong>Country:</strong> {partner.country}
        </p>
        <p>
          <strong>Status:</strong> {partner.is_active ? "Active" : "Inactive"}
        </p>
        <p>
          <strong>Created:</strong> {partner.created_at}
        </p>
        <p>
          <strong>Updated:</strong> {partner.updated_at}
        </p>
      </div>

      <div style={{ display: "flex", gap: "12px" }}>
        <a
          href={`/admin/partners/${partnerId}/edit`}
          style={{
            background: "#111",
            border: "2px solid #39FF14",
            color: "#39FF14",
            padding: "10px 18px",
            borderRadius: 6,
            fontWeight: 700,
          }}
        >
          Edit Partner
        </a>

        <a
          href={`/partner/${partnerId}/listing`}
          style={{
            background: "#111",
            border: "2px solid #39FF14",
            color: "#39FF14",
            padding: "10px 18px",
            borderRadius: 6,
            fontWeight: 700,
          }}
        >
          View Listing
        </a>
      </div>
    </div>
  );
}
