<template>
  <div class="min-h-screen text-white">
    <HeaderComponent></HeaderComponent>
    <div class="p-4 sm:w-3/4 sm:mx-auto">
      <h2 class="my-8 text-xl font-bold">
        Pilotos
      </h2>
      <DriversListComponent :drivers="drivers"></DriversListComponent>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue';
import api from '@/services/api.js';
import DriversListComponent from '@/components/DriversList.vue';

export default {
  name: "DriversView",

  components: { HeaderComponent, DriversListComponent },

  data() {
    return {
      drivers: []
    }
  },

  mounted() {
    api.get('current/drivers.json').then(response => {
      this.drivers = response.data.MRData.DriverTable.Drivers
    })
  }
}
</script>