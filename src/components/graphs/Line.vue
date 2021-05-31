<template>
  <div class="bg-gray-800 p-4 rounded-lg">
    <div class="text-center text-gray-500">
      {{ this.measurement | capitalize }}
    </div>
    <apexchart
      type="area"
      height="500"
      :options="chartOptions"
      :series="series"
      ref="chart"
    ></apexchart>
  </div>
</template>

<script>
export default {
  props: {
    timeFrame: {
      type: String,
      required: true
    },
    measurement: {
      type: String,
      required: true
    },
    unit: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    reading: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      interval: null,
      series: [
        {
          name: "",
          type: "area",
          data: []
        }
      ]
    };
  },
  mounted() {
    this.series[0].name = this.unit;
    this.fetchData();
  },
  watch: {
    timeFrame: function() {
      this.fetchData();
    }
  },
  methods: {
    fetchData() {
      if (this.timeFrame === "live") {
        this.apiCall();
        this.interval = setInterval(() => {
          this.apiCall();
        }, 60000); //5 min
      } else {
        clearInterval(this.interval);
        this.apiCall();
      }
    },
    async apiCall() {
      const response = await this.$http.get(
        "/api/weather-data?measurement=" +
          this.measurement +
          "&time_frame=" +
          this.timeFrame
      );
      this.series[0].data = response.data.map(data => {
        return { x: Date.parse(data.measurement_time), y: data[this.reading] };
      });
      this.$refs.chart.updateSeries(this.series, true);
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  computed: {
    chartOptions() {
      return {
        tooltip: {
          enabled: true,
          x: {
            show: true,
            format: "hh:mm:ss"
          }
        },
        dataLabels: {
          enabled: false
        },
        chart: {
          toolbar: {
            show: true,
            theme: "light",
            tools: {
              download: false,
              selection: false,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true,
              customIcons: []
            },
            autoSelected: "zoom"
          }
        },
        colors: [this.color],
        zoom: {
          type: "x",
          enabled: true
        },
        fill: {
          type: "gradient",
          gradient: {
            type: "vertical",
            opacityFrom: 0.8,
            opacityTo: 0.01,
            stops: [0, 100],
            colorStops: []
          }
        },
        stroke: {
          show: true,
          curve: "smooth",
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
          type: "datetime",
          labels: {
            formatter: (value, timestamp) => {
              if (this.timeFrame == "week" || this.timeFrame == "month") {
                const date = new Date(timestamp);
                return (
                  date.toLocaleDateString() + " " + date.toLocaleTimeString()
                );
              } else {
                return new Date(value).toLocaleTimeString();
              }
            },
            style: {
              colors: "white"
            }
          }
        },
        yaxis: {
          decimalsInFloat: 2,
          forceNiceScale: true,
          labels: {
            show: false,
            style: {
              colors: "white"
            }
          }
        }
      };
    }
  }
};
</script>
