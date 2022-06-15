<template>
<div class="Home">
  <HeaderComponent></HeaderComponent>
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