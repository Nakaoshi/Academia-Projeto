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
            <!-- <v-data-table
                loading
                loading-text="Carregando......Aguarde"
                :headers="headers"
                :items="clientes"
                :search="search"
                hide-default-footer
            >
                sim, se você ta no VS code, o template vai ficar dando erro sabe se la o porque 
                <template v-slot:item.action="{ items }" >
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                color="#f72585"
                                dark
                                v-bind="attrs"
                                v-on="on"
                            >
                                {{items}}Detalhes
                            </v-btn>
                        </template>
                        <v-list >
                            <v-list-item>
                                <v-btn
                                    color="#f72585"
                                    class="tabela__btn"
                                    small
                                    @click="Deletarcliente(clientes.id)"
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
            
            </v-data-table> -->
            <v-simple-table fixed-header :search="search">
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">Id</th>
                            <th class="text-left">Cliente</th>
                            <th class="text-left">DT.Nascimento</th>
                            <th class="text-left">CPF</th>
                            <th class="text-left">Telefone</th>
                            <th class="text-left">Plano</th>
                            <th class="text-left">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="cliente in clientes" :key="cliente.nome">
                            
                            <td>{{cliente.id}}</td>
                            <td>{{ cliente.nome }}</td>
                            <td>{{ cliente.dataNascimento }}</td>
                            <td>{{ cliente.cpf }}</td>
                            <td>{{ cliente.telefone }}</td>
                            <td>{{ cliente.plano }}</td>
                            <td>
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
                                                @click="
                                                    Deletarcliente(cliente.id)
                                                "
                                                >Deletar</v-btn
                                            >
                                        </v-list-item>
                                        <v-list-item>
                                            <v-btn
                                                color="#f72585"
                                                class="tabela__btn"
                                                small
                                                >Editar</v-btn
                                            >
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
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
        getData() {
            axios.get("get-clientes").then((response) => {
                this.clientes = response.data;
                console.log(response);
            });
        },
        Deletarcliente(id) {
            this.$swal({
                title: "Quer mesmo Excluir?",
                showDenyButton: true,
                confirmButtonText: "Deletar",
                denyButtonText: `Não Deletar`,
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$axios.delete("delete-clientes",id).then(()=>{
                        this.$swal(`O usuario ${id} foi Deletado!`, "", "success");
                    }).catch((error)=>{
                        this.$swal("erro",`${error}`, "error")
                    })
                } else if (result.isDenied) {
                    this.$swal(`O usuario não foi deletado`, "", "error");
                }
            });
        },
    },
    mounted() {
        this.getData();
        console.log(this.clientes);
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
