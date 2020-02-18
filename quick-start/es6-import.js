// Import the Geocoder class from the module
import { Geocoder } from '@tamu-gisc/common/utils/geometry/geoprocessing';

const geocoder = new Geocoder({
  apiKey: 'YOUR_API_KEY_HERE',
  version: '4.01',
  streetAddress: '9355 Burton Way',
  city: 'Beverly Hills',
  state: 'ca',
  zip: 99210
});

// Observable-based
geocoder.execute()
.subscribe((result) => {
  // Receive successful result here
}, (err) => {
  // Handle XHR and non-success API error codes here
});

// Promise-based
geocoder.execute(true)
.then((result) => {
  // Receive successful result here
})
.catch((err) => {
  // Handle XHR and non-success API error codes here
});

// Callback
geocoder.execute(function(err, result){
  if(err){
    // Handle XHR and non-success API error codes here
  }
  
  // Receive successful result here
});
