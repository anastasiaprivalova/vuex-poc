import Vue from 'vue'
import * as types from './transformationTypes'

export default {
  [types.RECEIVE_ALL] (state, { products }) {
    Vue.set(state, 'products', products)
  }
}
