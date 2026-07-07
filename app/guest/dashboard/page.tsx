export default async function GuestDashboardPage() {
  // Fetch guest profile
  const profileRes = await fetch("http://127.0.0.1:4000/guest/me", {
    cache: "no-store",
  });

  if (!profileRes.ok) {
    return <div>Unable to load guest profile</div>;
  }

  const guest = await profileRes.json();

  // Fetch guest ratings
  const ratingsRes = await fetch(
    `http://127.0.0.1:4000/ratings/by-guest?guest_id=${guest.id}`,
    { cache: "no-store" }
  );

  const ratings = ratingsRes.ok ? await ratingsRes.json() : [];

  // Fetch recently viewed
  const viewedRes = await fetch(
    `http://127.0.0.1:4000/guest/recently-viewed?guest_id=${guest.id}`,
    { cache: "no-store" }
  );

  const viewed = viewedRes.ok ? await viewedRes.json() : [];

  return (
    <div className="space-y-10 max-w-2xl">
      {/* Guest Profile */}
      <section>
        <h1 className="text-2xl font-bold mb-4">Your Profile</h1>

        <div className="bg-white p-6 shadow rounded-lg space-y-2">
          <p>
            <span className="font-semibold">Name:</span> {guest.name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {guest.email}
          </p>
          <p>
            <span className="font-semibold">Sign‑ins:</span>{" "}
            {guest.sign_in_count}
          </p>
        </div>
      </section>

      {/* Ratings */}
      <section>
        <h2 className="text-xl font-bold mb-4">Your Ratings</h2>

        {ratings.length === 0 ? (
          <div className="bg-white p-6 shadow rounded-lg">
            <p>You have not rated anything yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {ratings.map((r: any) => (
              <div
                key={r.id}
                className="bg-white p-4 shadow rounded-lg space-y-1"
              >
                <p>
                  <span className="font-semibold">Listing:</span>{" "}
                  {r.listing_title}
                </p>
                <p>
                  <span className="font-semibold">Rating:</span> {r.rating}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Recently Viewed */}
      <section>
        <h2 className="text-xl font-bold mb-4">Recently Viewed</h2>

        {viewed.length === 0 ? (
          <div className="bg-white p-6 shadow rounded-lg">
            <p>You have not viewed any listings yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {viewed.map((v: any) => (
              <div
                key={v.id}
                className="bg-white p-4 shadow rounded-lg space-y-1"
              >
                <p>
                  <span className="font-semibold">Listing:</span>{" "}
                  {v.listing_title}
                </p>
                <p>
                  <span className="font-semibold">Viewed:</span> {v.viewed_at}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
