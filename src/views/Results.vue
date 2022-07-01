<template>
  <div class="min-h-screen text-white">
    <HeaderComponent></HeaderComponent>
    <div class="p-4 space-y-4 sm:w-4/5 sm:mx-auto">
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