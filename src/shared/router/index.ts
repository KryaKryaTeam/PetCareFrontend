import Main from '@/pages/main.vue'
import Test from '@/pages/test.vue'
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
      path: '/a',
      name: 'test-board',
      component: Test
    }
  ],
})

export default router
