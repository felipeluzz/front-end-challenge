<template>
  <div>
    <v-img
      src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
      alt="Foto do naver"
    ></v-img>
    <div class="mt-4">
      <p class="name" :style="{ fontSize: size }">Juliano Reis</p>
      <p :style="{ fontSize: size }">Front-end Developer</p>
      <v-icon :large="$vuetify.breakpoint.mdAndUp" class="mr-2" color="primary"
        >mdi-delete</v-icon
      >
      <v-icon :large="$vuetify.breakpoint.mdAndUp" color="primary"
        >mdi-pencil</v-icon
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHydrated: false,
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
}
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 0;
}
.name {
  font-weight: 600;
}
</style>
