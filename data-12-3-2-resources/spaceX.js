/*
 * Define URL to the Space X API
 */
const url = 'https://api.spacexdata.com/v2/launchpads';

/*
 * Call SpaceX API, retrieve the data, and print it to the browser console.
 */
d3.json(url).then(receivedData => console.log(receivedData));

/*
 * Retrieve the details for "Vandenberg Air Force Base Space Launch Complex 3W"
 */
d3.json(url).then(spaceXResults => console.log(spaceXResults[0]));

/*
 * Retrieve the property "full_name" of the Vandenberg Air Force Base
 */
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));
/*
! NOTE: The details of each location are enclosed within a JavaScript object. 
! Its properties can therefore be accessed with the dot notation.
*/

/*
 * Retrieve the latitude (among the property "location") of the Vandenberg Air Force Base
 */
d3.json(url).then(spaceXResults =>
  console.log(spaceXResults[0].location.latitude)
);
/*
! NOTE: Use the dot notation twice to access the nested property.
*/

/*
 * SKILL DRILL: Use map() to print only the latitude and longitude
 * coordinates of each SpaceX launch station.
 */

d3.json(url).then(function(spaceXResults) {
  let coordinates = [];
  spaceXResults.map(function(result) {
    var lat = result.location.latitude;
    var lng = result.location.longitude;
    coordinates.push([lat, lng]);
    return [lat, lng];
  });
  console.log(coordinates);
});