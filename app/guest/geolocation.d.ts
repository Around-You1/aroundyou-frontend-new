@"
declare module "../lib/geolocation" {
  export function getCurrentLocation(...args: any[]): any;
  export default any;
}
"@ | Set-Content -Path (Join-Path $dir "geolocation.d.ts") -Encoding UTF8
Write-Host "Wrote types/geolocation.d.ts"
