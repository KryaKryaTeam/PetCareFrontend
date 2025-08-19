import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './global.css'
import App from './App.vue'
import router from './app/router'
import vue3GoogleLogin from 'vue3-google-login'
import useUserStore from './stores/User/userStore'

async function AppDataSaveOnReload() {
  const user = useUserStore()

  if (localStorage.getItem('hasRefresh')) {
    const refreshDate = new Date(localStorage.getItem('RefreshTime'))
    const now = new Date()
    const diffMs = now.getTime() - refreshDate.getTime()

    const diffDays = diffMs / (1000 * 60 * 60 * 24)

    if (diffDays > 3) {
      router.push('/app/auth/singin')
    } else {
      await user.refresh()
    }
  }
}

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vue3GoogleLogin, {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
})
await AppDataSaveOnReload()
app.mount('#app')
