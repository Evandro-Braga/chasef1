<template>
  <div class="min-h-screen max-w-screen-xl m-auto p-2 py-20">
    <div>
      <ResultsList :races="races"></ResultsList>
    </div>
  </div>
</template>

<script>
import api from '@/services/api.js';
import ResultsList from '@/components/ResultsList.vue';

export default {
  name: "ResultsView",

  components: { ResultsList },

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