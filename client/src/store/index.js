import Vue from 'vue'
import Vuex from 'vuex'

import ratings from './ratings'
import model from './model'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ratings,
    model
  }
})
