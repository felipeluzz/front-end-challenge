<template>
  <v-row no-gutters class="align-start justify-center">
    <v-col cols="12" xl="8" lg="8" class="pa-0 px-8 pt-10">
      <!-- Header -->
      <div class="d-flex align-center page-title">
        <nuxt-link class="back" to="/dashboard">
          <v-icon large color="primary" class="mr-4">mdi-chevron-left</v-icon>
        </nuxt-link>
        <span>Adicionar Naver</span>
      </div>
      <!-- Form -->
      <v-form v-model="valid">
        <v-row class="mt-12">
          <v-col cols="12" sm="6" class="px-5">
            <v-text-field
              v-model="name"
              outlined
              color="primary"
              label="Nome"
              :rules="[$rules.required()]"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" class="px-5">
            <v-text-field
              v-model="job_role"
              outlined
              color="primary"
              label="Cargo"
              :rules="[$rules.required()]"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" class="px-5">
            <v-text-field
              v-model="birthdate"
              v-mask="date"
              outlined
              color="primary"
              label="Data de nacimento"
              :rules="[$rules.required(), $rules.date()]"
              validate-on-blur
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" class="px-5">
            <v-text-field
              v-model="admission_date"
              v-mask="date"
              outlined
              color="primary"
              label="Data de admissão na empresa"
              :rules="[$rules.required(), $rules.date()]"
              validate-on-blur
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" class="px-5">
            <v-text-field
              v-model="project"
              outlined
              color="primary"
              label="Projetos que participou"
              :rules="[$rules.required()]"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" class="px-5">
            <v-text-field
              v-model="url"
              outlined
              color="primary"
              label="URL da foto do Naver"
              :rules="[$rules.required()]"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
      <!-- Button -->
      <div class="d-flex justify-end px-2">
        <v-btn
          depressed
          color="primary"
          width="176"
          :block="isHydrated && $vuetify.breakpoint.xs"
          :disabled="!valid"
          @click="save"
          >Salvar</v-btn
        >
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
  directives: { mask },
  data() {
    return {
      isHydrated: false,
      name: '',
      job_role: '',
      birthdate: '',
      admission_date: '',
      project: '',
      url: '',
      valid: false,
      date: '##/##/####',
    }
  },
  mounted() {
    this.isHydrated = true
  },
  methods: {
    save() {
      this.$router.push('/dashboard')
    },
  },
}
</script>

<style lang="scss" scoped>
.page-title {
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;

  .back {
    text-decoration: none;
  }
}
</style>
