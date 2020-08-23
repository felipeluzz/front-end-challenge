<template>
  <div class="px-6 mt-12">
    <!-- Header -->
    <div class="d-flex flex-column flex-sm-row align-center">
      <span class="page-title mb-0 mb-4">Navers</span>
      <v-spacer></v-spacer>
      <v-btn depressed tile color="button" class="pa-6 white--text"
        >Adicionar Naver</v-btn
      >
    </div>
    <!-- List of profiles -->
    <v-row class="mt-4">
      <v-col v-for="i in 4" :key="i" cols="6" sm="4" lg="3">
        <NaverProfile></NaverProfile>
      </v-col>
    </v-row>
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
      navers: [],
    }
  },
  async created() {
    const response = await this.$axios.get('/navers')
    console.log(response)
  },
}
</script>

<style lang="scss" scoped>
.page-title {
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
}
</style>
