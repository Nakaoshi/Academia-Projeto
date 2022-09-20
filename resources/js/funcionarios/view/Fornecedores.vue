<template>
    <div>
        <div class="tabela">
            <p class="cadastro__form--title clientes">FORNECEDORES</p>
            <v-card-title>
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    color="#FAFAFA"
                    :append-icon="mdiMagnify"
                    label="Search...."
                    single-line
                    dark
                    hide-details
                    hint="Digite quem deseja encontrar"
                    class="tabela__busca"
                ></v-text-field>
            </v-card-title>
            <v-data-table
                loading
                loading-text="Carregando......Aguarde"
                :headers="headers"
                :items="this.clientes"
                :search="search"
                hide-default-footer
                mobile
            >
                <!-- sim, se você ta no VS code, o template vai ficar dando erro sabe se la o porque  -->
                <template v-slot:item.action="{ items }">
                    <v-btn color="#f72585" class="tabela__btn">Detalhes</v-btn>
                </template>
            </v-data-table>
            <ModalFornecedores />
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { mdiMagnify } from "@mdi/js";
import ModalFornecedores from "../components/modalFornecedores.vue";
export default {
    data() {
        return {
            search: "",
            headers: [
                {
                    text: "Funcionario",
                    align: "start",
                    sortable: false,
                    value: "name",
                },
                {
                    text: "DT.Nascimento",
                    value: "mass",
                    align: "center",
                    class: "texto",
                },
                { text: "CPF", value: "eye_color", align: "center" },
                { text: "Telefone", value: "height", align: "center" },
                { text: "Plano", value: "gender", align: "center" },
                { value: "action", align: "center" },
            ],
            clientes: [],
            mdiMagnify,
        };
    },
    methods: {
        getData() {
            axios.get("https://swapi.dev/api/people/").then((response) => {
                this.clientes = response.data.results;
            });
        },
    },
    mounted() {
        this.getData();
    },
    components: { ModalFornecedores },
};
</script>

<style lang="scss">
@import "../../../sass/variables.scss";
@import "../../../css/app.css";

.tabela {
    @apply container mx-auto  px-20;
    &__clientes {
        background: #222831;
    }
    &__busca {
        width: 5% !important;
    }
    &__btn {
        font-style: italic;
        font-weight: 700;
        font-size: 14px;
        line-height: 21px;
        color: $branco !important;
    }
}
.clientes {
    @apply absolute;
    top: 10%;
    left: 3%;
}

thead,
thead tr th span {
    background: #222831;
    color: $branco;
}

tbody {
    border-radius: 50%;
}

td {
    margin: 3rem;
}

tr {
    @apply space-y-20;
    border-radius: 18px;
    font-style: italic;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #000000;
}
</style>
