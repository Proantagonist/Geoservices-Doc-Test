import { Geocode } from "@tamu-gisc/geoprocessing-v5";

const geocode = new Geocode({
  apiKey: "YOUR_API_KEY",
  streetAddress: "1207 Winding Road",
  city: "College Station",
  state: "tx",
  zip: 77840,
  census: true,
  censusYears: "allAvailable",
  refs: ["MicrosoftFootprints"],
});

//
// Consume
//

//
// Promise
//
geocode
  .asPromise()
  .then((res) => {
    // Receive successful result here
  })
  .catch((err) => {
    // Handle XHR and non-success API error codes here
  });

//
// Observable
//
geocode.asObservable().subscribe({
  next: (res) => {
    // Receive successful result here);
  },
  error: (err) => {
    // Handle XHR and non-success API error codes here
  },
});

//
// Callback
//
geocode.asCallback((err, res) => {
  if (err) {
    // Handle XHR and non-success API error codes here
    return;
  }

  // Receive successful result here
});
