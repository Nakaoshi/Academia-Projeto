<template>
      <div>
         <v-card
    class="mx-auto overflow-hidden"
    height="100rem"
  >
    <v-app-bar
      class="navbar_main"
      dark
      height="100"
    >
      <v-app-bar-nav-icon @click="drawer = true" width="60" height="100" ></v-app-bar-nav-icon>

      <div class="nav_Logo">
        <v-img
        alt="GoFight"
        max-width="90"
        >
        <logo/></v-img>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
    </div>
</template>

<script>
import logo from '../src/assets/logo-sem-texto.png'
export default ({
  components: {
    logo
  },
  data: () => (
    {
      drawer: false,
      group: null
    })
})
</script>

<style>

</style>
