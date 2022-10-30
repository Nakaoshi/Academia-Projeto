import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        usuario: {
            data: { nome: "nakaoshi" },
            token: null,
            gerente:null,
        },
    },
    mutations: {
        verificarGerente: (state,payload)=>{
            state.usuario.gerente = payload.gerente,
            state.usuario.token = payload.token
        }
    },
    getters: {},
    actions: {},
    modules: {},
});

export default store;
