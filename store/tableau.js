/**
 * Name spaced Store module for handling Tableau collection items
 */


const state = () => ({
    vizzes: []
})

const mutations = {
    setVizzes(state, payload) {
        payload.forEach((doc) => {
            if (state.vizzes.find((obj) => obj.id == doc.id) === undefined) {
                const viz = doc.data()
                viz.id = doc.id
                state.vizzes.push(viz)
            }
        })
    }
}

const actions = {
    loadVizzes({ commit }) {
        this.$fireStore.collection('tableau').get().then((result) => {
            commit('setVizzes', result.docs)
        }).catch((err) => {
            console.error(err.message);
        })
    }
}


const getters = {
    getViz: (state) => (id) => {
        return state.vizzes.find((viz) => viz.id === id)
    }
}

export {
    state,
    mutations,
    actions,
    getters
}