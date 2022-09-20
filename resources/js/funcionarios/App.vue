<template>
    <div id="app">
        <div v-if="$route.name === 'Login Funcionario'" class="hidden"></div>
        <NavbarFuncionario v-else></NavbarFuncionario>

        <router-view></router-view>
    </div>
</template>
<script>
import NavbarFuncionario from "../../Templates/NavBars/navbarFuncionario.vue";
export default {
    components: { NavbarFuncionario },
};
</script>
<style>
body {
    background: #222831;
}
</style>
