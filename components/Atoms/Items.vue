<template>
  <div class="items">
    {{ `[${num}]` }}
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

.items {
  color: $text-color-s;
  font-size: 13px;
  margin-bottom: 10px;
}
</style>
