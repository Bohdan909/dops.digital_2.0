<template>
  <div class="awards-tag">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

.awards-tag {
  display: block;
  align-self: flex-start;
  padding: 0 7px;
  height: 22px;
  line-height: 25px;
  font-size: 12px;
  text-transform: uppercase;
  color: $color-main;
  border-radius: 11px;
  white-space: nowrap;
  background-color: $text-color-g;
}
</style>
