import { Edit } from "@/components/ui/icons"
export default async function AdminPartnersPage() {
  const response = await fetch("http://127.0.0.1:4000/partner", {
    cache: "no-store",
  });

  if (!response.ok) {
    return <div style={{ color: "#39FF14" }}>Unable to load partners</div>;
  }

  const partners = await response.json();

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
        Partners
      </h1>

      {partners.length === 0 ? (
        <div
          style={{
            background: "#111",
            border: "2px solid #39FF14",
            padding: "20px",
            borderRadius: 8,
            color: "#39FF14",
          }}
        >
          No partners found.
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
                Name
              </th>
              <th style={{ borderBottom: "2px solid #39FF14", padding: "10px" }}>
                Email
              </th>
              <th style={{ borderBottom: "2px solid #39FF14", padding: "10px" }}>
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {partners.map((p: any) => (
              <tr key={p.id}>
                <td style={{ padding: "10px" }}>{p.name}</td>
                <td style={{ padding: "10px" }}>{p.email}</td>
                <td style={{ padding: "10px" }}>
                  <a
                    href={`/admin/partners/${p.id}`}
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
                    href={`/admin/partners/${p.id}/edit`}
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
