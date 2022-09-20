<template>
    <div>
        <div class="tabela">
            <p class="cadastro__form--title clientes">CLIENTES</p>
            <v-card-title>
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    color="#FAFAFA"
                    :append-icon="icons.mdiMagnify"
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
            >
                <!-- sim, se você ta no VS code, o template vai ficar dando erro sabe se la o porque  -->
                <template v-slot:item.action="{ items }">
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                color="#f72585"
                                dark
                                v-bind="attrs"
                                v-on="on"
                            >
                                Detalhes
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item>
                                <v-btn color="#f72585" class="tabela__btn" small
                                    >Deletar</v-btn
                                >
                            </v-list-item>
                            <v-list-item>
                                <v-btn color="#f72585" class="tabela__btn" small
                                    >Editar</v-btn
                                >
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </template>
            </v-data-table>
        </div>
        <ModalClientes />
    </div>
</template>

<script>
import axios from "axios";
import { mdiMagnify } from "@mdi/js";
import ModalClientes from "../components/modalClientes.vue";
export default {
    components: {
        ModalClientes,
    },
    data() {
        return {
            dialog: false,
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
            icons: {
                mdiMagnify,
            },
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
    top: 9%;
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
