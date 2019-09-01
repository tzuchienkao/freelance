var count_percent = 100;
var line_options = {
    chart: {
        height: 350,
        type: "line",
        id: "line-chart",
        toolbar: {
            show: true,
            tools: {
                download: false,
                selection: false,
                zoom: false,
                pan: false,
                reset: false
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: "straight",
        width: 2,
        colors: ["#4e81b8", "#fc9e03", "#f55753"]
    },
    markers: {
        strokeWidth: 0,
        colors: ["#4e81b8", "#fc9e03", "#f55753"],
        size: 5,
        hover: {
            size: 7
        }
    },
    tooltip: {
        x: {
            format: "dd MMM yyyy"
        },
        y: {
            formatter: series => series,
            title: {
                formatter: () => `風險值`
            }
        },
        marker: {
            show: false
        }
    },
    series: line_series,
    title: {
        text: "倒閉機率",
        align: "left",
        style: {
            fontSize: "20px",
            fontWeight: "600",
            color: "#5d687e"
        }
    },
    grid: {
        position: 'back',
        borderColor: "#c3d0ea",
        yaxis: {
            lines: {
                show: true
            }
        }
    },
    xaxis: {
        type: "datetime",
        labels: {
            borderWidth: 1,
            offsetX: 30,
            style: {
                fontSize: 16
            },
            format: 'dd MMM'
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
    },
    yaxis: {
        tickAmount: 5,
        min: 0,
        max: 100,
        // axisBorder: {
        //     show: true,
        //     color: "#c3d0ea",
        //     offsetX: 0,
        //     offsetY: -99999
        // },
        // axisTicks: {
        //     show: true,
        //     borderType: "solid",
        //     color: "#c3d0ea",
        //     width: 100,
        //     offsetX: 2,
        //     offsetY: 10
        // },
        labels: {
            // offsetY: -10,
            align: "left",
            style: {
                fontSize: 16,
                cssClass: "y-label"
            },
            formatter: function(val, index) {
                if (index >= 0 && count_percent <= 100 && count_percent >= 0) {
                    let basic_num = count_percent;
                    count_percent = count_percent - 20;
                    return basic_num + "%";
                }
            }
        }
    },
    legend: {
        show: false
    }
};
