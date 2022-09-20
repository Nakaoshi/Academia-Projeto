import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./routes/routes";
import Vuetify from "../../plugins/vuetify";
import "../../css/app.css";

import "../../plugins/vee-validate";
// import './plugins/vuetify-money.js'
// import './plugins/vuetify-mask.js'

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(VueSweetalert2);

require("../bootstrap");

// ---------------------------------------------------------------------------------------------------------------------/
// Navbar Component
// ---------------------------------------------------------------------------------------------------------------------/
import navbarUsuario from "../../Templates/NavBars/navbarUsuario.vue";
Vue.component("navbar-cliente", navbarUsuario);

// ---------------------------------------------------------------------------------------------------------------------/
// Vuex
// ---------------------------------------------------------------------------------------------------------------------/
import store from "./store/index";

// ---------------------------------------------------------------------------------------------------------------------/
// Axios
// ---------------------------------------------------------------------------------------------------------------------/
import axios from "axios";

Vue.prototype.$axios = axios;

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
    localStorage.setItem("route", to.name);
    next();
});

// ---------------------------------------------------------------------------------------------------------------------/
// Vue
// ---------------------------------------------------------------------------------------------------------------------/
new Vue({
    el: "#app",
    router,
    store,
    vuetify: Vuetify,
    components: { App },
    render: (h) => h(App),
}).$mount("#app");
