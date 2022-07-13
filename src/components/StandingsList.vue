<template>
    <div class="p-4 bg-neutral-800 rounded-md max-w-lg md:min-w-lg space-y-8 shadow">
        <div class="flex space-x-4">
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/motorbike-helmet.png" />
            <h2 class="text-xl italic font-bold">
                Pilotos
            </h2>
        </div>
        <div>
            <table class="text-white text-left w-full">
                <tr>
                    <th>
                        #
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
                        {{ pos.Driver.givenName}} {{ pos.Driver.familyName}}
                    </td>
                    <td>
                        {{ pos.points }}
                    </td>
                </tr>
            </table>
        </div>
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