<template>
  <div>
    <div class="min-h-screen">
      <video class="object-cover absolute h-[110vh] w-[100%] top-14" 
      :class="opacity ? 'opacity-25' : 'opacity-100'"
      autoplay muted loop>
        <source src="@/videos/Intro-Formula-1.mp4" type="video/mp4">
      </video>
      <HeaderComponent @opacity="handleOpacity"></HeaderComponent>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue';

export default {
  name: "HomeView",

  data() {
    return{
      opacity: false
    }
  },

  components: { HeaderComponent },

  methods: {
    handleOpacity() {
      this.opacity = !this.opacity
    }
  }
}
</script>

<style lang="scss" scoped></style>