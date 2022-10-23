<template>
    <div class="min-h-screen max-w-screen-xl m-auto py-20">
        <div class="grid lg:grid-cols-2 space-y-16 lg:space-y-0">
            <div>
                <StandingsListComponent :standings="standings"></StandingsListComponent>
            </div>
            <div>
                <ConstructorsListComponent :constructors="constructorStandings"> </ConstructorsListComponent>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/services/api'
import StandingsListComponent from '@/components/StandingsList.vue'
import ConstructorsListComponent from '@/components/ConstructorsList.vue'

export default {
    name: "StandingsView",
    components: { StandingsListComponent, ConstructorsListComponent },

    data() {
        return {
            standings: [],
            constructorStandings: []
        }
    },

    mounted() {
        api.get('current/driverStandings.json').then(response => {
            this.standings = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
        })

        api.get('current/constructorStandings.json').then(response => {
            this.constructorStandings = response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
        })
    }
}
</script>