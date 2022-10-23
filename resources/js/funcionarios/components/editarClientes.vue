<template>
    <form class="cadastro__form" method="POST">
        <p class="cadastro__form--title">
            {{ $route.name === "Editar Cliente" ? "Editar" : "Cadastrar" }}
            Cliente
        </p>

        <validation-observer
            class="cadastro__form--inputs"
            v-slot="{ invalid }"
        >
            <!-- dados pessoais -->
            <div>
                <p class="cadastro__section--title">Dados Pessoais</p>
                <div class="cadastro__grid">
                    <!-- INPUT DO NOME  -->
                    <div class="cadastro__grid--7">
                        <validation-provider
                            v-slot="{ errors }"
                            name="Name"
                            rules="required|max:10"
                        >
                            <v-text-field
                                class="cadastro__input"
                                v-model="cliente.nome"
                                :error-messages="errors"
                                placeholder="Nome...."
                                required
                                solo
                            >
                            </v-text-field>
                        </validation-provider>
                    </div>

                    <!-- INPUT DO SOBRENOME  -->
                    <div class="cadastro__grid--5">
                        <validation-provider
                            v-slot="{ errors }"
                            name="Name"
                            rules="required|max:10"
                        >
                            <v-text-field
                                class="cadastro__input"
                                v-model="cliente.sobrenome"
                                :error-messages="errors"
                                placeholder="Sobrenome...."
                                required
                                solo
                            ></v-text-field>
                        </validation-provider>
                    </div>

                    <!-- SELECT DO GENERO  -->
                    <div class="cadastro__grid--4">
                        <validation-provider rules="required">
                            <v-select
                                color="#ffffff"
                                dark
                                dense
                                class="cadastro__input"
                                :items="generosDisponiveis"
                                v-model="cliente.genero"
                                label="Genero"
                            ></v-select>
                        </validation-provider>
                    </div>

                    <!-- INPUT DA DATA DE NASCIMENTO  -->

                    <div class="cadastro__grid--4">
                        <validation-provider
                            v-slot="{ errors }"
                            rules="required"
                        >
                            <v-text-field
                                class="cadastro__input"
                                v-mask="'##-##-####'"
                                v-model="cliente.dataNascimento"
                                :error-messages="errors"
                                placeholder="Data de Nascimento"
                                required
                                solo
                            ></v-text-field>
                        </validation-provider>
                    </div>

                    <!-- INPUT CPF  -->
                    <div class="cadastro__grid--4">
                        <validation-provider
                            v-slot="{ errors }"
                            rules="required"
                        >
                            <v-text-field
                                class="cadastro__input"
                                v-mask="'###.###.###-##'"
                                v-model="cliente.cpf"
                                :error-messages="errors"
                                placeholder="CPF....."
                                required
                                solo
                            ></v-text-field>
                        </validation-provider>
                    </div>

                    <!-- SELECT DO planos  -->
                    <div class="cadastro__grid--4">
                        <validation-provider rules="required">
                            <v-select
                                dark
                                dense
                                class="cadastro__input"
                                label="Planos"
                                :items="planos"
                                v-model="cliente.plano"
                            ></v-select>
                        </validation-provider>
                    </div>
                </div>
            </div>

            <!-- dados de contato -->
            <div>
                <p class="cadastro__section--title">Dados de Contato</p>
                <div class="cadastro__grid">
                    <!-- INPUT DO TELEFONE  -->
                    <div class="cadastro__grid--6">
                        <validation-provider
                            v-slot="{ errors }"
                            rules="required"
                        >
                            <v-text-field
                                class="cadastro__input"
                                v-mask="'(##)#####-####'"
                                v-model="cliente.telefone"
                                :error-messages="errors"
                                placeholder="Telefone....."
                                required
                                solo
                            >
                            </v-text-field>
                        </validation-provider>
                    </div>
                    <!-- INPUT DO EMAIL  -->
                    <div class="cadastro__grid--6">
                        <validation-provider
                            v-slot="{ errors }"
                            rules="required|email"
                        >
                            <v-text-field
                                type="email"
                                class="cadastro__input"
                                v-model="cliente.email"
                                :error-messages="errors"
                                placeholder="email...."
                                required
                                solo
                            >
                            </v-text-field>
                        </validation-provider>
                    </div>
                </div>
            </div>

            <!-- botao de cadastrar -->
            <div class="cadastro__btn">
                <v-btn
                    class="cadastro__btn--button"
                    :disabled="invalid"
                    min-width="180"
                    min-height="50"
                    color="#f72585"
                    @click="updatePost()"
                >
                    <p class="cadastro__btn--cadastrar">
                        {{
                            $route.name === "Editar Cliente"
                                ? "Editar"
                                : "Cadastrar"
                        }}
                        Cliente
                    </p>
                </v-btn>
            </div>
        </validation-observer>
    </form>
</template>

<script>
import FormClientes from "./FormClientes.vue";
import {
    extend,
    ValidationObserver,
    ValidationProvider,
    setInteractionMode,
} from "vee-validate";
export default {
    components: {
        ValidationObserver,
        ValidationProvider,
        FormClientes,
    },
    data() {
        return {
            cliente: {},
            generosDisponiveis: ["Homem", "Mulher", "Prefiro Não Declarar"],
            planos: ["Standard", "Fighter", "GoFighter"],
        };
    },
    beforeCreate() {
        this.axios
            .get(`cliente/editar/${this.$route.params.id}`)
            .then((response) => {
                this.cliente = response.data;
                console.log(response.data);
            });
    },
    created() {},
    methods: {
        updatePost() {
            this.$axios
                .put(`cliente/update/${this.$route.params.id}`, this.cliente)
                .then((response) => {
                    this.$swal({
                        title: "Sucesso!!",
                        text: "cliente atualizado com sucesso",
                        icon: "success",
                    });
                    this.$router.push({ name: "Clientes" });
                });
        },
    },
};
</script>

<style></style>
