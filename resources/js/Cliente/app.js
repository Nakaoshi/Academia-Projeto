import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Vuetify from './plugins/vuetify'

// import './plugins/validation/vee-validate.js'
// import './plugins/vuetify-money.js'
// import './plugins/vuetify-mask.js'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// ---------------------------------------------------------------------------------------------------------------------/
// Vuex
// ---------------------------------------------------------------------------------------------------------------------/
import store from './store/store.js'

// ---------------------------------------------------------------------------------------------------------------------/
// Axios
// ---------------------------------------------------------------------------------------------------------------------/
import axios from 'axios'
Vue.component('template-container', templateContainer)

Vue.use(VueSweetalert2)

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  if (!config.headers['No-Loading']) {
    store.commit('loadingScreen/openLoading')
  }

  const token = store.getters['auth/isAuthenticated']

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    store.commit('loadingScreen/closeLoading')
    return response
  },
  function (error) {
    store.commit('loadingScreen/closeLoading')
    return Promise.reject(error)
  }
)

Vue.prototype.$axios = axios

// ---------------------------------------------------------------------------------------------------------------------/
// Vue Router
// ---------------------------------------------------------------------------------------------------------------------/
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.forVisitors)) {
    if (store.getters['auth/isAuthenticated']) {
      if (store.getters['user/getUser'].perfil === 'agente de atendimento') {
        next({
          path: '/admin/orcamentos'
        })
      } else {
        next({
          path: '/admin/clientes'
        })
      }
    } else next()
  } else if (to.matched.some((record) => record.meta.forAuth)) {
    if (!store.getters['auth/isAuthenticated']) {
      next({
        path: '/admin/'
      })
    } else next()
  } else next()
})

// ---------------------------------------------------------------------------------------------------------------------/
// Vue
// ---------------------------------------------------------------------------------------------------------------------/
new Vue({
  el: '#app',
  template: '<app/>',
  router,
  // store,
  vuetify: Vuetify,
  components: { App },
  render: h => h(App)
}).$mount('#app')