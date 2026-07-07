Type Directory -Force -Path $dir | Out-Null
@"
declare module "../lib/backend" {
  export function getAuthenticatedBackend(...args: any[]): any;
  export default any;
}
"@ | Set-Content -Path (Join-Path $dir "lib-backend.d.ts") -Encoding UTF8
Write-Host "Wrote types/lib-backend.d.ts"

