<template>
  <div class="w-full h-full bg-gray-600 text-gray-300">
    <div class="flex">
      <div class="w-2/3 bg-gray-800 m-4 rounded-lg">
        <goes />
      </div>
      <div class="w-1/3 bg-gray-800 m-4 rounded-lg">
        <div class="w-full text-center pt-2 text-lg">
          <span class="mdi mdi-weather-hurricane text-gray-300"></span> Tropical Activity
        </div>
        <div class="p-4">
          <div class="my-4">
            <a target="_blank" href="https://www.nhc.noaa.gov/gtwo.php?basin=atlc&fdays=2">
              <img src="https://www.nhc.noaa.gov/xgtwo/two_atl_2d0.png" alt="">
            </a>
          </div>
          <div class="my-4">
            <a target="_blank" href="https://www.nhc.noaa.gov/gtwo.php?basin=atlc&fdays=5">
              <img src="https://www.nhc.noaa.gov/xgtwo/two_atl_5d0.png" alt="">
            </a>
          </div>
          <div class="my-4">
            <img src="https://www.wpc.ncep.noaa.gov/qpf/p120i.gif" alt="">
          </div>
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
