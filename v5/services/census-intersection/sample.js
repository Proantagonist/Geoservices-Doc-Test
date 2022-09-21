// Using our first-party JavaScript client library

import { CensusIntersection } from "@tamu-gisc/geoprocessing/v5";

const intersection = new CensusIntersection({
  apiKey: "demo",
  lat: 34.0726207994348,
  lon: 118.397965182076,
  s: "CA",
  censusYears: "allAvailable",
});

// Click on the green arrow to execute the census intersection
