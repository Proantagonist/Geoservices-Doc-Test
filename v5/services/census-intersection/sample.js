// Using our first-party JavaScript client library

import { CensusIntersection } from "@tamu-gisc/geoprocessing-v5";

const intersection = new CensusIntersection({
  apiKey: "YOUR_API_KEY",
  lat: 34.0726207996348,
  lon: -118.397965182076,
  s: "CA",
  censusYears: "allAvailable",
});
