import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Homeview'
import AboutView from '../views/Aboutview'
import PersonsView from '../views/Personsview'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/persons',
    name: 'persons',
    component: PersonsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})

export default router
