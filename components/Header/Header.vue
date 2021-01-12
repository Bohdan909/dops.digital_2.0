<template>
  <header
    ref="header"
    :class="['header socket', {
      'header-black': menuOpen,
      'header-hide': activeHeader
    }]"
  >
    <div class="row">
      <!-- Menu Switcher -->
      <div
        v-if="$mq === 'tabletSmall' || $mq === 'mobile'"
        class="menu-switcher text-btn trans-color"
        @click="$emit('menu-toggle')"
      >
        {{ menuOpen ? 'Close' : 'Menu' }}
      </div>

      <!-- Logo -->
      <div class="header-col col-mob-2">
        <nuxt-link
          class="logo"
          to="/"
        >
          <img
            :src="menuOpen ? require('@/assets/images/logo-white.svg') : require('@/assets/images/logo.svg')"
            alt="logo"
          >
        </nuxt-link>
      </div>

      <!-- Work -->
      <div class="header-col col-desktop-4 col-tablet-3">
        <LinkArrow
          v-if="$mq === 'desktop' || $mq === 'tablet'"
          class="header-link"
          :name="'Works'"
          :to-page="'/works'"
        />
      </div>

      <!-- Services -->
      <div class="header-col col-tablet-1">
        <LinkArrow
          v-if="$mq === 'desktop' || $mq === 'tablet'"
          class="header-link"
          :name="'Services'"
          :to-page="'/services'"
        />
      </div>

      <!-- Studio -->
      <div class="header-col col-tablet-1">
        <LinkArrow
          v-if="$mq === 'desktop' || $mq === 'tablet'"
          class="header-link"
          :name="'Studio'"
          :to-page="'/studio'"
        />
      </div>

      <!-- Stories -->
      <div class="header-col col-tablet-1">
        <LinkArrow
          v-if="$mq === 'desktop' || $mq === 'tablet'"
          class="header-link"
          :name="'Stories'"
          :to-page="'/stories'"
        />
      </div>

      <!-- Contact -->
      <div class="header-col col-desktop-1 col-tablet-2">
        <LinkArrow
          v-if="$mq === 'desktop' || $mq === 'tablet'"
          class="header-link"
          :name="'Contact'"
          :to-page="'/contact'"
        />
      </div>
    </div>
  </header>
</template>

<script>
import LinkArrow from '~/components/Atoms/LinkArrow'

export default {
  components: {
    LinkArrow
  },

  props: {
    menuOpen: Boolean
  },

  data () {
    return {
      lastKnownScrollY: 0,
      currentScrollY: 0,
      activeHeader: false
    }
  },

  created () {
    if (process.client) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('scroll', this.handleHeader)
    }
  },

  methods: {
    handleHeader () {
      this.currentScrollY = window.pageYOffset;
      (this.currentScrollY > 100 && this.currentScrollY > this.lastKnownScrollY) ? this.activeHeader = true : this.activeHeader = false
      this.lastKnownScrollY = this.currentScrollY
    },

    closeMenu () {
      this.$emit('menu-toggle')
    }
  }
}
</script>

<style lang="scss" scoped>

.header {
  position: fixed;
  height: $header-height;
  top: 0;
  left: 0;
  right: 0;
  z-index: 102;
  // background-color: $color-main;
  border-bottom: 1px solid $border-color;
}

.header-black {
  border-color: transparent;

  &::v-deep {

    .menu-switcher {
      color: $color-main;
    }
  }
}

.logo {
  width: 116px;
  height: 25px;
  align-self: flex-start;
  cursor: pointer;
}

.header-col {
  justify-content: center;

  &:last-child::v-deep .header-link {
    align-self: flex-end;
  }
}

.menu-switcher {
  @include ctr-vert;
  position: absolute;
  right: 0;
  cursor: pointer;
}
</style>
