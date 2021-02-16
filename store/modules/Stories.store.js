import instanceAxios from '~/axiosInstance'

const state = {
  storiesData: [],
  storiesLength: 0,
  isLoading: false,
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
    vuexContext.commit('setLoading', true)
    try {
      const { data } = await instanceAxios.get('/articles')
      vuexContext.commit('setStories', data)
      vuexContext.commit('setLoading', false)
    } catch (err) {
      vuexContext.commit('setError')
      vuexContext.commit('setLoading', false)
    }
  }
}

const mutations = {
  setStories (state, stories) {
    const striesReverse = stories.slice().reverse()
    state.storiesLength = stories.length
    state.storiesData = striesReverse
  },

  setLoading (state, context) {
    state.isLoading = context
  },

  setError () {
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
