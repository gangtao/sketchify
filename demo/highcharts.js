function drawBarChart() {
  Highcharts.chart('container_bar', {

    chart: {
      type: 'column'
    },

    title: {
      text: 'Total fruit consumtion, grouped by gender'
    },

    xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },

    yAxis: {
      allowDecimals: false,
      min: 0,
      title: {
        text: 'Number of fruits'
      }
    },

    tooltip: {
      formatter: function() {
        return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y + '<br/>' +
          'Total: ' + this.point.stackTotal;
      }
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      }
    },

    series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2],
      stack: 'male'
    }, {
      name: 'Joe',
      data: [3, 4, 4, 2, 5],
      stack: 'male'
    }, {
      name: 'Jane',
      data: [2, 5, 6, 2, 1],
      stack: 'female'
    }, {
      name: 'Janet',
      data: [3, 0, 4, 4, 3],
      stack: 'female'
    }]
  });
}

function drawScatterChart() {
  Highcharts.chart('container_scatter', {

    chart: {
      type: 'bubble',
      plotBorderWidth: 1,
      zoomType: 'xy'
    },

    legend: {
      enabled: false
    },

    title: {
      text: 'Sugar and fat intake per country'
    },

    subtitle: {
      text: 'Source: <a href="http://www.euromonitor.com/">Euromonitor</a> and <a href="https://data.oecd.org/">OECD</a>'
    },

    xAxis: {
      gridLineWidth: 1,
      title: {
        text: 'Daily fat intake'
      },
      labels: {
        format: '{value} gr'
      },
      plotLines: [{
        color: 'black',
        dashStyle: 'dot',
        width: 2,
        value: 65,
        label: {
          rotation: 0,
          y: 15,
          style: {
            fontStyle: 'italic'
          },
          text: 'Safe fat intake 65g/day'
        },
        zIndex: 3
      }]
    },

    yAxis: {
      startOnTick: false,
      endOnTick: false,
      title: {
        text: 'Daily sugar intake'
      },
      labels: {
        format: '{value} gr'
      },
      maxPadding: 0.2,
      plotLines: [{
        color: 'black',
        dashStyle: 'dot',
        width: 2,
        value: 50,
        label: {
          align: 'right',
          style: {
            fontStyle: 'italic'
          },
          text: 'Safe sugar intake 50g/day',
          x: -10
        },
        zIndex: 3
      }]
    },

    tooltip: {
      useHTML: true,
      headerFormat: '<table>',
      pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
        '<tr><th>Fat intake:</th><td>{point.x}g</td></tr>' +
        '<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>' +
        '<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>',
      footerFormat: '</table>',
      followPointer: true
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        }
      }
    },

    series: [{
      data: [{
        x: 95,
        y: 95,
        z: 13.8,
        name: 'BE',
        country: 'Belgium'
      }, {
        x: 86.5,
        y: 102.9,
        z: 14.7,
        name: 'DE',
        country: 'Germany'
      }, {
        x: 80.8,
        y: 91.5,
        z: 15.8,
        name: 'FI',
        country: 'Finland'
      }, {
        x: 80.4,
        y: 102.5,
        z: 12,
        name: 'NL',
        country: 'Netherlands'
      }, {
        x: 80.3,
        y: 86.1,
        z: 11.8,
        name: 'SE',
        country: 'Sweden'
      }, {
        x: 78.4,
        y: 70.1,
        z: 16.6,
        name: 'ES',
        country: 'Spain'
      }, {
        x: 74.2,
        y: 68.5,
        z: 14.5,
        name: 'FR',
        country: 'France'
      }, {
        x: 73.5,
        y: 83.1,
        z: 10,
        name: 'NO',
        country: 'Norway'
      }, {
        x: 71,
        y: 93.2,
        z: 24.7,
        name: 'UK',
        country: 'United Kingdom'
      }, {
        x: 69.2,
        y: 57.6,
        z: 10.4,
        name: 'IT',
        country: 'Italy'
      }, {
        x: 68.6,
        y: 20,
        z: 16,
        name: 'RU',
        country: 'Russia'
      }, {
        x: 65.5,
        y: 126.4,
        z: 35.3,
        name: 'US',
        country: 'United States'
      }, {
        x: 65.4,
        y: 50.8,
        z: 28.5,
        name: 'HU',
        country: 'Hungary'
      }, {
        x: 63.4,
        y: 51.8,
        z: 15.4,
        name: 'PT',
        country: 'Portugal'
      }, {
        x: 64,
        y: 82.9,
        z: 31.3,
        name: 'NZ',
        country: 'New Zealand'
      }]
    }]

  });
}

function drawPieChart() {
  Highcharts.chart('container_pie', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Browser market shares in January, 2018'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'Chrome',
        y: 61.41,
        sliced: true,
        selected: true
      }, {
        name: 'Internet Explorer',
        y: 11.84
      }, {
        name: 'Firefox',
        y: 10.85
      }, {
        name: 'Edge',
        y: 4.67
      }, {
        name: 'Safari',
        y: 4.18
      }, {
        name: 'Sogou Explorer',
        y: 1.64
      }, {
        name: 'Opera',
        y: 1.6
      }, {
        name: 'QQ',
        y: 1.2
      }, {
        name: 'Other',
        y: 2.61
      }]
    }]
  });
}

