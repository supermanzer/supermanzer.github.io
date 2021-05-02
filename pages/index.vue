<template>
  <div class="holder">
    <transition name="fade">
      <div class="title fh" v-show="showTitle" align="" justify="center">
        <v-row align="center" justify="center" class="">
          <v-col class="text-center" cols="8" dark>
            <h1 class="text-h1 mb-4 white--text">C. Ryan Manzer</h1>
            <h4 class="subheading mb-3 white--text">
              Full stack software engineer, oceanographer, gentleman scientist
            </h4>
            <v-divider dark class="my-4"></v-divider>
            <home-nav></home-nav>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="8">
            <transition name="fade">
              <div v-show="showMessage" class="welcome white--text">
                <nuxt-content :document="msg"></nuxt-content>
              </div>
            </transition>
          </v-col>
        </v-row>
      </div>
    </transition>

    <!-- <v-row class="two-thirds-down">
      <v-col lg="8" offset-lg="2">
        <div class="my-16" v-for="article in articles" :key="article.slug">
          <home-post-card
            :article="article"
            class="white--text"
            :show="showPosts"
          />
        </div>
      </v-col>
    </v-row> -->
    <!-- <circle-icon /> -->
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import HomePostCard from "~/components/excited/HomePostCard.vue";
import CircleIcon from "~/components/global/CircleIcon.vue";
import HomeNav from "~/components/Nav/HomeNav.vue";
export default {
  name: "HomePage",
  components: { HomePostCard, CircleIcon, HomeNav },
  layout: "home_layout",
  data() {
    return {
      snackText: "",
      showTitle: false,
      showMessage: false,
      showPosts: false,
    };
  },
  async asyncData({ $content }) {
    var msg = await $content("home", "welcome-message").fetch();

    return { msg };
  },
  methods: {
    snackTime: function (snack) {
      this.setSnack(this.snackText);
      this.snackText = "";
      this.$router.push("/");
    },
    ...mapMutations({
      setSnack: "snackbar/SET_SNACKTEXT",
    }),
    triggerTitleMessage() {
      setInterval(() => {
        this.showTitle = true;
      }, 200);
      setInterval(() => {
        this.showMessage = true;
      }, 1500);
      setInterval(() => {
        this.showPosts = true;
      }, 3000);
    },
    scrollListen() {
      document.addEventListener("scroll", () => {
        document.documentElement.dataset.scroll = window.scrollY;
      });
    },
  },
  mounted() {
    this.triggerTitleMessage();
  },
};
</script>

<style lang="css" scoped>
.bg-black {
  background: rgba(
    0.2,
    0.2,
    0.2,
    0.45
  ); /* Black color with 50% alpha/opacity */
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
