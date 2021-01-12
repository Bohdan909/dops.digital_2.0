<template>
  <div>
    <!-- Preloader -->
    <Preloader ref="preloader" />

    <!-- Menu -->
    <MenuDrop :menu-open="menuOpen" @menu-toggle="menuToggle" />

    <!-- Header -->
    <Header :menu-open="menuOpen" @menu-toggle="menuToggle" />

    <!-- Body App -->
    <nuxt />
  </div>
</template>

<script>
import Preloader from '~/components/Preloader'
import Header from '~/components/Header/Header'
import MenuDrop from '~/components/Header/MenuDrop'

export default {
  components: {
    Preloader,
    Header,
    MenuDrop
  },

  data () {
    return {
      menuOpen: false
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
    };
  },

  destroyed () {
    window.removeEventListener('resize', this.setVH)
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
    }
  }
}
</script>

<style lang="scss">

.container-error + .footer {
  display: none;
}
</style>
