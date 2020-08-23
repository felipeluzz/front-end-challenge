<template>
  <v-row no-gutters class="d-flex justify-center align-center fill-height">
    <v-sheet
      outlined
      tile
      width="448"
      min-height="408"
      class="d-flex flex-column justify-center align-center px-8 py-10"
    >
      <!-- Logo -->
      <div class="d-flex align-center justify-center mb-8">
        <v-img :src="require('@/assets/images/logo.svg')" alt="Nave"></v-img>
      </div>
      <!-- Form -->
      <v-col cols="12">
        <v-form v-model="valid">
          <v-text-field
            v-model="email"
            class="mb-3"
            label="E-mail"
            color="primary"
            :rules="[$rules.required(), $rules.email()]"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Senha"
            color="primary"
            :rules="[$rules.required()]"
            outlined
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
          ></v-text-field>
        </v-form>
      </v-col>
      <!-- Button -->
      <v-col cols="12" class="py-0">
        <v-btn
          depressed
          color="button"
          class="pa-6 white--text"
          :disabled="!valid"
          block
          :loading="loading"
          @click="login"
          >Entrar</v-btn
        >
      </v-col>
      <v-slide-y-transition>
        <div v-if="unauthorized" class="pt-5 error--text">
          E-mail ou senha incorretos.
        </div>
      </v-slide-y-transition>
    </v-sheet>
  </v-row>
</template>

<script>
export default {
  auth: 'guest',
  data() {
    return {
      email: '',
      password: '',
      show: false,
      valid: false,
      unauthorized: false,
      loading: false,
    }
  },
  methods: {
    async login() {
      this.loading = true
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        this.loading = false
        this.$router.push('/dashboard')
      } catch {
        this.loading = false
        this.unauthorized = true
      }
    },
  },
}
</script>
