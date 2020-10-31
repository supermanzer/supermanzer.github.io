// Defining our settings for various navigation components

export const state = () => ({
  settings: {
    drawer: false,
    clipped: true,
    fixed: false,
    right: true,
    rightDrawer: false,
    title: 'Supermanzer',
    miniVariant: false,
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
    {
      icon: 'mdi-chart-areaspline',
      title: 'Tableau',
      to: '/tableau'

    }
  ],
})

export const mutations = {
  TOGGLE_DRAWER(state) {
    state.settings.drawer = !state.settings.drawer
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
