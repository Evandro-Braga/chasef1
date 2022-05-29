import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import DriversView from '@/views/Drivers/DriversView'
import StandingsView from '@/views/Standings/StandingsView'
import ScheduleView from '@/views/Schedule/ScheduleView'

const routes = [
  {
    path: '/',
    name: '/',
    component: HomeView
  },
  {
    path: '/drivers',
    name: 'drivers',
    component: DriversView
  },
  {
    path: '/standings',
    name: 'standings',
    component: StandingsView
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: ScheduleView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
