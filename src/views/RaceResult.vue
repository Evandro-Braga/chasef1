<template>
    <div class="text-white min-h-screen">
        <HeaderComponent></HeaderComponent>
        <div class="p-4 space-y-8 sm:w-4/5 sm:mx-auto">
            <div class="flex space-x-4">
                <img src="https://img.icons8.com/ios-glyphs/30/ffffff/finish-flag.png" />
                <h2 class="text-2xl font-bold italic">
                    {{ raceName }}
                </h2>
            </div>

            <div class="space-y-16">
                <div>
                    <RaceResult :results="results"></RaceResult>
                </div>

                <div>
                    <QualifyingResult :qualy="qualy"></QualifyingResult>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/services/api'
import HeaderComponent from '@/components/Header.vue'
import RaceResult from '@/components/RaceResult.vue'
import QualifyingResult from '@/components/QualifyingResult.vue'

export default {
    name: 'RaceResultView',

    components: { HeaderComponent, RaceResult, QualifyingResult },

    data() {
        return {
            results: [],
            qualy: [],
            raceName: ''
        }
    },

    mounted() {
        let id = this.$route.params.id
        api.get(`current/${id}/results.json`).then(response => {
            this.results = response.data.MRData.RaceTable.Races[0].Results
            this.raceName = response.data.MRData.RaceTable.Races[0].raceName
        })

        api.get(`current/${id}/qualifying.json`).then(response => {
            this.qualy = response.data.MRData.RaceTable.Races[0].QualifyingResults
        })
    }
}
</script>