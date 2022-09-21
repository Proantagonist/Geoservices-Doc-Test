// Using our first-party JavaScript client library

import { ReverseGeocode } from "@tamu-gisc/geoprocessing/v5";

const reverseGeocode = new ReverseGeocode({
  apiKey: "demo",
  latitude: 30.610487,
  longitude: -96.327766,
});

// Click on the green arrow to execute the reverse geocode
