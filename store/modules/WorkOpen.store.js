// import worksData from '~/static/worksData'
import instanceAxios from '~/axiosInstance'

const state = {
  workOpenData: {},
  workDesc: {},
  workScreen: {},
  workContent: [],
  workTeam: {},
  workNext: {},
  isLoading: false
}

const getters = {
  getWorkOpen (state) {
    return state.workOpenData
  },

  getWorkDesc (state) {
    return state.workDesc
  },

  getMainScreen (state) {
    return state.workScreen
  },

  getWorkContent (state) {
    return state.workContent
  },

  getWorkTeam (state) {
    return state.workTeam
  },

  getWorkNext (state) {
    return state.workNext
  }
}

const actions = {

  async actionWorkOpen (vuexContext, id) {
    vuexContext.commit('setLoading', true)

    try {
      const { data } = await instanceAxios.get(`/works?Slug=${id}`)
      vuexContext.commit('setWorkOpen', data[0])
      vuexContext.commit('setWorkDesc', {
        title: data[0]?.WorkTitle,
        location: data[0]?.WorkDescription?.ClientLocation,
        client: data[0]?.WorkDescription?.ClientName,
        project: data[0]?.WorkDescription?.ProjectService,
        year: data[0]?.WorkDescription?.Year
      })
      vuexContext.commit('setMainScreen', {
        title: data[0]?.WorkTitle,
        video: data[0]?.WorkMainVideo?.url,
        videoUrl: data[0]?.WorkMainVideo?.url,
        imageUrl: data[0]?.WorkMainImage?.url,
        placeholderUrl: data[0]?.WorkMainPlaceholder?.url
      })
      vuexContext.commit('setWorkContent', data[0]?.WorkContent)
      vuexContext.commit('setWorkTeam', {
        project: data[0]?.WorkTitle,
        ...data[0]?.WorkTeam
      })
      vuexContext.commit('setLoading', false)
    } catch (err) {
      vuexContext.commit('setError')
      vuexContext.commit('setLoading', false)
    }
  },

  async actionWorkNext (vuexContext) {
    try {
      const { data } = await instanceAxios.get('/works')
      vuexContext.commit('setWorkNext', data)
    } catch (err) {
      vuexContext.commit('setError')
    }
  }
}

const mutations = {
  setWorkOpen (state, context) {
    state.workOpenData = context
  },

  setWorkDesc (state, context) {
    state.workDesc = context
  },

  setMainScreen (state, context) {
    state.workScreen = context
  },

  setWorkContent (state, context) {
    state.workContent = context
  },

  setWorkTeam (state, context) {
    state.workTeam = context
  },

  setWorkNext (state, context) {
    const id = state.workOpenData.Slug
    let indexNext = context.findIndex(item => id === item.Slug) + 1
    if (indexNext === context.length) { indexNext = 0 }
    state.workNext = context[indexNext]
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
