import * as api from '@/api'
import * as endpoints from '@/api/endpoints'
import { transformModel } from '@/dataTransformers'
import * as types from './transformationTypes'

export const getModel = ({ commit }, { id }) => {
  api.getItems(`${endpoints.ALL_PRODUCTS}${id}`)
    .then((response) => {
      commit(types.RECEIVE_MODEL, {
        model: transformModel(response.data)
      })
    })
    .catch((error) => { console.error(error) })
}
