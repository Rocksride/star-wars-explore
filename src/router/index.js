import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import People from '@/components/People'
import Species from '@/components/Species'
import Vehicles from '@/components/Vehicles'
import Planets from '@/components/Planets'
import Films from '@/components/Films'
import Starships from '@/components/Starships'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/planets',
      name: 'Planets',
      component: Planets
    },
    {
      path: '/vehicles',
      name: 'Vehicles',
      component: Vehicles
    },
    {
      path: '/starships',
      name: 'Starships',
      component: Starships
    },
    {
      path: '/people',
      name: 'People',
      component: People
    },
    {
      path: '/films',
      name: 'Films',
      component: Films
    },
    {
      path: '/species',
      name: 'Species',
      component: Species
    },
  ]
})
