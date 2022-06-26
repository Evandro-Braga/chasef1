<template>
    <div>
        <table class="text-white text-left w-full sm:max-w-xl">
            <tr>
                <th>
                    Posição
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