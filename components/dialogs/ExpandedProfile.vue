<template>
  <div>
    <v-dialog v-model="dialog" width="1006">
      <template v-slot:activator="{ on }">
        <div v-on="on">
          <slot name="activatorButton"></slot>
        </div>
      </template>

      <v-row no-gutters class="dialog-content v-flex">
        <v-col cols="12" sm="6">
          <v-img
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
            alt="Foto do naver"
            class="image"
          ></v-img>
        </v-col>
        <v-col cols="12" sm="6" class="pa-5">
          <div class="d-flex justify-end">
            <v-icon color="primary" @click="dialog = false">mdi-close</v-icon>
          </div>
          <div class="pl-4">
            <p class="name mb-2">Juliano Reis</p>
            <p>Front-end Developer</p>
            <p class="font-weight-bold pt-4 mb-2">Idade</p>
            <p>24 anos</p>
            <p class="font-weight-bold pt-4 mb-2">Tempo de empresa</p>
            <p>2 horas</p>
            <p class="font-weight-bold pt-4 mb-2">Projetos que participou</p>
            <p class="pb-4">Nenhum</p>
            <div class="d-flex mt-16">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-icon
                    class="mr-2"
                    color="primary"
                    v-on="on"
                    @click="deleteNaver"
                    >mdi-delete</v-icon
                  >
                </template>
                <span>Excluir Naver</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-icon color="primary" v-on="on">mdi-pencil</v-icon>
                </template>
                <span>Editar Naver</span>
              </v-tooltip>
            </div>
          </div>
        </v-col>
      </v-row>
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
      this.$emit('delete-naver')
    },
  },
}
</script>

<style lang="scss" scoped>
.dialog-content {
  background-color: #fff;
  width: 100%;
  height: 100%;

  .image {
    height: 100%;
  }
  .name {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }
}
</style>
