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

<style>
.schedule{
    min-height: 100vh;
    padding: 1%;
}

.schedule h2{
    margin: 30px 0 30px 0;
}

@media (max-width: 700px){
    .schedule{
        margin-left: 0;
    }
}
</style>