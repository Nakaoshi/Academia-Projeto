<template>
    <form
        class="cadastro__form"
        @submit.stop.prevent="FormAction()"
    >
        <p class="cadastro__form--title">
            {{
                $route.name === "Editar Cliente" ? "Editar" : "Cadastrar"
            }}
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
                        <validation-provider rules="required" 
                        v-slot="{ errors }">
                            <v-select
                                color="#ffffff"
                                dark
                                dense
                                class="cadastro__input"
                                :error-messages="errors"
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

                    <!-- SELECT DO Senha  -->
                    <div class="cadastro__grid--4">
                        <validation-provider rules="required"
                        v-slot="{ errors }">
                            <v-text-field
                                class="cadastro__input"
                                v-model="cliente.senha"
                                :error-messages="errors"
                                placeholder="Senha..."
                                required
                                solo
                            ></v-text-field>
                        </validation-provider>
                    </div>
                    
                    <!-- SELECT DO planos  -->
                    <div class="cadastro__grid--4">
                        <validation-provider rules="required"
                        v-slot="{ errors }">
                            <v-select
                                dark
                                dense
                                class="cadastro__input"
                                :error-messages="errors"
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

            <!-- endereço -->
            <div>
                <p class="cadastro__section--title">Endereço</p>
                <div class="cadastro__grid">
                    <!-- INPUT DA RUA -->
                    <div class="cadastro__grid--10">
                        <validation-provider
                            v-slot="{ errors }"
                            rules="required"
                        >
                            <v-text-field
                                class="cadastro__input"
                                v-model="cliente.rua"
                                :error-messages="errors"
                                placeholder="Rua...."
                                required
                                solo
                            >
                            </v-text-field>
                        </validation-provider>
                    </div>
                    <!-- INPUT DO NUMERO DA CASA -->
                    <div class="cadastro__grid--2">
                        <validation-provider
                            v-slot="{ errors }"
                            rules="required"
                        >
                            <v-text-field
                                class="cadastro__input"
                                v-model="cliente.casaNumero"
                                :error-messages="errors"
                                placeholder="Numero......"
                                required
                                solo
                            >
                            </v-text-field>
                        </validation-provider>
                    </div>

                    <!--INPUT DA CIDADE-->
                    <div class="cadastro__grid--3">
                        <validation-provider
                            v-slot="{ errors }"
                            rules="required"
                        >
                            <v-text-field
                                class="cadastro__input"
                                v-model="cliente.cidade"
                                :error-messages="errors"
                                placeholder="Cidade...."
                                required
                                solo
                            >
                            </v-text-field>
                        </validation-provider>
                    </div>

                    <!--INPUT DA estado-->
                    <div class="cadastro__grid--3">
                        <validation-provider
                            v-slot="{ errors }"
                            rules="required"
                        >
                            <v-text-field
                                class="cadastro__input"
                                v-model="cliente.estado"
                                :error-messages="errors"
                                placeholder="Estado....."
                                required
                                solo
                            >
                            </v-text-field>
                        </validation-provider>
                    </div>

                    <!--INPUT DA Complemento-->
                    <div class="cadastro__grid--3">
                        <validation-provider
                            v-slot="{ errors }"
                            rules="required"
                        >
                            <v-text-field
                                class="cadastro__input"
                                v-model="cliente.complemento"
                                :error-messages="errors"
                                placeholder="Complemento...."
                                required
                                solo
                            >
                            </v-text-field>
                        </validation-provider>
                    </div>

                    <!--INPUT DA CEP -->
                    <div class="cadastro__grid--3">
                        <validation-provider
                            v-slot="{ errors }"
                            rules="required"
                        >
                            <v-text-field
                                class="cadastro__input"
                                v-mask="'#####-###'"
                                v-model="cliente.cep"
                                :error-messages="errors"
                                placeholder="CEP"
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
                    type="submit"
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
    },
    data() {
        return {
            cliente: {},
            generosDisponiveis: ["Homem", "Mulher", "Prefiro Não Declarar"],
            planos: ["Standard", "Fighter", "GoFighter"],
        };
    },
    methods: {
        FormAction() {
            this.$axios
                .post("cliente/create", this.cliente)
                .then(() => {
                    this.$swal(
                        "Cliente Criado!!",
                        "Cliente foi adicionado a base de dados com sucesso",
                        "success"
                    ).then(() => {
                        this.$router.go();
                    });
                })
                .catch((error) => {
                    this.$swal("Erro", `${error}`, "error");
                });
        },
    },
    
};
</script>
<style lang="scss">
@import "../../../css/app.css";
@import "../../../sass/variables.scss";
.cadastro {
    @apply px-14;
    background-color: $preto;
    padding: 1rem;

    //formulario
    &__form {
        padding: 14px;
        height: 100vh;
        background-color: rgba(229, 229, 229, 0.1);
        border-radius: 18px;
    }
    &__btn {
        @apply flex justify-end;
        &--button {
            @apply -mt-7;
        }
    }
    .v-select__slot {
        background-color: #fff;
    }
    //grid dos inputs
    &__grid {
        @apply grid grid-cols-12 gap-4;
        &--1 {
            @apply col-span-1;
            @media screen and (max-width: 768px) {
                @apply col-span-12;
            }
        }
        &--2 {
            @apply col-span-2;
            @media screen and (max-width: 768px) {
                @apply col-span-12;
            }
        }
        &--3 {
            @apply col-span-3;
            @media screen and (max-width: 768px) {
                @apply col-span-12;
            }
        }
        &--4 {
            @apply col-span-4;
            @media screen and (max-width: 768px) {
                @apply col-span-12;
            }
        }
        &--5 {
            @apply col-span-5;
            @media screen and (max-width: 768px) {
                @apply col-span-12;
            }
        }
        &--6 {
            @apply col-span-6;
            @media screen and (max-width: 768px) {
                @apply col-span-12;
            }
        }
        &--7 {
            @apply col-span-7;
            @media screen and (max-width: 768px) {
                @apply col-span-12;
            }
        }
        &--8 {
            @apply col-span-8;
            @media screen and (max-width: 768px) {
                @apply col-span-12;
            }
        }
        &--9 {
            @apply col-span-9;
            @media screen and (max-width: 768px) {
                @apply col-span-12;
            }
        }
        &--10 {
            @apply col-span-10;
            @media screen and (max-width: 768px) {
                @apply col-span-12;
            }
        }
        &--11 {
            @apply col-span-11;
            @media screen and (max-width: 768px) {
                @apply col-span-12;
            }
        }
        &--12 {
            @apply col-span-12;
            @media screen and (max-width: 768px) {
                @apply col-span-12;
            }
        }
    }
    @media screen and (max-width: 768px) {
        @apply px-0;
    }
}
</style>
