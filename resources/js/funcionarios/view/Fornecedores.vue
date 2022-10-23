<template>
    <div class="tabelaGeral">
        <div class="tabela" v-if="fornecedor.length > 0">
            <p class="cadastro__form--title fornecedor">FORNECEDORES</p>
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
                :items="fornecedor"
                :search="search"
                hide-default-footer
                mobile
            >
                <!-- sim, se você ta no VS code, o template vai ficar dando erro sabe se la o porque  -->
                <template v-slot:item.action="{ item }">
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
                                @click="deletarFornecedor(item.id)"
                                    >Deletar</v-btn
                                >
                            </v-list-item>
                            <v-list-item>
                                <router-link :to="{name: 'Editar Fornecedor', params: { id: item.id }}">
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
        <ModalFornecedores />
    </div>
</template>

<script>
import { mdiMagnify } from "@mdi/js";
import ModalFornecedores from "../components/modalFornecedores.vue";
export default {
    data() {
        return {
            dialog: false,
            search: "",
            headers: [
                {
                    text: "Fornecedores",
                    align: "center",
                    sortable: false,
                    value: "nomeFantasia",
                },
                {
                    text: "Nome Fantasia",
                    value: "razaoSocial",
                    align: "center",
                    class: "texto",
                },
                { text: "Telefone", value: "telefone", align: "center" },
                { text: "Email ", value: "email", align: "center" },
                { value: "action", align: "center" },
            ],
            fornecedor: [],
            mdiMagnify,
        };
    },
    methods: {
        deletarFornecedor(id) {
            this.$swal({
                title: "Quer mesmo Excluir?",
                showDenyButton: true,
                confirmButtonText: "Deletar",
                denyButtonText: `Não Deletar`,
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$axios
                        .delete(`fornecedores/delete/${id}`)
                        .then((response) => {
                            let i = this.fornecedor
                                .map((item) => item.id)
                                .indexOf(id);
                            this.fornecedor.splice(i, 1);
                            this.$swal({
                                title: "fornecedor deletado com sucesso!!!",
                                text: "",
                                icon: "success",
                            });
                        });
                } else if (result.isDenied) {
                    this.$swal(`O fornecedor não foi deletado`, "", "");
                }
            });
        },
    },
    mounted() {
        this.$axios.get("fornecedores/get").then((response) => {
            console.log(response);
            this.fornecedor = response.data;
        });
    },
    components: { ModalFornecedores },
};
</script>

<style lang="scss">
@import "../../../sass/variables.scss";
@import "../../../css/app.css";

.tabela {
    @apply container mx-auto  px-20;
    &__fornecedor {
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
.fornecedor {
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
