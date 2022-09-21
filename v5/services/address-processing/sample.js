// Using our first-party JavaScript client library

import { AddressProcessing } from "@tamu-gisc/geoprocessing/v5";

const address = new AddressProcessing({
  apiKey: "demo",
  nonParsedStreetAddress: "123 Old Del Mar",
  nonParsedStreetCity: "Los Angeles",
  nonParsedStreetState: "California",
  nonParsedStreetZIP: "900890255",
  addressFormat: ["USPSPublication28"],
});

// Click on the green arrow to execute the geocode
