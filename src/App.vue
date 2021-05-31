<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import navbar from "@/components/nav/Nav";
export default {
  components: {
    navbar
  }
};
</script>
