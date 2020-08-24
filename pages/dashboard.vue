<template>
  <div class="px-6 mt-12">
    <!-- Header -->
    <div class="d-flex flex-column flex-sm-row align-center">
      <span class="page-title mb-0 mb-4">Navers</span>
      <v-spacer></v-spacer>
      <v-btn
        depressed
        tile
        color="button"
        class="pa-6 white--text"
        to="/create"
        nuxt
        >Adicionar Naver</v-btn
      >
    </div>
    <!-- Loader -->
    <v-row v-if="loading" class="mt-4">
      <v-col v-for="i in 4" :key="i" cols="6" sm="4" lg="3">
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
      </v-col>
    </v-row>
    <!-- List of profiles -->
    <v-row class="mt-4">
      <v-col
        v-if="!loading && navers.length === 0"
        cols="12"
        class="d-flex justify-center align-center flex-column"
      >
        <p class="no-naver">Nenhum naver cadastrado!</p>
        <v-btn depressed tile color="button" class="pa-6 white--text"
          >Cadastrar um Naver</v-btn
        >
      </v-col>
      <v-col
        v-for="naver in navers"
        v-else
        :key="naver.id"
        cols="6"
        sm="4"
        lg="3"
      >
        <NaverProfile :naver="naver" @naver-deleted="reload"></NaverProfile>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar" bottom color="secondary" right>
      {{ snackbarText }}
      <template v-slot:action="{ attrs }">
        <v-btn v-bind="attrs" dark text @click="snackbar = false">
          fechar
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import NaverProfile from '@/components/sheets/NaverProfile.vue'

export default {
  components: {
    NaverProfile,
  },
  data() {
    return {
      loading: true,
      navers: [],
      snackbar: false,
      snackbarText: '',
    }
  },
  created() {
    this.reload()
    if (this.$router.currentRoute.query.saved) {
      this.snackbarText = 'Naver salvo com sucesso!'
      this.snackbar = true
    }
    if (this.$router.currentRoute.query.edited) {
      this.snackbarText = 'Naver atualizado com sucesso!'
      this.snackbar = true
    }
  },
  methods: {
    async reload() {
      const response = await this.$axios.get('/navers')
      this.navers = response.data
      this.loading = false
    },
  },
}
</script>

<style lang="scss" scoped>
.page-title {
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
}
.no-naver {
  font-weight: 600;
  font-size: 54px;
}
</style>

<style>
.v-skeleton-loader__image {
  height: 450px;
}
</style>
