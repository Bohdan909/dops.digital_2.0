import qs from 'qs'
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
  ],
  tagsIds: []
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

    const { tagsIds } = vuexContext.state
    const params = {
      Tag: tagsIds
    }

    try {
      const { data } = await instanceAxios.get('/articles', {
        params,
        paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
      })
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

  setTagSelected (state, context) {
    state.tags = state.tags.map((item) => {
      item.active = false
      if (item?.name === context?.id) {
        return {
          ...item,
          active: context?.active
        }
      }
      return item
    })
    state.tagsIds = state.tags.filter(item => item.active === true).map(item => item.name)
  },

  setTagSelectedAll (state) {
    state.tags = state.tags.map((item) => {
      item.active = false
      if (item.name !== 'All') {
        return {
          ...item,
          active: false
        }
      } else {
        return {
          ...item,
          active: true
        }
      }
    })
    state.tagsIds = state.tags.map(item => item.name)
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
