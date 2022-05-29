<template>
<HeaderComponent></HeaderComponent>
<div class="schedule">
    <h2>
        CALENDARIO - {{ scheduleYear }}
    </h2>

    <ScheduleList :schedule="schedule"></ScheduleList>
</div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import ScheduleList from '@/components/ScheduleListComponent.vue'
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
            this.scheduleYear = response.data.MRData.RaceTable.Races[0].season
        })
    },
}
</script>

<style src="./Style.css" scoped></style>