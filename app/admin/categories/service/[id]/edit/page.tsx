import { redirect } from "next/navigation";

export default async function EditServiceCategoryPage({
  params,
}: {
  params: { id: string };
}) {
  const categoryId = params.id;

  // Fetch service category
  const response = await fetch(
    `http://127.0.0.1:4000/service-categories/${categoryId}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    return (
      <div style={{ color: "#39FF14" }}>
        Unable to load service category
      </div>
    );
  }

  const category = await response.json();

  async function updateServiceCategory(formData: FormData) {
    "use server";

    const name = formData.get("name");

    await fetch(`http://127.0.0.1:4000/service-categories/${categoryId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    redirect(`/admin/categories/service/${categoryId}`);
  }

  return (
    <div style={{ color: "#39FF14" }}>
      <h1
        style={{
          fontSize: "1.8rem",
          fontWeight: 700,
          marginBottom: "20px",
        }}
      >
        Edit Service Category
      </h1>

      <form
        action={updateServiceCategory}
        style={{
          background: "#111",
          border: "2px solid #39FF14",
          padding: "20px",
          borderRadius: 8,
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <label>
          Name
          <input
            name="name"
            defaultValue={category.name}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: 6,
              border: "2px solid #39FF14",
              background: "#000",
              color: "#39FF14",
              marginTop: "5px",
            }}
          />
        </label>

        <button
          type="submit"
          style={{
            background: "linear-gradient(135deg, #39FF14, #2dd10f)",
            color: "#000",
            padding: "12px",
            borderRadius: 8,
            fontWeight: 700,
            marginTop: "10px",
          }}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
