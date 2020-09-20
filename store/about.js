const state = () => ({
  page: {
    title: 'About Me',
    avatar: '/images/supermanzer.jpeg',
    sections: [],
  },
})

const mutations = {
  SET_SECTIONS(state, payload) {
    payload.forEach((doc) => {
      if (state.page.sections.find((sec) => sec.id === doc.id) === undefined) {
        const section = doc.data()
        section.id = doc.id
        state.page.sections.push(section)
      }
    })
  },
}

const actions = {
  getAboutSections({ commit }) {
    this.$fireStore
      .collection('about')
      .get()
      .then((resp) => {
        commit('SET_SECTIONS', resp.docs)
      })
  },
}
// prettier-ignore
export {
  state,
  mutations,
  actions
}
