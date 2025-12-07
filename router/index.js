import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue'
import Movies from '../view/Movies.vue'
import Cinemas from '../view/Cinemas.vue'
import Shows from '../view/Shows.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/cinemas',
    name: 'Cinemas',
    component: Cinemas
  },
  {
    path: '/shows',
    name: 'Shows',
    component: Shows
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
