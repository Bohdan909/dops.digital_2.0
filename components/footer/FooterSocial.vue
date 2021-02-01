<template>
  <div class="footer-social">
    <TextElement
      class="footer-social-followers text-secondary text-color-d"
      :text="followers"
    />

    <a
      class="footer-social-link text-color-d"
      :href="link"
      target="_blank"
    >
      {{ name }}
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

.footer-social-followers {
  margin-bottom: 8px;

  @include tablet {
    margin-bottom: 5px;
  }
}

.footer-social-link {
  font-size: 18px;
  line-height: 23px;
  text-decoration: underline;

  @include hover {
    text-decoration: none;
  }
}
</style>
