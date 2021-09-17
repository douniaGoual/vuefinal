import Vue from 'vue'
import Router from 'vue-router'
//import Header from './views/Header.vue'
//import home from './views/home.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
    path :'*',
    redirect:'/test'
    },
    {
    path: '/home',
    name: 'home',
    component: home, 
    },

  {
    path: '/Header',
    name: 'Header',
    component: Header,
     
  },

  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      let user = JSON.parse(localStorage.getItem('user'))
      if(to.matched.some(record => record.meta.is_admin)) {
        if(user.is_admin == 1){
            next()
        }
        else{
            next({ name: 'userboard'})
        }
      }
      else {
      	next()
      }
    }
  } else if(to.matched.some(record => record.meta.guest)) {
	    if(localStorage.getItem('jwt') == null){
	        next()
	    }
	    else{
	        next({ name: 'userboard'})
	    }
    }else {
    next() 
  }
})

export default router