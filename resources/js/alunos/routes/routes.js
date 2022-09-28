const routes = [
    {
        path: "/alunos",
        name: "Login Alunos",
        component:() => import("../view/loginAluno.vue"),
        
    },
    {
        path: "/alunos/inicio",
        name: "Inicio",
        component: () => import("../view/Perfil.vue"),
    },
    {
        path: "/alunos/pagamentos", //add o :id aqui tbm
        name: "Pagamentos",
        component: () => import("../view/Pagamentos.vue"),
    },
];

export default routes;
