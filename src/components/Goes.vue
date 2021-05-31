<template>
  <div class="w-full text-center pt-2 text-lg">
    <div class="flex justify-between">
      <div></div>
      <div>
        <span class="mdi mdi-satellite-variant text-gray-300"></span> Imagery
      </div>
      <div class="flex">
        <div>
          <loading-spinner v-show="loading" class="mr-4" />
        </div>
        <div class="flex items-center px-2">
          <div>
            <a :href="selectedRegion.images[satelliteImageIndex].info" target="_blank" class="mdi mdi-information-outline text-gray-300"></a>
          </div>
          <div>
            <select class="bg-gray-800 rounded mx-2 border text-gray-300 border-gray-300" v-model="satelliteImageIndex">
              <option :value="1">Sandwich</option>
              <option :value="2">Geo Color</option>
              <option :value="0">Air Mass</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="p-4">
      <div class="flex justify-around">
        <template v-for="(region, index) in regions">
          <div
            class="cursor-pointer p-2 bg-gray-800 rounded-t mx-1 hover:border-gray-600 border-b-4 border-transparent w-full text-center"
            :class="
              selectedRegion === region
                ? 'border-b-4 border-gray-200 hover:border-gray-200'
                : ''
            "
            :key="index"
            @click="selectedRegion = region"
            >
              {{ region.title }}
          </div>
        </template>
      </div>
      <div>
        <img :src="selectedRegion.images[satelliteImageIndex].gif" @load="imageLoaded" class="object-cover w-full" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import LoadingSpinner from '@/components/LoadingSpinner'
export default {
  components: {
    LoadingSpinner
  },
  data() {
    return {
      loading: true,
      satelliteImageIndex: 2,
      selectedRegion: null,
      regions: [
        {
          title: "Gulf of Mexico",
          images: [
            {
              name: 'Air Mass',
              gif: "https://cdn.star.nesdis.noaa.gov//GOES16/ABI/SECTOR/GM/AirMass/GOES16-GM-AirMass-1000x1000.gif",
              info: "https://www.star.nesdis.noaa.gov/GOES/documents/QuickGuide_GOESR_AirMassRGB_final.pdf"
            },
            {
              name: 'Sandwich',
              gif: "https://cdn.star.nesdis.noaa.gov//GOES16/ABI/SECTOR/GM/Sandwich/GOES16-GM-Sandwich-1000x1000.gif",
              info: "https://www.star.nesdis.noaa.gov/GOES/documents/SandwichProduct.pdf"
            },
            {
              name: 'Geo Color',
              gif: "https://cdn.star.nesdis.noaa.gov//GOES16/ABI/SECTOR/GM/GEOCOLOR/GOES16-GM-GEOCOLOR-1000x1000.gif",
              info: "https://www.star.nesdis.noaa.gov/GOES/documents/QuickGuide_CIRA_Geocolor_20171019.pdf"
            }
          ]
        },
        {
          title: "Caribbean",
          images: [
            {
              name: 'Air Mass',
              gif: "https://cdn.star.nesdis.noaa.gov//GOES16/ABI/SECTOR/CAR/AirMass/GOES16-CAR-AirMass-1000x1000.gif",
              info: "https://www.star.nesdis.noaa.gov/GOES/documents/QuickGuide_GOESR_AirMassRGB_final.pdf"
            },
            {
              name: 'Sandwich',
              gif: "https://cdn.star.nesdis.noaa.gov//GOES16/ABI/SECTOR/CAR/Sandwich/GOES16-CAR-Sandwich-1000x1000.gif",
              info: "https://www.star.nesdis.noaa.gov/GOES/documents/SandwichProduct.pdf"
            },
            {
              name: 'Geo Color',
              gif: "https://cdn.star.nesdis.noaa.gov//GOES16/ABI/SECTOR/CAR/GEOCOLOR/GOES16-CAR-GEOCOLOR-1000x1000.gif",
              info: "https://www.star.nesdis.noaa.gov/GOES/documents/QuickGuide_CIRA_Geocolor_20171019.pdf"
            }
          ]
        },
        {
          title: "US East",
          images: [
            {
              name: 'Air Mass',
              gif: "https://cdn.star.nesdis.noaa.gov//GOES16/ABI/SECTOR/EUS/AirMass/GOES16-EUS-AirMass-1000x1000.gif",
              info: "https://www.star.nesdis.noaa.gov/GOES/documents/QuickGuide_GOESR_AirMassRGB_final.pdf"
            },
            {
              name: 'Sandwich',
              gif: "https://cdn.star.nesdis.noaa.gov//GOES16/ABI/SECTOR/EUS/Sandwich/GOES16-EUS-Sandwich-1000x1000.gif",
              info: "https://www.star.nesdis.noaa.gov/GOES/documents/SandwichProduct.pdf"
            },
            {
              name: 'Geo Color',
              gif: "https://cdn.star.nesdis.noaa.gov//GOES16/ABI/SECTOR/EUS/GEOCOLOR/GOES16-EUS-GEOCOLOR-1000x1000.gif",
              info: "https://www.star.nesdis.noaa.gov/GOES/documents/QuickGuide_CIRA_Geocolor_20171019.pdf"
            }
          ]
        }
      ]
    };
  },
  created() {
    this.selectedRegion = this.regions[0];
  },
  methods: {
    imageLoaded() {
      this.loading = false;
    }
  },
  watch: {
    satelliteImageIndex() {
      this.loading = true;
    },
    selectedRegion() {
      this.loading = true;
    }
  }
};
</script>
