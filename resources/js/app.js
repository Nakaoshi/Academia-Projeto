require('./bootstrap');

window.Vue = require('vue').default;



// const files = require.context('./', true, /\.vue$/i)
//  files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


 import Vue from 'vue'
 import App from './App.vue'
 import VueRouter from 'vue-router'
 import routes from './routes'
 import Vuetify from '../plugins/vuetify'
 
 import '../plugins/vee-validate'
 // import './plugins/vuetify-money.js'
 // import './plugins/vuetify-mask.js'
 
 import VueSweetalert2 from 'vue-sweetalert2'
 import 'sweetalert2/dist/sweetalert2.min.css'
 require('./bootstrap');

 Vue.use(VueSweetalert2)
 
 // ---------------------------------------------------------------------------------------------------------------------/
 // Vuex
 // ---------------------------------------------------------------------------------------------------------------------/
 import store from './store'
 
 // ---------------------------------------------------------------------------------------------------------------------/
 // Axios
 // ---------------------------------------------------------------------------------------------------------------------/
 import axios from 'axios';
import { error } from 'laravel-mix/src/Log';
 
 Vue.prototype.$axios = axios
 
 // ---------------------------------------------------------------------------------------------------------------------/
 // Vue Router
 // ---------------------------------------------------------------------------------------------------------------------/
 Vue.use(VueRouter)
 
 const router = new VueRouter({
   mode: 'history',
   base:process.env.BASE_URL,
   routes,
   scrollBehavior (to, from, savedPosition) {
     return { x: 0, y: 0 }
   }
 });
 router.beforeEach((to,from,next)=>{
    localStorage.setItem('route',to.name)
  next()
 })
 
 
 // ---------------------------------------------------------------------------------------------------------------------/
 // Vue 
 // ---------------------------------------------------------------------------------------------------------------------/
 new Vue({
   el: '#app',
   router,
   store,
   vuetify: Vuetify,
   components: { App },
   render: h => h(App)
 }).$mount('#app')
