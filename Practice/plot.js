var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
 };

 
 var trace = {
   x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
   type: "bar"
  };
  var data = [trace];
  var layout = {
   title: "'Bar' Chart",
   xaxis: {title: "Drinks"},
   yaxis: {title: "% of Drinks Ordered"}
  };
 
 var layout1 = {
    title: "Luncheon Survey",
    xaxis: { title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
 };

 var trace = {
   labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
   "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
   values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
   type: 'pie'
  };
  var data = [trace];
  var layout = {
   title: "'Pie' Chart",
  };
    var layout1 = {
      title: "'Bar' Chart",
      xaxis: {title: "Drinks"},
      yaxis: {title: "% of Drinks Ordered"}
     };

  Plotly.newPlot("plotArea", data, layout, layout1);
