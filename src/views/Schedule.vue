<template>
    <div class="min-h-screen max-w-screen-xl py-20 m-auto">
        <div>
            <ScheduleList :schedule="schedule"></ScheduleList>
        </div>
    </div>
</template>

<script>
import ScheduleList from '@/components/ScheduleList.vue'
import api from '@/services/api'

export default {
    name: 'ScheduleView',
    components: {ScheduleList},

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