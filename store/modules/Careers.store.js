import instanceAxios from '~/axiosInstance'

const state = {
  careersData: [],
  departmentsData: [],
  careersStat: [],
  isLoading: false
}

const getters = {
  getCareers (state) {
    return state.careersData
  },

  getDepartments (state) {
    return state.departmentsData
  },

  getCareersStat (state) {
    return state.careersStat
  }
}

const actions = {

  async actionCareers (vuexContext) {
    vuexContext.commit('setLoading', true)

    try {
      const { data } = await instanceAxios.get('/careers')
      vuexContext.commit('setCareers', data)
      vuexContext.commit('setLoading', false)
    } catch (err) {
      vuexContext.commit('setError')
      vuexContext.commit('setLoading', false)
    }
  },

  async actionDepartments (vuexContext) {
    try {
      const { data } = await instanceAxios.get('/carrers-departments')
      vuexContext.commit('setDepartments', data)
    } catch (err) {
      vuexContext.commit('setError')
    }
  }
}

const mutations = {
  setCareers (state, careers) {
    let cur = null
    let count = 0
    const careersItems = []

    careers.map((item) => {
      const dep = item.carrers_department
      careersItems.push(dep.Name)
    })
    careersItems.forEach((item) => {
      if (item !== cur) {
        if (count) { state.careersStat.push({ dep: cur, count }) }

        cur = item
        count = 1
      } else {
        count++
      }
    })
    if (count) { state.careersStat.push({ dep: cur, count }) }
    state.careersData = careers
  },

  setDepartments (state, departments) {
    state.departmentsData = departments
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
