<template>
  <v-app-bar fixed flat app height="85" class="px-6" color="secondary">
    <nuxt-link to="/dashboard">
      <v-img
        :src="require('@/assets/images/logo.svg')"
        alt="Nave"
        width="140"
        contain
      ></v-img>
    </nuxt-link>
    <v-spacer></v-spacer>
    <v-btn text color="primary" @click="$auth.logout()">
      Sair
    </v-btn>
  </v-app-bar>
</template>
