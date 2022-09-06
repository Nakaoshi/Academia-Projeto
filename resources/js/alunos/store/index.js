import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        usuario: {
            data: { nome: "nakaoshi" },
            token: null,
        },
    },
    getters: {},
    actions: {},
    mutations: {},
    modules: {},
});

export default store;
