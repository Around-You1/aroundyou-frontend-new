import { Edit } from "@/components/ui/icons"
export default async function AdminListingsPage() {
  const response = await fetch("http://127.0.0.1:4000/listings", {
    cache: "no-store",
  });

  if (!response.ok) {
    return <div style={{ color: "#39FF14" }}>Unable to load listings</div>;
  }

  const listings = await response.json();

  return (
    <div>
      <h1
        style={{
          fontSize: "1.8rem",
          fontWeight: 700,
          marginBottom: "20px",
          color: "#39FF14",
        }}
      >
        Listings
      </h1>

      {listings.length === 0 ? (
        <div
          style={{
            background: "#111",
            border: "2px solid #39FF14",
            padding: "20px",
            borderRadius: 8,
            color: "#39FF14",
          }}
        >
          No listings found.
        </div>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            color: "#39FF14",
          }}
        >
          <thead>
            <tr>
              <th style={{ borderBottom: "2px solid #39FF14", padding: "10px" }}>
                Title
              </th>
              <th style={{ borderBottom: "2px solid #39FF14", padding: "10px" }}>
                Type
              </th>
              <th style={{ borderBottom: "2px solid #39FF14", padding: "10px" }}>
                Partner
              </th>
              <th style={{ borderBottom: "2px solid #39FF14", padding: "10px" }}>
                Status
              </th>
              <th style={{ borderBottom: "2px solid #39FF14", padding: "10px" }}>
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {listings.map((l: any) => (
              <tr key={l.id}>
                <td style={{ padding: "10px" }}>{l.title}</td>
                <td style={{ padding: "10px" }}>{l.type}</td>
                <td style={{ padding: "10px" }}>{l.partner_name}</td>
                <td style={{ padding: "10px" }}>
                  {l.is_active ? "Active" : "Inactive"}
                </td>
                <td style={{ padding: "10px" }}>
                  <a
                    href={`/admin/listings/${l.id}`}
                    style={{
                      background: "#111",
                      border: "2px solid #39FF14",
                      color: "#39FF14",
                      padding: "6px 12px",
                      borderRadius: 6,
                      marginRight: "10px",
                    }}
                  >
                    View
                  </a>

                  <a
                    href={`/admin/listings/${l.id}/edit`}
                    style={{
                      background: "#111",
                      border: "2px solid #39FF14",
                      color: "#39FF14",
                      padding: "6px 12px",
                      borderRadius: 6,
                    }}
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
