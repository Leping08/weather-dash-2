<template>
  <div class="w-full h-full bg-gray-600 text-gray-300">
    <div class="flex">
      <div class="w-full bg-gray-800 p-4 m-4 rounded-lg">
        <time-card />
      </div>
    </div>
    <div class="flex"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import timeCard from "../components/Time";
export default {
  name: "Home",
  components: {
    timeCard
  }
};
</script>
