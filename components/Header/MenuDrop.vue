<template>
  <div :class="['menu-drop', { 'open': menuOpen }]">
    <div class="menu-block socket fx-col">
      <nav class="menu">
        <nuxt-link
          v-for="(item, index) in menuList"
          :key="index"
          :to="item.link"
          class="menu-item ttl ttl-3 ttl-invert trans-color"
          @click.native="$emit('menu-toggle')"
        >
          {{ item.name }}
        </nuxt-link>
      </nav>

      <Button
        class="btn-full btn-invert"
        element="nuxt-link"
        to-page="/contact"
        text="Get in touch"
      />
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button'

export default {
  components: {
    Button
  },

  props: {
    menuOpen: Boolean
  },

  data () {
    return {
      menuList: [
        { name: 'Home', link: '/' },
        { name: 'Works', link: '/works' },
        { name: 'Services', link: '/services' },
        { name: 'Studio', link: '/studio' },
        { name: 'Stories', link: '/stories' },
        { name: 'Contact', link: '/contact' },
        { name: 'Careers', link: '/careers' }
      ]
    }
  },

  methods: {
    closeMenu () {
      this.$emit('menu-toggle')
    }
  }
}
</script>

<style lang="scss" scoped>

.menu-drop {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  animation: fadeOut-l .1s forwards;
  background-color: $color-black;
}

.menu-drop.open {
  animation: fadeIn-l .2s forwards;
  -webkit-overflow-scrolling: touch;
  overflow: hidden;
  z-index: 999;

  /deep/ .menu ul li {
    transition-delay: .5s;
  }
}

.menu-block {
  position: relative;
  height: 100%;
  padding: 92px 0 10px;
  justify-content: space-between;
  z-index: 1;
}

@keyframes fadeIn-l {

  0% {
    opacity: 0;
    visibility: hidden;
  }

  5% {
    opacity: 0;
    visibility: visible;
  }

  100% {
    opacity: 1;
    visibility: visible;
  }
}

@keyframes fadeOut-l {

  0% {
    opacity: 1;
    visibility: visible;
  }

  95% {
    opacity: 0;
    visibility: visible;
  }

  100% {
    opacity: 0;
    visibility: hidden;
  }
}

.menu-item {
  display: block;
  margin-bottom: 20px;

  &.nuxt-link-exact-active {
    color: $text-color-g;
  }
}
</style>
