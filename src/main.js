import Vue from 'vue'
import App from './App.vue';
import router from './router';
import VueAxios from 'vue-axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
import axios from 'axios'



// cest raccoursi de mon lien api 
Vue.prototype.$apiurl = "https://api.monblog.shop/";

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.config.productionTip = false;


 /* render :  function ( createElement ) {
  return  createElement (App);
}La render()fonction est un élément central de Vue.
 */
new Vue({
  router,
  // h un alias createElement
  render: h => h(App)
   // “mount”  cela veux dire cest le moment où votre composant est inséré dans le DOM.
  // Ce code crée une nouvelle instance de Vue et la monte sur l'élément HTML avec l'ID d'application. 
}).$mount('#app')


 
