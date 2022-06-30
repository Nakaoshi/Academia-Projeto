<template>
    <div id="app">
        <!-- imagem de background -->
        <section>
            <v-responsive>
                <v-img :src="images.StartBanner">
                    <p class="banner--text">
                        DO THE <span color="rosa">IMPOSSIBLE</span>
                    </p>
                </v-img>
            </v-responsive>
        </section>

        <!-- carrosel de modalidades -->
        <section>
            <div class="title__font my-3">
                <p class="title__font-dark">
                    ESCOLHA SEU ESTILO DE
                    <span class="title__font-pink">LUTA</span>
                </p>
            </div>
            <carrousel-Modalidades />
        </section>

        <!-- a academia  -->
        <section class="bg-preto">
            <div class="title__font">
                <p class="title__font-light">
                    A <span class="title__font-pink">ACADEMIA</span>
                </p>
            </div>

            <v-container class="space-y-6 lg:space-y-14">
                <!-- card Muay Thai -->
                <v-card class="academia__card" flat raised>
                    <v-row>
                        <v-col sm="12" md="12" lg="6" class="academia__card--image">
                            <v-img :src="images.locais.salaMuay">
                                <template v-slot:placeholder>
                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                        </v-col>
                        <v-col sm="12" lg="6" align-self="center">
                            <v-card-title class="academia__card--title">
                                Sala Muay Thai
                            </v-card-title>
                            <v-card-text class="academia__card--text my-3">
                                Não acredite em algo simplesmente porque ouviu.
                                Não acredite em algo simplesmente porque todos
                                falam a respeito. Não acredite em algo
                                simplesmente porque está escrito em seus livros
                                religiosos. Não acredite em algo só porque seus
                                professores e mestres dizem que é verdade.
                            </v-card-text>

                            <v-divider class="my-3 bg-red-600"></v-divider>

                            <v-card-actions class="flex justify-around my-2">
                                <v-btn color="#4361ee" class="academia__button--btn" max-heigth="250" height="50" tile
                                    btn-rounded-border-radius>
                                    <p class="academia__button--text">
                                        AMPLO ESPAÇO
                                    </p>
                                </v-btn>

                                <v-btn color="#4361ee" class="academia__button--btn" max-heigth="250" height="50" tile
                                    btn-rounded-border-radius>
                                    <p class="academia__button--text">
                                        EQUIPAMENTOS NOVOS
                                    </p>
                                </v-btn>

                                <v-btn color="#4361ee" class="academia__button--btn" max-heigth="250" height="50" tile
                                    btn-rounded-border-radius>
                                    <p class="academia__button--text">
                                        AULAS DIÁRIAS
                                    </p>
                                </v-btn>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-card>

                <!-- card boxe -->
                <v-card class="academia__card" outlined flat>
                    <v-row class="academia__card--boxe">
                        <v-col sm="12" lg="6" class="academia__card--image">
                            <v-img :src="images.locais.salaBox">
                                <template v-slot:placeholder>
                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                        </v-col>
                        <v-col sm="12" lg="6" align-self="center">
                            <v-card-title class="academia__card--title">Sala Boxe</v-card-title>
                            <v-card-text class="academia__card--text my-3">
                                Não acredite em algo simplesmente porque ouviu.
                                Não acredite em algo simplesmente porque todos
                                falam a respeito. Não acredite em algo
                                simplesmente porque está escrito em seus livros
                                religiosos. Não acredite em algo só porque seus
                                professores e mestres dizem que é verdade.
                            </v-card-text>

                            <v-divider class="my-3 bg-red-600"></v-divider>

                            <v-card-actions class="flex justify-around my-2">
                                <v-btn color="#4361ee" class="academia__button--btn" max-heigth="250" height="50" tile
                                    btn-rounded-border-radius>
                                    <p class="academia__button--text">
                                        AMPLO ESPAÇO
                                    </p>
                                </v-btn>

                                <v-btn color="#4361ee" class="academia__button--btn" max-heigth="250" height="50" tile
                                    btn-rounded-border-radius>
                                    <p class="academia__button--text">
                                        EQUIPAMENTOS NOVOS
                                    </p>
                                </v-btn>

                                <v-btn color="#4361ee" class="academia__button--btn" max-heigth="250" height="50" tile
                                    btn-rounded-border-radius>
                                    <p class="academia__button--text">
                                        AULAS DIÁRIAS
                                    </p>
                                </v-btn>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-card>

                <!-- card judo  -->
                <v-card class="academia__card" outlined flat>
                    <v-row>
                        <v-col sm="12" lg="6" class="academia__card--image">
                            <v-img :src="images.locais.salaJudo">
                                <template v-slot:placeholder>
                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                        </v-col>
                        <v-col sm="12" lg="6" align-self="center">
                            <v-card-title class="academia__card--title">Sala Judô</v-card-title>
                            <v-card-text class="academia__card--text my-3">
                                Não acredite em algo simplesmente porque ouviu.
                                Não acredite em algo simplesmente porque todos
                                falam a respeito. Não acredite em algo
                                simplesmente porque está escrito em seus livros
                                religiosos. Não acredite em algo só porque seus
                                professores e mestres dizem que é verdade.
                            </v-card-text>

                            <v-divider class="my-3 bg-red-600"></v-divider>

                            <v-card-actions class="flex justify-around my-2">
                                <v-btn color="#4361ee" class="academia__button--btn" max-heigth="250" height="50" tile
                                    btn-rounded-border-radius>
                                    <p class="academia__button--text">
                                        AMPLO ESPAÇO
                                    </p>
                                </v-btn>

                                <v-btn color="#4361ee" class="academia__button--btn" max-heigth="250" height="50" tile
                                    btn-rounded-border-radius>
                                    <p class="academia__button--text">
                                        EQUIPAMENTOS NOVOS
                                    </p>
                                </v-btn>

                                <v-btn color="#4361ee" class="academia__button--btn" max-heigth="250" height="50" tile
                                    btn-rounded-border-radius>
                                    <p class="academia__button--text">
                                        AULAS DIÁRIAS
                                    </p>
                                </v-btn>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-card>
            </v-container>
        </section>

        <!-- Cards de pacotes -->
        <section class="bg-preto">
            <div class="title__font">
                <p class="title__font-light">
                    ESCOLHA O SEU <span class="title__font-pink">PLANO</span>
                </p>
            </div>
            <v-container class="pacote">
                <v-row align="center" justify="center">
                    <!-- standard -->
                    <v-col cols="3">
                        <v-card class="pacote__card">
                        <v-img :src="images.pacote.standard" class="pacote__card--image--standard align-end">

                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-row>
                            </template>

                            <div class="pacote__card--content">
                                <v-card-title class="pacote__card--title">
                                    Standard
                                </v-card-title>

                                <v-card-text class="pacote__card--text">
                                    1 modalidade
                                </v-card-text>
                            </div>
                        </v-img>
                        </v-card>

                    </v-col>
                    <!-- gofighter -->
                    <v-col cols="3">
                        <v-card class="pacote__card">
                        <v-img :src="images.pacote.gofighter" class="pacote__card--image--gofighter align-end">

                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-row>
                            </template>

                            <div class="pacote__card--content">
                                <v-card-title class="pacote__card--title">
                                    Standard
                                </v-card-title>

                                <v-card-text class="pacote__card--text">
                                    1 modalidade
                                </v-card-text>
                            </div>
                        </v-img>
                        </v-card>

                    </v-col>
                    <!-- fighter -->
                    <v-col cols="3">
                        <v-card class="pacote__card">
                        <v-img :src="images.pacote.fighter" class="pacote__card--image--fighter ">

                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-row>
                            </template>

                            <div class="pacote__card--content">
                                <v-card-title class="pacote__card--title">
                                    Standard
                                </v-card-title>

                                <v-card-text class="pacote__card--text">
                                    1 modalidade
                                </v-card-text>
                            </div>
                        </v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!-- sobre nos  -->
        <section>
            <div class="title__font">
                <p class="title__font-dark my-5">
                    SOBRE <span class="title__font-pink">NÓS</span>
                </p>
            </div>

            <v-row class="grid__cols-12--sobrenos">
                <v-col sm="12" lg="6" class="flex justify-center items-center">
                    <v-img :src="images.logo" min-width="240" max-width="500" />
                </v-col>
                <v-col sm="12" lg="6">
                    <p class="sobrenos__text--align">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Dictumst vestibulum rhoncus est
                        pellentesque elit ullamcorper dignissim cras. Risus sed
                        vulputate odio ut enim blandit. Commodo sed egestas
                        egestas fringilla phasellus faucibus scelerisque
                        eleifend. Phasellus egestas tellus rutrum tellus
                        pellentesque eu.
                    </p>
                    <p class="sobrenos__text--align">
                        Id ornare arcu odio ut sem nulla pharetra diam sit.
                        Aliquet enim tortor at auctor urna nunc. Sollicitudin
                        tempor id eu nisl nunc mi ipsum. Nunc mattis enim ut
                        tellus elementum. Lorem donec massa sapien faucibus.
                        Augue neque gravida in fermentum et sollicitudin. Tortor
                        at risus viverra adipiscing at. Sodales ut eu sem
                        integer vitae justo. Quis auctor elit sed vulputate mi
                        sit. Lorem mollis aliquam ut porttitor leo a diam
                        sollicitudin tempor. Neque aliquam vestibulum morbi
                        blandit. Orci sagittis eu volutpat odio facilisis mauris
                        sit amet massa.
                    </p>
                    <v-btn outlined rounded color="#F72585">Leia Mais</v-btn>

                </v-col>
            </v-row>
        </section>

        <!-- fale conosco -->
        <section class="bg-preto ">
            <div class="title__font">
            <p class="title__font-light">FALE <span class="title__font-blue">CONOSCO</span></p>
            </div>
        </section>

    </div>
