// import worksData from '~/static/worksData'
import instanceAxios from '~/axiosInstance'

const state = {
  storiesOpenData: {},
  storiesNext: [],
  storiesNextItems: 2,
  isLoading: false
}

const getters = {
  getStoriesOpen (state) {
    return state.storiesOpenData
  },

  getStoriesNext (state) {
    return state.storiesNext
  },

  getLoading (state) {
    return state.isLoading
  }
}

const actions = {

  async actionStoriesOpen (vuexContext, id) {
    vuexContext.commit('setLoading', true)
    try {
      const { data } = await instanceAxios.get(`/articles?slug=${id}`)
      vuexContext.commit('setStoriesOpen', data[0])
      vuexContext.commit('setLoading', false)
    } catch (err) {
      vuexContext.commit('setError')
      vuexContext.commit('setLoading', false)
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

  setLoading (state, context) {
    state.isLoading = context
  },

  setResetState (state) {
    state.storiesOpenData = {}
  },

  setError () {
    this.$router.push('/404')
  },

  setStoriesNext (state, context) {
    const id = state.storiesOpenData.slug
    const storiesIndex = context.findIndex(item => id === item.slug)
    const storiesNextArray = []

    for (let i = 1; i <= state.storiesNextItems; i++) {
      const storiesNextIndex = (storiesIndex + i >= context.length) ? i - 1 : storiesIndex + i
      storiesNextArray.push(context[storiesNextIndex])
    }

    state.storiesNext = storiesNextArray
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
