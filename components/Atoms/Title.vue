<template>
  <div
    :is="element"
    v-if="text"
    class="ttl"
  >
    <nuxt-link v-if="toPage" :to="toPage">
      <div v-html-safe="text" />
    </nuxt-link>
    <span v-else v-html-safe="text" />
  </div>
</template>

<script>

export default {
  props: {
    text: {
      type: String,
      default: ''
    },

    toPage: {
      type: String,
      default: ''
    },

    element: {
      type: String,
      default: 'div'
    }
  }
}
</script>

<style lang="scss" scoped>

a {
  cursor: pointer;
  color: $text-color;
  transition: color .3s;

  @include hover {
    text-decoration: underline;
  }
}

.ttl {

  &::v-deep {

    i {
      font-style: normal;
      color: $text-color-g;
    }

    strong.circle {
      position: relative;
      display: inline-block;
      top: -4px;
      width: 41px;
      height: 41px;
      background-color: $color-orange;
      color: $color-main;
      border-radius: 50%;
      text-align: center;
      line-height: 41px;
      font-weight: normal;

      @include mobile {
        display: none;
      }
    }
  }
}
</style>
