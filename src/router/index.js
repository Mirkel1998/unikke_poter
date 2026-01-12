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
  ],
})

export default router
