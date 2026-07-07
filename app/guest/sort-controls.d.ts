declare module "./SortControls" {
  const SortControls: any;
  export default SortControls;
}
"@ | Set-Content -Path (Join-Path $dir "SortControls.d.ts") -Encoding UTF8
Write-Host "Wrote types/SortControls.d.ts"

