<template>
  <div>
    <v-dialog v-model="dialog" width="592">
      <template v-slot:activator="{ on }">
        <div v-on="on">
          <slot name="activatorButton"></slot>
        </div>
      </template>

      <div class="dialog-content pa-8">
        <p class="dialog-title">Excluir Naver</p>
        <p>Tem certeza que deseja excluir este Naver?</p>
        <div
          class="d-flex flex-column flex-sm-row align-center justify-end mt-8"
        >
          <v-btn
            depressed
            outlined
            width="176"
            color="primary"
            class="mr-0 mr-sm-3 mb-3 mb-sm-0"
            @click="dialog = false"
            >Cancelar</v-btn
          >
          <v-btn depressed width="176" color="primary" @click="deleteNaver()"
            >Excluir</v-btn
          >
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    deleteNaver() {
      this.dialog = false
      this.$emit('deleted')
    },
  },
}
</script>

<style lang="scss" scoped>
.dialog-content {
  background-color: #fff;

  .dialog-title {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }
}
</style>
