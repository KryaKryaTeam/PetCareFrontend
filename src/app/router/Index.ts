import Board from '@/pages/BoardPage.vue'
// import Create from '@/pages/createPage.vue'
import LandingPage from '@/pages/landing/LandingPage.vue'
import PrivacyPage from '@/pages/landing/PrivacyPage.vue'
import TermsPage from '@/pages/landing/TermsPage.vue'
import SingUp from '@/pages/auth/SingUpPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import SingIn from '@/pages/auth/SingInPage.vue'
import Test from '@/pages/TestPage.vue'
import MainToListing from '@/pages/redirects/MainToListing.vue'
import ListingLayout from '@/pages/layouts/ListingLayout.vue'
import AuthLayout from '@/pages/layouts/AuthLayout.vue'
import DashboardLayout from '@/pages/layouts/DashboardLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { left: 0, top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'redirect',
      component: MainToListing,
    },
    {
      path: '/listing',
      name: 'listing',
      component: ListingLayout,
      children: [
        {
          path: '',
          name: 'main',
          component: LandingPage,
        },
        {
          path: 'pricing',
          name: 'pricing',
          component: LandingPage,
        },
        {
          path: 'privacy',
          name: 'privacy',
          component: PrivacyPage,
        },
        {
          path: 'terms',
          name: 'terms',
          component: TermsPage,
        },
      ],
    },
    {
      path: '/app/auth',
      component: AuthLayout,
      name: 'auth',
      children: [
        {
          path: 'singup',
          name: 'singup',
          component: SingUp,
        },
        {
          path: 'singin',
          name: 'singin',
          component: SingIn,
        },
      ],
    },
    {
      path: '/app/board',
      name: 'dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '',
          name: 'board',
          component: Board,
        },
      ],
    },
    {
      path: '/t',
      component: Test,
    },
  ],
})

export default router
