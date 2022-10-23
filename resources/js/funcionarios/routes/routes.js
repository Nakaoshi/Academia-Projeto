import Guard from '../services/middleware'
const routes = [

    // ---------------------------------------------------------------------------------------------------------------------/
    // Tela Login
    // ---------------------------------------------------------------------------------------------------------------------/
    {
        path: "/funcionarios",
        name: "Login Funcionario",
        component: () => import("../view/loginFuncionario.vue"),
    },

    // ---------------------------------------------------------------------------------------------------------------------/
    // Tela Clientes
    // ---------------------------------------------------------------------------------------------------------------------/

    {
        path: "/funcionarios/clientes",
        name: "Clientes",
        component: () => import("../view/Clientes.vue"),
        beforeEnter: Guard.auth,
        
    },
    {
        path:'/funcionarios/cliente/editar/:id',
        name:'Editar Cliente',
        component:()=>import('../components/editarClientes.vue'),
        beforeEnter: Guard.auth,
    },

    // ---------------------------------------------------------------------------------------------------------------------/
    // Fornecedores
    // ---------------------------------------------------------------------------------------------------------------------/

    {
        path: "/funcionarios/fornecedores",
        name: "Fornecedores",
        component: () => import("../view/Fornecedores.vue"),
        beforeEnter: Guard.auth,
    },
    {
        path: "/funcionarios/fornecedores/editar/:id",
        name: "Editar Fornecedor",
        component: () => import("../components/editarFornecedores.vue"),
    },

    // ---------------------------------------------------------------------------------------------------------------------/
    // Tela Funcionarios
    // ---------------------------------------------------------------------------------------------------------------------/
    {
        path: "/funcionarios/RH",
        name: "RH",
        component: () => import("../view/RH.vue"),
        beforeEnter: Guard.auth,
    },
    {
        path: "ajuda",
        name: "Ajuda",
    },
    // ---------------------------------------------------------------------------------------------------------------------/
    // aviso para caso a rota não exista, vulgo erro 404
    // ---------------------------------------------------------------------------------------------------------------------/

    {
        path: "*",
        component: () => import("../../../Paginas Curingas/Erro404.vue"),
    },
];

export default routes;
