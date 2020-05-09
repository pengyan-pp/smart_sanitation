import Vue from 'vue'
import VueRouter from 'vue-router'
import Map from '../views/map/index.vue'

Vue.use(VueRouter)


const routes = [
  // {
  //   path: '/',
  //   name: 'Map',
  //   component: Map
  // },
  {
    path: '/',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('../views/table/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
