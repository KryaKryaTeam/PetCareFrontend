
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './global.css'
import App from './App.vue'
import router from './app/router'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vue3GoogleLogin, {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID
})
app.mount('#app')
