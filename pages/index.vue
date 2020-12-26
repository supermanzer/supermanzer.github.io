<template>
  <div class="holder">
    <transition name="fade">
      <div class="title fh" v-show="showTitle">
        <v-row align="center" justify="center" class="twothirds">
          <v-col class="text-center bg-black" cols="8" dark>
            <h1 class="text-h1 mb-4 white--text">C. Ryan Manzer</h1>
            <h4 class="subheading mb-3 white--text">
              Full stack software engineer, oceanographer, gentleman scientist
            </h4>
          </v-col>
        </v-row>
      </div>
    </transition>

    <v-row align="center" justify="center">
      <v-col cols="8">
        <transition name="fade">
          <div v-show="showMessage" class="welcome bg-black">
            <h3>Welcome friends</h3>
            <br />
            <p>
              This is my first serious attempt to buld a personal site and I
              mostly use it to just have fun. I've spent most of my time in tech
              developing data systems, algorithms, and skimping on the visuals.
              For this site I'm engaging my artistic side a bit more and trying
              to craft something I find visually appealing. I'm also take the
              time to celebrate some things I get excited about. If you scoll
              down you should see a few examples of my nifty tech discoveries.
            </p>
          </div>
        </transition>
      </v-col>
    </v-row>

    <v-row class="two-thirds-down">
      <v-col lg="6" offset-lg="3">
        <div class="big-vert" v-for="article in articles" :key="article.slug">
          <home-post-card :article="article" class="bg-black" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import HomePostCard from "~/components/excited/HomePostCard.vue";
export default {
  components: { HomePostCard },
  layout: "home_layout",
  data() {
    return {
      snackText: "",
      showTitle: false,
      showMessage: false,
    };
  },
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .only([
        "title",
        "tech",
        "description",
        "img",
        "slug",
        "author",
        "updatedAt",
      ])
      .sortBy("createdAt", "desc")
      .fetch();
    const welcomeMessage = await $content("home").fetch();
    return { articles, welcomeMessage };
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
    },
    scrollListen() {
      document.addEventListener("scroll", () => {
        document.documentElement.dataset.scroll = window.scrollY;
      });
    },
  },
  created() {
    const actions = [
      "about/getAboutSections",
      "projects/loadProjects",
      "tableau/loadVizzes",
    ];
    for (let i = 0; i < actions.length; i++) {
      const action = actions[i];
      this.$store.dispatch(action);
    }
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
  color: white !important;
}

/* SPACING - LAYOUT RULES */
.welcome {
  padding: 2em;
  margin-top: 5em;
  letter-spacing: 1.2px;
}
.holder {
  margin-top: 10em;
}
.two-thirds-down {
  min-height: 40em;
  margin-top: 20em;
  margin-bottom: 30em;
}
.big-vert {
  margin-top: 20em;
  margin-bottom: 20em;
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
