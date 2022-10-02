<template>
    <div id="app" max-height="100vh">
        <SidebarAluno
            v-if="$route.name != 'Login Alunos'"
           class="sidebar"
        ></SidebarAluno>
        <div v-else hidden></div>

       <div class="content">
        <div class="BemVindo" v-if="$route.name != 'Login Alunos'">
            <h2 class="alunos__font--welcome BemVindo__aluno">
                Olá {{ this.aluno.name }}, Bem Vindo de Volta
            </h2>
            <h2 class="alunos__font--title BemVindo__pagina">{{this.$route.name}}</h2>
        </div>
        <router-view   class="router-view"></router-view>
       </div>
    </div>
</template>

<script>
import SidebarAluno from "../../Templates/sidebar/sidebarAluno.vue";
export default {
    components: { SidebarAluno },
    data() {
        return {
            aluno: {
                name: "Nakaoshi",
            },
        };
    },
    methods:{
    },
    mounted() {
        
    }
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables.scss";
.BemVindo {
    @apply relative w-full;
    height: 10rem;
    max-height: 10rem;

    @media (max-width:768px){
        @apply flex flex-col items-center;
    }


    &__aluno{
        @apply absolute top-0 right-0;

        @media (max-width:768px){
            @apply static text-center;
        }
    }
    &__pagina{
        @apply absolute left-0 bottom-0; 

        @media (max-width:768px){
            @apply static
        }
    }
    @media screen and (max-width: 1024px) {
        @apply top-20;
        .alunos__font--welcome {
            font-size: 1.5rem;
        }
    }
}
#app {
    @apply grid grid-cols-12 gap-0;
    background: $azul-escuro;
}
.router-view {
    @media screen and (max-width: 1024px) {
        @apply mt-24;
    }
    @media screen and (max-width: 435px) {
        @apply mt-36;

        .alunos__font--titleTable {
            font-size: 1.5rem;
        }
    }
   
}

.sidebar {
    @apply col-span-2;
    @media screen and (max-width: 1024px) {
        @apply col-span-12;
    }
}
.content {
    @apply col-start-3 col-span-10;
    @media (max-width:1820px)and (min-width:1024px){
        @apply col-start-5;
    }
    @media screen and (max-width: 1024px) {
        @apply col-span-12;
    }
}
</style>
