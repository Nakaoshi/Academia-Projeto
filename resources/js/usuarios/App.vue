<template>
    <div id="app">
        <Navbar-Usuario></Navbar-Usuario>
        <router-view class="mt-16"></router-view>
    </div>
</template>

<script>
import NavbarUsuario from "../../Templates/NavBars/navbarUsuario.vue";
export default {
    components: {
        NavbarUsuario,
    },
};
</script>

<style></style>
