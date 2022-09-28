<template>
    <div id="app">
        <!-- imagem de background -->
        <section>
            <div id="Inicio"></div>
            <v-responsive>
                <v-img :src="images.StartBanner">
                    <p class="banner--text">
                        DO THE <span color="rosa">IMPOSSIBLE</span>
                    </p>
                </v-img>
            </v-responsive>
        </section>

        <!-- carrosel de modalidades -->
        <section >
            <div class="title__ my-3"  id="Modalidades">
                <p class="title__-dark">
                    ESCOLHA SEU ESTILO DE
                    <span class="title__-pink">LUTA</span>
                </p>
            </div>
            <carrousel-Modalidades />
        </section>

        <!-- a academia  -->
        <section class="bg-preto"  >
            <div class="title__" id="Academia">
                <p class="title__-light">
                    A <span class="title__-pink">ACADEMIA</span>
                </p>
            </div>

            <v-container class="space-y-6 lg:space-y-14">
                <!-- card Muay Thai -->
                <v-card class="academia__card" flat raised>
                    <v-row>
                        <v-col
                            sm="12"
                            md="12"
                            lg="6"
                            class="academia__card--image"
                        >
                            <v-img :src="images.locais.salaMuay">
                                <template v-slot:placeholder>
                                    <v-row
                                        class="fill-height ma-0"
                                        align="center"
                                        justify="center"
                                    >
                                        <v-progress-circular
                                            indeterminate
                                            color="grey lighten-5"
                                        ></v-progress-circular>
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
                                <v-btn
                                    color="#4361ee"
                                    class="academia__button--btn"
                                    max-heigth="250"
                                    height="50"
                                    tile
                                    btn-rounded-border-radius
                                >
                                    <p class="academia__button--text">
                                        AMPLO ESPAÇO
                                    </p>
                                </v-btn>

                                <v-btn
                                    color="#4361ee"
                                    class="academia__button--btn"
                                    max-heigth="250"
                                    height="50"
                                    tile
                                    btn-rounded-border-radius
                                >
                                    <p class="academia__button--text">
                                        EQUIPAMENTOS
                                    </p>
                                    <p class="academia__button--text">NOVOS</p>
                                </v-btn>

                                <v-btn
                                    color="#4361ee"
                                    class="academia__button--btn"
                                    max-heigth="250"
                                    height="50"
                                    tile
                                    btn-rounded-border-radius
                                >
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
                                    <v-row
                                        class="fill-height ma-0"
                                        align="center"
                                        justify="center"
                                    >
                                        <v-progress-circular
                                            indeterminate
                                            color="grey lighten-5"
                                        ></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                        </v-col>
                        <v-col sm="12" lg="6" align-self="center">
                            <v-card-title class="academia__card--title"
                                >Sala Boxe</v-card-title
                            >
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
                                <v-btn
                                    color="#4361ee"
                                    class="academia__button--btn"
                                    max-heigth="250"
                                    height="50"
                                    tile
                                    btn-rounded-border-radius
                                >
                                    <p class="academia__button--text">
                                        AMPLO ESPAÇO
                                    </p>
                                </v-btn>

                                <v-btn
                                    color="#4361ee"
                                    class="academia__button--btn"
                                    max-heigth="250"
                                    height="50"
                                    tile
                                    btn-rounded-border-radius
                                >
                                    <p class="academia__button--text">
                                        EQUIPAMENTOS NOVOS
                                    </p>
                                </v-btn>

                                <v-btn
                                    color="#4361ee"
                                    class="academia__button--btn"
                                    max-heigth="250"
                                    height="50"
                                    tile
                                    btn-rounded-border-radius
                                >
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
                                    <v-row
                                        class="fill-height ma-0"
                                        align="center"
                                        justify="center"
                                    >
                                        <v-progress-circular
                                            indeterminate
                                            color="grey lighten-5"
                                        ></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                        </v-col>
                        <v-col sm="12" lg="6" align-self="center">
                            <v-card-title class="academia__card--title"
                                >Sala Judô</v-card-title
                            >
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
                                <v-btn
                                    color="#4361ee"
                                    class="academia__button--btn"
                                    max-heigth="250"
                                    height="50"
                                    tile
                                    btn-rounded-border-radius
                                >
                                    <p class="academia__button--text">
                                        AMPLO ESPAÇO
                                    </p>
                                </v-btn>

                                <v-btn
                                    color="#4361ee"
                                    class="academia__button--btn"
                                    max-heigth="250"
                                    height="50"
                                    tile
                                    btn-rounded-border-radius
                                >
                                    <p class="academia__button--text">
                                        EQUIPAMENTOS NOVOS
                                    </p>
                                </v-btn>

                                <v-btn
                                    color="#4361ee"
                                    class="academia__button--btn"
                                    max-heigth="250"
                                    height="50"
                                    tile
                                    btn-rounded-border-radius
                                >
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
            <div class="title__">
                <p class="title__-light">
                    ESCOLHA O SEU <span class="title__-pink">PLANO</span>
                </p>
            </div>
            <v-container class="pacote">
                <v-row align="center" justify="center">
                    <!-- standard -->
                    <v-col lg="3" md="4" sm="12">
                        <v-card class="pacote__card">
                            <v-img
                                :src="images.pacote.standard"
                                class="pacote__card--image--standard align-end"
                            >
                                <template v-slot:placeholder>
                                    <v-row
                                        class="fill-height ma-0"
                                        align="center"
                                        justify="center"
                                    >
                                        <v-progress-circular
                                            indeterminate
                                            color="grey lighten-5"
                                        ></v-progress-circular>
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
                    <v-col lg="3" md="4" sm="12">
                        <v-card class="pacote__card">
                            <v-img
                                :src="images.pacote.gofighter"
                                class="pacote__card--image--gofighter"
                            >
                                <template v-slot:placeholder>
                                    <v-row
                                        class="fill-height ma-0"
                                        align="center"
                                        justify="center"
                                    >
                                        <v-progress-circular
                                            indeterminate
                                            color="grey lighten-5"
                                        ></v-progress-circular>
                                    </v-row>
                                </template>

                                <div class="pacote__card--content">
                                    <v-card-title class="pacote__card--title">
                                        Standard
                                    </v-card-title>

                                    <v-card-text class="pacote__card--text">
                                        3 modalidade
                                    </v-card-text>
                                </div>
                            </v-img>
                        </v-card>
                    </v-col>
                    <!-- fighter -->
                    <v-col lg="3" md="4" sm="12">
                        <v-card class="pacote__card">
                            <v-img
                                :src="images.pacote.fighter"
                                class="pacote__card--image--fighter"
                            >
                                <template v-slot:placeholder>
                                    <v-row
                                        class="fill-height ma-0"
                                        align="center"
                                        justify="center"
                                    >
                                        <v-progress-circular
                                            indeterminate
                                            color="grey lighten-5"
                                        ></v-progress-circular>
                                    </v-row>
                                </template>

                                <div class="pacote__card--content">
                                    <v-card-title class="pacote__card--title">
                                        Standard
                                    </v-card-title>

                                    <v-card-text class="pacote__card--text">
                                        2 modalidade
                                    </v-card-text>
                                </div>
                            </v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!-- sobre nos  -->
        <section class="my-5 sobrenos" id="SobreNos">
            <div class="title__">
                <p class="title__-dark">
                    SOBRE <span class="title__-pink">NÓS</span>
                </p>
            </div>

            <v-row>
                <v-col sm="12" lg="6" class="flex justify-center items-center">
                    <v-img :src="images.logo" min-width="180" max-width="500" />
                </v-col>
                <v-col sm="12" lg="6" class="sobrenos__section">
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
                    <v-btn
                        outlined
                        rounded
                        color="#F72585"
                        class="sobrenos__btn"
                        >Leia Mais</v-btn
                    >
                </v-col>
            </v-row>
        </section>

        <!-- fale conosco -->
        <section class="bg-preto rodape">
            <!-- titulo da seção  -->
            <div class="title__ col-span-12">
                <p class="title__-light">
                    FALE <span class="title__-blue">CONOSCO</span>
                </p>
            </div>
            <!-- form -->
            <div class="container mx-auto">
                <validation-observer ref="observer" v-slot="{ invalid }">
                    <form @submit.prevent="submit" class="rodape__form">
                        <div class="col-span-6">
                            <!-- campo do nome  -->
                            <validation-provider
                                v-slot="{ errors }"
                                name="Name"
                                rules="required|max:10"
                            >
                                <v-text-field
                                    v-model="info.nome"
                                    :error-messages="errors"
                                    placeholder="Nome...."
                                    required
                                    solo
                                ></v-text-field>
                            </validation-provider>
                            <!-- campo do Email  -->
                            <validation-provider
                                v-slot="{ errors }"
                                name="email"
                                rules="required|email"
                            >
                                <v-text-field
                                    v-model="info.email"
                                    :error-messages="errors"
                                    placeholder="E-mail...."
                                    required
                                    solo
                                ></v-text-field>
                            </validation-provider>

                            <v-btn
                                class="mr-4 rodape__form--btn"
                                type="submit"
                                :disabled="invalid"
                                color="#4361ee"
                                @click="enviarDados()"
                            >
                                <h4>submit</h4>
                            </v-btn>
                        </div>
                        <div class="col-span-6">
                            <!-- campo de texto  -->
                            <validation-provider
                                v-slot="{ errors }"
                                rules="required"
                                name="digits"
                            >
                                <v-textarea
                                    v-model="info.descricao"
                                    :error-messages="errors"
                                    required
                                    solo
                                    height="200"
                                    label="Digite Aqui..."
                                ></v-textarea>
                            </validation-provider>
                        </div>
                    </form>
                </validation-observer>
            </div>
            <!-- Dados de contato  -->
            <div>
                <div class="rodape__info">
                    <div class="rodape__info--contato">
                        <h5 class="rodape__info-title">Academia go fight</h5>
                        <p>
                            Rua Sagrado Coração, 876 - Canindé,São Paulo - SP<br />
                            09999-000
                        </p>
                        <p>(11) 9999-9999</p>
                        <p>contato@gofight.com.br</p>
                    </div>

                    <div class="rodape__info--sociais">
                        <div>
                            <h5 class="rodape__info-title">redes sociais</h5>
                        </div>
                        <div class="flex justify-around bg-red">
                            <v-btn icon>
                                <div>
                                    <facebook-icon
                                        size="1.5x"
                                        class="rodape__info--sociais-facebook"
                                    />
                                </div>
                                <p class="rodape__icon--font">Facebook</p>
                            </v-btn>

                            <v-btn icon>
                                <div>
                                    <instagram-icon
                                        size="1.5x"
                                        class="rodape__info--sociais-instagram"
                                    />
                                </div>
                                <p class="rodape__icon--font">instagram</p>
                            </v-btn>

                            <v-btn icon>
                                <div>
                                    <linkedin-icon
                                        size="1.5x"
                                        class="rodape__info--sociais-linkedin"
                                    />
                                </div>
                                <p class="rodape__icon--font">linkedin</p>
                            </v-btn>
                        </div>
                    </div>
                </div>
            </div>

            <div class="rodape__copyright">
                <p class="title__-light">
                    Copyright © <span class="title__-pink">Gofight </span>2022.
                    Do the impossible.
                </p>
            </div>
        </section>
    </div>
