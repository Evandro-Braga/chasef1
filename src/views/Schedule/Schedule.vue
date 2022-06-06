<template>
<HeaderComponent></HeaderComponent>
<div class="schedule">
    <h2>
        Calendario - {{ scheduleYear }}
    </h2>

    <ScheduleList :schedule="schedule"></ScheduleList>
</div>
</template>

<script>
import HeaderComponent from '@/components/Header/Header.vue';
import ScheduleList from '@/components/ScheduleList/ScheduleList.vue'
import api from '@/services/api'

export default {
    name: 'ScheduleView',
    components: {HeaderComponent, ScheduleList},

    data(){
        return{
            schedule: [],
            scheduleYear: ''
        }
    },

    mounted(){
        api.get('current.json').then(response => {
            this.schedule = response.data.MRData.RaceTable.Races
            console.log(response.data.MRData.RaceTable.Races);
            this.scheduleYear = response.data.MRData.RaceTable.Races[0].season
        })
    },
}
</script>

<style src="./Style.css" scoped></style>