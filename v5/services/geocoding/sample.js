// Using our first-party JavaScript client library

import { Geocode } from "@tamu-gisc/geoprocessing-v5";

const geocode = new Geocode({
  apiKey: "YOUR_API_KEY",
  streetAddress: "1207 Winding Road",
  city: "College Station",
  state: "TX",
  zip: 77840,
  census: true,
  censusYears: "allAvailable",
  refs: ["MicrosoftFootprints"],
});
