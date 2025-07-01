
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './global.css'
import App from './App.vue'
import router from './shared/router/index'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
