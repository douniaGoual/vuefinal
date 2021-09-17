import Vue from 'vue'
import Router from 'vue-router'
import pagedaccueil from '../src/views/pageprincipal.vue'
import register from './components/fonctionnalités/register/register.vue'
import login from './components/fonctionnalités/login/login.vue'
// import panier from './components/fonctionnalités/panier/mypanier.vue'
import footer from './components/front/footer/footer.vue'
import produit from './components/fonctionnalités/myproduit.vue/myproduit.vue'
import paypal from './components/fonctionnalités/paypal/paypal.vue'
import home from './components/fonctionnalités/admin/home.vue'
import adminlogim from './components/fonctionnalités/adminlogin.vue'
import produitshopping from './views/produitshopping.vue'



Vue.use(Router)

let router = new Router({
  // le mode historique qui utilisera l'API afin de permettre une
  //  navigation sans rechargemetn de page 
  mode: 'history',
  // il ajoute une route à notre serveur prenant en compte toutes les adresses demander 
  routes: [
    {
      path: '/',
      name: 'pagedaccueil',
      component: pagedaccueil
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },

    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/footer',
      name: 'footer',
      component: footer
    },
   
    {
      path: '/prduit',
      name: 'produit',
      component: produit
    },
    // {
    //   path:'/panier',
    //   name:'panier',
    //   component: panier
    // },
    {
      path: '/paypal',
      name: 'paypal',
      component: paypal
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/adminlogin',
      name: 'adminlogim',
      component: adminlogim
    },
    {
      path: '/',
      name: 'produitshopping',
      component: produitshopping
    },

  ]
})
export default router
