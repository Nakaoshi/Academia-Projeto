<template>
    <div class="relative">
        <!-- navbar desktop -->
        <div class="sidebar">
            <v-img :src="logo" max-width="250" class="sidebar__img" />
            <div class="sidebar__group">
                <router-link
                    :to="{ name: 'Inicio' }"
                    class="sidebar__group--icons"
                >
                <UserIcon size="2.3x" />
                    <p class="sidebar__text">INICIO</p>
                </router-link>
                <router-link
                    :to="{ name: 'Pagamentos' }"
                    class="sidebar__group--icons"
                >
                    <DollarSignIcon size="2.3x" />
                    <p class="sidebar__text">PAGAMENTOS</p>
                </router-link>
            </div>
            <v-btn
                color="#f72585"
                class="sidebar__btn"
                absolute
                bottom
                left
                right
            >
                <LogOutIcon />
            </v-btn>
        </div>
        <!-- navbar mobile -->
        <header class="sidebarMobile">
                <router-link :to="{name: 'Inicio'}">Inicio</router-link>
                <router-link :to="{name: 'Pagamentos'}">Pagamentos</router-link>
                <!-- <v-img :src="logo" max-width="240" min-width="100"/> -->

        </header>
    </div>
</template>

<script>
import logo from "../../css/images/logo.svg";
import {
    HomeIcon,
    UserIcon,
    DollarSignIcon,
    LogOutIcon,
    MenuIcon,
} from "vue-feather-icons";
export default {
    components: {
        HomeIcon,
        UserIcon,
        DollarSignIcon,
        LogOutIcon,
        MenuIcon,
    },
    data() {
        return {
            logo,
            drawer: false,
            group: null,
            collapseOnScroll: true,
        };
    },
};
</script>

<style lang="scss">
@import "../../sass/variables.scss";
@media screen and (min-width: 1025px) {
    .sidebar {
        @apply w-full h-screen fixed z-10;
        width: 100%;
        max-width: 300px;
        background-color: $cinza;
        &__text {
            font-family: "Inter" !important;
            font-style: normal;
            font-weight: 800;
            font-size: 15px;
            line-height: 18px;
            color: $branco !important;
            text-decoration: none;
        }
        &__img {
            @apply container mx-auto;
        }
        &__group {
            @apply container mx-auto space-y-9  mt-14 flex flex-col justify-center items-center;
            &--icons {
                @apply flex items-center w-6/12 space-x-1;
            }
        }
        &__btn {
            @apply mx-auto w-6/12;
        }
    }
    .sidebarMobile {
        @apply hidden;
    }
}

@media screen and (max-width: 1024px) {
    .sidebar {
        @apply hidden;
    }
    .sidebarMobile {
        @apply w-screen max-w-full h-10 fixed z-10 flex items-center justify-between px-10;
        background-color: $cinza;
    }
}
</style>
