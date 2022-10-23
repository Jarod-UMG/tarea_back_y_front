import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmpleadoView from '../views/EmpleadoView.vue'
import EditarView from '../views/EditarView.vue'
import NuevoView from '../views/NuevoView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/empleado',
    name: 'Empleado',
    component: EmpleadoView
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: EditarView
  },
  {
    path: '/nuevo',
    name: 'Nuevo',
    component: NuevoView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
