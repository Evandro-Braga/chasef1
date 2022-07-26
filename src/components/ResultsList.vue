<template>
    <div class="space-y-8 bg-neutral-800 p-4 rounded-md max-w-lg shadow">
        <div class="flex space-x-4">
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/leaderboard.png" />
            <h2 class="text-xl font-bold italic">
                Resultados
            </h2>
        </div>
        <div class="space-y-2">
            <p v-for="race in races" :key="race.round">
                {{race.raceName}} - <a class="text-blue-300 italic" :href="'resultado/' + race.round"> Resultado </a>
            </p>
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