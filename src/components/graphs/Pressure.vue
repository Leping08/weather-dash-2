<template>
  <div class="bg-gray-800 p-4 rounded-lg">
	<div class="text-center text-gray-500">
		Pressure
	</div>
    <apexchart
      type="line"
      height="500"
      :options="chartOptions"
      :series="series"
      ref="chart"
    ></apexchart>
  </div>
</template>


<script>
export default {
	data() {
		return {
			series: [
				{
					name: 'mb',
					type: 'area',
					data: []
				}
			],
            chartOptions: {
				tooltip: {
					enabled: true,
					x: {
						show: true,
						format: 'hh:mm:ss',
					},
				},
				chart: {
					toolbar: {
						show: true,
						theme: 'light',
						tools: {
							download: false,
							selection: false,
							zoom: true,
							zoomin: true,
							zoomout: true,
							pan: true,
							reset: true | '<img src="/static/icons/reset.png" width="20">',
							customIcons: []
						},
						autoSelected: 'zoom'
					}
				},
				colors: ['#4DC0B5'],
				zoom: {
					type: 'x',
					enabled: true
				},
				fill: {
					type: 'gradient',
					gradient: {
						type: 'vertical',
						opacityFrom: 0.8,
						opacityTo: 0.01,
						stops: [0, 100],
						colorStops: []
					}
				},
				stroke: {
					show: true,
					curve: 'smooth',
					width: 2
				},
				grid: {
					yaxis: {
						lines: {
							show: false
						}
					}
				},
				xaxis: {
					type: 'datetime',
					labels: {
						formatter: function (value, timestamp) {
							return new Date(timestamp).toLocaleTimeString()
						},
						style: {
                            colors: 'white',
                        }
					}
				},
				yaxis: {
					decimalsInFloat: 2,
					forceNiceScale: true,
					labels: {
                        style: {
                            colors: 'white',
                        }
                    }
				}
			}
        }
	},
	mounted() {
        this.fetchData()
        setInterval(() => {
            this.fetchData()
        }, 60000); //5 min
	},
	methods: {
		async fetchData() {
            const response =  await this.$http.post("/api/live?measurement=pressure")
            this.series[0].data = response.data.map(function(data) {
                return { x: Date.parse(data.measurement_time), y: data.millibars }
            })
            this.$refs.chart.updateSeries(this.series, true)
		}
	}
}
</script>
