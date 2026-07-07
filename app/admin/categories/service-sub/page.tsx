import { Edit } from "@/components/ui/icons"
export default async function AdminServiceSubcategoriesPage() {
  const response = await fetch("http://127.0.0.1:4000/service-subcategories", {
    cache: "no-store",
  });

  if (!response.ok) {
    return (
      <div style={{ color: "#39FF14" }}>
        Unable to load service subcategories
      </div>
    );
  }

  const subs = await response.json();

  return (
    <div style={{ color: "#39FF14" }}>
      <h1
        style={{
          fontSize: "1.8rem",
          fontWeight: 700,
          marginBottom: "20px",
        }}
      >
        Service Subcategories
      </h1>

      {subs.length === 0 ? (
        <div
          style={{
            background: "#111",
            border: "2px solid #39FF14",
            padding: "20px",
            borderRadius: 8,
          }}
        >
          No service subcategories found.
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
                Category
              </th>
              <th style={{ borderBottom: "2px solid #39FF14", padding: "10px" }}>
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {subs.map((s: any) => (
              <tr key={s.id}>
                <td style={{ padding: "10px" }}>{s.name}</td>
                <td style={{ padding: "10px" }}>{s.category_name}</td>
                <td style={{ padding: "10px" }}>
                  <a
                    href={`/admin/categories/service-sub/${s.id}`}
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
                    href={`/admin/categories/service-sub/${s.id}/edit`}
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
