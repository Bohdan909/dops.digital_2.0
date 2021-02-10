<template>
  <div class="person">
    <TextElement
      v-if="name"
      class="person-name text-primary"
      :text="name"
    />

    <TextElement
      v-if="name && pos"
      :class="['text-color-s', {
        'text-secondary': !posBig,
        'text-primary': posBig,
      }
      ]"
      :text="pos"
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
    posBig: Boolean,

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

.person-name {
  margin-bottom: 1px;
}
</style>
