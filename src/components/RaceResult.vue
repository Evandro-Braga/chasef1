<template>
    <div class="p-4 bg-neutral-800 rounded-md max-w-lg md:min-w-[512px] space-y-8 shadow">
        <div>
            <h2 class="font-bold text-xl italic">
                Resultado da corrida
            </h2>
        </div>
        <div>
            <table class="w-full text-left">
                <tr>
                    <th>
                        #
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