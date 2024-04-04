import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'

const app = createApp(App)

import loadImage from '@/assets/images/loading.gif'
import errorImage from '@/assets/images/no-image.png'

app.use(VueLazyload, {
  preLoad: 1.3,
  error: errorImage,
  loading: loadImage,
  attempt: 1
})

app.use(createPinia())
app.use(router)

app.mount('#app')
