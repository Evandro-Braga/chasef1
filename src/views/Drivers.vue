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
    api.get('2022/drivers.json').then(response => {
      this.drivers = response.data.MRData.DriverTable.Drivers
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins';
.drivers {
    @include bodyPage
}

h2 {
    margin: 10px 0 50px 0;
}
</style>