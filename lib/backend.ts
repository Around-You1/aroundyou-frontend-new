export function getAuthenticatedBackend() {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "";
  return {
    get: (path: string) => fetch(`${baseUrl}${path}`).then(r => r.json()),
    post: (path: string, body: any) =>
      fetch(`${baseUrl}${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then(r => r.json()),
  };
}
