<template>
    <div class="background__loginCliente">
        <div class="divisaoGeometrica" />
        <div class="loginCliente">
            <p class="login__font text__login">Funcionarios</p>
            <form @submit.stop.prevent="submit()" action="">
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
                                    v-model="email"
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
                                rules="required"
                                class="form__input"
                            >
                                <v-text-field
                                    v-model="password"
                                    type="Password"
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
                                color="#4361EE"
                            >
                                <h4>Sing in</h4>
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
            email:"",
            password:"",
        };
    },
    methods:{
        submit(){
            var funcionario = {
                email:this.email,
                password:this.password
            }
            this.$axios.post(`login`,funcionario)
            .then((response)=>{
                localStorage.setItem('myauth_token', response.data.access_token)
                this.$router.push("/funcionarios/clientes")
            }).catch(()=>{
                this.$swal("Erro!!", `Usuario Incorreto`, "error")
            })
        }
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
    @apply flex justify-center;
    z-index: 20;
}

.text {
    &__login {
        @apply absolute top-20 mx-auto;
    }
}
.btn__login {
    width: 100%;
    font-weight: 300;
    line-height: 36px;
    color: #ffffff;
}
</style>
