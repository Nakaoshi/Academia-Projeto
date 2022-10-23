<template>
    <div class="background__loginCliente">
        <div class="divisaoGeometrica" />
        <div class="loginCliente">
            <p class="login__font text__login">Alunos</p>
            <form @submit.prevent="submit" action="">
                <validation-observer ref="observer">
                    <v-row>
                        <v-col cols="12">
                            <!-- campo do Email  -->
                            <validation-provider
                                class="form__input"
                                v-slot="{ errors }"
                                name="email"
                                rules="required|email"
                            >
                                <v-text-field
                                    v-model="aluno.email"
                                    :error-messages="errors"
                                    placeholder="E-mail...."
                                    required
                                    solo
                                ></v-text-field>
                            </validation-provider>
                        </v-col>

                        <v-col cols="12">
                            <!-- campo do senha  -->
                            <validation-provider
                                v-slot="{ errors }"
                                name="Password"
                                rules="required|max:10"
                                class="form__input"
                            >
                                <v-text-field
                                    v-model="aluno.senha"
                                    :error-messages="errors"
                                    placeholder="Senha...."
                                    required
                                    solo
                                ></v-text-field>
                            </validation-provider>
                        </v-col>
                        <v-col cols="12">
                            <v-btn
                                class="btn__login"
                                type="submit"
                                color="#f72585"
                                :to="{ name: 'Inicio' }"
                            >
                                <h4>Acessar</h4>
                            </v-btn>
                        </v-col>
                    </v-row>
                </validation-observer>
            </form>
        </div>
    </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
    components: {
        ValidationObserver,
        ValidationProvider,
    },
    data() {
        return {
            aluno: {
                email: this.email,
                senha: this.senha,
            },
        };
    },
};
</script>

<style lang="scss" scoped>
    body{
        @apply absolute w-full h-full;
    }
.background__loginCliente {
    @apply flex justify-center items-center w-full h-full absolute overflow-hidden;
    background-image: url("../../../css/images/Banner__login.svg");
    background-size: cover;
}
.divisaoGeometrica {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    z-index: 0;
    clip-path: polygon(0 0, 30% 0, 77% 100%, 0% 100%);
    background: #c4c4c4;
    background-clip: content-box;
}
.loginCliente {
    @apply flex justify-center;
    z-index: 20;
}

.text {
    &__login {
        @apply absolute top-20 mx-auto;
    }
}
.btn__login {
    @apply flex justify-center items-center;
    width: 100%;
    font-weight: 300;
    line-height: 36px;
    &>h4{
        color: #ffffff;
        
    }
}
</style>
