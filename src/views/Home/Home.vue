<template>
  <HeaderComponent></HeaderComponent>
  <div class="home">
    <div class="homeTitle">
      <h2>
        Formula 1 - 2022
      </h2>
    </div>
    <div class="homeImage">

    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header/Header.vue';

export default {
  name: "HomeView",

  components: { HeaderComponent },
}
</script>

<style src="./Style.scss" lang="scss" scoped></style>