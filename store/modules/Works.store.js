import worksData from '~/static/worksData'

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
  actionWorks (vuexContext) {
    vuexContext.commit('setWorks', worksData)
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
