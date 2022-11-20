<template>
    <div id="app">
        <div v-if="$route.name === 'Login Funcionario'" class="hidden"></div>
        <navbar-funcionario v-else></navbar-funcionario>

        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return{
            nome:this.$store.state.usuario.nome
        }
    },
};
</script>
<style>
body {
    background: #222831;
}
</style>
