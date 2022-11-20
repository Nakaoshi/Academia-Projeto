<template>
    <div>
        <!-- navbar no desktop  -->
        <nav class="navbar__desktop">
            <v-card class="overflow-hidden" dark>
                <v-app-bar
                    class="navbar__desktop"
                    elevation="4"
                    hide-on-scroll
                    color="#161a21"
                >
                    <div class="flex justify-between">
                        <div class="navbar__desktop--links">
                            <!-- botao de clientes -->
                            <router-link :to="{ name: 'Clientes' }">
                                <p>Clientes</p>
                            </router-link>

                            <!-- botao de funcionarios -->
                            <router-link :to="{ name: 'Fornecedores' }">
                                <p>Fornecedores</p>
                            </router-link>

                            <!-- botao de RH  -->
                            <router-link :to="{ name: 'RH' }" v-if="gerente === 1">
                                <p>RH</p>
                            </router-link>

                            
                        </div>
                        <!-- botão de logout  -->
                        <h1 class="usuario__nome">{{nomeUsuario}}</h1>
                        <div>
                            <v-btn icon>
                                <v-icon
                                    color="grey lighten-3"
                                    @click="LogOutFuncionarios()"
                                    >{{ icons.mdiLogout }}</v-icon
                                >
                            </v-btn>
                        </div>
                    </div>
                </v-app-bar>
            </v-card>
        </nav>
        <!-- navbar dispositivos moveis -->
        <nav class="navbar__mobile">
            <v-card class="mx-auto overflow-hidden">
                <v-app-bar elevation="5" hide-on-scroll>
                    <!-- icone menu hamburguer -->
                    <v-app-bar-nav-icon @click="drawer = true">
                        <v-icon>{{ icons.mdiViewList }}</v-icon>
                    </v-app-bar-nav-icon>
                </v-app-bar>

                <v-navigation-drawer v-model="drawer" fixed>
                    <v-list nav dense>
                        <v-list-item-group
                            v-model="group"
                            active-class="deep-purple--text text--accent-4"
                        >
                            <!-- Clientes  -->
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon class="navbar__menu--icon">
                                        {{ icons.mdiHome }}
                                    </v-icon>
                                </v-list-item-icon>
                                <router-link :to="{ name: 'Clientes' }">
                                    <p>Clientes</p>
                                </router-link>
                            </v-list-item>

                            <!-- Fornecedores  -->
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon class="navbar__menu--icon">
                                        {{ icons.mdiFencing }}
                                    </v-icon>
                                </v-list-item-icon>
                                <router-link :to="{ name: 'Fornecedores' }">
                                    <p>Fornecedores</p>
                                </router-link>
                            </v-list-item>

                            <!-- area do RH  -->
                            <v-list-item v-if="gerente == 1">
                                <v-list-item-icon>
                                    <v-icon class="navbar__menu--icon">
                                        {{ icons.mdiAccountSchoolOutline }}
                                    </v-icon>
                                </v-list-item-icon>
                                <router-link :to="{ name: 'RH' }" >
                                    <p>RH</p>
                                </router-link>
                            </v-list-item>
                            <!-- botão de matricula  -->
                            <v-list-item>
                                <v-btn icon id="btn__logout" @click="LogOutFuncionarios()">
                                    {{ icons.mdiLogout }}
                                </v-btn>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-navigation-drawer>
            </v-card>
        </nav>
    </div>
</template>

<script>
import {
    mdiHome,
    mdiAccountGroup,
    mdiAccountSchoolOutline,
    mdiViewList,
    mdiHomeCity,
    mdiFencing,
    mdiLogout,
} from "@mdi/js";

export default {
    name: "navbarMobile",
    data() {
        return {
            usuario:[],
            icons: {
                mdiHome,
                mdiAccountGroup,
                mdiAccountSchoolOutline,
                mdiViewList,
                mdiHomeCity,
                mdiFencing,
                mdiLogout,
            },
            drawer: false,
            group: null,
        };
    },
    computed:{
        gerente(){
            return this.$store.state.usuario.gerente
        },
    },
    methods: {
           
        LogOutFuncionarios() {
            localStorage.removeItem("myauth_token");
            this.$router.push({ name: "Login Funcionario" });
            this.$axios.post('cliente/logout')
        },
    },
    beforeMount(){
        this.verificaRota
    }
};
</script>

<style lang="scss">
@import "../../css/app.css";
@import "../../sass/variables.scss";
.navbar__desktop--links {
    @apply flex justify-between;
}

.usuario{
    &__nome{
        font-size: 1rem;
        color: #f7f7f7;
    }
}
.navbar__desktop--links a p {
    font-style: italic;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #f7f7f7;
}
</style>
