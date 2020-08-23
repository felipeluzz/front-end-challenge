<template>
  <div>
    <ExpandedProfile @delete-naver="openDeleteDialog">
      <v-img
        slot="activatorButton"
        class="profile-image"
        src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
        alt="Foto do naver"
      ></v-img>
    </ExpandedProfile>
    <div class="mt-4">
      <p class="name" :style="{ fontSize: size }">Juliano Reis</p>
      <p :style="{ fontSize: size }">Front-end Developer</p>
      <div class="d-flex">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <DeleteNaver @deleted="naverDeleted()">
              <v-icon
                slot="activatorButton"
                ref="deleteIcon"
                :large="$vuetify.breakpoint.mdAndUp"
                class="mr-2"
                color="primary"
                v-on="on"
                >mdi-delete</v-icon
              >
            </DeleteNaver>
          </template>
          <span>Excluir Naver</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-icon
              :large="$vuetify.breakpoint.mdAndUp"
              color="primary"
              v-on="on"
              >mdi-pencil</v-icon
            >
          </template>
          <span>Editar Naver</span>
        </v-tooltip>
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
import ExpandedProfile from '@/components/dialogs/ExpandedProfile.vue'
import DeleteNaver from '@/components/dialogs/DeleteNaver.vue'

export default {
  components: {
    ExpandedProfile,
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
    openDeleteDialog() {
      this.$refs.deleteIcon.$el.click()
    },
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
}

.profile-image {
  cursor: pointer;
}

.name {
  font-weight: 600;
}
</style>
