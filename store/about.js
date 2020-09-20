const state = () => ({
  page: {
    title: 'About Me',
    avatar: '/images/supermanzer.jpeg',
    sections: [],
  },
})

const mutations = {
  SET_SECTIONS(state, payload) {
    state.page.sections = payload.data
  },
}

const actions = {
  getAboutSections({ commit }) {
    this.$axios
      .get('/about/')
      .then((result) => {
        commit('SET_SECTIONS', result)
      })
      .catch((err) => {
        throw err
      })
  },
}
// prettier-ignore
export {
  state,
  mutations,
  actions
}