</template>

<script>
import carrouselModalidades from "../components/carrosel/App.vue";
import StartBanner from "../../css/images/Banner_Image.svg";
import Boxeador from "../../css/images/boxe.svg";
import judoWide from "../../css/images/judoCarrosel.svg";
import MuayThai from "../../css/images/muayThai.svg";
import logo from "../../css/images/logo.svg";
import salaMuay from "../../css/images/sala_muai.svg";
import salaBox from "../../css/images/sala_boxe.svg";
import salaJudo from "../../css/images/sala_judo.svg";
import standard from "../../css/images/card_pacote-standard.svg";
import fighter from "../../css/images/card_pacote-fighter.svg";
import gofighter from "../../css/images/card_pacote-gofighter.svg";
import { ChevronRightIcon, ChevronLeftIcon } from "vue-feather-icons";

export default {
    name: "inicio",
    components: {
        ChevronRightIcon,
        ChevronLeftIcon,
        carrouselModalidades,
    },
    data() {
        return {
            images: {
                StartBanner,
                judoWide,
                Boxeador,
                MuayThai,
                logo,
                pacote: {
                    standard,
                    fighter,
                    gofighter,
                },
                locais: {
                    salaMuay,
                    salaBox,
                    salaJudo,
                },
            },
        };
    },
};
</script>

