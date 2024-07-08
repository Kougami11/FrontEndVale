import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/pages/Login.vue'
import Dashboard from '../components/pages/Dashboard.vue'
import RegisterVale from '@/components/pages/Vale/Create.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/vale/create',
      name: 'create.vale',
      component: RegisterVale
    },
  ]
})
//REFACTOR
router.beforeEach((to, from, next) => {
  const PublicsRoutes = ['/login', '/register', '/home']
  const authRequired = !PublicsRoutes.includes(to.path)
  const loggedIn = localStorage.getItem('user')
  if (authRequired && !loggedIn) {
    next('/login')
  } else {
      next()
  }
})
export default router
