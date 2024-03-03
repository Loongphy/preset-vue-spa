import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import store from './store'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './style.css'

const router = createRouter({
  history: createWebHistory(),
  extendRoutes: routes => setupLayouts(routes),
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
