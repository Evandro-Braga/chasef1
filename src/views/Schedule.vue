<template>
<HeaderComponent></HeaderComponent>
<div class="Schedule">
    <h2>
        Calendario - {{ scheduleYear }}
    </h2>
    <div class="ScheduleList">
        <ScheduleList :schedule="schedule"></ScheduleList>
    </div>
</div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue';
import ScheduleList from '@/components/ScheduleList.vue'
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
            //console.log(response.data.MRData.RaceTable.Races);
            this.scheduleYear = response.data.MRData.RaceTable.Races[0].season
        })
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins';

.Schedule {
    @include bodyPage
}

h2 {
    margin: 10px 0 50px 0;
}
</style>