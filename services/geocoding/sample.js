// Using our first-party JavaScript client library

const geocode = new Geocoder({
  apiKey: 'demo',
  version: '4.01',
  streetAddress: '9355 Burton Way',
  city: 'Beverly Hills',
  state: 'ca',
  zip: 99210
});

// Click on the green arrow to execute the geocode
