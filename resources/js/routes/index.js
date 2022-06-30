export const routes = [
    {
        path: '/',
        name: 'inicio',
        component: () => import('../view/Inicio.vue'),
    },
    {
        path: '/sobrenos',
        name: 'Sobre Nos',
        component: () => import('../view/SobreNos.vue')
    },
    {
        path:'/modalidades',
        name:'modalidades',
        component:() => import('../view/modalidades.vue')
    },
    {
        path:'/academia',
        name:'A Academia',
        component:() => import('../view/academia.vue')
    },
    {
        path:'/area-do-aluno',
        name:'Area do Aluno',
        component:() => import('../view/AreaAluno.vue'),
        children:[]
    },


]


export default routes
