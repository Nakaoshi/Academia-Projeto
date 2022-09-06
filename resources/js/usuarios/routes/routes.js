export const routes = [
    {
        path: "/usuarios",
        name: "inicio",

        component: () => import("../view/Inicio.vue"),
        children: [],
    },
    {
        path: "*",
        component: () => import("../../../Paginas Curingas/Erro404.vue"),
    },
];

export default routes;
