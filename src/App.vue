<template>
  <router-view/>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
@import "@/assets/scss/colors";

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
}

p, a, h1, h2, h3, h4 {
  color: $textColor
}

#app {
background-color: white;
}
</style>
