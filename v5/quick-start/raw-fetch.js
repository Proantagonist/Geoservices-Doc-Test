const resource = "https://geoservices.tamu.edu/api/geocode/v5";
const apiKey = "YOUR_API_KEY";
const version = "5.0";
const streetAddress = "9355 Burton Way";
const city = "Beverly Hills";
const state = "ca";
const zip = "99210";
const format = "json";

const url =
  resource +
  "?" +
  "&apiKey=" +
  apiKey +
  "&version=" +
  version +
  "&streetAddress=" +
  streetAddress +
  "&city=" +
  city +
  "&state=" +
  state +
  "&zip=" +
  zip +
  "&format=" +
  format;

fetch(url)
  .then(function (result) {
    return result.json();
  })
  .then(function (json) {
    // Handle payload
    if (json.statusCode === 200) {
      console.log("Payload", json);
    } else {
      // Handle any other non-success API status codes
      console.log("Not a success", json);
    }
  })
  .catch(function (err) {
    // Access request error here, if any.
    console.log(err);
  });
