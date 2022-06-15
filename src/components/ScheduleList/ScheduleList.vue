<template>
    <div class="scheduleList">

        <div class="topics" v-for="s of schedule" :key="s.round">
            <h4 id="topics">
                {{ s.date }} - {{ s.raceName }} -
                <a :href="'#'+s.round">
                    Ver Horarios
                </a>
            </h4>
        </div>

        <div class="schedule" v-for="a of schedule" :key="a.round">
            <h3 :id="a.round">
                {{ a.round }}) {{ a.raceName }} - {{ a.Circuit.Location.locality }},
                {{ a.Circuit.Location.country }}
            </h3>

            <p>
                {{ convertDate(a.FirstPractice.date, a.FirstPractice.time) }} - TL1 (Treino livre 1)
            </p>

            <p>
                {{ convertDate(a.SecondPractice.date, a.SecondPractice.time) }} - TL2 (Treino livre 2)
            </p>

            <p>
                {{ sprint(a) }} - TL3 (Treino livre 3) / Sprint Race
            </p>

            <p>
                {{ convertDate(a.Qualifying.date, a.Qualifying.time) }} - Qualificação
            </p>

            <p>
                {{ convertDate(a.date, a.time) }} - CORRIDA
            </p>

            <a href="#topics"> >> Voltar ao topo </a>
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
            
            return `${newDate.getDate()} de ${this.mounths[newDate.getMonth()]} - ${this.day[newDate.getDay()]}, ás ${newDate.getHours()}h`;
        },

        sprint: function (sprint) {
            if (!sprint.ThirdPractice) {
                var sprintFullDate = sprint.Sprint.date + 'T' + sprint.Sprint.time
                var sprintNewDate = new Date(sprintFullDate)

                return `${sprintNewDate.getDate()} de ${this.mounths[sprintNewDate.getMonth()]} - ${this.day[sprintNewDate.getDay()]}, ás ${sprintNewDate.getHours()}h`;
            } else {
                var fullDate = sprint.ThirdPractice.date + 'T' + sprint.ThirdPractice.time
                var newDate = new Date(fullDate)

                return `${newDate.getDate()} de ${this.mounths[newDate.getMonth()]} - ${this.day[newDate.getDay()]}, ás ${newDate.getHours()}h`;
            }
        }
    }
}
</script>

<style src="./Style.scss" lang="scss" scoped></style>