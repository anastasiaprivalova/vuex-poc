import * as api from '@/api'
import * as endpoints from '@/api/endpoints'
import * as types from './transformationTypes'
import { transformProducts } from '@/dataTransformers'

export const getAllProducts = ({ commit }) => {
  api.getItems(endpoints.ALL_PRODUCTS)
    .then((response) => {
      commit(types.RECEIVE_ALL, {
        products: transformProducts(response.data)
      })
    })
    .catch((error) => { console.error(error) })
}
