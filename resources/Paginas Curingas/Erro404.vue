<template>
    <div class="bg-white">
        <v-alert dense outlined type="error">
            <strong>Erro 404!</strong> Pagina <strong>Não Encontrada</strong>
        </v-alert>
        <v-btn @click="voltar()">Voltar</v-btn>
    </div>
</template>

<script>
export default {
    methods: {
        voltar() {
            this.$router.back();
        },
    },
};
</script>

<style scoped></style>
