<template>
    <div class="constructorsList">
        <table>
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

<style src="./Style.scss" lang="scss" scoped></style>