<template>
    <div id="app">
        <navbar-cliente></navbar-cliente>

        <router-view></router-view>
    </div>
</template>

<script>
import navbarCliente from "./Templates/NavBars/navbarCliente.vue";
export default {
    components: {
        navbarCliente,
    },
};
</script>

<style></style>
