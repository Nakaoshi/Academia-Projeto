<template>
  <div id="app">
  
      <!-- navbar no desktop  -->
      <nav>
        <v-card class="overflow-hidden">
          <v-app-bar elevation="4" class="navbar__desktop" fixed hide-on-scroll>
            <div class="flex justify-between">
              <v-img :src="logo" max-width="240" />

              <div class="navbar__desktop--links">


                <!-- Inicio -->
                <div>
                  <router-link to="/inicio" >
                    <p>Inicio</p>
                  </router-link>
                </div>

                <!-- Modalidades  -->
                <div>
                  <router-link to="/modalidades">
                    <p>Modalidades</p>
                  </router-link>
                </div>

                <!-- A academia  -->
                <div>
                  <router-link :to="{ path: '/academia' }">
                    <p>A Academia</p>
                  </router-link>
                </div>

                <!-- sobre nós  -->
                <div>
                  <router-link :to="{ path: '/sobrenos' }">
                    <p>Sobre Nós</p>
                  </router-link>
                </div>

                <!-- area do aluno  -->
                <div>
                  <router-link :to="{ path: '/area-aluno' }">
                    <p>Área do aluno</p>
                  </router-link>
                </div>

                <!-- matricule-se  -->
                <div>
                  <v-card>
                    <v-btn color="#F72585" class="depressed">
                      <p class="button__txt--font">MATRICULE-SE</p>
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
        <v-card class="mx-auto overflow-hidden" height="200rem">
          <v-app-bar elevation="5" fixed hide-on-scroll>
            <!-- icone menu hamburguer -->
            <v-app-bar-nav-icon @click="drawer = true">
              <v-icon>{{ icons.mdiViewList }}</v-icon>
            </v-app-bar-nav-icon>

            <v-img :src="logo" max-width="240" class="mx-auto lg:mx-0"></v-img>
          </v-app-bar>

          <v-navigation-drawer v-model="drawer" fixed app>
          
            <v-list nav dense>
              <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                <!-- inicio  -->
                <v-list-item @click="retornaIndex()">
                  <v-list-item-icon>
                    <v-icon class="navbar__menu--icon">{{ icons.mdiHome }}</v-icon>
                  </v-list-item-icon>
                  <router-link to="/">
                    <p>Inicio</p>
                  </router-link>
                </v-list-item>

                <!-- Modalidade  -->
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon class="navbar__menu--icon">{{ icons.mdiFencing }}</v-icon>
                  </v-list-item-icon>
                  <router-link :to="{ path: '/modalidades' }">
                    <p>Modalidades</p>
                  </router-link>
                </v-list-item>

                <!-- area do aluno  -->
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon class="navbar__menu--icon">{{ icons.mdiAccountSchoolOutline }}</v-icon>
                  </v-list-item-icon>
                  <router-link :to="{ path: '/area-aluno' }">
                    <p>Área do Aluno</p>
                  </router-link>
                </v-list-item>
                <!-- a academia  -->
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon class="navbar__menu--icon">{{ icons.mdiHomeCity }}</v-icon>
                  </v-list-item-icon>
                  <router-link :to="{ path: '/academia' }">
                    <p>A Academia</p>
                  </router-link>
                </v-list-item>
                <!--sobre nós  -->
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon class="navbar__menu--icon">{{ icons.mdiAccountGroup }}</v-icon>
                  </v-list-item-icon>
                  <router-link :to="{ path: '/sobrenos' }">
                    <p>Sobre Nós</p>
                  </router-link>
                </v-list-item>
                <!-- botão de matricula  -->
                <v-list-item>
                  <v-card class="mx-auto">
                    <v-btn color="#F72585" class="depressed">
                      <router-link :to="{ path: '/matricula' }">
                        <p class="button__txt--font">MATRICULE-SE</p>
                      </router-link>
                    </v-btn>
                  </v-card>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </nav>

    <RouterView></RouterView>
  </div>
</template>

<script>

import logo from "../css/images/logo.png";
import {
  mdiHome,
  mdiAccountGroup,
  mdiAccountSchoolOutline,
  mdiViewList,
  mdiHomeCity,
  mdiFencing,
} from "@mdi/js";

export default {
  name: "App",
  data: function () {
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

  methods:{
    retornaIndex(){
      this.$router.push('inicio')
    }
  }


  // redireciona para a url / inicio 
  // beforeCreate(){
  //   if(this.$router.history.current.path === ''){
  //     this.$router.push('inicio')
  //   }
  // }


};
</script>

<style>
.navbar__desktop {
  display: initial;
}
</style>
