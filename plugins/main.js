import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  props: {
    createContainer: {
      type: Boolean,
      default: false
    }
  },

  breakpoints: {
    mobile: 768,
    tabletSmall: 961,
    tablet: 1025,
    desktop: Infinity
  }
})

Vue.mixin({
  methods: {
    mqDetect () {
      if (process.client) {
        return this.$mq
      }
    },

    loading () {
      setTimeout(() => {
        this.$nuxt.$loading.start()
      }, 0)

      setTimeout(() => this.$nuxt.$loading.finish(), 300)
    },

    findParent (el, cls) {
      while ((el = el.parentElement) && !el.classList.contains(cls)) { ; }
      return el
    },

    touchDevice () {
      return !!('ontouchstart' in window || navigator.maxTouchPoints)
    }
  }
})
