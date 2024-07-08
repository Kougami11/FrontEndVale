import 'bootstrap/dist/css/bootstrap.min.css'
import 'nprogress/nprogress.css'
import './assets/main.css'
import axios from 'axios'
import Constants from './Constants'
import NProgress from 'nprogress'
import store from '@/store'

axios.defaults.baseURL = Constants.apiUrl // Default URL for Axios

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(router)
app.use(store)

router.beforeEach((To, From, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

app.mount('#app')

import 'bootstrap/dist/js/bootstrap.min'
