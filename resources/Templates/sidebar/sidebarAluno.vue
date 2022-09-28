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
        <div class="sidebarMobile " >
                <v-app-bar
                  :collapse="!collapseOnScroll"
                  :collapse-on-scroll="collapseOnScroll"
                  absolute
                  color="deep-purple accent-4"
                  dark
                  scroll-target="#scrolling-techniques-6"
                >
                  <v-app-bar-nav-icon></v-app-bar-nav-icon>
            
                  <v-toolbar-title>Collapsing Bar</v-toolbar-title>
            
                  
                </v-app-bar>
                <v-sheet
                  id="scrolling-techniques-6"
                  class="overflow-y-auto"
                  max-height="600"
                >
                  <v-container style="height: 1000px;"></v-container>
                </v-sheet>
        </div>
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
        @apply block container mx-auto;
        border:2px solid red;
        &__menu {
            @apply space-x-7;
            &--item {
                @apply space-x-5;
            }
        }
    }
}
</style>
