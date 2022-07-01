<template>
    <div class="space-y-8">
        <h2 class="font-bold text-xl italic">
            Resultado da corrida
        </h2>
        <table class="w-full text-left sm:max-w-lg">
            <tr>
                <th>
                    Posição
                </th>
                <th>
                    Piloto
                </th>
                <th>
                    Equipe
                </th>
                <th>
                    Pontos
                </th>
            </tr>
            <tr v-for="result of results" :key="result.position">
                <td>
                    {{ result.position }}°
                </td>
                <td>
                    {{ result.Driver.givenName }} {{ result.Driver.familyName }}
                </td>
                <td>
                    {{ result.Constructor.name }}
                </td>
                <td>
                    +{{ result.points }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {
    name: 'RaceResult',

    props: {
        results: Object,
    }
}
</script>