<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            aria-label="Main menu"
            aria-expanded="false"
          >
            <!-- Icon when menu is closed. -->
            <!-- Menu open: "hidden", Menu closed: "block" -->
            <svg
              class="block h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Icon when menu is open. -->
            <!-- Menu open: "block", Menu closed: "hidden" -->
            <svg
              class="hidden h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex items-center">
            <div class="">
              <span
                class="mdi mdi-weather-partly-lightning text-gray-100 text-4xl"
              ></span>
            </div>
            <div class="hidden sm:block sm:ml-2">
              <span class="text-gray-100 text-2xl">Derk Weather</span>
            </div>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex h-full items-center">
              <router-link
                class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 transition duration-150 ease-in-out"
                :to="{ name: 'home' }"
                >Home</router-link
              >
              <router-link
                class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 transition duration-150 ease-in-out"
                :to="{ name: 'radar' }"
                >Radar</router-link
              >
              <router-link
                class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 transition duration-150 ease-in-out"
                :to="{ name: 'satellite' }"
                >Satellite</router-link
              >
              <router-link
                class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 transition duration-150 ease-in-out"
                :to="{ name: 'live' }"
                >Live</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--
            Mobile menu, toggle classes based on menu state.

            Menu open: "block", Menu closed: "hidden"
        -->
    <div class="hidden sm:hidden">
      <div class="px-2 pt-2 pb-3">
        <a
          href="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >Dashboard</a
        >
        <a
          href="#"
          class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >Team</a
        >
        <a
          href="#"
          class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >Projects</a
        >
        <a
          href="#"
          class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >Calendar</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
