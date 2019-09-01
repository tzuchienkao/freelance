var radar_options_2 = {
    chart: {
        toolbar: {
            show: false
        },
        height: 345,
        type: 'radar',
    },
    dataLabels: {
        offsetX: 10,
        offsetY: 10,
        style: {
            fontSize: '13px',
            colors: ['#858fa4']
        }
    },
    plotOptions: {
        radar: {
            size: 145,
            offsetX: 300,
            polygons: {
                strokeColors: '#c3d0ea',
                connectorColors: '#c3d0ea',
                fill: {
                colors: undefined
                }
            }
        }
    },
    series: radar_series_2,
    yaxis: {
        show: false,
        tickAmount: 2,
        min: 0,
        max: 100
    },
    markers: {
        colors: ['#fb908b', '#f55753'],
        strokeWidth: 0,
        size: 5,
        hover: {
            size: 7
        }
    },
    fill: {
        colors: ['#ff8d8b'],
        opacity: 0.15
    },
    stroke: {
        width: 2,
        colors: ['#ff8d8b']
    },
    tooltip: {
        enabled: false
    },
    labels: ['商業登記', '營運狀況', '訴訟紀錄', '餐廳類別', '營業時間', '店家位址', 'Google評論']
}