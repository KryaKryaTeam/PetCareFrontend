import Board from '@/pages/board.vue'
import Create from '@/pages/create.vue'
import Main from '@/pages/main.vue'
import SingUp from '@/pages/auth/singUp.vue'
import { createRouter, createWebHistory } from 'vue-router'
import SingIn from '@/pages/auth/singIn.vue'

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
    },
    {
      path: '/app/board',
      name: 'board',
      component: Board
    },
    {
      path: "/app/auth/singup",
      name: 'singup',
      component: SingUp
    },
    {
      path: "/app/auth/singin",
      name: 'singin',
      component: SingIn
    }
  ],
})

export default router
