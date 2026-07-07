import Link from "next/link";

export default function PartnerLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const partnerId = params.id;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h2 className="text-xl font-bold mb-6">Partner Dashboard</h2>

        <nav className="space-y-4">
          <Link
            href={`/partner/${partnerId}`}
            className="block text-gray-700 hover:text-black"
          >
            Dashboard Home
          </Link>

          <Link
            href={`/partner/${partnerId}/edit`}
            className="block text-gray-700 hover:text-black"
          >
            Edit Profile
          </Link>

          <Link
            href={`/partner/${partnerId}/listing`}
            className="block text-gray-700 hover:text-black"
          >
            Manage Listing
          </Link>

          <Link
            href="/logout"
            className="block text-red-600 hover:text-red-800"
          >
            Logout
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}
