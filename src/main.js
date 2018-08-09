// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import VueRx from 'vue-rx'
import Rx from 'rxjs'
import axios from 'axios'

axios.defaults.baseURL = `https://starwars.egghead.training/`

import 'buefy/lib/buefy.css'

import store from './store'

Vue.use(VueRx, Rx);
Vue.use(Buefy);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
