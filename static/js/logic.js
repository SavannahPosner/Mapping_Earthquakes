// Create the map object with center at the San Francisco airport.
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);



 // Add GeoJSON data.
 let sanFranAirport =
 {"type":"FeatureCollection","features":[{
     "type":"Feature",
     "properties":{
         "id":"3469",
         "name":"San Francisco International Airport",
         "city":"San Francisco",
         "country":"United States",
         "faa":"SFO",
         "icao":"KSFO",
         "alt":"13",
         "tz-offset":"-8",
         "dst":"A",
         "tz":"America/Los_Angeles"},
         "geometry":{
             "type":"Point",
             "coordinates":[-122.375,37.61899948120117]}}
 ]};
 
 L.geoJSON(sanFranAirport).addTo(map);

// We create the tile layer that will be the background of our map.
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Change the map style to "satellite-streets-v11."

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

var marker = L.circleMarker([34.0522, -118.2437], {
    radius: 100,
    color:'black',
    fillColor: '#ffffa1'
}).addTo(map);

// Coordinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

  // Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "yellow"
  }).addTo(map)

  L.geoJson(data, {
    pointToLayer: function(feature, latlng) {
      return L.marker(latlng);
     }
});