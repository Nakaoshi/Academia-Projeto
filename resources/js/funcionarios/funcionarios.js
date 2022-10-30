import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./routes/routes";
import Vuetify from "../../plugins/vuetify";
import "../../css/app.css";
import "../../plugins/vee-validate";
// import './plugins/vuetify-money.js'

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(VueSweetalert2);
Vue.prototype.$Swal = VueSweetalert2

// ---------------------------------------------------------------------------------------------------------------------/
// Navbar Component
// ---------------------------------------------------------------------------------------------------------------------/
import navbarFuncionario from "../../Templates/NavBars/navbarFuncionario.vue";
Vue.component("navbar-funcionario", navbarFuncionario);

// ---------------------------------------------------------------------------------------------------------------------/
// Vuex
// ---------------------------------------------------------------------------------------------------------------------/
import store from "./store";

// ---------------------------------------------------------------------------------------------------------------------/
// Vue Mask
// ---------------------------------------------------------------------------------------------------------------------/
import VueMask from "v-mask";
Vue.use(VueMask);

// ---------------------------------------------------------------------------------------------------------------------/
// Axios
// ---------------------------------------------------------------------------------------------------------------------/
import VueAxios from "vue-axios";
import axios from "axios";
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.headers.common['Authorization'] = `bearer ${localStorage.getItem('myauth_token')}`
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;
Vue.use(VueAxios, axios);
// ---------------------------------------------------------------------------------------------------------------------/
// Vue Router
// ---------------------------------------------------------------------------------------------------------------------/
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    root: "/",
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
});
router.beforeEach((to, from, next) => {
    localStorage.setItem("route", to.name)
    next();
});
// ---------------------------------------------------------------------------------------------------------------------/
// Vue
// ---------------------------------------------------------------------------------------------------------------------/
new Vue({
    el: "#app",
    VueMask,
    router,
    store,
    vuetify: Vuetify,
    components: { App },
    render: (h) => h(App),
}).$mount("#app");
