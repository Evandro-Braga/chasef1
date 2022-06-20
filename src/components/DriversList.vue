<template>
    <div class="list">
        <table>
            <tr>
                <th>
                    Numero
                </th>
                <th>
                    Nome
                </th>
                <th>
                    Nacionalidade
                </th>
            </tr>
            <tr v-for="driver of drivers" :key="driver.driverId">
                <td>
                    {{ driver.permanentNumber }}
                </td>
                <td>
                    <a :href="driver.url" target="_blank"> {{ driver.givenName }} {{ driver.familyName }} </a>
                </td>
                <td>
                    {{ driver.nationality }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'DriversList',

    props: {
        drivers: Object
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins';

.list table{
    @include table
}

.list table a{
    color:#6CA6CD;
}
</style>