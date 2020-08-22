<template>
  <v-app class="content">
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>

    <!-- back to top -->
    <v-btn
      v-show="fab"
      v-scroll="onScroll"
      :style="{ marginBottom: marginBtnScrollTop }"
      style="bottom: 110px; right: 32px; z-index: 1000;"
      class="btn-scrollTop"
      fab
      dark
      fixed
      bottom
      right
      color="primary"
      @click="toTop"
    >
      <v-icon>keyboard_arrow_up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fab: false,
      marginBottom: 0,
      marginBtnScrollTop: '15px',
    }
  },
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 460
    },
    toTop() {
      this.$vuetify.goTo(0)
    },
  },
}
</script>

<style lang="scss">
@font-face {
  font-family: 'primary';
  font-display: auto;
  src: local('primary'),
    url('~@/static/Montserrat-Regular.otf') format('opentype');
}

.content {
  font-family: 'primary', sans-serif;
}
</style>

<style lang="scss" scoped>
.btn-scrollTop {
  transition-property: all;
  transition-duration: 0.1s;
  transition-timing-function: ease-in-out;
}
</style>
