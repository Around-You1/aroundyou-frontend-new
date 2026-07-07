export default async function AdminListingDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const listingId = params.id;

  // Fetch listing
  const response = await fetch(`http://127.0.0.1:4000/listings/${listingId}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return (
      <div style={{ color: "#39FF14" }}>
        Listing not found or unable to load.
      </div>
    );
  }

  const listing = await response.json();

  return (
    <div style={{ color: "#39FF14" }}>
      <h1
        style={{
          fontSize: "1.8rem",
          fontWeight: 700,
          marginBottom: "20px",
        }}
      >
        Listing Details
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
          <strong>Title:</strong> {listing.title}
        </p>
        <p>
          <strong>Type:</strong> {listing.type}
        </p>
        <p>
          <strong>Description:</strong> {listing.description}
        </p>
        <p>
          <strong>Partner:</strong> {listing.partner_name}
        </p>
        <p>
          <strong>Status:</strong> {listing.is_active ? "Active" : "Inactive"}
        </p>
        <p>
          <strong>Created:</strong> {listing.created_at}
        </p>
        <p>
          <strong>Updated:</strong> {listing.updated_at}
        </p>
      </div>

      <div style={{ display: "flex", gap: "12px" }}>
        <a
          href={`/admin/listings/${listingId}/edit`}
          style={{
            background: "#111",
            border: "2px solid #39FF14",
            color: "#39FF14",
            padding: "10px 18px",
            borderRadius: 6,
            fontWeight: 700,
          }}
        >
          Edit Listing
        </a>

        <a
          href={`/partner/${listing.partner_id}/listing`}
          style={{
            background: "#111",
            border: "2px solid #39FF14",
            color: "#39FF14",
            padding: "10px 18px",
            borderRadius: 6,
            fontWeight: 700,
          }}
        >
          View Partner Listing
        </a>
      </div>
    </div>
  );
}
