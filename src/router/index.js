import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home'
import ResultsView from '@/views/Results'
import StandingsView from '@/views/Standings'
import ScheduleView from '@/views/Schedule'
import RaceResultView from '@/views/RaceResult'

const routes = [
  {
    path: '/',
    name: '/',
    component: HomeView
  },
  {
    path: '/resultados',
    name: 'resultados',
    component: ResultsView
  },
  {
    path: '/classificaçao',
    name: 'classificaçao',
    component: StandingsView
  },
  {
    path: '/calendario',
    name: 'calendario',
    component: ScheduleView
  },
  {
    path: '/resultado/:id',
    name: 'resultado',
    component: RaceResultView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
