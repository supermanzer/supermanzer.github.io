import colors from 'vuetify/es5/util/colors'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: false,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'The personal website of Ryan Manzer',
      },
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat&family=Raleway&display=swap',
      },
    ],
    script: [
      {src: "https://public.tableau.com/javascripts/api/tableau-2.6.0.min.js", async: true, defer: true}
    ]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/filters.js',
    '~/plugins/notifier.js',
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    '@nuxtjs/axios',
    '@nuxtjs/vuetify',
    '@nuxtjs/firebase',
    '@nuxt/content',
  ],

  axios: {
    baseURL: process.env.BASE_URL || 'http://98.248.196.186:8123/'
  },
  /*
   ** Changing name of buil directory
   ** https: //nuxtjs.org/api/configuration-builddir/
   */
  // buildDir: 'docs',

  generate: {
    dir: 'docs'
  },
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Nuxt Firebase integration configuration
   ** https: //firebase.nuxtjs.org/guide/getting-started/
   */
  firebase: {
    config: {
      apiKey: "AIzaSyBwU59KPNzEYnIgn_1pmKbBB3mP6-wXMHU",
      authDomain: "supermanzer.firebaseapp.com",
      databaseURL: "https://supermanzer.firebaseio.com",
      projectId: "supermanzer",
      storageBucket: "supermanzer.appspot.com",
      messagingSenderId: "321780011456",
      appId: "1:321780011456:web:93b6d328f1eda9c5373825",
      measurementId: "G-XWSPQV1JL1"
    },
    services: {
      auth: {
        persistence: 'local',
        initialize: {
          onAuthStateChangedMutation: 'auth/ON_AUTH_STATE_CHANGED_MUTATION',
          onAuthStateChangedAction: 'auth/onAuthStateChangedAction',
        }
      },
      firestore: true
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      font: false,
    },
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