<style scoped lang="scss">
.banner--text {
    @apply absolute top-0 left-0 pl-7 pt-7;
    font-style: italic;
    font-weight: 700;
    font-size: 3rem;
    line-height: 72px;
    color: #ffffff;
    &>span {
        color: #f72585;
    }
}

.title__font {
    @apply text-center;
    font-style: italic;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;

    &-dark {
        color: #313131;
    }

    &-light {
        color: #fafafa;
    }

    &-pink {
        color: #f72585;
    }
    &-blue{
        color:#4361EE;
    }
}

.academia {
    &__card {
        overflow: hidden;
        border: none;
        outline: none;
        border-radius: 25px;

        &--title {
            font-style: italic;
            font-weight: 700;
            font-size: 23px;
            line-height: 30px;
            color: #4361ee;

            @media screen and (max-width: 680px) {
                text-align: center;
                font-size: 19px;
            }
        }

        &--text {
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 30px;
            color: #313131;
        }

        &__content--space {
            border-radius: 50%;
        }

        &--boxe {
            display: flex;

            @media (min-width: 1265px) {
                flex-direction: row-reverse;
            }
        }
    }

    &__button {
        &--btn {
            cursor: default !important;
            width: 25%;
            height: 25%;
            background-color: #4361ee;
            border-radius: 15px;

            @media (max-width: 1440px) {
                width: 33%;
            }
        }

        &--text {
            font-weight: 700;
            font-size: 14px;
            line-height: 30px;
            color: #f9f9f9;

            @media (max-width: 1440px) {
                font-size: 12px;
            }
        }
    }
}

.pacote {
    &__card {
        overflow: hidden;
        border: none;
        outline: none;
        border-radius: 25px;
        &--image {
            @apply flex justify-center items-end ;
            &--standard {
                position: relative;
                width: 100%;
                height: 100%;
            }

            &--standard::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: radial-gradient(104.8% 104.8% at 50% -2.1%, rgba(217, 217, 217, 0) 0%, rgba(205, 127, 50, 0.6) 100%);
            }

            &--gofighter {
                position: relative;
                width: 100%;
                height: 100%;
            }

            &--gofighter::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: radial-gradient(104.8% 104.8% at 50% -2.1%, rgba(153, 139, 60, 0.55) 0%, rgba(255, 215, 0, 0.4) 100%);
            }

            &--fighter {
                position: relative;
                width: 100%;
                height: 100%;
            }

            &--fighter::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: radial-gradient(104.8% 104.8% at 50% -2.1%, rgba(255, 255, 255, 0) 0%, rgba(192, 192, 192, 0.6) 100%);
            }
        }

        &--content {
        }


        &--title {
            font-style: italic;
            font-weight: 600;
            font-size: 20px;
            line-height: 30px;
            letter-spacing: 0.5em;
            color: #ffffff;
            text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
        }

        &--text {
            font-style: italic;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            text-align: justify;
            letter-spacing: 0.5em;
            color: #ffffff;
            text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
        }
    }
}

.sobrenos__text--align {
    @screen lg {
        @apply my-14 text-justify;
    }

    @screen sm {
        @apply my-6;
    }
}

@media (min-width: 680px) and (max-width: 1024px) {
    .banner--text {
        font-size: 2rem;
    }
}

@media screen and (max-width: 680px) {
    .banner--text {
        @apply pt-0 pl-5;
        font-size: 1rem;
    }
}
</style>
