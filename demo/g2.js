function drawBarChart() {
    var data = [{
        year: '1951 年',
        sales: 38
    }, {
        year: '1952 年',
        sales: 52
    }, {
        year: '1956 年',
        sales: 61
    }, {
        year: '1957 年',
        sales: 145
    }, {
        year: '1958 年',
        sales: 48
    }, {
        year: '1959 年',
        sales: 38
    }, {
        year: '1960 年',
        sales: 38
    }, {
        year: '1962 年',
        sales: 38
    }];
    var chart = new G2.Chart({
        container: 'container_bar',
        forceFit: true,
        height: 300,
        renderer: 'svg'
    });
    chart.source(data);
    chart.scale('sales', {
        tickInterval: 20
    });
    chart.interval().position('year*sales');
    chart.render();
}

function drawScatterChart() {
    var data = [{
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
    }];
    var chart = new G2.Chart({
        container: 'container_scatter',
        forceFit: true,
        padding: [20, 20, 50, 80],
        height: 300,
        renderer: 'svg',
        plotBackground: {
            stroke: '#ccc', // 边颜色
            lineWidth: 1 // 边框粗细
        } // 绘图区域背景设置
    });
    chart.source(data, {
        x: {
            alias: 'Daily fat intake', // 定义别名
            tickInterval: 5, // 自定义刻度间距
            nice: false, // 不对最大最小值优化
            max: 96, // 自定义最大值
            min: 62 // 自定义最小是
        },
        y: {
            alias: 'Daily sugar intake',
            tickInterval: 50,
            nice: false,
            max: 165,
            min: 0
        },
        z: {
            alias: 'Obesity(adults) %'
        }
    });
    // 开始配置坐标轴
    chart.axis('x', {
        label: {
            formatter: function formatter(val) {
                return val + ' gr'; // 格式化坐标轴显示文本
            }
        },
        grid: {
            lineStyle: {
                stroke: '#d9d9d9',
                lineWidth: 1,
                lineDash: [2, 2]
            }
        }
    });
    chart.axis('y', {
        title: {
            offset: 64
        },
        label: {
            formatter: function formatter(val) {
                if (val > 0) {
                    return val + ' gr';
                }
            }
        }
    });
    chart.legend(false);
    chart.tooltip({
        title: 'country'
    });
    chart.point().position('x*y').color('#1890ff').size('z', [10, 40]).label('name*country', {
        offset: 0, // 文本距离图形的距离
        textStyle: {
            fill: '#1890FF'
        }
    }).opacity(0.3).shape('circle').tooltip('x*y*z').style({
        lineWidth: 1,
        stroke: '#1890ff'
    });
    chart.guide().line({
        top: true,
        start: [65, 'min'],
        end: [65, 'max'],
        text: {
            content: 'Safe fat intake 65g/day',
            position: 'end',
            autoRotate: false,
            style: {
                textAlign: 'start'
            }
        }
    });
    chart.guide().line({
        top: true,
        start: ['min', 50],
        end: ['max', 50],
        text: {
            content: 'Safe sugar intake 50g/day',
            position: 'end',
            style: {
                textAlign: 'end'
            }
        }
    });
    chart.render();
}

function drawPieChart() {
    var data = [{
        year: '2001',
        population: 41.8
    }, {
        year: '2002',
        population: 38
    }, {
        year: '2003',
        population: 33.7
    }, {
        year: '2004',
        population: 30.7
    }, {
        year: '2005',
        population: 25.8
    }, {
        year: '2006',
        population: 31.7
    }, {
        year: '2007',
        population: 33
    }, {
        year: '2008',
        population: 46
    }, {
        year: '2009',
        population: 38.3
    }, {
        year: '2010',
        population: 28
    }, {
        year: '2011',
        population: 42.5
    }, {
        year: '2012',
        population: 30.3
    }];

    var chart = new G2.Chart({
        container: 'container_pie',
        forceFit: true,
        height: 300,
        renderer: 'svg',
    });
    chart.source(data);
    chart.coord('polar');
    chart.legend({
        position: 'right',
        offsetY: -window.innerHeight / 2 + 280,
        offsetX: -140
    });
    chart.axis(false);
    chart.interval().position('year*population').color('year', G2.Global.colors_pie_16).style({
        lineWidth: 1,
        stroke: '#fff'
    });
    chart.render();
}

