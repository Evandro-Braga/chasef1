<template>
    <div class="standingsList">
        <table>
            <tr>
                <th>
                    Posição
                </th>
                <th>
                    Piloto
                </th>
                <th>
                    Pontos
                </th>
            </tr>
            <tr v-for="pos of standings" :key="pos.position">
                <td>
                    {{ pos.positionText }}º
                </td>
                <td>
                    {{ pos.Driver.givenName}}  {{ pos.Driver.familyName}}
                </td>
                <td>
                    {{ pos.points }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {
    name: 'StandingsListComponent',

    props: {
        standings: Object
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/colors';

.standings{
    width: 100%;
}

.standings table{
    width: 80%;
    color: $textColor;
    text-align: left;
}
</style>