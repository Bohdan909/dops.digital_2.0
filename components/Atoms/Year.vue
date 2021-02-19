<template>
  <TextElement
    class="year text-primary text-color-w"
    :text="text"
  />
</template>

<script>
import TextElement from '~/components/atoms/TextElement'

export default {
  components: {
    TextElement
  },

  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

.year {
  display: inline-block;
  padding: 0 4px;
  height: 19px;
  line-height: 21px;
  border-radius: 3px;
  background-color: $text-color-r;
}
</style>
