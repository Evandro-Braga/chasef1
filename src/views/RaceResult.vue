<template>
    <div class="text-white">
        <HeaderComponent></HeaderComponent>
        <div class="min-h-screen space-y-8 px-1 py-6
        md:max-w-screen-xl md:mx-auto md:px-4 md:py-10">
            <div class="flex space-x-4">
                <img src="https://img.icons8.com/ios-glyphs/30/ffffff/finish-flag.png" />
                <h2 class="text-2xl font-bold italic">
                    {{ raceName }}
                </h2>
            </div>

            <div class="space-y-16
            md:flex md:flex-wrap
            lg:space-x-8 lg:space-y-0">
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