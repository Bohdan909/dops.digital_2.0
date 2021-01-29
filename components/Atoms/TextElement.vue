<template>
  <div
    :is="element"
    v-html-safe="text"
    class="text"
  />
</template>

<script>
export default {
  props: {
    element: {
      type: String,
      default: 'div'
    },

    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

.text {
  line-height: 18px;
}

.text-primary {
  font-size: 13px;
}

.text-secondary {
  font-size: 11px;
}
</style>
