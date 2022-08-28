export const routes = [
    {
        path: "/",
        redirect: "/modalidades",
    },
    {
        path: "/inicio",
        name: "inicio",
        component: () => import("../view/Inicio.vue"),
    },
    {
        path: "/sobrenos",
        name: "Sobre Nos",
        component: () => import("../view/SobreNos.vue"),
    },
    {
        path: "/modalidades",
        name: "modalidades",
        component: () => import("../view/modalidades.vue"),
    },
    {
        path: "/academia",
        name: "A Academia",
        component: () => import("../view/academia.vue"),
    },
    {
        path: "/area-do-aluno",
        name: "Area do Aluno",
        component: () => import("../view/login/loginCliente.vue"),
    },
    // {
    //     path:'/cadastro-aluno',
    //     name:'Cadastro Aluno',
    //     component: () => import('../view/Cadastro/cadastroCliente.vue')
    // },
    {
        path: "*",
        component: () => import("../view/Paginas Curingas/Erro404.vue"),
    },
];

export default routes;
