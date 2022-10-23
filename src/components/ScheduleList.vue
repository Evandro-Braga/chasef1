<template>
    <div class="p-2">
        <div class=" bg-white rounded-sm p-4 max-w-xl shadow-md" id="topics">
            <div class="flex space-x-4">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/calendar.png" />
                <h2 class="text-xl italic font-bold">
                    Calendario 2022
                </h2>
            </div>

            <table class="w-full text-left">
                <tr class="text-lg">
                    <th>
                        Data
                    </th>
                    <th>
                        Circuito
                    </th>
                    <th>

                    </th>
                </tr>
                <tr v-for="s of schedule" :key="s.round" class="h-8">
                    <td>
                        {{ getFullDate(s.date) }}
                    </td>
                    <td>
                        {{ s.raceName }}
                    </td>
                    <td>
                        <a class="text-blue-900 font-bold hover:border-b-2 border-blue-900 italic" :href="'#' + s.round"> 
                            Ver Horarios 
                        </a>
                    </td>
                </tr>
            </table>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-32">
            <div v-for="a of schedule" :key="a.round" class="bg-white rounded-sm p-4 shadow-md">
                <h3 class="text-xl font-bold italic" :id="a.round">
                    {{ a.raceName }}
                </h3>

                <!--FP1 DATE-->
                <h4 class="text-lg font-bold mt-4">
                    {{ getDate(a.FirstPractice.date) }} de {{ getMonth(a.FirstPractice.date) }}
                </h4>

                <p> FP1 (Treino Livre 1) - {{ getDay(a.FirstPractice.date) }}, ás
                    {{ getHours(a.FirstPractice.date, a.FirstPractice.time) }}H
                </p>

                <p v-if="!a.Sprint">
                    FP2 (Treino Livre 2) - {{ getDay(a.SecondPractice.date) }}, ás
                    {{ getHours(a.SecondPractice.date, a.SecondPractice.time) }}H
                </p>
                <p v-else>
                    Qualificação - {{ getDay(a.Qualifying.date) }}, ás
                    {{ getHours(a.Qualifying.date, a.Qualifying.time) }}H
                </p>

                <!--QUALY/SPRINT DATE-->
                <h4 class="text-lg font-bold mt-4" v-if="!a.Sprint">
                    {{ getDate(a.Qualifying.date) }} de {{ getMonth(a.Qualifying.date) }}
                </h4>
                <h4 v-else>
                    {{ getDate(a.Sprint.date) }} de {{ getMonth(a.Sprint.date) }}
                </h4>

                <p v-if="!a.Sprint">
                    FP3 (Treino Livre 3) - {{ getDay(a.ThirdPractice.date) }}, ás
                    {{ getHours(a.ThirdPractice.date, a.ThirdPractice.time) }}
                </p>
                <p v-else>
                    FP2 (Treino Livre 2) - {{ getDay(a.SecondPractice.date) }}, ás
                    {{ getHours(a.SecondPractice.date, a.SecondPractice.time) }}H
                </p>

                <p v-if="!a.Sprint">
                    Qualificação - {{ getDay(a.Qualifying.date) }}, ás
                    {{ getHours(a.Qualifying.date, a.Qualifying.time) }}H
                </p>
                <p v-else>
                    Sprint Race - {{ getDay(a.Sprint.date) }}, ás
                    {{ getHours(a.Sprint.date, a.Sprint.time) }}
                </p>

                <!--RACE DATE-->
                <h4 class="text-lg font-bold mt-4">
                    {{ getDate(a.date) }} de {{ getMonth(a.date) }}
                </h4>

                <p>
                    <span class="text-red-600 font-bold"> CORRIDA </span> - {{ getDay(a.date) }}, ás {{ getHours(a.date, a.time)
                    }}H
                </p>

                <p class="back"><a class="text-blue-900 font-bold" href="#topics"> > Voltar ao topo </a></p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ScheduleList',

    props: {
        schedule: Object,
    },

    data() {
        return {
            mounths: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
                'Setembro', 'Outubro', 'Novembro', 'Dezembro'],

            day: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira',
                'Sexta-Feira', 'Sábado']
        }
    },

    methods: {
        getDay: function (date) {
            let newDate = new Date(date)
            return this.day[newDate.getUTCDay()]
        },

        getDate: function (date) {
            let newDate = new Date(date)
            return newDate.getUTCDate()
        },

        getMonth: function (date) {
            let newDate = new Date(date)
            return this.mounths[newDate.getUTCMonth()]
        },

        getHours: function (date, time) {
            let full = date + 'T' + time
            let newDate = new Date(full)
            return newDate.getHours()
        },

        getFullDate: function (date) {
            let newDate = new Date(date)
            let dia = newDate.getUTCDate()
            let mes = newDate.getMonth() + 1
            let ano = newDate.getFullYear()
            return dia + ' / ' + mes + ' / ' + ano
        }
    }
}
</script>