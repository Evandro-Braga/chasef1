<template>
    <div class="text-white min-h-screen">
        <HeaderComponent></HeaderComponent>
        <div class="p-4 space-y-16 sm:w-4/5 sm:m-auto">
            <div class="space-y-8">
                <div class="flex space-x-4">
                    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/motorbike-helmet.png" />
                    <h2 class="text-xl italic font-bold">
                        Pilotos
                    </h2>
                </div>
                <StandingsListComponent :standings="standings"></StandingsListComponent>
            </div>

            <div class="space-y-8">
                <div class="flex space-x-4">
                    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/maintenance.png" />
                    <h2 class="text-xl italic font-bold">
                        Construtores
                    </h2>
                </div>
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