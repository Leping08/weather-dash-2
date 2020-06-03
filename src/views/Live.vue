<template>
  <div class="bg-gray-600 w-full p-4">
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
    <div class="flex">
      <div class="flex-1">
        <pressure :time-frame="timeFrame" />
      </div>
    </div>
  </div>
</template>

<script>
import pressure from "../components/graphs/Pressure";
export default {
  components: {
    pressure
  },
  data() {
    return {
      timeFrame: "live"
    };
  }
};
</script>
