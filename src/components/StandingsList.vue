<template>
    <div class="max-w-lg bg-white p-4 rounded-sm shadow-md m-auto">
        <div class="flex space-x-4">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/motorbike-helmet.png" />
            <h2 class="text-xl italic font-bold">
                Pilotos
            </h2>
        </div>
        <div>
            <table class="w-full text-left">
                <tr class="text-lg">
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