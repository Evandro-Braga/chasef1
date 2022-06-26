<template>
    <div class="space-y-16">
        <h2 class="font-bold text-xl">
            Resultado da corrida
        </h2>
        <table class="w-full text-left sm:max-w-xl">
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

        <h2 class="font-bold text-xl">
            Qualificação
        </h2>

        <table class="w-full text-left sm:max-w-xl">
            <tr>
                <th>
                    posição
                </th>
                <th>
                    Piloto
                </th>
                <th>
                    Q1
                </th>
                <th>
                    Q2
                </th>
                <th>
                    Q3
                </th>
            </tr>
            <tr v-for="q of qualy" :key="q.position">
                <td>
                    {{q.position}}
                </td>
                <td>
                    {{q.Driver.givenName}} {{q.Driver.familyName}}
                </td>
                <td>
                    {{q.Q1}}
                </td>
                <td>
                    {{q.Q2}}
                </td>
                <td>
                    {{q.Q3}}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {
    name: 'ResultsList',

    props: {
        results: Object,
        qualy: Object
    }
}
</script>