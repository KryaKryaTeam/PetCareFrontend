import Create from '@/pages/create.vue'
import Main from '@/pages/main.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/app/create',
      name: "create",
      component: Create
    }
  ],
})

export default router
