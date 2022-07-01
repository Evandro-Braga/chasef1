<template>
    <div>
        <div class="space-y-2">
            <h4 id="topics" v-for="s of schedule" :key="s.round">
                {{ getFullDate(s.date) }} - {{ s.raceName }} 
                - <a class="text-blue-300" :href="'#' + s.round"> Ver Horarios </a>
            </h4>
        </div>

        <div v-for="a of schedule" :key="a.round">
            <h3 class="mt-32 text-xl font-bold italic" :id="a.round">
                {{ a.raceName }}
            </h3>

            <!--FP1 DATE-->
            <h4 class="text-lg my-3">
                {{ getDate(a.FirstPractice.date) }} de {{ getMonth(a.FirstPractice.date) }}
            </h4>

            <p class="ml-8"> FP1 (Treino Livre 1) - {{ getDay(a.FirstPractice.date) }}, ás
                {{ getHours(a.FirstPractice.date, a.FirstPractice.time) }}H
            </p>

            <p class="ml-8" v-if="!a.Sprint">
                FP2 (Treino Livre 2) - {{ getDay(a.SecondPractice.date) }}, ás
                {{ getHours(a.SecondPractice.date, a.SecondPractice.time) }}H
            </p>
            <p v-else class="ml-8">
                Qualificação - {{ getDay(a.Qualifying.date) }}, ás 
                {{ getHours(a.Qualifying.date, a.Qualifying.time) }}H
            </p>

            <!--QUALY/SPRINT DATE-->
            <h4 class="text-lg my-3" v-if="!a.Sprint">
                {{ getDate(a.Qualifying.date) }} de {{ getMonth(a.Qualifying.date) }}
            </h4>
            <h4 v-else class="text-lg my-3">
                {{ getDate(a.Sprint.date) }} de {{ getMonth(a.Sprint.date) }}
            </h4>

            <p v-if="!a.Sprint" class="ml-8">
                FP3 (Treino Livre 3) - {{ getDay(a.ThirdPractice.date) }}, ás
                {{ getHours(a.ThirdPractice.date, a.ThirdPractice.time) }}
            </p>
            <p v-else class="ml-8">
                FP2 (Treino Livre 2) - {{ getDay(a.SecondPractice.date) }}, ás
                {{ getHours(a.SecondPractice.date, a.SecondPractice.time) }}H
            </p>

            <p v-if="!a.Sprint" class="ml-8">
                Qualificação - {{ getDay(a.Qualifying.date) }}, ás 
                {{ getHours(a.Qualifying.date, a.Qualifying.time) }}H
            </p>
            <p v-else class="ml-8">
                Sprint Race - {{ getDay(a.Sprint.date) }}, ás 
                {{ getHours(a.Sprint.date, a.Sprint.time) }}
            </p>

            <!--RACE DATE-->
            <h4 class="text-lg my-3">
                {{ getDate(a.date) }} de {{ getMonth(a.date) }}
            </h4>

            <p class="ml-8">
                <span class="text-red-600"> CORRIDA </span> - {{ getDay(a.date) }}, ás {{ getHours(a.date, a.time) }}H
            </p>

            <p class="back"><a class="text-blue-300" href="#topics"> > Voltar ao topo </a></p>
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
            let mes = newDate.getMonth()+1
            let ano = newDate.getFullYear()
            return dia +' / '+ mes +' / '+ ano
        }
    }
}
</script>