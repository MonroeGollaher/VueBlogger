import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import MyBlogsComponent from '../components/MyBlogsComponent.vue'
// @ts-ignore
import Home from '../pages/Home.vue'
// @ts-ignore
import Profile from '../pages/Profile.vue'
import { Auth0Provider } from '@bcwdev/auth0provider-client'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: Auth0Provider.authGuard
  },
  {
    path: '/profile',
    name: 'MyBlogsPage',
    component: MyBlogsComponent
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router