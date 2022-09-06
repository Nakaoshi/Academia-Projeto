import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./routes/routes";
import Vuetify from "../../plugins/vuetify";

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

// tentativa de autenticação de rotas
new Promise((resolve, reject) => {
    // router.push(url); LEMBRETE DE RECONFIGURAR ISSO =================================================================
    router.onReady(() => {
        const matchedComponents = router.getMatchedComponents();
        if (!matchedComponents.length) {
            return reject({ code: 404 });
        }
        resolve(app);
    }, reject);
})
    .then((app) => {
        renderVueComponentToString(app, (err, res) => {
            console.log(res);
        });
    })
    .catch((err) => {
        console.log(err);
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
