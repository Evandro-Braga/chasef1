<template>
    <div class="p-4 bg-neutral-800 rounded-md max-w-lg md:min-w-[512px] space-y-8 shadow">
        <div class="flex space-x-4">
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/maintenance.png" />
            <h2 class="text-xl italic font-bold">
                Construtores
            </h2>
        </div>
        <div>
            <table class="text-white text-left w-full">
                <tr>
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