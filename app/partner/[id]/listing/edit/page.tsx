import { redirect } from "next/navigation";

export default async function EditListingPage({
  params,
}: {
  params: { id: string };
}) {
  const partnerId = params.id;

  // Fetch listing
  const response = await fetch(
    `http://127.0.0.1:4000/listings/by-user?user_id=${partnerId}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    return <div>Listing not found</div>;
  }

  const listings = await response.json();
  const listing = listings[0];

  async function updateListing(formData: FormData) {
    "use server";

    const title = formData.get("title");
    const description = formData.get("description");
    const type = formData.get("type");
    const is_active = formData.get("is_active") === "on";

    await fetch(`http://127.0.0.1:4000/listings/${listing.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        type,
        is_active,
      }),
    });

    redirect(`/partner/${partnerId}/listing`);
  }

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Edit Listing</h1>

      <form action={updateListing} className="space-y-4 bg-white p-6 shadow rounded-lg">
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            name="title"
            defaultValue={listing.title}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Type</label>
          <input
            name="type"
            defaultValue={listing.type}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            defaultValue={listing.description}
            className="w-full border p-2 rounded h-32"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="is_active"
            defaultChecked={listing.is_active}
          />
          <label className="font-semibold">Active</label>
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
