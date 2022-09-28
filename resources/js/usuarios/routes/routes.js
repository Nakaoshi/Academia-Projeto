export const routes = [
    {
        path: "/inicio",
        name: "inicio",
        component: () => import("../view/Inicio.vue"),
    },
    {
        path: "*",
        component: () => import("../../../Paginas Curingas/Erro404.vue"),
    },
];

export default routes;
