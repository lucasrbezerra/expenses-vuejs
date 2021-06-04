import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        icon: 'home',
        title: 'Home'
      },
      component: () => import('../views/Home')
    },
    {
      path: '/lista-gastos',
      name: 'Lista-gastos',
      meta: {
        icon: 'list-ul',
        title: 'Lista Gastos'
      },
      component: () => import('../views/ListaGastos')
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        title: 'Login'
      },
      component: () => import('../views/Login')
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Expenses`
  if (!window.uid && to.name !== 'Login') {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
