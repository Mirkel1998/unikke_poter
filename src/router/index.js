import { createRouter, createWebHistory } from 'vue-router'
import ForsideView from '../views/ForsideView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'forside',
      component: ForsideView,
    },
    {
      path: '/about',
      name: 'om-unikke-poter',
      component: () => import('../views/OmUnikkePoterView.vue'),
    },
    {
      path: '/hvem-henvender-vi-os-til',
      name: 'hvem-henvender-vi-os-til',
      component: () => import('../views/HvemHenvenderViOsTilView.vue'),
    },
    {
      path: '/traeningsmetoder',
      name: 'traeningsmetoder',
      component: () => import('../views/traeningsmetoder.vue'),
    },
    {
      path: '/tilmeld-hold',
      name: 'tilmeld-hold',
      component: () => import('../views/TilmeldHoldView.vue'),
    },
    {
      path: '/priser',
      name: 'priser',
      component: () => import('../views/PriserView.vue'),
    },
    {
      path: '/beskrivelse-af-hold',
      name: 'beskrivelse-af-hold',
      component: () => import('../views/BeskrivelseAfHoldView.vue'),
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: () => import('../views/KontaktView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
