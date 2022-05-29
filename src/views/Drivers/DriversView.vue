<template>
  <HeaderComponent></HeaderComponent>
  <div class="drivers">
    <h2>
      PILOTOS
    </h2>
    <DriversListComponent :drivers="drivers"></DriversListComponent>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import api from '@/services/api.js';
import DriversListComponent from '@/components/DriversListComponent.vue';

export default {
  name: "DriversView",

  components: { HeaderComponent, DriversListComponent },

  data() {
    return {
      drivers: []
    }
  },

  mounted() {
    api.get('2022/drivers.json').then(response => {
      this.drivers = response.data.MRData.DriverTable.Drivers
    })
  }
}
</script>

<style src="./Style.css" scoped></style>