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

    setVideoMq (ArrayMq, type) {
      if (process.client) {
        const screenItem = ArrayMq.find(item => item.screen === this.$mq)

        if (type === 'poster') {
          return screenItem === undefined
            ? ArrayMq[0].poster
            : screenItem.poster
        } else {
          return screenItem === undefined ? ArrayMq[0].src : screenItem.src
        }
      }
    },

    loadingLine () {
      setTimeout(() => {
        this.$nuxt.$loading.start()
      }, 0)

      setTimeout(() => this.$nuxt.$loading.finish(), 300)
    },

    cursorImage (hoverWrap, hoverArea, cursor, correctionX, correctionY) {
      const corY = correctionY || 0
      const corX = correctionX || 0
      const bcrAreaLeft = hoverArea.getBoundingClientRect().left
      let x = null
      let y = null

      mouseOver()
      mouseLeave()
      mouseDown()
      mouseUp()

      function mouseOver () {
        cursorMove()

        hoverArea.addEventListener('mouseenter', (e) => {
          cursor.classList.add('show')
          cursor.classList.remove('dragging')
          coordUpdate(e)
        })
      }

      function mouseLeave () {
        hoverArea.addEventListener('mouseleave', (e) => {
          cursor.classList.remove('show')
        })
      }

      function mouseDown () {
        hoverArea.addEventListener('mousedown', (e) => {
          cursor.classList.add('dragging')
        })
      }

      function mouseUp () {
        hoverArea.addEventListener('mouseup', (e) => {
          cursor.classList.remove('dragging')
        })
      }

      function cursorMove () {
        hoverArea.addEventListener('mousemove', (e) => {
          coordUpdate(e)
        })
      }

      function coordUpdate (e) {
        x = e.pageX - bcrAreaLeft - corX
        y =
          e.pageY -
          (hoverWrap.getBoundingClientRect().top + window.scrollY) -
          corY
      }

      window.requestAnimationFrame(function animate () {
        cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`

        window.requestAnimationFrame(animate)
      })
    },

    findParent (el, cls) {
      while ((el = el.parentElement) && !el.classList.contains(cls)) { ; }
      return el
    },

    touchDevice () {
      if (process.client) {
        return !!('ontouchstart' in window || navigator.maxTouchPoints)
      }
    }
  }
})
