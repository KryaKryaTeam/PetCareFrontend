import Board from "@/pages/board.vue"
import Create from "@/pages/create.vue"
import LandingPage from "@/pages/landing/landingPage.vue"
import SingUp from "@/pages/auth/singUp.vue"
import { createRouter, createWebHistory } from "vue-router"
import SingIn from "@/pages/auth/singIn.vue"
import Test from "@/pages/test.vue"
import PrivacyPage from "@/pages/landing/privacyPage.vue"
import TermsPage from "@/pages/landing/termspage.vue"

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
            path: "/",
            name: "main",
            component: LandingPage,
        },
        {
            path: "/listing/pricing",
            name: "pricing",
            component: LandingPage,
        },
        {
            path: "/listing/privacy",
            name: "privacy",
            component: PrivacyPage,
        },
        {
            path: "/listing/terms",
            name: "terms",
            component: TermsPage,
        },
        {
            path: "/app/create",
            name: "create",
            component: Create,
        },
        {
            path: "/app/board",
            name: "board",
            component: Board,
        },
        {
            path: "/app/auth/singup",
            name: "singup",
            component: SingUp,
        },
        {
            path: "/app/auth/singin",
            name: "singin",
            component: SingIn,
        },
        {
            path: "/t",
            component: Test,
        },
    ],
})

export default router
