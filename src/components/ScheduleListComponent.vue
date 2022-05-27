<template>
    <div class="scheduleList">
        <div v-for="sche of schedule" :key="sche.round">
            <h3>
                {{ sche.round }}) {{ sche.raceName }} - {{ sche.Circuit.Location.locality }},
                {{ sche.Circuit.Location.country }}
            </h3>

            <p>
                Treino Livre 1 - {{ convertDate(sche.FirstPractice.date, sche.FirstPractice.time) }}
            </p>

            <p>
                Treino Livre 2 - {{ convertDate(sche.SecondPractice.date, sche.SecondPractice.time) }}
            </p>

            <p>
                Treino Livre 3 / Sprint - {{ sprint(sche) }}
            </p>

            <p>
                Qualificação - {{ convertDate(sche.Qualifying.date, sche.Qualifying.time) }}
            </p>

            <p>
                CORRIDA - {{ convertDate(sche.date, sche.time) }}
            </p>
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
        convertDate: function (date, time) {
            var fullDate = date + 'T' + time
            var newDate = new Date(fullDate)
            return `${this.day[newDate.getDay()]} - ${newDate.getDate()} de ${this.mounths[newDate.getMonth()]}, ás ${newDate.getHours()}h`;
        },

        sprint: function (sprint) {
            if (!sprint.ThirdPractice) {
                var sprintFullDate = sprint.Sprint.date + 'T' + sprint.Sprint.time
                var sprintNewDate = new Date(sprintFullDate)

                return `${this.day[sprintNewDate.getDay()]} - ${sprintNewDate.getDate()} de ${this.mounths[sprintNewDate.getMonth()]}, ás ${sprintNewDate.getHours()}h`;
            } else {
                var fullDate = sprint.ThirdPractice.date + 'T' + sprint.ThirdPractice.time
                var newDate = new Date(fullDate)

                return `${this.day[newDate.getDay()]} - ${newDate.getDate()} de ${this.mounths[newDate.getMonth()]}, ás ${newDate.getHours()}h`;
            }
        }
    }
}
</script>

<style scoped>
.scheduleList h3 {
    margin-top: 30px;
}

.scheduleList p {
    margin: 20px;
}
</style>