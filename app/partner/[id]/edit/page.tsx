import { redirect } from "next/navigation";

export default async function EditPartnerPage({
  params,
}: {
  params: { id: string };
}) {
  const partnerId = params.id;

  // Fetch existing partner data
  const response = await fetch(`http://127.0.0.1:4000/partner/${partnerId}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return <div>Partner not found</div>;
  }

  const partner = await response.json();

  async function updatePartner(formData: FormData) {
    "use server";

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const country = formData.get("country");

    await fetch(`http://127.0.0.1:4000/partner/${partnerId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        country,
      }),
    });

    redirect(`/partner/${partnerId}`);
  }

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Edit Profile</h1>

      <form action={updatePartner} className="space-y-4 bg-white p-6 shadow rounded-lg">
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            name="name"
            defaultValue={partner.name}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            name="email"
            defaultValue={partner.email}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Phone</label>
          <input
            name="phone"
            defaultValue={partner.phone}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Country</label>
          <input
            name="country"
            defaultValue={partner.country}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
