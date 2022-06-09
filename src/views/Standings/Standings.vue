<template>
    <HeaderComponent></HeaderComponent>
    <div class="standings">
        <h2>
            Classificação
        </h2>
        <h3>
            Pilotos
        </h3>
        <StandingsListComponent :standings="standings"></StandingsListComponent>
        <div class="constructors">
            <h3>
                Construtores
            </h3>
            <ConstructorsListComponent :constructors="constructorStandings"> </ConstructorsListComponent>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '@/components/Header/Header.vue';
import api from '@/services/api'
import StandingsListComponent from '@/components/StandingsList/StandingsList.vue'
import ConstructorsListComponent from '@/components/ConstructorsList/ConstructorsList.vue'

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
        api.get('2022/driverStandings.json').then(response => {
            this.standings = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
        })

        api.get('current/constructorStandings.json').then(response => {
            this.constructorStandings = response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
            console.log(this.constructorStandings)
        })
    }
}
</script>

<style src="./Style.scss" lang="scss" scoped></style>