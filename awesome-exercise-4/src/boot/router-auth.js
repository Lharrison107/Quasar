import { LocalStorage } from "quasar"

export default async ({ router }) => {
  router.beforeEach((to, from, next) => {
    let loggedIn = window.localStorage.getItem('loggedIn')
    if(loggedIn === 'false' && to.path !== '/auth') {
      next('/auth')
    } else {
      next()
    }
  })
}

