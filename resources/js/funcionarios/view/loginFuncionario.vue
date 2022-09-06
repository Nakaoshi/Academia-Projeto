<template>
    <div class="background__loginCliente">
        <div class="divisaoGeometrica" />
        <div class="loginCliente">
            <div class="text__login">
                <p class="login__font">LOGIN</p>
            </div>
            <validation-observer ref="observer">
                <form @submit.prevent="submit" action="" class="form">
                    <!-- campo do Email  -->
                    <validation-provider
                        class="form__input"
                        v-slot="{ errors }"
                        name="email"
                        rules="required|email"
                    >
                        <v-text-field
                            v-model="email"
                            :error-messages="errors"
                            placeholder="E-mail...."
                            required
                            solo
                        ></v-text-field>
                    </validation-provider>
                    <!-- campo do senha  -->
                    <validation-provider
                        v-slot="{ errors }"
                        name="Password"
                        rules="required|max:10"
                        class="form__input"
                    >
                        <v-text-field
                            v-model="senha"
                            :error-messages="errors"
                            placeholder="Senha...."
                            required
                            solo
                        ></v-text-field>
                    </validation-provider>

                    <v-btn
                        class="form__btn"
                        type="submit"
                        color="#4361EE"
                        @click="enviarDados()"
                    >
                        <h4>Sing in</h4>
                    </v-btn>
                </form>
            </validation-observer>
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
            Usuario: {
                email: this.email,
                senha: this.senha,
            },
        };
    },
};
</script>

<style lang="scss" scoped>
.background__loginCliente {
    @apply flex justify-center items-center w-full h-full absolute overflow-hidden;
    background-image: url("../../../css/images/FuncionarioLogin.svg");
    background-size: cover;
}
.divisaoGeometrica {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    z-index: 0;
    clip-path: polygon(0 0, 30% 0, 77% 100%, 0% 100%);
    background: #222831;
    background-clip: content-box;
}
.loginCliente {
    z-index: 20;
}

.text {
    &__login {
        @apply absolute  top-32;
    }
}
.form {
    @apply flex flex-col items-center;
    width: 100%;
    &__btn {
        width: 100%;
    }
    &__input {
        max-width: 100%;
    }
}
</style>
