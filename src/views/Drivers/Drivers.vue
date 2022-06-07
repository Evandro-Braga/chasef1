<template>
  <HeaderComponent></HeaderComponent>
  <div class="drivers">
    <h2>
      Pilotos
    </h2>
    <DriversListComponent :drivers="drivers"></DriversListComponent>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header/Header.vue';
import api from '@/services/api.js';
import DriversListComponent from '@/components/DriversList/DriversList.vue';

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

<style src="./Style.scss" lang="scss" scoped></style>