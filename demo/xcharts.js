function drawChart() {
  var chart = xCharts(document.querySelector("#container"));
  option = {
    title: {
      text: "Barchart"
    },
    tooltip: {
      show: true,
      trigger: "axis"
    },
    legend: {
      x: "center",
      y: "bottom",
      show: true,
      data: ["Li", "Han"]
    },
    xAxis: [
      {
        type: "category",
        data: ["A", "B", "C", "D", "E", "F"]
      }
    ],
    yAxis: [
      {
        type: "value",
        maxValue: 100,
        minValue: 0
      }
    ],
    resize: {
      enable: true
    },
    animation: {
      enable: true
    },
    series: [
      {
        name: "Li",
        type: "bar",
        data: [10, 20, 30, 40, 50, 60]
      },
      {
        name: "Han",
        type: "bar",
        data: [60, 50, 40, 30, 20, 10],
        formatter: function(name, value) {
          var htmlStr = "";
          htmlStr += "<div>" + name + ":" + value + "Score </div>";
          return htmlStr;
        }
      }
    ]
  };
  chart.loadConfig(option);
}

$(function() {
  drawChart();

  const svg = $("svg")[0];
  const handler = Sketchifier(svg, {chartType: 'xcharts'});

  $("#handifyChecker").change(function() {
    if (this.checked) {
      handler.handify();
    } else {
      handler.restore();
    }
  });
});