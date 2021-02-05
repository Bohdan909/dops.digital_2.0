<template>
  <div class="person-team">
    <TextElement
      v-if="pos && name"
      class="person-pos text-primary text-color-s"
      :text="pos"
    />

    <TextElement
      v-if="name"
      class="text-primary"
      :text="name"
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
    name: {
      type: String,
      default: ''
    },

    pos: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

.person-pos {
  margin-bottom: 2px;
}
</style>
