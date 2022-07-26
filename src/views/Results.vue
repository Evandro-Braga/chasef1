<template>
  <div class="text-white">
    <HeaderComponent></HeaderComponent>
    <div class="min-h-screen space-y-4 px-1 py-6
    md:max-w-screen-xl md:mx-auto md:px-4 md:py-10">
      <ResultsList :races="races"></ResultsList>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue';
import api from '@/services/api.js';
import ResultsList from '@/components/ResultsList.vue';

export default {
  name: "ResultsView",

  components: { HeaderComponent, ResultsList },

  data() {
    return {
      races: []
    }
  },

  mounted() {
    api.get('current/results.json?limit=460').then(response => {
      this.races = response.data.MRData.RaceTable.Races
    })
  }
}
</script>