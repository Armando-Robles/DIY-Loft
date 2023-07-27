import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/twin',
      name: 'twin',
      component: () => import('../views/Twin.vue')
    },
    {
      path: '/twinm',
      name: 'twinm',
      component: () => import('../views/TwinM.vue')
    },
    {
      path: '/full',
      name: 'full',
      component: () => import('../views/Full.vue')
    },
    {
      path: '/fullm',
      name: 'fullm',
      component: () => import('../views/FullM.vue')
    },
    {
      path: '/queen',
      name: 'queen',
      component: () => import('../views/Queen.vue')
    },
    {
      path: '/queenm',
      name: 'queenm',
      component: () => import('../views/QueenM.vue')
    },
    {
      path: '/king',
      name: 'king',
      component: () => import('../views/King.vue')
    },
    {
      path: '/kingm',
      name: 'kingm',
      component: () => import('../views/KingM.vue')
    }
  ]
})

export default router
