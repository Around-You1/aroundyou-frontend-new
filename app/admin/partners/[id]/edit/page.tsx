import { redirect } from "next/navigation";

export default async function EditPartnerPage({
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
    return <div style={{ color: "#39FF14" }}>Unable to load partner</div>;
  }

  const partner = await response.json();

  async function updatePartner(formData: FormData) {
    "use server";

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const country = formData.get("country");
    const is_active = formData.get("is_active") === "on";

    await fetch(`http://127.0.0.1:4000/partner/${partnerId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        country,
        is_active,
      }),
    });

    redirect(`/admin/partners/${partnerId}`);
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
        Edit Partner
      </h1>

      <form
        action={updatePartner}
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
            defaultValue={partner.name}
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
          Email
          <input
            name="email"
            defaultValue={partner.email}
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
          Phone
          <input
            name="phone"
            defaultValue={partner.phone}
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
          Country
          <input
            name="country"
            defaultValue={partner.country}
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

        <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="checkbox"
            name="is_active"
            defaultChecked={partner.is_active}
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
