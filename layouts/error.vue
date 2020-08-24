<template>
  <v-app dark>
    <div v-if="error.statusCode === 404" class="fill-height">
      <div class="d-flex flex-column justify-center align-center py-16">
        <p class="error-code">{{ error.statusCode }}</p>
        <p class="error-text">Página não encontrada!</p>
        <nuxt-link class="link" to="/">Volte para a página inicial</nuxt-link>
      </div>
    </div>
    <div v-else class="fill-height">
      <div class="d-flex flex-column justify-center align-center py-16">
        <p class="error-code">{{ error.statusCode }}</p>
        <p class="error-text">Erro inesperado no serviror</p>
        <nuxt-link class="link" to="/">Volte para a página inicial</nuxt-link>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style lang="scss" scoped>
.error-code {
  font-size: 120px;
  font-weight: 600;
}

.error-text {
  font-size: 42px;
}

.link {
  font-size: 24px;
}
</style>
