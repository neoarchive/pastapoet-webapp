import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Order from '../pages/Order.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/order', component: Order}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
