export default {
  mode: 'universal',
  target: 'server',
  server: {
    port: 8080,
    host: '0.0.0.0',
  },
  head: {
    titleTemplate: 'Nave.rs',
    title: 'Nave.rs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'CONSULTORIA PARA CRIAÇÃO DE SOLUÇÕES DIGITAIS',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },
  css: ['@/assets/global.scss'],
  plugins: ['@/plugins/rules.js'],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/auth'],
  axios: {
    progress: true,
    baseURL: 'https://navedex-api.herokuapp.com/v1',
  },
  auth: {
    redirect: {
      login: '/',
      home: '/dashboard',
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/users/login',
            method: 'post',
            propertyName: 'token',
          },
          logout: { url: '/login', method: 'post' },
          user: false,
        },
      },
    },
  },
  vuetify: {
    customVariables: ['@/assets/variables.scss'],
    treeShake: true,
    theme: {
      themes: {
        light: {
          primary: '#212121',
          secondary: '#ffffff',
          button: '#212121',
        },
      },
    },
  },
  router: {
    middleware: ['auth'],
  },
}
