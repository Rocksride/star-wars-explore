import Vuex from 'vuex'
import Vue from 'vue'

import modules from './modules'
import data from './modules/data'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    data
  }
})
