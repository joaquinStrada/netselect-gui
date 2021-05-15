export default class Gauge {
    constructor(id_chart, min, max, text, value, unit) {
        this.id_chart = id_chart;
        this.min = min;
        this.max = max;
        this.text = text;
        this.value = value;
        this.unit = unit;

        this.gaugeOptions = {
            chart: {
                type: 'solidgauge'
            },
        
            title: null,
        
            pane: {
                center: ['50%', '85%'],
                size: '100%',
                startAngle: -90,
                endAngle: 90,
                background: {
                    backgroundColor:
                        Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
                    innerRadius: '60%',
                    outerRadius: '100%',
                    shape: 'arc'
                }
            },
        
            exporting: {
                enabled: false
            },
        
            tooltip: {
                enabled: false
            },
        
            // the value axis
            yAxis: {
                stops: [
                    [0.1, '#55BF3B'], // green
                    [0.5, '#DDDF0D'], // yellow
                    [0.9, '#DF5353'] // red
                ],
                lineWidth: 0,
                tickWidth: 0,
                minorTickInterval: null,
                tickAmount: 2,
                title: {
                    y: -70
                },
                labels: {
                    y: 16
                }
            },
        
            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        y: 5,
                        borderWidth: 0,
                        useHTML: true
                    }
                }
            }
        };

        this.gauge = null;
    }

    render() {
        this.gauge = Highcharts.chart(this.id_chart, Highcharts.merge(this.gaugeOptions, {
            yAxis: {
                min: this.min,
                max: this.max,
                title: {
                    text: this.text
                }
            },
        
            credits: {
                enabled: false
            },
        
            series: [{
                name: this.text,
                data: [this.value],
                dataLabels: {
                    format:
                        '<div style="text-align:center">' +
                        '<span style="font-size:25px">{y}</span><br/>' +
                        '<span style="font-size:12px;opacity:0.4">' + this.unit + '</span>' +
                        '</div>'
                },
                tooltip: {
                    valueSuffix: this.unit
                }
            }]
        
        }));
    }
}