function drawBarChart() {
  const chart = xCharts(document.querySelector('#container_bar'));
  option = {
    title: {
      text: 'Barchart'
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    legend: {
      x: 'center',
      y: 'bottom',
      show: true,
      data: ['Li', 'Han']
    },
    xAxis: [{
      type: 'category',
      data: ['A', 'B', 'C', 'D', 'E', 'F']
    }],
    yAxis: [{
      type: 'value',
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
      name: 'Li',
      type: 'bar',
      data: [10, 20, 30, 40, 50, 60]
    }, {
      name: 'Han',
      type: 'bar',
      data: [60, 50, 40, 30, 20, 10],
      formatter: function(name, value) {
        var htmlStr = '';
        htmlStr += '<div>' + name + ':' + value + 'Score </div>';
        return htmlStr;
      }
    }]
  };
  chart.loadConfig(option);
}

function drawScatterChart() {
  const chart = xCharts(document.querySelector('#container_scatter'));
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
      size: 30,
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
      size: 30,
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

function drawPieChart() {
  const chart = xCharts(document.querySelector('#container_pie'));
  option = {
    title: {
      text: 'Pie'
    },
    tooltip: {
      show: true
    },
    legend: {
      orient: 'vertical',
      x: 'right',
      show: true,
      data: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6']
    },
    resize: {
      enable: true
    },
    animation: {
      enable: true
    },
    series: [{
      type: 'pie',
      center: ['50%', '50%'],
      radius: {
        outerRadius: '30%',
        innerRadius: 0
      },
      data: [{
        name: 'section1',
        value: 10
      }, {
        name: 'section2',
        value: 20
      }, {
        name: 'section3',
        value: 30
      }, {
        name: 'section4',
        value: 40
      }, {
        name: 'section5',
        value: 50
      }, {
        name: 'section6',
        value: 60
      }]
    }]
  };
  chart.loadConfig(option);
}

function drawLineChart() {
  const chart = xCharts(document.querySelector('#container_line'));
  option = {
    title: {
      text: 'Area'
    },
    legend: {
      data: ['Apple', 'Orange'],
      x: 'center'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: [{
      type: 'category',
      data: ['1', '2', '3', '4', '5', '6', '7'],
      tickFormat: function(data) {
        return 'week' + data;
      }
    }],
    yAxis: [{
      type: 'value'
    }],
    resize: {
      enable: true
    },
    animation: {
      enable: true
    },
    series: [{
      type: 'line',
      name: 'Apple',
      data: [100, 200, 300, 300, 350, 400, 450],
      areaStyle: {
        show: true
      },
      stack: 'sales'
    }, {
      type: 'line',
      name: 'Orange',
      data: [500, 400, 200, 200, 150, 200, 250],
      areaStyle: {
        show: true
      },
      stack: 'sales'
    }]
  };
  chart.loadConfig(option);
}

function drawRadarChart() {
  const chart = xCharts(document.querySelector('#container_radar'));
  option = {
    title: {
      text: 'Radar'
    },
    tooltip: {
      show: true
    },
    legend: {
      orient: 'vertical',
      x: 'right',
      show: true,
      data: ['Li', 'Han']
    },
    resize: {
      enable: true
    },
    animation: {
      enable: true
    },
    series: [{
      type: 'radar',
      levels: 4,
      radius: '25%',
      fill: false,
      center: ['50%', '50%'],
      indicator: [{
        text: 'A',
        max: 100,
        min: 0
      }, {
        text: 'B',
        max: 100,
        min: 0
      }, {
        text: 'C',
        max: 100,
        min: 0
      }, {
        text: 'D',
        max: 100,
        min: 0
      }, {
        text: 'E',
        max: 100,
        min: 0
      }, {
        text: 'F',
        max: 100,
        min: 0
      }],
      data: [{
        name: 'Li',
        value: [10, 20, 30, 40, 50, 60]
      }, {
        name: 'Han',
        value: [80, 70, 60, 50, 40, 30]
      }]
    }]
  };
  chart.loadConfig(option);
}

function drawFunnelChart() {
  const chart = xCharts(document.querySelector('#container_funnel'));
  option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      show: true,
      data: ['A', 'B', 'C', 'D', 'E'],
      x: 'center'
    },
    title: {
      text: 'Funnel'
    },
    resize: {
      enable: true
    },
    animation: {
      enable: true
    },
    series: [{
      name: 'sample',
      size: ['50%', '70%'],
      type: 'funnel',
      data: [{
        name: 'A',
        value: '80'
      }, {
        name: 'B',
        value: '100'
      }, {
        name: 'C',
        value: '60'
      }, {
        name: 'D',
        value: '40'
      }, {
        name: 'E',
        value: '20'
      }, ]
    }]
  };
  chart.loadConfig(option);
}

function drawChart() {
  drawBarChart();
  drawScatterChart();
  drawPieChart();
  drawLineChart();
  drawRadarChart();
  drawFunnelChart();
}

function getHandler() {
  const option = {
    chartType: 'xcharts',
    fillStyle: $('#fillStyleSelector').children('option:selected').val(),
    bowing: $('#bowingRange').val(),
    roughness: $('#roughnessRange').val()
  };

  const container = $('#charts')[0];
  return handler = Sketchifier(container, option);
}

$(function() {
  drawChart();
  var handler = getHandler();

  function updateHandler() {
    handler.restore();
    handler = getHandler();
    if ($('#handifyChecker').prop('checked')) {
      handler.handify();
    }
  }

  $('#fillStyleSelector').change(function() {
    updateHandler();
  })

  $('#bowingRange').change(function() {
    updateHandler();
  })

  $('#roughnessRange').change(function() {
    updateHandler();
  })

  $('#handifyChecker').change(function() {
    if (this.checked) {
      handler.handify();
    } else {
      handler.restore();
    }
  });
});