declare module "../lib/geolocation" {
  export function getCurrentLocation(...args: any[]): Promise<any>;
  export function geocodeAddress(...args: any[]): Promise<any>;
  export default {
    getCurrentLocation: getCurrentLocation,
    geocodeAddress: geocodeAddress
  };
}
