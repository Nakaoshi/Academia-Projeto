export const routes = [
    {
        path: '/',
        name: 'inicio',
        component: () => require('../view/Inicio.vue'),
    },
    {
        path: '/sobrenos',
        name: 'Sobre Nós',
        component: () => require('../view/SobreNos.vue')
    },


]


export default routes
