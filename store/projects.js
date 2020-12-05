/**
 * Projects.js - This store module handles all operations pertaining to various projects displayed on this site.  This includes CRUD operations if the 
 * user is logged in.
 */


const state = () => ({
  // prettier-ignore
  all: [],
})

const mutations = {
  SET_PROJECTS(state, payload) {
    payload.forEach((doc) => {
      if (state.all.find((obj) => obj.id === doc.id) === undefined) {
        const project = doc.data()
        project.id = doc.id
        state.all.push(project)
      }
    })
  },
  updateProject(state, project) {
    const getIndex = (proj) => proj.id === project.id
    const index = state.all.findIndex(getIndex)
    if (index >= 0) {
      state.all.splice(index, 1, project)  
    } else {
      state.all.push(project)
    }
  },
}

const actions = {
  async loadProjects({ commit }) {
    this.$fireStore
      .collection('projects')
      .get()
      .then((result) => {
        commit('SET_PROJECTS', result.docs)
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.error(err)
      })
  },
  postProject({ commit }, project) {
    commit('updateProject', project)
    this.$fireStore.collection('projects').doc(project.id).set(project).then(() => {
      const text = 'Project posted to Firestore'
      const color = 'indigo'
      commit('snackbar/SHOW_MESSAGE', { text, color }, {root: true})
    }).catch((err) => {
      console.error(err)
      const text = `Post resulted in error: ${err.message}`
      const color = 'red'
      commit('snackbar/SHOW_MESSAGE', { text, color }, {root: true})
    })
  }

}
const getters = {
  getProject: (state) => (id) => {
    return state.all.find((project) => project.id === id)
  },
}

// prettier-ignore
export {
  state,
  getters,
  mutations,
  actions
}
