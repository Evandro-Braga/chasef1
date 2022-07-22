<template>
  <div>
    <HeaderComponent @marginTop="marginTopFunction"></HeaderComponent>
    <div class="min-h-screen">
      <video class="object-cover absolute h-[100vh] w-[100%]" :class="marginTop ? 'top-[270px]' : 'top-14'" 
      autoplay muted loop>
        <source src="@/videos/Intro-Formula-1.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue';

export default {
  name: "HomeView",

  data() {
    return{
      marginTop: false
    }
  },

  components: { HeaderComponent },

  methods: {
    marginTopFunction() {
      this.marginTop = !this.marginTop
    }
  }
}
</script>

<style lang="scss" scoped></style>