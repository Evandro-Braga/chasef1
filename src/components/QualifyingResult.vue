<template>
    <div class="p-4 bg-white rounded-sm max-w-lg md:min-w-[512px] shadow-md m-auto">
        <div>
            <h2 class="font-bold text-xl italic">
                Qualificação
            </h2>
        </div>
        <div>
            <table class="w-full text-left">
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        Piloto
                    </th>
                    <th>
                        Q1
                    </th>
                    <th>
                        Q2
                    </th>
                    <th>
                        Q3
                    </th>
                </tr>
                <tr v-for="q of qualy" :key="q.position">
                    <td>
                        {{ q.position }}
                    </td>
                    <td>
                        {{ q.Driver.givenName }} {{ q.Driver.familyName }}
                    </td>
                    <td>
                        {{ q.Q1 }}
                    </td>
                    <td>
                        {{ q.Q2 }}
                    </td>
                    <td>
                        {{ q.Q3 }}
                    </td>
                </tr>
            </table>
        </div>

    </div>
</template>

<script>

export default {
    name: 'QualifyingResult',

    props: {
        qualy: Object
    }
}
</script>