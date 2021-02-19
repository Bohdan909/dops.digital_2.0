import instanceAxios from '~/axiosInstance'

const state = {
  servicesData: [],
  isLoading: false
}

const getters = {
  getServices (state) {
    return state.servicesData
  }
}

const actions = {

  async actionServices (vuexContext) {
    vuexContext.commit('setLoading', true)

    try {
      const { data } = await instanceAxios.get('/services')
      vuexContext.commit('setServices', data)
      vuexContext.commit('setLoading', false)
    } catch (err) {
      vuexContext.commit('setError')
      vuexContext.commit('setLoading', false)
    }
  }
}

const mutations = {
  setServices (state, servives) {
    state.servicesData = servives
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
