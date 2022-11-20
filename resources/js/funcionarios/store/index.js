import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist';
import localForage from 'localforage';

const vuexLocal = new VuexPersistence({
    storage: localForage,
     asyncStorage: true,
  });

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        usuario: {
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
    plugins:[vuexLocal.plugin],
});

export default store;
