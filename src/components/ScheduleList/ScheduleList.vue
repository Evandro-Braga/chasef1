<template>
    <div class="scheduleList">

        <div v-for="s of schedule" :key="s.round">
            <h4>
                {{ s.date }} - {{ s.raceName }} -
                <a :href="'#'+s.round">
                    Ver Horarios
                </a>
            </h4>
        </div>

        <div v-for="a of schedule" :key="a.round">
            <h3 :id="a.round">
                {{ a.round }}) {{ a.raceName }} - {{ a.Circuit.Location.locality }},
                {{ a.Circuit.Location.country }}
            </h3>

            <p>
                Treino Livre 1 - {{ convertDate(a.FirstPractice.date, a.FirstPractice.time) }}
            </p>

            <p>
                Treino Livre 2 - {{ convertDate(a.SecondPractice.date, a.SecondPractice.time) }}
            </p>

            <p>
                Treino Livre 3 / Sprint - {{ sprint(a) }}
            </p>

            <p>
                Qualificação - {{ convertDate(a.Qualifying.date, a.Qualifying.time) }}
            </p>

            <p>
                CORRIDA - {{ convertDate(a.date, a.time) }}
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

<style src="./Style.scss" lang="scss" scoped></style>