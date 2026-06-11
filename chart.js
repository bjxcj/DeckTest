// 初始化图表
let chart = null;
let isShowingFaceValue = true;

function initChart() {
    const chartDom = document.getElementById('chart');
    chart = echarts.init(chartDom);

    const data = extractChartData();

    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function(params) {
                let result = params[0].name + '<br/>';
                params.forEach(param => {
                    result += param.marker + param.seriesName + ': ' + param.value.toLocaleString() + '<br/>';
                });
                return result;
            }
        },
        legend: {
            data: ['面值', '销量'],
            top: 20,
            textStyle: {
                fontSize: 12,
                color: '#666'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '15%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: data.years,
            axisLabel: {
                interval: 0,
                rotate: 0,
                color: '#666'
            },
            axisLine: {
                lineStyle: {
                    color: '#ddd'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: '#666',
                formatter: function(value) {
                    if (isShowingFaceValue) {
                        return '¥' + value;
                    } else {
                        return value.toLocaleString();
                    }
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#ddd'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#eee'
                }
            }
        },
        series: [
            {
                name: '面值',
                type: 'bar',
                data: data.faceValues,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#667eea' },
                        { offset: 1, color: '#764ba2' }
                    ])
                },
                animationDuration: 1000,
                animationEasing: 'cubicOut'
            },
            {
                name: '销量',
                type: 'bar',
                data: data.sales,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#f093fb' },
                        { offset: 1, color: '#f5576c' }
                    ])
                },
                animationDuration: 1000,
                animationEasing: 'cubicOut'
            }
        ]
    };

    chart.setOption(option);

    // 响应式处理
    window.addEventListener('resize', () => {
        chart.resize();
    });
}

// 重新播放动画
function replayAnimation() {
    if (chart) {
        chart.clear();
        initChart();
    }
}

// 切换数据视图
function toggleDataView() {
    isShowingFaceValue = !isShowingFaceValue;
    const data = extractChartData();
    const newSeries = isShowingFaceValue 
        ? [
            { data: data.faceValues },
            { data: data.sales }
        ]
        : [
            { data: data.faceValues },
            { data: data.sales }
        ];

    chart.setOption({
        series: newSeries
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initChart();

    // 绑定按钮事件
    document.getElementById('animateBtn').addEventListener('click', replayAnimation);
    document.getElementById('toggleDataBtn').addEventListener('click', toggleDataView);
});
