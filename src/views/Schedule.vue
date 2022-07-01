<template>
    <div class="min-h-screen">
        <HeaderComponent></HeaderComponent>
        <div class="text-white w-full space-y-8 p-4 sm:w-4/5 sm:m-auto">
            <div class="flex space-x-4">
                <img src="https://img.icons8.com/ios-glyphs/30/ffffff/calendar.png" />
                <h2 class="text-xl italic font-bold">
                    Calendario 2022
                </h2>
            </div>
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