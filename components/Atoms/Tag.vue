<template>
  <div class="tag">
    <TextElement
      class="text-primary text-color-r"
      :text="tag"
    />
  </div>
</template>

<script>
import TextElement from '~/components/atoms/TextElement'

export default {
  components: {
    TextElement
  },

  props: {
    tag: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

.tag {
  position: relative;
  padding-left: 9px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 6px;
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: $color-orange;
  }
}
</style>
