<template>
  <div
    :is="element"
    :href="link"
    :to="to"
    class="outline-cell"
  >
    <span class="outline-text">{{ cellText }}</span>
  </div>
</template>

<script>
export default {
  props: {
    cellText: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: ''
    },

    to: {
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
.outline-cell {
  display: flex;
  padding: 0 8px;
  height: 21px;
  border-radius: 4px;
  border: 1px solid $color-border;
  white-space: nowrap;
}

.outline-text {
  align-self: center;
  font-size: 13px;
  line-height: 24px;
}
</style>
