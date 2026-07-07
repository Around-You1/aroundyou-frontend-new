import { redirect } from "next/navigation";

export default async function EditListingPage({
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
    return <div style={{ color: "#39FF14" }}>Unable to load listing</div>;
  }

  const listing = await response.json();

  async function updateListing(formData: FormData) {
    "use server";

    const title = formData.get("title");
    const type = formData.get("type");
    const description = formData.get("description");
    const is_active = formData.get("is_active") === "on";

    await fetch(`http://127.0.0.1:4000/listings/${listingId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        type,
        description,
        is_active,
      }),
    });

    redirect(`/admin/listings/${listingId}`);
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
        Edit Listing
      </h1>

      <form
        action={updateListing}
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
          Title
          <input
            name="title"
            defaultValue={listing.title}
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

        <label>
          Type
          <input
            name="type"
            defaultValue={listing.type}
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

        <label>
          Description
          <textarea
            name="description"
            defaultValue={listing.description}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: 6,
              border: "2px solid #39FF14",
              background: "#000",
              color: "#39FF14",
              marginTop: "5px",
              minHeight: "120px",
            }}
          />
        </label>

        <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="checkbox"
            name="is_active"
            defaultChecked={listing.is_active}
          />
          Active
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
