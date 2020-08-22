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
          tile
          >Entrar</v-btn
        >
      </v-col>
    </v-sheet>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      valid: false,
    }
  },
}
</script>
