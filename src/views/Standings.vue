<template>
    <div>
        <HeaderComponent></HeaderComponent>
        <div class="min-h-screen px-1 py-6 text-white space-y-16
        md:max-w-screen-xl md:m-auto md:px-4 md:py-10 md:flex-wrap md:flex
        lg:space-x-8 lg:space-y-0">
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