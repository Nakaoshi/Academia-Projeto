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
                            <router-link :to="{ name: 'RH' }">
                                <p>RH</p>
                            </router-link>

                            <!-- botao de Ajuda  -->
                            <router-link :to="{ name: 'Ajuda' }">
                                <p>Ajuda</p>
                            </router-link>
                        </div>

                        <!-- botão de logout  -->
                        <div>
                            <v-btn icon>
                                <v-icon color="grey lighten-3">{{
                                    icons.mdiLogout
                                }}</v-icon>
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
                            <!-- inicio  -->
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon class="navbar__menu--icon">
                                        {{ icons.mdiHome }}
                                    </v-icon>
                                </v-list-item-icon>
                                <router-link to="/inicio">
                                    <p>Inicio</p>
                                </router-link>
                            </v-list-item>

                            <!-- Modalidade  -->
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon class="navbar__menu--icon">
                                        {{ icons.mdiFencing }}
                                    </v-icon>
                                </v-list-item-icon>
                                <router-link to="/modalidades">
                                    <p>Modalidades</p>
                                </router-link>
                            </v-list-item>

                            <!-- area do aluno  -->
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon class="navbar__menu--icon">
                                        {{ icons.mdiAccountSchoolOutline }}
                                    </v-icon>
                                </v-list-item-icon>
                                <router-link to="/area-do-aluno">
                                    <p>Área do Aluno</p>
                                </router-link>
                            </v-list-item>
                            <!-- a academia  -->
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon class="navbar__menu--icon">
                                        {{ icons.mdiHomeCity }}
                                    </v-icon>
                                </v-list-item-icon>
                                <router-link to="/academia">
                                    <p>A Academia</p>
                                </router-link>
                            </v-list-item>
                            <!--sobre nós  -->
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon class="navbar__menu--icon">
                                        {{ icons.mdiAccountGroup }}
                                    </v-icon>
                                </v-list-item-icon>
                                <router-link to="/sobrenos">
                                    <p>Sobre Nós</p>
                                </router-link>
                            </v-list-item>
                            <!-- botão de matricula  -->
                            <v-list-item>
                                <v-card class="mx-auto">
                                    <v-btn icon>
                                        {{ icons.mdiLogout }}
                                    </v-btn>
                                </v-card>
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
};
</script>

<style lang="scss">
@import "../../css/app.css";
@import "../../sass/variables.scss";
.navbar__desktop--links {
    @apply flex justify-between;
}
.navbar__desktop--links a p {
    font-style: italic;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #f7f7f7;
}
</style>
