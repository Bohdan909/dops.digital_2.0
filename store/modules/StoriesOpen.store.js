// import worksData from '~/static/worksData'
import instanceAxios from '~/axiosInstance'

const state = {
  storiesOpenData: {}
}

const getters = {
  getStoriesOpen (state) {
    return state.storiesOpenData
  }
}

const actions = {

  async actionStoriesOpen (vuexContext, id) {
    try {
      const { data } = await instanceAxios.get(`/articles?slug=${id}`)
      vuexContext.commit('setStoriesOpen', data[0])
    } catch (err) {
      vuexContext.commit('setError')
    }
  },

  async actionStoriesNext (vuexContext) {
    try {
      const { data } = await instanceAxios.get('/articles')
      vuexContext.commit('setStoriesNext', data)
    } catch (err) {
      vuexContext.commit('setError')
    }
  }
}

const mutations = {
  setStoriesOpen (state, context) {
    state.storiesOpenData = context
  },

  setStorieskNext (state, context) {
    const id = state.storiesOpenData.slug
    let indexNext = context.findIndex(item => id === item.Slug) + 1
    if (indexNext === context.length) { indexNext = 0 }
    state.workNext = context[indexNext]
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