function drawLineChart() {
    var data = [{
        month: 'Jan',
        Tokyo: 7.0,
        London: 3.9
    }, {
        month: 'Feb',
        Tokyo: 6.9,
        London: 4.2
    }, {
        month: 'Mar',
        Tokyo: 9.5,
        London: 5.7
    }, {
        month: 'Apr',
        Tokyo: 14.5,
        London: 8.5
    }, {
        month: 'May',
        Tokyo: 18.4,
        London: 11.9
    }, {
        month: 'Jun',
        Tokyo: 21.5,
        London: 15.2
    }, {
        month: 'Jul',
        Tokyo: 25.2,
        London: 17.0
    }, {
        month: 'Aug',
        Tokyo: 26.5,
        London: 16.6
    }, {
        month: 'Sep',
        Tokyo: 23.3,
        London: 14.2
    }, {
        month: 'Oct',
        Tokyo: 18.3,
        London: 10.3
    }, {
        month: 'Nov',
        Tokyo: 13.9,
        London: 6.6
    }, {
        month: 'Dec',
        Tokyo: 9.6,
        London: 4.8
    }];
    var ds = new DataSet();
    var dv = ds.createView().source(data);
    // fold 方式完成了行列转换，如果不想使用 DataSet 直接手工转换数据即可
    dv.transform({
        type: 'fold',
        fields: ['Tokyo', 'London'], // 展开字段集
        key: 'city', // key字段
        value: 'temperature' // value字段
    });
    var chart = new G2.Chart({
        container: 'container_line',
        forceFit: true,
        height: 300,
        renderer: 'svg',
    });
    chart.source(dv, {
        month: {
            range: [0, 1]
        }
    });
    chart.tooltip({
        crosshairs: {
            type: 'line'
        }
    });
    chart.axis('temperature', {
        label: {
            formatter: function formatter(val) {
                return val + '°C';
            }
        }
    });
    chart.line().position('month*temperature').color('city').shape('smooth');
    chart.point().position('month*temperature').color('city').size(4).shape('circle').style({
        stroke: '#fff',
        lineWidth: 1
    });
    chart.render();
}

function drawRadarChart() {
    var _DataSet = DataSet,
        DataView = _DataSet.DataView;

    var data = [{
        item: 'Design',
        a: 70,
        b: 30
    }, {
        item: 'Development',
        a: 60,
        b: 70
    }, {
        item: 'Marketing',
        a: 50,
        b: 60
    }, {
        item: 'Users',
        a: 40,
        b: 50
    }, {
        item: 'Test',
        a: 60,
        b: 70
    }, {
        item: 'Language',
        a: 70,
        b: 50
    }, {
        item: 'Technology',
        a: 50,
        b: 40
    }, {
        item: 'Support',
        a: 30,
        b: 40
    }, {
        item: 'Sales',
        a: 60,
        b: 40
    }, {
        item: 'UX',
        a: 50,
        b: 60
    }];
    var dv = new DataView().source(data);
    dv.transform({
        type: 'fold',
        fields: ['a', 'b'], // 展开字段集
        key: 'user', // key字段
        value: 'score' // value字段
    });
    var chart = new G2.Chart({
        container: 'container_radar',
        forceFit: true,
        height: 300,
        renderer: 'svg',
        padding: [20, 20, 95, 20]
    });
    chart.source(dv, {
        score: {
            min: 0,
            max: 80
        }
    });
    chart.coord('polar', {
        radius: 0.8
    });
    chart.axis('item', {
        line: null,
        tickLine: null,
        grid: {
            lineStyle: {
                lineDash: null
            },
            hideFirstLine: false
        }
    });
    chart.axis('score', {
        line: null,
        tickLine: null,
        grid: {
            type: 'polygon',
            lineStyle: {
                lineDash: null
            }
        }
    });
    chart.legend('user', {
        marker: 'circle',
        offset: 30
    });
    chart.line().position('item*score').color('user').size(2);
    chart.point().position('item*score').color('user').shape('circle').size(4).style({
        stroke: '#fff',
        lineWidth: 1,
        fillOpacity: 1
    });
    chart.area().position('item*score').color('user');
    chart.render();
}

function drawFunnelChart() {
    var _DataSet = DataSet,
        DataView = _DataSet.DataView;

    var data = [{
        action: 'A',
        pv: 50000
    }, {
        action: 'B',
        pv: 35000
    }, {
        action: 'C',
        pv: 25000
    }, {
        action: 'D',
        pv: 15000
    }, {
        action: 'E',
        pv: 8000
    }];
    var dv = new DataView().source(data);
    dv.transform({
        type: 'map',
        callback: function callback(row) {
            row.percent = row.pv / 50000;
            return row;
        }
    });
    data = dv.rows;
    var chart = new G2.Chart({
        container: 'container_funnel',
        forceFit: true,
        height: 300,
        renderer: 'svg',
        padding: [20, 120, 95]
    });
    chart.source(data, {
        percent: {
            nice: false
        }
    });
    chart.axis(false);
    chart.tooltip({
        showTitle: false,
        itemTpl: '<li data-index={index} style="margin-bottom:4px;">' + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>' + '{name}<br/>' + '<span style="padding-left: 16px">浏览人数：{pv}</span><br/>' + '<span style="padding-left: 16px">占比：{percent}</span><br/>' + '</li>'
    });
    chart.coord('rect').transpose().scale(1, -1);
    chart.intervalSymmetric().position('action*percent').shape('funnel').color('action', ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF']).label('action*pv', function(action, pv) {
        return action + ' ' + pv;
    }, {
        offset: 35,
        labelLine: {
            lineWidth: 1,
            stroke: 'rgba(0, 0, 0, 0.15)'
        }
    }).tooltip('action*pv*percent', function(action, pv, percent) {
        return {
            name: action,
            percent: parseInt(percent * 100) + '%',
            pv: pv
        };
    });
    data.forEach(function(obj) {
        // 中间标签文本
        chart.guide().text({
            top: true,
            position: {
                action: obj.action,
                percent: 'median'
            },
            content: parseInt(obj.percent * 100) + '%', // 显示的文本内容
            style: {
                fill: '#fff',
                fontSize: '12',
                textAlign: 'center',
                shadowBlur: 2,
                shadowColor: 'rgba(0, 0, 0, .45)'
            }
        });
    });
    chart.render();
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