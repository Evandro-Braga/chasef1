import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home'
import DriversView from '@/views/Drivers'
import StandingsView from '@/views/Standings'
import ScheduleView from '@/views/Schedule'

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
