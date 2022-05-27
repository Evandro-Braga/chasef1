<template>
  <HeaderComponent></HeaderComponent>
  <div class="home">
    <div class="homeTitle">
      <h2>
        FORMULA 1 - 2022
      </h2>
    </div>
    <div class="homeImage">

    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  name: "HomeView",

  components: { HeaderComponent },
}
</script>

<style scoped>
.home {
  height: 130vh;
}

.homeTitle {
  padding: 2%;
}

.homeImage {
  background-image: url('@/images/F1CALENDARIO.jpg');
  background-size: cover;
  min-width: 100%;
  height: 700px;
  margin: auto;
}

@media (max-width: 700px) {
  .home {
    margin-left: 0;
  }
}
</style>