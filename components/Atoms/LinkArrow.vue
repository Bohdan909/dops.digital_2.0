<template>
  <nuxt-link
    :to="toPage"
    class="link-arrow trans-color"
  >
    {{ name }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },

    toPage: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

.link-arrow {
  position: relative;
  align-self: flex-start;
  text-decoration: none;
  font-size: 13px;
  line-height: 18px;

  &::before {
    @include arrow-before;
    opacity: 0;
    transform: translateX(-7px);
    transition: opacity .2s, transform ease-out .2s;
  }

  @include hover {
    color: $color-orange;

    &::before {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

.header-link {
  color: $text-color-g;
  font-size: 18px;
  line-height: 23px;

  &::before {
    top: 6px;
  }

  @include hover {
    color: $text-color;
  }

  &.nuxt-link-active {
    color: $text-color;
  }
}
</style>
