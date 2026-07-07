export const SA_PROVINCES_MUNICIPALITIES: Record<string, string[]> = {
  "Eastern Cape": [
    "Alfred Nzo District Municipality",
    "Amathole District Municipality",
    "Buffalo City Metropolitan Municipality",
    "Chris Hani District Municipality",
    "Joe Gqabi District Municipality",
    "Nelson Mandela Bay Metropolitan Municipality",
    "OR Tambo District Municipality",
    "Sarah Baartman District Municipality",
  ],
  "Free State": [
    "Fezile Dabi District Municipality",
    "Lejweleputswa District Municipality",
    "Mangaung Metropolitan Municipality",
    "Thabo Mofutsanyana District Municipality",
    "Xhariep District Municipality",
  ],
  "Gauteng": [
    "City of Ekurhuleni Metropolitan Municipality",
    "City of Johannesburg Metropolitan Municipality",
    "City of Tshwane Metropolitan Municipality",
    "Sedibeng District Municipality",
    "West Rand District Municipality",
  ],
  "KwaZulu Natal": [
    "Amajuba District Municipality",
    "eThekwini Metropolitan Municipality",
    "Harry Gwala District Municipality",
    "King Cetshwayo District Municipality",
    "Sisonke",
    "Ugu District Municipality",
    "uMgungundlovu District Municipality",
    "uMkhanyakude District Municipality",
    "uThukela District Municipality",
    "Zululand District Municipality",
  ],
  "Limpopo": [
    "Capricorn District Municipality",
    "Mopani District Municipality",
    "Sekhukhune District Municipality",
    "Vhembe District Municipality",
    "Waterberg District Municipality",
  ],
  "Mpumalanga": [
    "Ehlanzeni District Municipality",
    "Gert Sibande District Municipality",
    "Nkangala District Municipality",
  ],
  "Northern Cape": [
    "Frances Baard District Municipality",
    "John Taolo Gaetsewe District Municipality",
    "Namakwa District Municipality",
    "Pixley ka Seme District Municipality",
    "ZF Mgcawu District Municipality",
  ],
  "North West": [
    "Bojanala Platinum District Municipality",
    "Dr Kenneth Kaunda District Municipality",
    "Dr Ruth Segomotsi Mompati District Municipality",
    "Ngaka Modiri Molema District Municipality",
  ],
  "Western Cape": [
    "Cape Winelands District Municipality",
    "Central Karoo District Municipality",
    "City of Cape Town Metropolitan Municipality",
    "Garden Route District Municipality",
    "Overberg District Municipality",
    "West Coast District Municipality",
  ],
};

export const SA_PROVINCES = Object.keys(SA_PROVINCES_MUNICIPALITIES).sort();

export function getMunicipalitiesForProvince(province: string): string[] {
  return (SA_PROVINCES_MUNICIPALITIES[province] || []).sort();
}

export const SA_ALL_MUNICIPALITIES: string[] = Object.values(SA_PROVINCES_MUNICIPALITIES)
  .flat()
  .sort();

export function getProvinceForMunicipality(municipality: string): string | null {
  for (const [province, municipalities] of Object.entries(SA_PROVINCES_MUNICIPALITIES)) {
    if (municipalities.includes(municipality)) {
      return province;
    }
  }
  return null;
}
