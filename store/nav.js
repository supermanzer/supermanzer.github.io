export const state = () => ({
  settings: {
    drawer: false,
    clipped: true,
    fixed: false,
    right: true,
    rightDrawer: false,
    title: 'Supermanzer',
    miniVariant: false,
    show: true,
  },
  links: [
    {
      icon: 'mdi-home',
      title: 'Home',
      to: '/',
    },
    {
      icon: 'mdi-code-tags',
      title: 'Projects',
      to: '/projects',
    },
    {
      icon: 'mdi-account',
      title: 'About',
      to: '/about',
    },
    // {
    //   icon: "mdi-book",
    //   title: "Blog",
    //   to: { name: "blog" },
    // },
  ],
})

export const mutations = {
  TOGGLE_DRAWER(state) {
    state.settings.drawer = !state.settings.drawer
  },
  TOGGLE_NAV_SHOW(state) {
    state.settings.show = !state.settings.show
  },
  SET_NAV_SHOW(state, val) {
    state.settings.show = val
  },
}

export const actions = {
  toggleDrawer(context) {
    context.commit('TOGGLE_DRAWER')
  },
}

export const getters = {
  getDrawer(state) {
    return state.settings.drawer
  },
}
