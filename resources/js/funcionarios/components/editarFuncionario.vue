<template>
    <div>
        <form class="cadastro__form" @submit.prevent="updateFuncionario()" :data-app="true">
            <p class="cadastro__form--title">
                {{
                    $route.name === "Editar Funcionario"
                        ? "Editar"
                        : "Cadastrar"
                }}
                Funcionario
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
                                    v-model="funcionario.nome"
                                    :error-messages="errors"
                                    label="Nome...."
                                    required
                                    solo
                                >
                                </v-text-field>
                            </validation-provider>
                        </div>

                        <!-- INPUT DO SALARIO  -->
                        <div class="cadastro__grid--5">
                            <validation-provider
                                v-slot="{ errors }"
                                name="Name"
                                rules="required"
                            >
                                <v-text-field
                                    class="cadastro__input"
                                    v-model="funcionario.sobrenome"
                                    :error-messages="errors"
                                    label="Sobrenome...."
                                    required
                                    solo
                                ></v-text-field>
                            </validation-provider>
                        </div>

                        <!-- INPUT DO CPF  -->
                        <div class="cadastro__grid--5">
                            <validation-provider
                                v-slot="{ errors }"
                                rules="required"
                            >
                                <v-text-field
                                    class="cadastro__input"
                                    v-mask="'###.###.###-##'"
                                    v-model="funcionario.cpf"
                                    :error-messages="errors"
                                    label="CPF...."
                                    required
                                    solo
                                ></v-text-field>
                            </validation-provider>
                        </div>


                        <!-- INPUT CARGO -->
                        <div class="cadastro__grid--6">
                            <validation-provider
                                v-slot="{ errors }"
                                rules="required"
                            >
                                <v-text-field
                                    class="cadastro__input"
                                    v-model="funcionario.cargo"
                                    :error-messages="errors"
                                    label="Cargo....."
                                    required
                                    solo
                                ></v-text-field>
                            </validation-provider>
                        </div>

                        <!-- INPUT SALARIO -->
                        <div class="cadastro__grid--6">
                            <validation-provider
                                v-slot="{ errors }"
                                rules="required"
                            >
                                <v-text-field
                                    class="cadastro__input"
                                    v-model="funcionario.salario"
                                    :error-messages="errors"
                                    label="Salário....."
                                    required
                                    solo
                                ></v-text-field>
                            </validation-provider>
                        </div>

                        <!-- INPUT senha -->
                        <div class="cadastro__grid--6">
                            <validation-provider
                                v-slot="{ errors }"
                                rules="required"
                            >
                                <v-text-field
                                    class="cadastro__input"
                                    v-model="funcionario.password"
                                    :error-messages="errors"
                                    label="Senha....."
                                    required
                                    solo
                                ></v-text-field>
                            </validation-provider>
                        </div>
                    </div>
                    
                        <!-- SELECT DO GENERO  -->
                        <div class="cadastro__grid--2">
                            <validation-provider
                                v-slot="{ errors }"
                                rules="required"
                            >
                                <v-select
                                    color="#ffffff"
                                    dark
                                    dense
                                    class="cadastro__input"
                                    :error-messages="errors"
                                    :items="generosDisponiveis"
                                    v-model="funcionario.genero"
                                    label="Genero"
                                ></v-select>
                            </validation-provider>
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
                                    v-model="funcionario.telefone"
                                    :error-messages="errors"
                                    label="Telefone....."
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
                                    class="cadastro__input"
                                    v-model="funcionario.email"
                                    :error-messages="errors"
                                    label="email...."
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
                                    v-model="funcionario.rua"
                                    :error-messages="errors"
                                    label="Rua...."
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
                                name="numeroCasa"
                            >
                                <v-text-field
                                    class="cadastro__input"
                                    v-model="funcionario.casaNumero"
                                    :error-messages="errors"
                                    label="Numero......"
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
                                name="cidade"
                            >
                                <v-text-field
                                    class="cadastro__input"
                                    v-model="funcionario.cidade"
                                    :error-messages="errors"
                                    label="Cidade...."
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
                                name="estado"
                            >
                                <v-text-field
                                    class="cadastro__input"
                                    v-model="funcionario.estado"
                                    :error-messages="errors"
                                    label="Estado....."
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
                                name="complemento"
                            >
                                <v-text-field
                                    class="cadastro__input"
                                    v-model="funcionario.complemento"
                                    :error-messages="errors"
                                    label="Complemento...."
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
                                name="cep"
                            >
                                <v-text-field
                                    class="cadastro__input"
                                    v-mask="'#####-###'"
                                    v-model="funcionario.cep"
                                    :error-messages="errors"
                                    label="CEP"
                                    required
                                    solo
                                >
                                </v-text-field>
                            </validation-provider>
                        </div>
                    </div>
                </div>

                <!-- botao de cadastrar -->
                <div class="flex justify-center">
                    <v-btn
                        :disabled="invalid"
                        min-width="180"
                        min-height="50"
                        color="#f72585"
                        type="submit"
                    >
                        <p class="cadastro__btn--cadastrar">
                            {{
                                $route.name === "Editar Funcionario"
                                    ? "Editar"
                                    : "Cadastrar"
                            }}
                            Funcionario
                        </p>
                    </v-btn>
                </div>
            </validation-observer>
        </form>
    </div>
</template>

<script>
import {
    extend,
    ValidationObserver,
    ValidationProvider,
    setInteractionMode,
} from "vee-validate";
import FormFuncionarios from "./FormFuncionarios.vue";
export default {
    components: {
        ValidationObserver,
        ValidationProvider,
        FormFuncionarios,
    },
    data() {
        return {
            funcionario: {},
            generosDisponiveis: ["Homem", "Mulher", "Prefiro Não Declarar"],
        };
    },
    beforeCreate() {
        this.axios
            .get(`funcionario/editar/${this.$route.params.id}`)
            .then((response) => {
                this.funcionario = response.data;
                console.log(response.data);
            });
    },
    methods: {
        updateFuncionario() {
            this.$axios
                .put(
                    `funcionario/update/${this.$route.params.id}`,
                    this.funcionario
                )
                .then((response) => {
                    this.$swal({
                        title: "Sucesso!!",
                        text: "funcionario atualizado com sucesso",
                        icon: "success",
                    });
                    this.$router.push({ name: "RH" });
                });
        },
    },
};
</script>

<style></style>
