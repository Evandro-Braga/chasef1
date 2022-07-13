<template>
    <div class="min-h-screen">
        <HeaderComponent></HeaderComponent>
        <div class="md:flex md:flex-wrap md:p-4 p-2 text-white space-y-16 md:space-y-0
         md:space-x-8 md:max-w-screen-xl md:m-auto">
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
import HeaderComponent from '@/components/Header.vue';
import api from '@/services/api'
import StandingsListComponent from '@/components/StandingsList.vue'
import ConstructorsListComponent from '@/components/ConstructorsList.vue'

export default {
    name: "StandingsView",
    components: { HeaderComponent, StandingsListComponent, ConstructorsListComponent },

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