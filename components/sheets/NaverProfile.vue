<template>
  <div>
    <ExpandedProfile :naver="naver" @delete-naver="openDeleteDialog">
      <v-img
        slot="activatorButton"
        class="profile-image"
        :src="naver.url"
        alt="Foto do naver"
        :height="imageHeight"
      ></v-img>
    </ExpandedProfile>
    <div class="mt-4">
      <p class="name" :style="{ fontSize: size }">{{ naver.name }}</p>
      <p :style="{ fontSize: size }">{{ naver.job_role }}</p>
      <div class="d-flex">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <DeleteNaver :id="naver.id" @deleted="naverDeleted()">
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
  props: {
    naver: {
      type: Object,
      default: () => ({}),
    },
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
    imageHeight() {
      if (this.isHydrated) {
        if (this.$vuetify.breakpoint.xl) {
          return '439.75'
        } else if (this.$vuetify.breakpoint.lg) {
          return '324'
        } else if (this.$vuetify.breakpoint.md) {
          return '301.33'
        } else if (this.$vuetify.breakpoint.sm) {
          return '216'
        } else if (this.$vuetify.breakpoint.xs) {
          return '139'
        }
      }
      return '439.75'
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
      this.$emit('naver-deleted')
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
