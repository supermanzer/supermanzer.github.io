// Defining our settings for various navigation components

export const state = () => ({
  settings: {
    drawer: true,
    clipped: true,
    fixed: false,
    right: true,
    rightDrawer: false,
    title: 'Supermanzer',
    miniVariant: false,
  },
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
