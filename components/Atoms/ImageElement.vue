<template>
  <img
    v-lazy-load
    :data-src="imageSrc"
    :src="placeholderSrc ? placeholderSrc : null"
    :alt="alt"
  >
</template>

<script>
export default {
  props: {
    placeholderSrc: {
      type: String,
      default: ''
    },

    imageSrc: {
      type: String,
      default: ''
    },

    alt: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
