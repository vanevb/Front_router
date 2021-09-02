import Vue from 'vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Importar componentes a enrutar
import VueRouter from 'vue-router'
import App from './App.vue'
import Addbook from './views/Addbook'
import Login from './views/Login'
import Landingpage from './views/LandingPage'

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/add',
    name: 'add',
    component: Addbook
  },
  {
    path: '/index',
    name: 'index',
    component: Landingpage
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: router,
  render: h=>h(App)
});
