<template>
  <div :class="{ 'menu-open' : menuOpen }">
    <!-- Preloader -->
    <Preloader ref="preloader" />

    <!-- Menu -->
    <MenuDrop :menu-open="menuOpen" @menu-toggle="menuToggle" />

    <!-- Header -->
    <Header :menu-open="menuOpen" @menu-toggle="menuToggle" />

    <!-- Body App -->
    <nuxt />

    <!-- Footer -->
    <Footer ref="footer" :footer-show="footerShow" />
  </div>
</template>

<script>
import Preloader from '~/components/Preloader'
import Header from '~/components/header/Header'
import MenuDrop from '~/components/header/MenuDrop'
import Footer from '~/components/footer/Footer'

export default {
  components: {
    Preloader,
    Header,
    MenuDrop,
    Footer
  },

  data () {
    return {
      menuOpen: false,
      footerShow: false
    }
  },

  mounted () {
    // Preloader Hide
    this.$nextTick(() => {
      setTimeout(() => this.$refs.preloader.$el.classList.add('hide'), 100)
    })

    // Set Style Variables
    this.setVH()

    window.addEventListener('resize', () => {
      this.setVH()
    })

    // Add SEO <base> Element In Head
    if (window.location.origin === 'https://dops.digital') {
      this.addBaseElement()
    }

    // Footer Show On Scroll
    if (this.$mq !== 'mobile') {
      window.addEventListener('scroll', this.handleFooter)
    }
  },

  destroyed () {
    window.removeEventListener('resize', this.setVH)
    window.removeEventListener('scroll', this.handleFooter)
  },

  methods: {
    setVH () {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    },

    menuToggle (closeMenu = true) {
      !closeMenu
        ? this.menuOpen = closeMenu
        : this.menuOpen = !this.menuOpen

      this.scrollbarToggle(this.menuOpen)
    },

    scrollbarToggle (flag) {
      document.querySelector('html').style.overflow = `${flag ? 'hidden' : 'auto'}`
    },

    addBaseElement () {
      const tag = document.createElement('base')
      tag.href = 'https://dops.digital/'

      document.head.appendChild(tag)
    },

    handleFooter () {
      const footer = this.$refs.footer.$el
      const footerPosition = footer.offsetTop
      const footerPosDelay = 170
      const windowHeight = window.innerHeight

      if (window.pageYOffset > footerPosition - windowHeight) {
        this.footerShow = true
        const footerEclipse = footer.querySelector('.footer-eclipse')

        if (footerEclipse) {
          footerEclipse.style.opacity = (window.pageYOffset - footerPosition + windowHeight - footerPosDelay) / (footer.offsetHeight - footerPosDelay)
        }
      } else {
        this.footerShow = false
      }
    }
  }
}
</script>

<style lang="scss">

.container-error + .footer {
  display: none;
}
</style>
