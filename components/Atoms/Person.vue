<template>
  <div class="person">
    <TextElement
      v-if="name"
      class="text-primary"
      :text="name"
    />

    <TextElement
      v-if="name && pos"
      class="text-secondary text-color-l"
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

// .text-primary {
//   margin-bottom: 3px;
// }
</style>
