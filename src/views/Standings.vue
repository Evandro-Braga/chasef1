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
        api.get('2022/driverStandings.json').then(response => {
            this.standings = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
        })

        api.get('current/constructorStandings.json').then(response => {
            this.constructorStandings = response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
            //console.log(this.constructorStandings)
        })
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins";

.standings {
    @include bodyPage;
}

h2 {
    margin: 10px 0 0 0;
}

.standings h3 {
    margin: 50px 0 0 0;
}

.constructors {
    max-width: 100%;
    border-top: 1px solid #101010;
    margin: 20px 0 0 0;
    padding: 20px 0 20px 0;
}

.constructors h3 {
    margin: 0;
}
</style>