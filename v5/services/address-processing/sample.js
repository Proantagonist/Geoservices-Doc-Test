// Using our first-party JavaScript client library

import { AddressProcessing } from "@tamu-gisc/geoprocessing-v5";

const address = new AddressProcessing({
  apiKey: "YOUR_API_KEY",
  nonParsedStreetAddress: "123 Old US HWY 25",
  nonParsedStreetCity: "Los Angeles",
  nonParsedStreetState: "California",
  nonParsedStreetZIP: "900890255",
  addressFormat: ["USPSPublication28"],
});
