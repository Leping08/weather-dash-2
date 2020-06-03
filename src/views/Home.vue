<template>
  <div class="w-full h-full bg-gray-600 text-gray-300">
    <div class="flex">
      <div class="w-2/3 bg-gray-800 p-4 m-4 rounded-lg">
        <goes />
      </div>
      <div class="w-1/3 bg-gray-800 p-4 m-4 rounded-lg">
        <time-card />
      </div>
    </div>
    <div class="flex"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import timeCard from "../components/Time";
import goes from "../components/Goes";
export default {
  name: "Home",
  components: {
    timeCard,
    goes
  }
};
</script>
