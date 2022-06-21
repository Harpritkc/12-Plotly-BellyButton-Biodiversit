/*
 * 1. Sort the cities in descending order of population growth.
 */
var sortedCities = cityGrowths.sort(popGrowth => popGrowth.Increase_from_2016);
console.log(sortedCities);
/*
var sortedCities = cityGrowths
  .sort((a, b) => a.Increase_from_2016 - b.Increase_from_2016)
  .reverse();
console.log(sortedCities);
*/

/*
 * 2. Select only the top five cities in terms of growth.
 */
var topFiveCities = sortedCities.slice(0, 5);
console.log(topFiveCities);

/*
 * 3. Create separate arrays for the city names and their population growths.
 */
var topFiveCityNames = topFiveCities.map(city => city.City);
console.log(topFiveCityNames);

var topFiveCityGrowth = topFiveCities.map(city =>
  parseInt(city.Increase_from_2016)
);
console.log(topFiveCityGrowth);

/*
! NOTE: "parseInt" converts strings into integers...
*/

/*
 * 4. Use Plotly to create a bar chart with these arrays.
 */
var trace = {
  x: topFiveCityNames,
  y: topFiveCityGrowth,
  type: 'bar'
};

var data = [trace];

var layout = {
  title: 'Most Rapidly Growing Cities',
  xaxis: { title: 'City' },
  yaxis: { title: 'Population Growth, 2016-2017' }
};

Plotly.newPlot('bar-plot', data, layout);

/*
! Skill Drill:  Use the same dataset to create a bar chart 
! of the seven largest cities by population.
*/

/*
 * 1. Sort the cities in descending order of population size.
 */

// var newSortedCities = cityGrowths.sort(popSize => popSize.population);
// console.log(sortedCities);

var newSortedCities = cityGrowths
  .sort((a, b) => a.population - b.population)
  .reverse();
console.log(newSortedCities);

/*
 * 2. Select only the top seven cities in terms of population size.
 */
var topSevenCities = newSortedCities.slice(0, 7);
console.log(topSevenCities);

/*
 * 3. Create separate arrays for the city names and their population size.
 */
var topSevenCityNames = topSevenCities.map(names => names.City);
console.log(topSevenCityNames);

var topSevenCitySize = topSevenCities.map(sizes => parseInt(sizes.population));
console.log(topSevenCitySize);

/*
 * 4. Use Plotly to create a bar chart with these arrays.
 */
var trace = {
  x: topSevenCityNames,
  y: topSevenCitySize,
  type: 'bar'
};

var data = [trace];

var layout = {
  title: 'Most Populated Cities',
  xaxis: { title: 'City' },
  yaxis: { title: 'Population Size, 2016-2017' }
};

Plotly.newPlot('largecities-bar-plot', data, layout);
