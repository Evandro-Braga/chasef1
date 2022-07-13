<template>
    <div class="min-h-screen">
        <HeaderComponent></HeaderComponent>
        <div class="text-white w-full md:p-4 p-2 md:max-w-screen-xl md:m-auto">
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
        }
    },

    mounted(){
        api.get('current.json').then(response => {
            this.schedule = response.data.MRData.RaceTable.Races
        })
    },
}
</script>