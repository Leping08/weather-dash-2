<template>
  <div>
    <div class="text-gray-300 text-2xl text-center">
      {{ new Date(currentTime).toLocaleString() }}
    </div>
    <div class="m-4">
      <div
        class="flex items-center h-6 sky rounded shadow-inner w-full mx-auto rounded-full"
      >
        <div
          class="h-10 bg-gray-400 w-1 rounded"
          v-bind:style="{ 'margin-left': percentDoneWithDay + '%' }"
        ></div>
      </div>
    </div>
    <div class="flex justify-around text-center text-gray-300">
      <div class="w-1/2">
        <div>
          <span class="mdi mdi-weather-sunset-up text-4xl"></span>
        </div>
        <div class="text-xl">
          {{ new Date(sunRiseTime).toLocaleTimeString() }}
        </div>
      </div>
      <div class="w-1/2">
        <div>
          <span class="mdi mdi-weather-sunset-down text-4xl"></span>
        </div>
        <div class="text-xl">
          {{ new Date(sunSetTime).toLocaleTimeString() }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      currentTime: null,
      sunRiseTime: null,
      sunSetTime: null,
      dayPercentInterval: null,
      timeInterval: null,
      percentDoneWithDay: 0
    };
  },
  mounted() {
    this.currentTime = new Date();
    this.timeInterval = setInterval(() => (this.currentTime = new Date()), 1000);
    this.updateDayPercent();
    this.dayPercentInterval = setInterval(() => this.updateDayPercent(), 60000);
    this.getLocation()
  },
  methods: {
    updateDayPercent() {
      const hours = this.currentTime.getHours();
      const minutes = this.currentTime.getMinutes();
      const minCompleteToday = hours * 60 + minutes;
      this.percentDoneWithDay = Math.round((minCompleteToday / 1440) * 100);
    },
    async getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.success, this.error);//This is calling the methods
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    },
    success(pos) {
      this.getTimes(pos.coords.latitude, pos.coords.longitude)
    },
    error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    },
    async getTimes(lat, lng) {
      const response = await axios.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`)
      this.sunRiseTime = response.data.results.sunrise;
      this.sunSetTime = response.data.results.sunset;
    }
  },
  beforeDestroy() {
    clearInterval(this.timeInterval);
    clearInterval(this.dayPercentInterval);
  }
};
</script>
