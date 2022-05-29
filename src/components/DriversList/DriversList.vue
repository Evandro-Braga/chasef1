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

<style src="./Style.scss" lang="scss" scoped></style>