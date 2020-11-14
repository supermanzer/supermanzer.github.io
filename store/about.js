const state = () => ({
  page: {
    title: 'About Me',
    avatar: '/images/supermanzer.jpeg',
    sections: [],
  },

})

const fetchSection = (state, id) => {
  return state.page.sections.find(section => section.id === id)
}

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
  addSection(state) {
    const newSection = {
      component_element: "",
      component_position: "",
      components: [],
      heading: "",
      icon: "",
      parallax_image: "",
      text: ""
    }
    state.page.sections.push(newSection)
  },
  addComponent(state, id) {
    const section = fetchSection(state, id)
    const newComponent = {
      heading: "",
      icon: "",
      text: ""
    }
    section.components.push(newComponent)
  },
  // Update individual fields
  updateElement(state, payload) {
    const section = fetchSection(state, payload.id)
    section.component_element = payload.element
  },
  updatePosition(state, payload) {
    const section = fetchSection(state, payload.id)
    section.component_positon = payload.position
  },
  updateHeading(state, payload) {
    const section = fetchSection(state, payload.id)
    section.heading = payload.heading
  },
  updateIcon(state, payload) {
    const section = fetchSection(state, payload.id)
    section.icon = payload.icon
  },
  updateText(state, payload) {
    const section = fetchSection(state, payload.id)
    section.text = payload.text
  },
  updateParallaxImage(state, payload) {
    const section = fetchSection(state, payload.id)
    section.parallax_image = payload.image
  },
  updateComponents(state, payload) {
    const section = fetchSection(state, payload.id)
    const revisedComponents = payload.components
    section.components= revisedComponents
  }
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
  updateSection(obj, id) {
    console.log(id);
    const section = fetchSection(obj.state, id);
    this.$fireStore.collection('about').doc(id).set(section)
  },
}

const getters = {
  getSection: (state) => (id) => {
    return fetchSection(state, id)
  },
  getElement: (state) => (id) => {
    return fetchSection(state, id).component_element
  },
  getPosition: (state) => (id) => {
    return fetchSection(state, id).component_position
  },
  getHeading: (state) => (id) => {
    return fetchSection(state, id).heading
  },
  getIcon: (state) => (id) => {
    return fetchSection(state, id).icon
  },
  getText: (state) => (id) => {
    return fetchSection(state, id).text
  },
  getParallaxImage: (state) => (id) => {
    return fetchSection(state, id).parallax_image
  },
  getComponents: (state) => (id) => {
    return fetchSection(state, id).components
  }
}

// prettier-ignore
export {
  state,
  mutations,
  actions,
  getters
}
