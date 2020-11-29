/**
 * Excited.js - This store module handles operations necessary to representing the 
 * "What I'm excited about" blog-like section of the site.
 */

const state = () => ({
     posts: []
})
 

const mutations = {
    setPosts(state, payload) {
        payload.forEach((doc) => {
            if (state.posts.find((obj) => obj.id === doc.id) === undefined) {
                const post = doc.data()
                post.id = doc.id
                state.posts.push(post)
            }
        })
    }
}

const actions = {
    loadPosts({ commit }) {
        this.$fireStore.collection('excited').get().then((result) => {
            commit('setPosts', result.docs)
        }).catch((err) => {
            console.error(err)
        });
    }
}

const getters = {
    getPost: (state) => (id) => {
    return state.posts.find((post) => post.id === id)
  },
}

export {
    state,
    mutations,
    actions,
    getters,
}