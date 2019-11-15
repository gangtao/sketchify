function drawBarChart() {
  const chart = xCharts(document.querySelector("#container_bar"));
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
    xAxis: [{
      type: "category",
      data: ["A", "B", "C", "D", "E", "F"]
    }],
    yAxis: [{
      type: "value",
      maxValue: 100,
      minValue: 0
    }],
    resize: {
      enable: true
    },
    animation: {
      enable: true
    },
    series: [{
      name: "Li",
      type: "bar",
      data: [10, 20, 30, 40, 50, 60]
    }, {
      name: "Han",
      type: "bar",
      data: [60, 50, 40, 30, 20, 10],
      formatter: function(name, value) {
        var htmlStr = "";
        htmlStr += "<div>" + name + ":" + value + "Score </div>";
        return htmlStr;
      }
    }]
  };
  chart.loadConfig(option);
}

function drawScatterChart() {
  const chart = xCharts(document.querySelector("#container_scatter"));
  option = {
    title: {
      text: 'Scatter'
    },
    legend: {
      data: ['Female', 'Male'],
      x: 'center'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: [{
      type: 'value',
      tickFormat: function(data) {
        return data + ' cm';
      }
    }],
    yAxis: [{
      type: 'value',
      tickFormat: function(data) {
        return data + ' kg';
      }
    }],
    resize: {
      enable: true
    },
    animation: {
      enable: true
    },
    series: [{
      name: 'Female',
      type: 'scatter',
      size: 50,
      data: [
        [161.2, 51.6],
        [167.5, 59.0],
        [159.5, 49.2],
        [157.0, 63.0],
        [155.8, 53.6],
        [170.0, 59.0],
        [159.1, 47.6],
        [166.0, 69.8],
        [176.2, 66.8],
        [160.2, 75.2]
      ]
    }, {
      name: 'Male',
      type: 'scatter',
      size: 50,
      data: [
        [174.0, 65.6],
        [175.3, 71.8],
        [193.5, 80.7],
        [186.5, 72.6],
        [187.2, 78.8],
        [181.5, 74.8],
        [184.0, 86.4],
        [184.5, 78.4],
        [175.0, 62.0],
        [184.0, 81.6]
      ]
    }]
  };
  chart.loadConfig(option);
}

function drawChart() {
  drawBarChart();
  drawScatterChart();
}

$(function() {
  drawChart();

  var handlers = [];

  const svg_bar = $("#container_bar svg")[0];
  const handler_bar = Sketchifier(svg_bar, {
    chartType: 'xcharts'
  });
  handlers.push(handler_bar)

  const svg_scatter = $("#container_scatter svg")[0];
  const handler_scatter = Sketchifier(svg_scatter, {
    chartType: 'xcharts'
  });
  handlers.push(handler_scatter)

  $("#handifyChecker").change(function() {
    if (this.checked) {
      handlers.forEach(function(handler){
        handler.handify();
      })
    } else {
      handlers.forEach(function(handler){
        handler.restore();
      })
    }
  });
});