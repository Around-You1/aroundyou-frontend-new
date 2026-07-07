export default async function PartnerListingPage({
  params,
}: {
  params: { id: string };
}) {
  const partnerId = params.id;

  // Fetch the partner's listing
  const response = await fetch(
    `http://127.0.0.1:4000/listings/by-user?user_id=${partnerId}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    return <div>No listing found for this partner</div>;
  }

  const listings = await response.json();

  // If partner has no listings yet
  if (!listings || listings.length === 0) {
    return (
      <div className="max-w-xl">
        <h1 className="text-2xl font-bold mb-6">Your Listing</h1>

        <div className="bg-white p-6 shadow rounded-lg">
          <p>You have not created a listing yet.</p>
        </div>
      </div>
    );
  }

  // For now, partners only have ONE listing
  const listing = listings[0];

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Your Listing</h1>

      <div className="bg-white shadow p-6 rounded-lg space-y-3">
        <p>
          <span className="font-semibold">Title:</span> {listing.title}
        </p>

        <p>
          <span className="font-semibold">Type:</span> {listing.type}
        </p>

        <p>
          <span className="font-semibold">Description:</span>{" "}
          {listing.description}
        </p>

        <p>
          <span className="font-semibold">Status:</span>{" "}
          {listing.is_active ? "Active" : "Inactive"}
        </p>

        <a
          href={`/partner/${partnerId}/listing/edit`}
          className="inline-block mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Edit Listing
        </a>
      </div>
    </div>
  );
}
