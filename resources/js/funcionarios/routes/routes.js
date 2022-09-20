const routes = [
    {
        path: "/funcionarios",
        name: "Login Funcionario",
        component: () => import("../view/loginFuncionario.vue"),
    },
    {
        path: "/funcionarios/clientes",
        name: "Clientes",
        component: () => import("../view/Clientes.vue"),
    },

    {
        path: "/funcionarios/fornecedores",
        name: "Fornecedores",
        component: () => import("../view/Fornecedores.vue"),
    },
    {
        path: "/funcionarios/RH",
        name: "RH",
        component: () => import("../view/RH.vue"),
    },
    {
        path: "ajuda",
        name: "Ajuda",
    },
    {
        path: "*",
        component: () => import("../../../Paginas Curingas/Erro404.vue"),
    },
];

export default routes;
