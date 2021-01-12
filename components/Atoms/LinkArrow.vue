<template>
  <nuxt-link
    :to="toPage"
    class="link-arrow"
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
  transition: color .2s;
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
  color: $text-color-h;
  font-size: 18px;
  line-height: 23px;

  &::before {
    top: 7px;
  }

  @include hover {
    color: $text-color;
  }
}
</style>
