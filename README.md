# 12-12-Plotly-BellyButton-Biodiversit

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Belly Button Biodiversity</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>

<body>

  <div class="container">
    <div class="row">
      <div class="col-md-12 jumbotron text-center">
        <h1>Belly Button Biodiversity Dashboard</h1>
        <p>Use the interactive charts below to explore the dataset</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2">
        <div class="well">
          <h5>Test Subject ID No.:</h5>
          <select id="selDataset" onchange="optionChanged(this.value)"></select>
        </div>
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Demographic Info</h3>
          </div>
          <div id="sample-metadata" class="panel-body"></div>
        </div>
      </div>
      <div class="col-md-5">
        <div id="bar"></div>
      </div>
      <div class="col-md-5">
        <div id="gauge"></div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div id="bubble"></div>
      </div>
    </div>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.5.0/d3.js"></script>
  <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
  <script src="BellyButton_bar_chart_solution.js"></script>
  <script src="BellyButton_bubble_chart_solution.js"></script>
  <script src="charts_solution.js"></script>

</body>

</html>
In this module, we will use Plotly.js, a JavaScript data visualization library, to create an interactive data visualization for the web. The completed work will be displayed in a portfolio you create.
These are the images we get as we rund the codes for BAR, Bubble & Pie Charts


## BAR CHART
![Bar Chart](https://user-images.githubusercontent.com/99519095/175196547-c059ca33-006e-426f-97f0-15359b0fea79.jpg)

## BUBBLE CHART
![Bubble Chart](https://user-images.githubusercontent.com/99519095/175196740-dfad4b79-277e-4aa8-b362-3703814ac559.jpg)

## PIE CHART
![Pie Chart](https://user-images.githubusercontent.com/99519095/175196810-04a64dc0-f2cb-45ac-9371-89b1b65bc838.jpg)

## Final Image from the Local Host
![LocalHost](https://user-images.githubusercontent.com/99519095/175197614-89c15cd1-54fc-410f-88f6-9a206f99c508.png)
