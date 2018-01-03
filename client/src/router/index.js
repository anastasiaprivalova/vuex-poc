import Vue from 'vue'
import Router from 'vue-router'
import Ratings from '@/components/Ratings'
import Model from '@/components/Model'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/ratings*',
      name: 'Ratings',
      component: Ratings
    },
    {
      path: '/model(/?)',
      redirect: '/ratings'
    },
    {
      path: '/model/:id',
      props: true,
      name: 'Model',
      component: Model
    }
  ]
})
