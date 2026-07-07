declare module "../lib/saRegions" {
  export const SA_PROVINCES: any;
  export default any;
}
"@ | Set-Content -Path (Join-Path $dir "saRegions.d.ts") -Encoding UTF8
Write-Host "Wrote types/saRegions.d.ts"

