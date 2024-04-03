import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tv/:slug',
      name: 'Tv',
      component: () => import('../views/DetailsView.vue')
    },
    {
      path: '/movie/:slug',
      name: 'Movie',
      component: () => import('../views/DetailsView.vue')
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('../views/SearchView.vue')
    }
  ]
})

export default router
