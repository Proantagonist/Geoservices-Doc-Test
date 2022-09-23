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

geocode
  .asPromise()
  .then((res) => {
    console.log("Promise finished");
  })
  .catch((err) => {
    console.log("Promise finished with error");
  });

geocode.asObservable().subscribe({
  next: (res) => {
    console.log("Observable finished");
  },
  error: (err) => {
    console.log("Observable finished with error");
  },
});

geocode.asCallback((err, data) => {
  if (err) {
    console.log("Callback finished with error");
    return;
  }

  console.log("Callback finished");
});
