// import worksData from '~/static/worksData'
import instanceAxios from '~/axiosInstance'

const state = {
  worksData: [],
  worksDataLimit: []
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

  async actionWorks (vuexContext) {
    try {
      const { data } = await instanceAxios.get('/works')
      vuexContext.commit('setWorks', data)
    } catch (err) {
      vuexContext.commit('SetError')
    }
  },

  actionWorksLimit (vuexContext, limitArray) {
    vuexContext.commit('setWorksLimit', limitArray)
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
