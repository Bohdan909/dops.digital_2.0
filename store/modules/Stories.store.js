import instanceAxios from '~/axiosInstance'

const state = {
  storiesData: [],
  tags: [
    { name: 'All', active: true },
    { name: 'Design', active: false },
    { name: 'Process', active: false },
    { name: 'Studio', active: false },
    { name: 'News', active: false }
  ]
}

const getters = {
  getStories (state) {
    return state.storiesData
  },

  getTags (state) {
    return state.tags
  }
}

const actions = {

  async actionStories (vuexContext) {
    try {
      const { data } = await instanceAxios.get('/articles')
      vuexContext.commit('setStories', data)
    } catch (err) {
      vuexContext.commit('SetError')
    }
  }
}

const mutations = {
  setStories (state, stories) {
    state.storiesData = stories
  },

  SetError () {
    this.$router.push('/404')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
