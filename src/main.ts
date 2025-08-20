import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './global.css'
import App from './App.vue'
import router from './app/router'
import vue3GoogleLogin from 'vue3-google-login'
import useUserStore from './stores/User/userStore'
import { getWebInstrumentations, initializeFaro } from '@grafana/faro-web-sdk'
import { TracingInstrumentation } from '@grafana/faro-web-tracing'

async function AppDataSaveOnReload() {
  const user = useUserStore()

  if (localStorage.getItem('hasRefresh')) {
    const refreshDate = new Date(localStorage.getItem('RefreshTime'))
    const now = new Date()
    const diffMs = now.getTime() - refreshDate.getTime()

    const diffDays = diffMs / (1000 * 60 * 60 * 24)

    if (diffDays > 3) {
      localStorage.setItem('hasRefresh', null)
      router.push('/app/auth/singin')
    } else {
      await user.refresh()
    }
  }
}

// grafana

initializeFaro({
  url: `${import.meta.env.VITE_GRAFANA_ENDPOINT}`,
  app: {
    name: 'Petcare',
    version: '1.0.0',
    environment: 'production',
  },

  instrumentations: [
    // Mandatory, omits default instrumentations otherwise.
    ...getWebInstrumentations(),

    // Tracing package to get end-to-end visibility for HTTP requests.
    new TracingInstrumentation(),
  ],
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vue3GoogleLogin, {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
})
await AppDataSaveOnReload()
app.mount('#app')
