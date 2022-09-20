<template>
    <div data-app="true">
        <v-dialog>
            <template v-slot:activator="{ on }">
                <v-btn v-on="on" fixed right bottom fab dark color="#f72585">
                    <v-icon>{{ mdiPlus }}</v-icon>
                </v-btn>
            </template>
            <FormFuncionarios />
        </v-dialog>
    </div>
</template>

<script>
import { mdiPlus } from "@mdi/js";
import FormFuncionarios from "./FormFuncionarios.vue";

export default {
    data() {
        return {
            mdiPlus,
        };
    },
    components: { FormFuncionarios },
};
</script>

<style></style>