function drawLineChart() {
  Highcharts.chart('container_line', {

    title: {
      text: 'Solar Employment Growth by Sector, 2010-2016'
    },

    subtitle: {
      text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
      title: {
        text: 'Number of Employees'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },

    series: [{
      name: 'Installation',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
      name: 'Manufacturing',
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
      name: 'Sales & Distribution',
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
      name: 'Project Development',
      data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
      name: 'Other',
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }

  });
}

function drawRadarChart() {
  Highcharts.chart('container_radar', {

    chart: {
      polar: true,
      type: 'line'
    },

    accessibility: {
      description: 'A spiderweb chart compares the allocated budget against actual spending within an organization. The spider chart has six spokes. Each spoke represents one of the 6 departments within the organization: sales, marketing, development, customer support, information technology and administration. The chart is interactive, and each data point is displayed upon hovering. The chart clearly shows that 4 of the 6 departments have overspent their budget with Marketing responsible for the greatest overspend of $20,000. The allocated budget and actual spending data points for each department are as follows: Sales. Budget equals $43,000; spending equals $50,000. Marketing. Budget equals $19,000; spending equals $39,000. Development. Budget equals $60,000; spending equals $42,000. Customer support. Budget equals $35,000; spending equals $31,000. Information technology. Budget equals $17,000; spending equals $26,000. Administration. Budget equals $10,000; spending equals $14,000.'
    },

    title: {
      text: 'Budget vs spending',
      x: -80
    },

    pane: {
      size: '80%'
    },

    xAxis: {
      categories: ['Sales', 'Marketing', 'Development', 'Customer Support',
        'Information Technology', 'Administration'
      ],
      tickmarkPlacement: 'on',
      lineWidth: 0
    },

    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0
    },

    tooltip: {
      shared: true,
      pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
    },

    legend: {
      align: 'right',
      verticalAlign: 'middle'
    },

    series: [{
      name: 'Allocated Budget',
      data: [43000, 19000, 60000, 35000, 17000, 10000],
      pointPlacement: 'on'
    }, {
      name: 'Actual Spending',
      data: [50000, 39000, 42000, 31000, 26000, 14000],
      pointPlacement: 'on'
    }],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            align: 'center',
            verticalAlign: 'bottom'
          },
          pane: {
            size: '70%'
          }
        }
      }]
    }

  });
}

function drawFunnelChart() {
  Highcharts.chart('container_funnel', {
    chart: {
      type: 'funnel'
    },
    title: {
      text: 'Sales funnel'
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b> ({point.y:,.0f})',
          softConnector: true
        },
        center: ['40%', '50%'],
        neckWidth: '30%',
        neckHeight: '25%',
        width: '80%'
      }
    },
    legend: {
      enabled: false
    },
    series: [{
      name: 'Unique users',
      data: [
        ['Website visits', 15654],
        ['Downloads', 4064],
        ['Requested price list', 1987],
        ['Invoice sent', 976],
        ['Finalized', 846]
      ]
    }],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          plotOptions: {
            series: {
              dataLabels: {
                inside: true
              },
              center: ['50%', '50%'],
              width: '100%'
            }
          }
        }
      }]
    }
  });
}

function drawChart() {
  drawBarChart();
  drawScatterChart();
  drawPieChart();
  drawLineChart();
  drawRadarChart();
  drawFunnelChart();
}

function getHandlers() {
  const handlers = [];
  const option = {
    chartType: 'highcharts',
    fillStyle: $('#fillStyleSelector').children('option:selected').val(),
    bowing: $('#bowingRange').val(),
    roughness: $('#roughnessRange').val(),
  };

  const svg_bar = $('#container_bar svg')[0];
  const handler_bar = Sketchifier(svg_bar, option);
  handlers.push(handler_bar);

  const svg_scatter = $('#container_scatter svg')[0];
  const handler_scatter = Sketchifier(svg_scatter, option);
  handlers.push(handler_scatter);

  const svg_pie = $('#container_pie svg')[0];
  const handler_pie = Sketchifier(svg_pie, option);
  handlers.push(handler_pie);

  const svg_line = $('#container_line svg')[0];
  const handler_line = Sketchifier(svg_line, option);
  handlers.push(handler_line);

  const svg_radar = $('#container_radar svg')[0];
  const handler_radar = Sketchifier(svg_radar, option);
  handlers.push(handler_radar);

  const svg_funnel = $('#container_funnel svg')[0];
  const handler_funnel = Sketchifier(svg_funnel, option);
  handlers.push(handler_funnel);
  return handlers;
}

$(function() {
  drawChart();
  var handlers = getHandlers();

  function updateHandler() {
    handlers.forEach(function(handler) {
      handler.restore();
    })
    handlers = getHandlers();
    if ($('#handifyChecker').prop('checked')) {
      handlers.forEach(function(handler) {
        handler.handify();
      })
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
      handlers.forEach(function(handler) {
        handler.handify();
      })
    } else {
      handlers.forEach(function(handler) {
        handler.restore();
      })
    }
  });
});