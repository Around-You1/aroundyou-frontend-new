export function getAuthenticatedBackend() {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "";

  return {
    get: async (path: string) => {
      const res = await fetch(`${baseUrl}${path}`, {
        credentials: "include",
      });
      return res.json();
    },

    post: async (path: string, body: any) => {
      const res = await fetch(`${baseUrl}${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });
      return res.json();
    },
  };
}
