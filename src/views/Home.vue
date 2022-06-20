<template>
<div class="Home">
  <HeaderComponent></HeaderComponent>
</div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue';

export default {
  name: "HomeView",

  components: { HeaderComponent },
}
</script>

<style lang="scss" scoped>
.Home {
    background-image: url("@/images/F1-LOGO.jpg");
    background-size: cover;
    background-position: center;
    min-height: 110vh;
}
</style>