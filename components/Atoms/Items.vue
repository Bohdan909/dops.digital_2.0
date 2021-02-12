<template>
  <div class="items">
    {{ `[${num}]` }}
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>

.items {
  color: $text-color-s;
  font-size: 13px;
  margin-bottom: 8px;
}
</style>
