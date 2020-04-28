import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {path: '/list/:id', component: () => import('@/views/List.vue')},
  {path: '/detail/:id', component: () => import('@/views/Detail.vue')},
  {path: '/buy', component: () => import('@/views/Buy.vue')},
  {path: '*', component: Home}
]
const router = new VueRouter({
  routes
})

export default router
