import Vue from 'vue'
import App from './App.vue';
import router from './router';
import VueAxios from 'vue-axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
import axios from 'axios'



Vue.prototype.$http = axios;
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.config.productionTip = false;

const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

