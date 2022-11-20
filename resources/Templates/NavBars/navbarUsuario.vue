<template>
    <div>
        <!-- navbar no desktop  -->
        <nav class="navbar__desktop">
            <v-card class="overflow-hidden">
                <v-app-bar elevation="4" fixed hide-on-scroll>
                    <div class="flex justify-between">
                        <v-img :src="logo" max-width="240" />

                        <div class="navbar__desktop--links">
                            <!-- Inicio -->
                            <div>
                                <v-btn
                                    text
                                    href="#Inicio"
                                >
                                    Inicio
                                </v-btn>
                                
                            </div>

                            <!-- Modalidades  -->
                            <div>
                                <v-btn
                                href="#Modalidades"
                                    text
                                >
                                Modalidades
                                </v-btn>
                            </div>

                            <!-- A academia  -->
                            <div>
                                <v-btn
                                href="#Academia"
                                    text
                                >
                                    A Academia
                                </v-btn>
                            </div>

                            <!-- sobre nós  -->
                            <div>
                                <v-btn
                                    href="#SobreNos"
                                    text
                                >
                                    Sobre Nós
                                </v-btn>
                            </div>

                            <!-- area do aluno  -->
                            <div>
                                <v-btn text @click="alunos()">
                                    Área do aluno
                                </v-btn>
                            </div>

                            <!-- matricule-se  -->
                            <div>
                                <v-card>
                                    <v-btn
                                        color="#F72585"
                                        class="btn__matricula depressed"
                                        @click="AlertaInscrições()"
                                    >
                                            MATRICULE-SE
                                    </v-btn>
                                </v-card>
                            </div>
                        </div>
                    </div>
                </v-app-bar>
            </v-card>
        </nav>
        <!-- navbar dispositivos moveis -->
        <nav class="navbar__mobile">
            <v-card class="mx-auto overflow-hidden">
                <v-app-bar elevation="5" fixed hide-on-scroll>
                    <!-- icone menu hamburguer -->
                    <v-app-bar-nav-icon @click="drawer = true">
                        <v-icon>{{ icons.mdiViewList }}</v-icon>
                    </v-app-bar-nav-icon>

                    <v-img
                        :src="logo"
                        max-width="240"
                        class="mx-auto lg:mx-0"
                    ></v-img>
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
                                <v-btn
                                href="#Inicio"
                                    text
                                >
                                Inicio
                                </v-btn>
                            </v-list-item>

                            <!-- Modalidade  -->
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon class="navbar__menu--icon">
                                        {{ icons.mdiFencing }}
                                    </v-icon>
                                </v-list-item-icon>
                                <v-btn
                                href="#Modalidades"
                                    text
                                >
                                Modalidades
                                </v-btn>
                            </v-list-item>

                            <!-- area do aluno  -->
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon class="navbar__menu--icon">
                                        {{ icons.mdiAccountSchoolOutline }}
                                    </v-icon>
                                </v-list-item-icon>
                                <v-btn text @click="alunos">
                                    Área do Aluno
                                </v-btn>
                            </v-list-item>




                            <!-- a academia  -->
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon class="navbar__menu--icon">
                                        {{ icons.mdiHomeCity }}
                                    </v-icon>
                                </v-list-item-icon>
                                <v-btn
                                href="#Academia"
                                    text
                                >
                                Academia
                                </v-btn>
                            </v-list-item>



                            <!--sobre nós  -->
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon class="navbar__menu--icon">
                                        {{ icons.mdiAccountGroup }}
                                    </v-icon>
                                </v-list-item-icon>
                                <v-btn
                                href="#SobreNos"
                                    text
                                >
                                Sobre Nós
                                </v-btn>
                            </v-list-item>



                            
                            <!-- botão de matricula  -->
                            <v-list-item>
                                <v-card class="mx-auto">
                                    <v-btn color="#F72585" class="depressed" @click="AlertaInscrições">
                                           
                                                MATRICULE-SE
                                            
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
import logo from "../../css/images/logo.svg";
import {
    mdiHome,
    mdiAccountGroup,
    mdiAccountSchoolOutline,
    mdiViewList,
    mdiHomeCity,
    mdiFencing,
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
            },
            logo,
            drawer: false,
            group: null,
        };
    },
    methods: {
        alunos(){
            location.assign("/alunos")
        },
        AlertaInscrições(){
            this.$swal({
                title:"Inscrições Presenciais Apenas",
                text:"Vá até o endereço referido no sobre nós!!",
                imageUrl:logo,
                imageWidth:400,
                imageHeight:200,

            })
        }
    },
};
</script>

<style lang="scss">
.navbar {
    &__desktop {
        z-index: 10000000000;
    }
    &__mobile {
        z-index: 0;
    }
}
.btn__matricula:hover {
    transform: scale(1.1);
    transition: all 1s;
}
</style>
