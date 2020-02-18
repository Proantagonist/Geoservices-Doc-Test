const geocode = new Geocoder({
  apiKey: 'YOUR_API_KEY_HERE',
  version: '4.01',
  streetAddress: '9355 Burton Way',
  city: 'Beverly Hills',
  state: 'ca',
  zip: 99210
});

//
// THREE WAYS TO CONSUME
//

// Observable
geocode.execute()
.subscribe((result) => {
  // Receive successful result here
}, (err) => {
  // Handle XHR and non-success API error codes here
});

// Promise
geocode.execute(true)
.then((result) => {
  // Receive successful result here
})
.catch((err) => {
  // Handle XHR and non-success API error codes here
});

// Node-style callback
geocode.execute(function(err, result){
  if(err){
    // Handle XHR and non-success API error codes here
  }
  
  // Receive successful result here
});
