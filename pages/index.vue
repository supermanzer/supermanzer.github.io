<template>
  <div class="holder">
    <transition name="fade">
      <div v-show="showTitle" class="title fh" align="" justify="center">
        <v-row align="center" justify="center" class="">
          <v-col class="text-center" cols="8" dark>
            <h1 class="text-md-h1 text-sm-h3 mb-4 white--text">
              C. Ryan Manzer
            </h1>
            <h4 class="subheading mb-3 white--text">
              Full stack software engineer, oceanographer, gentleman scientist
            </h4>
            <v-divider dark class="my-4"></v-divider>
            <home-nav></home-nav>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="12" md="8">
            <transition name="fade">
              <div v-show="showMessage" class="welcome white--text">
                <nuxt-content :document="message"></nuxt-content>
              </div>
            </transition>
          </v-col>
        </v-row>
      </div>
    </transition>
  </div>
</template>

<script>
import HomeNav from '~/components/nav/HomeNav.vue'
export default {
  name: 'HomePage',
  components: { HomeNav },
  layout: 'home_layout',
  async asyncData({ $content }) {
    const message = await $content('home', 'welcome-message').fetch()
    return { message }
  },
  data: () => ({
    showTitle: false,
    showMessage: false,
  }),
  mounted() {
    this.triggerTitleMessage()
  },
  methods: {
    triggerTitleMessage() {
      setInterval(() => {
        this.showTitle = true
      }, 500)
      setInterval(() => {
        this.showMessage = true
      }, 1500)
      setInterval(() => {
        this.showPosts = true
      }, 3000)
    },
    scrollListen() {
      document.addEventListener('scroll', () => {
        document.documentElement.dataset.scroll = window.scrollY
      })
    },
  },
}
</script>

<style lang="css" scoped>
.nuxt-content h2 {
  background-image: linear-gradient(to right, #6a85b6 0%, #bac8e0 100%);
  color: white;
  margin: 1.5em -0.4em 0.5em;
  padding: 0.2em;
}

.bg-black {
  background: rgba(0.2 0.2 0.2 / 45%); /* Black color with 50% alpha/opacity */
}

/* SPACING - LAYOUT RULES */
.welcome {
  padding: 2em;
  margin-top: 5em;
  letter-spacing: 1.2px;
}

.big-vert {
  margin-top: 20em;
  margin-bottom: 20em;
}

.fh {
  height: 100%;
}

.holder {
  height: 100%;
  margin-top: 12em;
}

/* TRANSITION RULES */
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 2s ease-in;
}

.fade-enter-to {
  opacity: 1;
}
</style>
