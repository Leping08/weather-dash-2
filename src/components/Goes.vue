<template>
  <div>
    <div class="flex justify-around">
      <template v-for="(image, index) in images">
        <div
          class="cursor-pointer p-2 bg-gray-800 rounded-t mx-1 hover:border-gray-600 border-b-4 border-transparent w-full text-center"
          :class="
            selectedImage === image
              ? 'border-b-4 border-gray-200 hover:border-gray-200'
              : ''
          "
          :key="index"
          @click="selectedImage = image"
        >
          {{ image.title }}
        </div>
      </template>
    </div>
    <div>
      <img :src="selectedImage.gif" class="object-cover w-full" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      utc: null,
      images: [
        {
          title: "Gulf of Mexico",
          gif:
            "https://cdn.star.nesdis.noaa.gov//GOES16/ABI/SECTOR/GM/GEOCOLOR/GOES16-GM-GEOCOLOR-1000x1000.gif",
          highRes:
            "https://cdn.star.nesdis.noaa.gov//GOES16/ABI/SECTOR/GM/GEOCOLOR/latest.jpg"
        },
        {
          title: "Caribbean",
          gif:
            "https://cdn.star.nesdis.noaa.gov//GOES16/ABI/SECTOR/CAR/GEOCOLOR/GOES16-CAR-GEOCOLOR-1000x1000.gif",
          highRes:
            "https://cdn.star.nesdis.noaa.gov//GOES16/ABI/SECTOR/CAR/GEOCOLOR/latest.jpg"
        },
        {
          title: "US East",
          gif:
            "https://cdn.star.nesdis.noaa.gov//GOES16/ABI/SECTOR/EUS/GEOCOLOR/GOES16-EUS-GEOCOLOR-1000x1000.gif",
          highRes:
            "https://cdn.star.nesdis.noaa.gov//GOES16/ABI/SECTOR/GM/GEOCOLOR/latest.jpg"
        }
      ],
      selectedImage: {}
    };
  },
  created() {
    this.selectedImage = this.images[0];
    //this.setUTC();
    //console.log(this.daysIntoYear());
    //this.img = "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/FD/GEOCOLOR/" + this.utc.getFullYear() + this.daysIntoYear() + this.utc.getHours() + this.getMin() + "_GOES16-ABI-FD-GEOCOLOR-5424x5424.jpg"
  },
  methods: {
    // daysIntoYear () {
    //     const days = (Date.UTC(this.utc.getFullYear(), this.utc.getMonth(), this.utc.getDate()) - Date.UTC(this.utc.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
    //     if (days <= 9) {
    //         return 0 + days;
    //     } else {
    //         return days;
    //     }
    // },
    // getMin() {
    //     //0-60 min logic here
    //     return 10;
    //     //return this.utc.getMinutes();
    // },
    // setUTC() {
    //     this.utc = new Date(new Date().toUTCString().substr(0, 25));
    // }
  }
};
</script>
