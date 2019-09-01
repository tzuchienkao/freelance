var radar_options_3 = {
    chart: {
        toolbar: {
            show: false
        },
        height: 345,
        type: 'radar',
    },
    dataLabels: {
        style: {
            fontSize: '13px',
            colors: ['#858fa4']
        }
    },
    plotOptions: {
        radar: {
            size: 135,
            polygons: {
                strokeColors: '#c3d0ea',
                connectorColors: '#c3d0ea',
                fill: {
                colors: undefined
                }
            }
        }
    },
    series: radar_series_3,
    yaxis: {
        show: false,
        tickAmount: 2,
        min: 0,
        max: 100
    },
    markers: {
        colors: ['#64cfe7', '#9ee9f5'],
        strokeWidth: 0,
        size: 5,
        hover: {
            size: 7
        }
    },
    fill: {
        colors: ['#64cfe7'],
        opacity: 0.15
    },
    stroke: {
        width: 2,
        colors: ['#64cfe7']
    },
    tooltip: {
        enabled: false
    },
    labels: ['商業登記', '餐廳類別', '營業時間', '店家位址', 'Google評論']
}