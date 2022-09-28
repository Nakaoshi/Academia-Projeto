<template>
    <div class="px-5 space-y-14">
        <div>
            <h3 class="alunos__font--title mt-6">
                {{ this.$route.name.toUpperCase() }}
            </h3>
        </div>

        <!-- treinos -->
        <v-card class="treinos" color="#C4C4C4">
            <div class="treinos__title">
                <v-card-title class="treinos__title--font"
                    >FICHA DE TREINO</v-card-title
                >
                <div class="treinos__title--btns">
                    <v-card-title class="treinos__title--font"
                        >MUAY THAI</v-card-title
                    >
                    <v-btn icon>
                        <chevron-left-icon />
                    </v-btn>
                    <v-btn icon>
                        <chevron-right-icon />
                    </v-btn>
                </div>
            </div>
            <div class="card__container bg-branco">
                <v-card
                    flat
                    color="transparent"
                    v-for="treino in treinos"
                    :key="treino.name"
                    rounded="lg"
                    class="card__content"
                    max-width="240px"
                >
                    <v-card-title class="card__title">
                        TREINO {{ treino.name }}
                    </v-card-title>
                    <v-card
                        flat
                        color="#c4c4c4"
                        height="500px"
                        class="card__content--treinos"
                    >
                        <p>{{ treino.treino }}</p>
                    </v-card>
                </v-card>
            </div>
        </v-card>
        <!-- tabela de eventos -->
        <v-card class="eventos" color="#C4C4C4">
            <div class="eventos__title">
                <v-card-title class="eventos__title--font"
                    >EVENTOS</v-card-title
                >
                <div class="eventos__title--btns">
                    <v-card-title class="eventos__title--font"
                        >Mes
                    </v-card-title>
                    <v-btn icon>
                        <chevron-left-icon />
                    </v-btn>
                    <v-btn icon>
                        <chevron-right-icon />
                    </v-btn>
                </div>
            </div>
            <!-- <div class="eventos__container bg-branco">
                <v-card
                    flat
                    color="#c4c4c4"
                    v-for="(evento, i) in eventos"
                    :key="evento.name"
                    rounded="lg"
                    class="eventos__container--content"
                    max-width="180px"
                    height="180px"
                >
                    {{ i }}
                </v-card>
            </div> -->

            <calendario />
        </v-card>
    </div>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from "vue-feather-icons";
import Calendario from "../components/calendario.vue";
export default {
    components: {
        ChevronLeftIcon,
        ChevronRightIcon,
        Calendario,
    },
    data() {
        return {
            treinos: [
                { name: "A", treino: "supino reto 3x15" },
                { name: "B", treino: "supino reto 3x15" },
                { name: "C", treino: "supino reto 3x15" },
                { name: "D", treino: "supino reto 3x15" },
                { name: "E", treino: "supino reto 3x15" },
            ],
            eventos: [
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
                { name: "vento", data: "dia" },
            ],
        };
    },
};
</script>

<style lang="scss">
.card {
    &__container {
        @apply flex flex-wrap justify-around p-8 overflow-x-scroll;
    }
    &__content {
        @apply w-full;
        &--treinos {
            @apply w-full flex flex-wrap justify-center;
        }
    }
    &__title {
        @apply mx-auto flex flex-col justify-center items-center;
    }
}
.treinos {
    @apply p-9;
    &__title {
        @apply flex flex-wrap justify-between items-center;
        &--font {
            font-family: "Inter";
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            line-height: 39px;
            color: #000000;
        }
        &--btns {
            @apply flex flex-wrap justify-end items-center;
        }
    }
}
.eventos {
    @apply p-9;
    &__container {
        @apply grid grid-cols-7 gap-2 p-9;
        &--content {
            @apply col-span-1;
        }
    }
    &__title {
        @apply flex flex-wrap justify-between items-center;
        &--font {
            font-family: "Inter";
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            line-height: 39px;
            color: #000000;
        }
        &--btns {
            @apply flex flex-wrap justify-end items-center;
        }
    }
}
</style>
