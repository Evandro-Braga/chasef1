<template>
    <div>
        <table class="text-white text-left w-full sm:max-w-lg">
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
    name: 'StandingsList',

    props: {
        standings: Object
    }
}
</script>