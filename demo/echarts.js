function drawBarChart() {
    const myChart = echarts.init(document.getElementById('container_bar'), null, {
        renderer: 'svg'
    });
    const option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun中午']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        }]
    };
    myChart.setOption(option);
}

function drawScatterChart() {
    const myChart = echarts.init(document.getElementById('container_scatter'), null, {
        renderer: 'svg'
    });

    const option = {
        xAxis: {},
        yAxis: {},
        series: [{
            symbolSize: 50,
            data: [
                [10.0, 8.04],
                [8.0, 6.95],
                [13.0, 7.58],
                [9.0, 8.81],
                [11.0, 8.33],
                [14.0, 9.96],
                [6.0, 7.24],
                [4.0, 4.26],
                [12.0, 10.84],
                [7.0, 4.82],
                [5.0, 5.68]
            ],
            type: 'scatter'
        }]
    };

    myChart.setOption(option);
}

function drawPieChart() {
    const myChart = echarts.init(document.getElementById('container_pie'), null, {
        renderer: 'svg'
    });
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['A', 'B', 'C', 'D', 'E']
        },
        series: [{
            name: 'F',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 335,
                name: 'A'
            }, {
                value: 310,
                name: 'B'
            }, {
                value: 234,
                name: 'C'
            }, {
                value: 135,
                name: 'D'
            }, {
                value: 1548,
                name: 'E'
            }]
        }]
    };

    myChart.setOption(option);
}

function drawLineChart() {
    const myChart = echarts.init(document.getElementById('container_line'), null, {
        renderer: 'svg'
    });
    const option = {
        title: {
            text: 'Step Line'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Step Start', 'Step Middle', 'Step End']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            name: 'Step Start',
            type: 'line',
            step: 'start',
            data: [120, 132, 101, 134, 90, 230, 210]
        }, {
            name: 'Step Middle',
            type: 'line',
            step: 'middle',
            data: [220, 282, 201, 234, 290, 430, 410]
        }, {
            name: 'Step End',
            type: 'line',
            step: 'end',
            data: [450, 432, 401, 454, 590, 530, 510]
        }]
    };
    myChart.setOption(option);
}

function drawRadarChart() {
    const myChart = echarts.init(document.getElementById('container_radar'), null, {
        renderer: 'svg'
    });
    const option = {
        title: {
            text: 'radar'
        },
        tooltip: {},
        legend: {
            data: ['Allocated Budget', 'Actual Spending']
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: [{
                name: 'sales',
                max: 6500
            }, {
                name: 'Administration',
                max: 16000
            }, {
                name: 'Information Techology',
                max: 30000
            }, {
                name: 'Customer Support',
                max: 38000
            }, {
                name: 'Development',
                max: 52000
            }, {
                name: 'Marketing',
                max: 25000
            }]
        },
        series: [{
            name: 'Budget vs spending',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [{
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: '（Allocated Budget）'
            }, {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: '（Actual Spending）'
            }]
        }]
    };
    myChart.setOption(option);
}

function drawFunnelChart() {
    const myChart = echarts.init(document.getElementById('container_funnel'), null, {
        renderer: 'svg'
    });
    const option = {
        title: {
            text: '漏斗图',
            subtext: '纯属虚构',
            left: 'left',
            top: 'bottom'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
            orient: 'vertical',
            top: 'center',
            feature: {
                dataView: {
                    readOnly: false
                },
                restore: {},
                saveAsImage: {}
            }
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['A', 'B', 'C', 'D', 'E']
        },
        calculable: true,
        series: [{
            name: '漏斗图',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '5%',
            top: '50%',
            data: [{
                value: 60,
                name: 'C'
            }, {
                value: 30,
                name: 'D'
            }, {
                value: 10,
                name: 'E'
            }, {
                value: 80,
                name: 'B'
            }, {
                value: 100,
                name: 'A'
            }]
        }, {
            name: '金字塔',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '5%',
            top: '5%',
            sort: 'ascending',
            data: [{
                value: 60,
                name: 'C'
            }, {
                value: 30,
                name: 'D'
            }, {
                value: 10,
                name: 'E'
            }, {
                value: 80,
                name: 'B'
            }, {
                value: 100,
                name: 'A'
            }]
        }, {
            name: '漏斗图',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '55%',
            top: '5%',
            label: {
                normal: {
                    position: 'left'
                }
            },
            data: [{
                value: 60,
                name: 'C'
            }, {
                value: 30,
                name: 'D'
            }, {
                value: 10,
                name: 'E'
            }, {
                value: 80,
                name: 'B'
            }, {
                value: 100,
                name: 'A'
            }]
        }, {
            name: '金字塔',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '55%',
            top: '50%',
            sort: 'ascending',
            label: {
                normal: {
                    position: 'left'
                }
            },
            data: [{
                value: 60,
                name: 'C'
            }, {
                value: 30,
                name: 'D'
            }, {
                value: 10,
                name: 'E'
            }, {
                value: 80,
                name: 'B'
            }, {
                value: 100,
                name: 'A'
            }]
        }]
    };
    myChart.setOption(option);
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