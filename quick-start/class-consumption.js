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
.subscribe(function(result) {
  // Receive successful result here
}, function(err) {
  // Handle XHR and non-success API error codes here
});

// Promise
geocode.execute(true)
.then(function(result) {
  // Receive successful result here
})
.catch(function(err) {
  // Handle XHR and non-success API error codes here
});

// Node-style callback
geocode.execute(function(err, result) {
  if(err){
    // Handle XHR and non-success API error codes here
  }
  
  // Receive successful result here
});
