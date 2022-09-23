// Using our first-party JavaScript client library

import { ReverseGeocode } from "@tamu-gisc/geoprocessing-v5";

const reverseGeocode = new ReverseGeocode({
  apiKey: "YOUR_API_KEY",
  latitude: 30.610487,
  longitude: -96.327766,
});
