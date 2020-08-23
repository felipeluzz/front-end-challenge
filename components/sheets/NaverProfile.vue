<template>
  <div>
    <v-img
      src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
      alt="Foto do naver"
    ></v-img>
    <div class="mt-4">
      <p class="name" :style="{ fontSize: size }">Juliano Reis</p>
      <p :style="{ fontSize: size }">Front-end Developer</p>
      <div class="d-flex">
        <DeleteNaver @deleted="naverDeleted()">
          <v-icon
            slot="activatorButton"
            :large="$vuetify.breakpoint.mdAndUp"
            class="mr-2"
            color="primary"
            >mdi-delete</v-icon
          >
        </DeleteNaver>
        <v-icon :large="$vuetify.breakpoint.mdAndUp" color="primary"
          >mdi-pencil</v-icon
        >
      </div>
    </div>
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
import DeleteNaver from '@/components/dialogs/DeleteNaver.vue'

export default {
  components: {
    DeleteNaver,
  },
  data() {
    return {
      isHydrated: false,
      snackbar: false,
      snackbarText: '',
    }
  },
  computed: {
    size() {
      if (this.isHydrated && this.$vuetify.breakpoint.mdAndUp) {
        return '25px'
      }
      return '16px'
    },
  },
  mounted() {
    this.isHydrated = true
  },
  methods: {
    naverDeleted() {
      this.snackbarText = 'Naver excluído com sucesso!'
      this.snackbar = true
    },
  },
}
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 0;
}

i {
  cursor: pointer;
  transition: all 0.1s ease-in-out;
}

i:hover {
  transform: scale(1.2);
}

.name {
  font-weight: 600;
}
</style>
