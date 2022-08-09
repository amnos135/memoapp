import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Modal from '../views/Modal.vue'
import WishFooter from '../views/WishFooter.vue'
import WishHeader from '../views/WishHeader.vue'
import WishInput from '../views/WishInput.vue'
import WishList from '../views/WishList.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/modal',
    name: 'Modal',
    component: Modal
  },
  {
    path: '/wishfooter',
    name: 'WishFooter',
    component: WishFooter
  },
  {
    path: '/wishheader',
    name: 'WishHeader',
    component: WishHeader
  },
  {
    path: '/wishinput',
    name: 'WishInput',
    component: WishInput
  },
  {
    path: '/wishlist',
    name: 'WishList',
    component: WishList
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
