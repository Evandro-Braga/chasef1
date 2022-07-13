<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <div class="min-h-screen bg-gradient-to-t from-gray-900 to-neutral-900">
      <img class="m-auto" src="@/images/F1-LOGO-removebg-preview.png" alt="">
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue';

export default {
  name: "HomeView",

  components: { HeaderComponent },
}
</script>

<style lang="scss" scoped></style>