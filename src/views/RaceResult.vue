<template>
    <div class="min-h-screen max-w-screen-xl m-auto py-20">
        <div class="space-y-4 p-2">
            <div class="flex space-x-4 pl-0 md:pl-16">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/finish-flag.png" />
                <h2 class="text-2xl font-bold italic">
                    {{ raceName }}
                </h2>
            </div>

            <div class="grid lg:grid-cols-2 space-y-16 lg:space-y-0">
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
import RaceResult from '@/components/RaceResult.vue'
import QualifyingResult from '@/components/QualifyingResult.vue'

export default {
    name: 'RaceResultView',

    components: { RaceResult, QualifyingResult },

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