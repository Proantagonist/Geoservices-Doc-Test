// Using our first-party JavaScript client library

import { Geocode } from "@tamu-gisc/geoprocessing/v5";

const geocode = new Geocode({
  apiKey: "demo",
  streetAddress: "1207 Winding Road",
  city: "College Station",
  state: "tx",
  zip: 77840,
  census: true,
  censusYears: "allAvailable",
  refs: ["MicrosoftFootprints"],
});

// Click on the green arrow to execute the geocode
