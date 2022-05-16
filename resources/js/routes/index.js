import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const routes =[
  {
    path: '/',
    name: 'home',
    component: () => require('../view/App.vue'),
    children:[
      {
        path: '/inicio',
        name: 'Inicio',
        component: () => require('../view/inicio.vue')
      },
      {
        path: '/sobrenos',
        name: 'Sobre Nós',
        component: () => require('../view/SobreNos.vue')
      }
  ]
},
  
]


export default routes
