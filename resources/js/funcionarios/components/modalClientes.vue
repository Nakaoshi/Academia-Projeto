<template>
    <div data-app="true">
        <v-dialog>
            <template v-slot:activator="{ on }">
                <v-btn v-on="on" fixed right bottom fab dark color="#f72585">
                    <v-icon>{{ mdiPlus }}</v-icon>
                </v-btn>
            </template>
            <Form-Clientes />
        </v-dialog>
    </div>
</template>

<script>
import FormClientes from "./FormClientes.vue";
import { mdiPlus } from "@mdi/js";

export default {
    components: { FormClientes },
    data() {
        return {
            mdiPlus,
        };
    },
};
</script>

<style></style>
