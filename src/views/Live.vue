<template>
  <div class="bg-gray-600 w-full h-fulls p-4">
    <div
      class="flex text-gray-400 items-center justify-center sm:items-stretch sm:justify-start py-2"
    >
      <div class="flex-1"></div>
      <div
        @click="timeFrame = 'live'"
        v-bind:class="[timeFrame === 'live' ? 'bg-gray-900' : 'bg-gray-700']"
        class="ml-2 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-800 transition duration-150 ease-in-out cursor-pointer"
      >
        Live
      </div>
      <div
        @click="timeFrame = 'day'"
        v-bind:class="[timeFrame === 'day' ? 'bg-gray-900' : 'bg-gray-700']"
        class="ml-2 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-800 transition duration-150 ease-in-out cursor-pointer"
      >
        Day
      </div>
      <div
        @click="timeFrame = 'week'"
        v-bind:class="[timeFrame === 'week' ? 'bg-gray-900' : 'bg-gray-700']"
        class="ml-2 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-800 transition duration-150 ease-in-out cursor-pointer"
      >
        Week
      </div>
      <div
        @click="timeFrame = 'month'"
        v-bind:class="[timeFrame === 'month' ? 'bg-gray-900' : 'bg-gray-700']"
        class="ml-2 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-800 transition duration-150 ease-in-out cursor-pointer"
      >
        Month
      </div>
    </div>
    <div class="flex my-4">
      <div class="flex-1">
        <graph
          :time-frame="timeFrame"
          measurement="pressure"
          unit="mb"
          reading="millibars"
          color="#38B2AC"
        />
      </div>
    </div>
    <div class="flex my-4">
      <div class="flex-1">
        <graph
          :time-frame="timeFrame"
          measurement="temperature"
          unit="°F"
          reading="degrees"
          color="#667EEA"
        />
      </div>
    </div>
    <div class="flex my-4">
      <div class="flex-1">
        <graph
          :time-frame="timeFrame"
          measurement="humidity"
          unit="Humidity %"
          reading="percentage"
          color="#4299E1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import graph from "@/components/graphs/Line";
export default {
  components: {
    graph
  },
  data() {
    return {
      timeFrame: "live"
    };
  }
};
</script>
