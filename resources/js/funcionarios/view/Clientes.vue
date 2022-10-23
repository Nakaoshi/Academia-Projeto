<template>
    <div class="tabelaGeral">
        <div class="tabela" v-if="clientes.length > 0">
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
                :items="clientes"
                item-key="clientes.id"
                :search="search"
                hide-default-footer
            >
                <!-- sim, se você ta no VS code, o template vai ficar dando erro sabe se la o porque  -->
                <template #item.action="{ item }">
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
                                <v-btn
                                    color="#f72585"
                                    class="tabela__btn"
                                    small
                                    @click="deletarCliente(item.id)"
                                    >Deletar</v-btn
                                >
                            </v-list-item>
                            <v-list-item>
                                <router-link
                                    :to="{
                                        name: 'Editar Cliente',
                                        params: { id: item.id },
                                    }"
                                >
                                    <v-btn
                                        color="#f72585"
                                        class="tabela__btn"
                                        small
                                        >Editar</v-btn
                                    >
                                </router-link>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </template>
            </v-data-table>
        </div>
        <span class="semDados" v-else>Não há Dados na base de Dados</span>
        <ModalClientes />
    </div>
</template>

<script>
import { mdiMagnify } from "@mdi/js";
import ModalClientes from "../components/modalClientes.vue";
export default {
    
    components: { ModalClientes },
    data() {
        return {
            dialog: false,
            search: "",
            headers: [
                {
                    text: "id",
                    align: "center",
                    sortable: true,
                    value: "id",
                },
                {
                    text: "Clientes",
                    align: "start",
                    sortable: false,
                    value: "nome",
                },
                {
                    text: "DT.Nascimento",
                    value: "dataNascimento",
                    align: "center",
                },
                { text: "CPF", value: "cpf", align: "center" },
                { text: "Telefone", value: "telefone", align: "center" },
                { text: "Plano", value: "plano", align: "center" },
                { value: "action", align: "center" },
            ],
            clientes: [],
            icons: {
                mdiMagnify,
            },
        };
    },
    methods: {
        deletarCliente(id) {
            this.$swal({
                title: "Quer mesmo Excluir?",
                showDenyButton: true,
                confirmButtonText: "Deletar",
                denyButtonText: `Não Deletar`,
            }).then((result) => {
                if (result.isConfirmed) {
                    this.axios
                        .delete(`cliente/delete/${id}`)
                        .then((response) => {
                            let i = this.clientes
                                .map((item) => item.id)
                                .indexOf(id);
                            this.clientes.splice(i, 1);
                            this.$swal({
                                title: "cliente deletado com sucesso!!!",
                                text: "",
                                icon: "success",
                            });
                        });
                } else if (result.isDenied) {
                    this.$swal(`O usuario não foi deletado`, "", "");
                }
            });
        },
    },
    mounted() {
        this.$axios.get("cliente/get").then((response) => {
            this.clientes = response.data;
            console.log(response);
        });
    },
};
</script>

<style lang="scss">
@import "../../../sass/variables.scss";
@import "../../../css/app.css";

.tabela {
    @apply container mx-auto  px-20;
    &__header {
        @apply text-center;
        color: $branco !important;
    }
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
