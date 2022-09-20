export const routes = [
    {
        path: "/inicio",
        name: "inicio",
        component: () => import("../view/Inicio.vue"),
        children: [],
    },
    {
        path: "/modalidades",
        name: "modalidades",
        component: () => import("../view/modalidades.vue"),
    },
    {
        path: "/sobre-nos",
        name: "Sobre Nos",
        component: () => import("../view/SobreNos.vue"),
    },
    {
        path: "/academia",
        name: "Academia",
        component: () => import("../view/academia.vue"),
    },
    {
        //ver como trocar de SPA pra SPA
        // essa rota é para ir para a SPA alunos
        path: "/area-do-aluno",
        redirect: "/alunos",
    },
    {
        path: "*",
        component: () => import("../../../Paginas Curingas/Erro404.vue"),
    },
];

export default routes;
