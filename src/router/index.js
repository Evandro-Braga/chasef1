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
    path: '/results',
    name: 'results',
    component: ResultsView
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
  },
  {
    path: '/result/:id',
    name: 'result',
    component: RaceResultView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
