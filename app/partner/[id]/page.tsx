export default async function PartnerDashboardPage({
  params,
}: {
  params: { id: string };
}) {
  const partnerId = params.id;

  const response = await fetch(`http://127.0.0.1:4000/partner/${partnerId}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return <div>Partner profile not found</div>;
  }

  const partner = await response.json();

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Your Profile</h1>

      <div className="bg-white shadow p-6 rounded-lg space-y-3">
        <p>
          <span className="font-semibold">Name:</span> {partner.name}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {partner.email}
        </p>
        <p>
          <span className="font-semibold">Phone:</span> {partner.phone}
        </p>
        <p>
          <span className="font-semibold">Country:</span> {partner.country}
        </p>
      </div>
    </div>
  );
}
