const state = () => ({
  snackbar: false,
  snackText: '',
})

const mutations = {
  TOGGLE_SNACK(state) {
    state.snackbar = !state.snackbar
  },
  SET_SNACKTEXT(state, text) {
    state.snackText = text
  },
}

const actions = {
  toggleSnack(context) {
    context.commit('TOGGLE_SNACK')
  },
  passText({ commit }, { text }) {
    commit('SET_SNACKTEXT', text)
  },
}

const getters = {}

// prettier-ignore
export {
  state,
  mutations,
  actions,
  getters
}
