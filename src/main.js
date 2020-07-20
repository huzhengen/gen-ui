import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Doc from './components/Doc.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    component: () => import('./components/Home.vue')
  },
  {
    path: '/doc',
    component: () => import('./components/Doc.vue')
  }],
})

const app = createApp(App)

app.use(router)

app.mount('#app')