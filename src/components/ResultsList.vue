<template>
    <div class=" bg-white p-4 rounded-sm max-w-lg shadow-md">
        <div class="flex space-x-4">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/leaderboard.png" />
            <h2 class="text-xl font-bold italic">
                Resultados
            </h2>
        </div>
        <div>
            <table class="w-full text-left">
                <tr class="text-lg">
                    <th>
                        Circuito
                    </th>
                    <th>
                        
                    </th>
                </tr>
                <tr v-for="race in races" :key="race.round" class='h-8'>
                    <td>
                        {{race.raceName}}
                    </td>
                    <td>
                        <a class="text-blue-900 italic font-bold hover:border-b-2 border-blue-900"
                            :href="'resultado/' + race.round"> Resultado
                        </a>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResultsList',

    props: {
        races: Object
    }
}
</script>