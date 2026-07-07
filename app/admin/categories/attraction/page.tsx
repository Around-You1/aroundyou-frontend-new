import { Edit } from "@/components/ui/icons"
export default async function AdminAttractionCategoriesPage() {
  const response = await fetch("http://127.0.0.1:4000/attraction-categories", {
    cache: "no-store",
  });

  if (!response.ok) {
    return (
      <div style={{ color: "#39FF14" }}>
        Unable to load attraction categories
      </div>
    );
  }

  const categories = await response.json();

  return (
    <div style={{ color: "#39FF14" }}>
      <h1
        style={{
          fontSize: "1.8rem",
          fontWeight: 700,
          marginBottom: "20px",
        }}
      >
        Attraction Categories
      </h1>

      {categories.length === 0 ? (
        <div
          style={{
            background: "#111",
            border: "2px solid #39FF14",
            padding: "20px",
            borderRadius: 8,
          }}
        >
          No attraction categories found.
        </div>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th style={{ borderBottom: "2px solid #39FF14", padding: "10px" }}>
                Name
              </th>
              <th style={{ borderBottom: "2px solid #39FF14", padding: "10px" }}>
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {categories.map((c: any) => (
              <tr key={c.id}>
                <td style={{ padding: "10px" }}>{c.name}</td>
                <td style={{ padding: "10px" }}>
                  <a
                    href={`/admin/categories/attraction/${c.id}`}
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
                    href={`/admin/categories/attraction/${c.id}/edit`}
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
