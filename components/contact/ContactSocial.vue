<template>
  <div class="contact-social">
    <TextElement
      class="contact-social-followers text-primary text-color-s"
      :text="followers"
    />

    <a
      class="contact-social-link"
      :href="link"
      target="_blank"
    >
      <TextElement
        element="span"
        class="text-primary text-color-r trans-color"
        :text="name"
      />
    </a>
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

    link: {
      type: String,
      default: '#'
    },

    followers: {
      type: String,
      default: '100'
    }
  }
}
</script>

<style lang="scss" scoped>

.contact-social {
  margin-bottom: 26px;
}

.contact-social-followers {
  margin-bottom: 2px;
}

.contact-social-link {
  @include hover {

    &::v-deep span {
      color: $text-color;
    }
  }
}
</style>
