<template>
    <div>
        <HeaderComponent></HeaderComponent>
        <div class="min-h-screen text-white w-full px-1 py-6
        md:max-w-screen-xl md:m-auto md:px-4 md:py-10">
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