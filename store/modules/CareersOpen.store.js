// import worksData from '~/static/worksData'
import instanceAxios from '~/axiosInstance'

const state = {
  careersOpenData: {},
  isLoading: false
}

const getters = {
  getCareersOpen (state) {
    return state.careersOpenData
  }
}

const actions = {

  async actionCareersOpen (vuexContext, id) {
    vuexContext.commit('setLoading', true)
    try {
      const { data } = await instanceAxios.get(`/careers?slug=${id}`)
      vuexContext.commit('setCareersOpen', data[0])
      vuexContext.commit('setLoading', false)
    } catch (err) {
      vuexContext.commit('setError')
      vuexContext.commit('setLoading', false)
    }
  }
}

const mutations = {
  setCareersOpen (state, context) {
    state.careersOpenData = context
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
