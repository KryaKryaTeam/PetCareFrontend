import Board from "@/pages/board.vue"
import Create from "@/pages/create.vue"
import LandingPage from "@/pages/landing/landingPage.vue"
import PrivacyPage from "@/pages/landing/privacyPage.vue"
import TermsPage from "@/pages/landing/termsPage.vue"
import SingUp from "@/pages/auth/singUp.vue"
import { createRouter, createWebHistory } from "vue-router"
import SingIn from "@/pages/auth/singIn.vue"
import Test from "@/pages/test.vue"
import MainToListing from "@/pages/redirects/mainToListing.vue"
import ListingLayout from "@/pages/layouts/ListingLayout.vue"
import AuthLayout from "@/pages/layouts/AuthLayout.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { el: to.hash, behavior: "smooth" }
        } else if (savedPosition) {
            return savedPosition
        } else {
            return { left: 0, top: 0 }
        }
    },
    routes: [
        {
            path: "/",
            name: "redirect",
            component: MainToListing,
        },
        {
            path: "/listing",
            name: "listing",
            component: ListingLayout,
            children: [
                {
                    path: "",
                    name: "main",
                    component: LandingPage,
                },
                {
                    path: "pricing",
                    name: "pricing",
                    component: LandingPage,
                },
                {
                    path: "privacy",
                    name: "privacy",
                    component: PrivacyPage,
                },
                {
                    path: "terms",
                    name: "terms",
                    component: TermsPage,
                },
            ],
        },
        {
            path: "/app/auth",
            component: AuthLayout,
            name: "auth",
            children: [
                {
                    path: "singup",
                    name: "singup",
                    component: SingUp,
                },
                {
                    path: "singin",
                    name: "singin",
                    component: SingIn,
                },
            ],
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
            path: "/t",
            component: Test,
        },
    ],
})

export default router
