import instanceAxios from '~/axiosInstance'

const state = {
  worksData: [],
  worksDataLimit: [],
  isLoading: false
}

const getters = {
  getWorks (state) {
    return state.worksData
  },

  getWorksLimit (state) {
    return state.worksDataLimit
  }
}

const actions = {

  async actionWorks (vuexContext, limitArray) {
    vuexContext.commit('setLoading', true)

    try {
      const { data } = await instanceAxios.get('/works')
      vuexContext.commit('setWorks', data)
      if (limitArray) {
        vuexContext.commit('setWorksLimit', limitArray)
      }
      vuexContext.commit('setLoading', false)
    } catch (err) {
      vuexContext.commit('setError')
      vuexContext.commit('setLoading', false)
    }
  }
}

const mutations = {
  setWorks (state, works) {
    state.worksData = works
  },

  setWorksLimit (state, limitArray) {
    const newArray = []
    limitArray.forEach((index) => {
      newArray.push(state.worksData[index])
    })
    state.worksDataLimit = newArray
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
