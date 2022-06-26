<template>
    <div class="text-white min-h-screen">
        <HeaderComponent></HeaderComponent>
        <div class="p-4 sm:w-3/4 sm:m-auto">
            <h2 class="text-xl my-8 font-bold">
                Classificação
            </h2>
            <h3 class="text-lg">
                Pilotos
            </h3>
            <StandingsListComponent :standings="standings"></StandingsListComponent>
            <div class="mt-16">
                <h3>
                    Construtores
                </h3>
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
            //console.log(this.constructorStandings)
        })
    }
}
</script>