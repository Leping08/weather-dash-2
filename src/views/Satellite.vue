<template>
  <div class="w-full h-full bg-gray-600 text-gray-300">
    <div class="flex">
      <div class="w-2/3 bg-gray-800 m-4 rounded-lg">
        <div class="w-full text-center pt-2 text-lg">
          <span class="mdi mdi-satellite-variant text-gray-300"></span> Imagery
        </div>
        <div class="p-4">
          <goes />
        </div>
      </div>
      <div class="w-1/3 bg-gray-800 m-4 rounded-lg">
        <div class="w-full text-center pt-2 text-lg">
          <span class="mdi mdi-weather-hurricane text-gray-300"></span> Tropical Actvity
        </div>
        <div class="p-4">
          <a target="_blank" href="https://www.nhc.noaa.gov/gtwo.php?basin=atlc&fdays=2">
            <img src="https://www.nhc.noaa.gov/xgtwo/two_atl_2d0.png" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="flex"></div>
  </div>
</template>

<script>
import goes from "../components/Goes";
export default {
  name: "Home",
  components: {
    goes
  }
};
</script>
