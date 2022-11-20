<template>
    <div>
        <div class="tabela">
            <p class="cadastro__form--title funcionarios">RECURSOS HUMANOS</p>
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
                :items="this.funcionarios"
                :search="search"
                hide-default-footer
                mobile
            >
                <!-- sim, se você ta no VS code, o template vai ficar dando erro sabe se la o porque  -->
                <template #item.action="{ item }">
                    <v-menu offset-y>
                        <template #activator="{ on, attrs }">
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
                                
                                @click="ExcluirFunc(item.id)"
                                    >Deletar</v-btn
                                >
                            </v-list-item>
                            <v-list-item>
                                <router-link
                                    :to="{
                                        name: 'Editar Funcionario',
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
            <modal-funcionarios />
        </div>
    </div>
</template>

<script>
import { mdiMagnify } from "@mdi/js";
import ModalFuncionarios from "../components/modalFuncionarios.vue";
export default {
    data() {
        return {
            search: "",
            headers: [
                {
                    text: "Id",
                    align: "start",
                    value: "id",
                },
                {
                    text: "Nome",
                    value: "nome",
                    align: "center",
                    class: "texto",
                },
                { text: "Email", value: "email", align: "center" },
                { text: "Telefone", value: "telefone", align: "center" },
                { text: "Endereço", value: "rua", align: "center" },
                { text: "Cargo", value: "cargo", align: "center" },
                { value: "action", align: "center" },
            ],
            funcionarios: [],
            mdiMagnify,
        };
    },
    methods: {
        ExcluirFunc(id) {
            this.$swal({
                title: "Quer mesmo Excluir?",
                showDenyButton: true,
                confirmButtonText: "Deletar",
                denyButtonText: `Não Deletar`,
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$axios
                        .delete(`funcionario/delete/${id}`)
                        .then((response) => {
                            let i = this.funcionarios
                                .map((item) => item.id)
                                .indexOf(id);
                            this.funcionarios.splice(i, 1);
                            this.$swal({
                                title: "funcionario deletado com sucesso!!!",
                                text: "",
                                icon: "success",
                            });
                        });
                } else if (result.isDenied) {
                    this.$swal(`O usuario não foi deletado`, "", "");
                }
            });
        },
        getData() {
            this.$axios.get("funcionario/get").then((response) => {
                this.funcionarios = response.data;
                console.log(this.funcionarios)
            });
        },
    },
    mounted() {
        this.getData();
    },
    components: { ModalFuncionarios },
};
</script>

<style lang="scss">
@import "../../../sass/variables.scss";
@import "../../../css/app.css";

.tabela {
    @apply container mx-auto;
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
