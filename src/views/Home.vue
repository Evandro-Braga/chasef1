<template>
  <div>
    <HeaderComponent @marginTop="marginTopFunction"></HeaderComponent>
    <div class="min-h-screen">
      <video class="object-cover absolute h-[100vh] w-[100%]" :class="marginTop ? 'top-[270px]' : 'top-14'" 
      autoplay muted loop>
        <source src="@/videos/Intro-Formula-1.mp4" type="video/mp4">
      </video>
      <router-link to="/schedule" class="absolute left-[38%] md:left-1/2 translate-x-[-50%] text-white 
      font-extrabold text-2xl hover:text-red-600 hover:ease-in tracking-widest italic"
      :class="marginTop ? 'top-[70%]' : 'top-1/3'">
        VER CALENDARIO 2022
      </router-link>
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