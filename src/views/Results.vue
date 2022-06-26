<template>
<div class="text-white min-h-screen">
    <HeaderComponent></HeaderComponent>
    <div class="p-4 sm:w-3/4 sm:mx-auto">
        <ResultsList :results="results" :qualy="qualy"></ResultsList>
    </div>
</div>
</template>

<script>
import api from '@/services/api'
import HeaderComponent from '@/components/Header.vue'
import ResultsList from '@/components/ResultsList.vue'

export default {
    name: 'ResultsView',

    components: {HeaderComponent, ResultsList},

    data() {
        return {
            results: [],
            qualy: []
        }
    },

    mounted() {
        let id = this.$route.params.id
        api.get(`current/${id}/results.json`).then(response => {
            this.results = response.data.MRData.RaceTable.Races[0].Results
            //console.log(this.results);
        })

        api.get(`current/${id}/qualifying.json`).then(response => {
            this.qualy = response.data.MRData.RaceTable.Races[0].QualifyingResults
            console.log(this.qualy)
        })
    }
}
</script>