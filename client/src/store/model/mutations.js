import Vue from 'vue'
import * as types from './transformationTypes'

export default {
  [types.RECEIVE_MODEL] (state, { model }) {
    Vue.set(state, 'data', model)
  }
}
