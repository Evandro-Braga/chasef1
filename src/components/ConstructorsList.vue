<template>
    <div class="max-w-lg bg-white p-4 rounded-sm shadow-md m-auto">
        <div class="flex space-x-4">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/maintenance.png" />
            <h2 class="text-xl italic font-bold">
                Construtores
            </h2>
        </div>

        <table class="w-full text-left">
            <tr class="text-lg">
                <th>
                    #
                </th>
                <th>
                    Construtor
                </th>
                <th>
                    Pontos
                </th>
            </tr>
            <tr v-for="cons of constructors" :key="cons.position">
                <td>
                    {{ cons.positionText }}º
                </td>
                <td>
                    {{ cons.Constructor.name }}
                </td>
                <td>
                    {{ cons.points }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {
    name: 'ConstructorsList',

    props: {
        constructors: Object
    }
}
</script>