</template>

<script>
import carrouselModalidades from "../components/carrosel/App.vue";
import StartBanner from "../../../css/images/Banner_Image.svg";
import Boxeador from "../../../css/images/boxe.svg";
import judoWide from "../../../css/images/judoCarrosel.svg";
import MuayThai from "../../../css/images/muayThai.svg";
import logo from "../../../css/images/logo.svg";
import salaMuay from "../../../css/images/sala_muai.svg";
import salaBox from "../../../css/images/sala_boxe.svg";
import salaJudo from "../../../css/images/sala_judo.svg";
import standard from "../../../css/images/card_pacote-standard.svg";
import fighter from "../../../css/images/card_pacote-fighter.svg";
import gofighter from "../../../css/images/card_pacote-gofighter.svg";
import {
    ChevronRightIcon,
    ChevronLeftIcon,
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
} from "vue-feather-icons";
import {
    extend,
    ValidationObserver,
    ValidationProvider,
    setInteractionMode,
} from "vee-validate";

export default {
    name: "inicio",
    components: {
        ChevronRightIcon,
        ChevronLeftIcon,
        carrouselModalidades,
        ValidationObserver,
        ValidationProvider,
        FacebookIcon,
        InstagramIcon,
        LinkedinIcon,
    },
    data() {
        return {
            info: {
                nome: "",
                email: "",
                descrição: "",
            },
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
    methods: {
        // submit() {
        //     var data = {
        //         nome: this.info.nome,
        //         email: this.info.email,
        //         descricao: this.info.descricao,
        //     };
        //     this.$axios
        //         .post("faleConosco", data)
        //         .then((response) => {
        //             console.log(response);
        //             localStorage.setItem("token", response.data.acess_token);
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //         });
        //     // this.$swal("Sucesso", "Dados Enviados!!!", "success");
        // },
       
        scrollMeTo(refName) {
            var element = this.$refs[refName];
            element.scrollIntoView({ behavior: 'smooth' });
        }
    },

    computed: {
        anoAtual() {
            data = new Date().getFullYear();

            return data;
        },
    },
};
</script>

<style scoped lang="scss">
@import "../../../sass/variables.scss";
.banner--text {
    @apply absolute top-0 left-0 pl-7 pt-7;
    font-style: italic;
    font-weight: 700;
    font-size: 3rem;
    line-height: 72px;
    color: $branco;

    & > span {
        color: $rosa;
    }
}

.title__ {
    @apply text-center;
    font-style: italic;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;

    &-dark {
        color: $preto;
    }

    &-light {
        color: $branco;
    }

    &-pink {
        color: $rosa;
    }

    &-blue {
        color: $azul;
    }

    &-gray {
        color: $cinza;
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
            background-color: $azul;
            border-radius: 15px;

            @media (max-width: 1440px) {
                width: 33%;
            }
        }

        &--text {
            @apply break-words;
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
    @apply flex flex-wrap justify-center;
    &__card {
        @apply relative overflow-hidden flex justify-center items-center;
        overflow: hidden;
        border: none;
        outline: none;
        border-radius: 25px;

        &--image {
            &--standard {
                @apply flex flex-wrap justify-center items-end;
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
                background: radial-gradient(
                    104.8% 104.8% at 50% -2.1%,
                    rgba(217, 217, 217, 0) 0%,
                    rgba(205, 127, 50, 0.6) 100%
                );
            }

            &--gofighter {
                @apply flex flex-wrap justify-center items-end;
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
                background: radial-gradient(
                    104.8% 104.8% at 50% -2.1%,
                    rgba(153, 139, 60, 0.55) 0%,
                    rgba(255, 215, 0, 0.4) 100%
                );
            }

            &--fighter {
                @apply flex justify-center items-end;
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
                background: radial-gradient(
                    104.8% 104.8% at 50% -2.1%,
                    rgba(255, 255, 255, 0) 0%,
                    rgba(192, 192, 192, 0.6) 100%
                );
            }
        }

        &--content {
            @apply relative;
        }

        &--title {
            font-style: italic;
            font-weight: 600;
            font-size: 20px;
            line-height: 30px;
            letter-spacing: 0.5em;
            color: $branco;
            text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
        }

        &--text {
            font-style: italic;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.5em;
            color: $branco;
            text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
        }
    }
}

.sobrenos {
    &__section {
        @apply flex flex-col;
        @media screen and (max-width: 768px) {
            @apply flex flex-col items-center;
        }
    }
    &__text {
        &--align {
            @apply my-14 text-justify px-10;

            @media screen and (max-width: 768px) {
                @apply my-6 text-center;
            }
        }
    }
    &__btn {
        width: 25%;
    }
}

.rodape {
    @apply space-y-4;

    &__form {
        @apply relative grid grid-cols-12 gap-4 w-3/6 mx-auto;
        @media screen and (max-width: 768px) {
            @apply grid-cols-6;
        }
        &--space_6 {
            @apply col-span-12;
            @media screen and (max-width: 768px) {
                @apply col-span-6;
            }
        }

        &--btn {
            @apply w-full;

            & > p {
                font-style: italic;
                font-weight: 700;
                font-size: 20px;
                line-height: 30px;
                color: $branco;
            }
        }
    }

    &__info {
        @apply grid grid-cols-12  mx-auto justify-items-center;
        @media screen and (max-width: 768px) {
            @apply grid-cols-6 w-full space-y-6;
        }
        font-style: italic;
        font-weight: 600;

        &--contato {
            @apply flex flex-col items-start col-span-6 space-y-6;

            @media screen and (max-width: 768px) {
                @apply flex items-center col-span-6 space-y-6;
            }
            color: #dcd9d9;
        }

        &--sociais {
            @apply col-span-6 space-y-6;
            & > div {
                @apply flex flex-col justify-between items-center;
            }

            &-facebook {
                width: 25px;
                height: 25px;
                position: relative;
            }

            &-facebook::after {
                content: "";
                position: absolute;
                border-radius: 25px;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #3b5998;
            }

            &-instagram {
                width: 25px;
                height: 25px;
                z-index: 1;
                position: relative;
            }

            &-instagram::before {
            }

            &-linkedin {
                width: 25px;
                height: 25px;
                position: relative;
            }

            &-linkedin::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                border-radius: 50px;
                width: 100%;
                height: 100%;
                background: #007bb5;
            }
        }

        &-title {
            color: #ffff;
            font-weight: 600;
        }
    }

    &__icon {
        &--font {
            font-family: "Poppins";
            font-style: italic;
            font-weight: 700;
            font-size: 12px;
            line-height: 18px;
            color: #c4c4c4;
        }

        &--facebook {
            width: 20px;
            height: 20px;
            position: relative;
            background-color: transparent;
        }

        &--facebook::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background-color: #3b5998;
            border-radius: 25px;
        }

        &--instagram {
            width: 25px;
            height: 25px;
        }

        &--instagram::before {
            content: "";
            border-radius: 50px;
            position: absolute;
            top: 0;
            left: 0;
            width: 120%;
            height: 120%;
            z-index: 0;
        }
    }

    &__copyright {
        @apply w-3/6 mx-auto py-5 flex justify-center;
        @media screen and (max-width: 768px) {
            @apply w-full;
        }
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
