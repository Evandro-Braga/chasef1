<template>
  <div class="bg-neutral-50">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: "app",

  components: { Header }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: 'PT Sans', sans-serif;
}

html {
  scroll-behavior: smooth;
}
</style>
