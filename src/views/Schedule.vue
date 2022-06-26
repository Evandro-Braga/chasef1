<template>
    <div class="min-h-screen">
        <HeaderComponent></HeaderComponent>
        <div class="text-white w-full p-4 sm:w-3/4 sm:m-auto">
            <h2 class="my-8 text-xl font-bold">
                Calendario {{ scheduleYear }}
            </h2>
            <div>
                <ScheduleList :schedule="schedule"></ScheduleList>
            </div>
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