import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Order from '../pages/Order.vue'
import Cart from '../pages/Cart.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/order', component: Order},
  { path: '/cart', component: Cart },
  { path: '/contact', component: Contact},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
