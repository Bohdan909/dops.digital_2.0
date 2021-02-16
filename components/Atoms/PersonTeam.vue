<template>
  <div class="person-team">
    <TextElement
      v-if="pos && name"
      :class="['person-pos text-color-s', {
        'text-secondary': posSmall,
        'text-primary': !posSmall,
      }
      ]"
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
    posSmall: {
      type: Boolean,
      default: false
    },

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

</style>
