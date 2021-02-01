<template>
  <div class="footer-bottom col-br-top col-br-top-end col-br-d row">
    <FooterBreadcrumbs />

    <nuxt-link class="footer-bottom-privacy footer-bottom-text" to="/privacy-policy">
      <TextElement
        class="text-secondary text-color-gd"
        text="Privacy Policy"
      />
    </nuxt-link>

    <TextElement
      :class="[
        'text-copyright footer-bottom-text text-secondary text-color-gd',
        { 'col-br-top col-br-top-end col-br-d': $mq === 'mobile' }
      ]"
      text="© 2020 Dops. All rights reserved."
    />
  </div>
</template>

<script>
import FooterBreadcrumbs from '~/components/footer/FooterBreadcrumbs'
import TextElement from '~/components/atoms/TextElement'

export default {
  components: {
    FooterBreadcrumbs,
    TextElement
  }
}
</script>

<style lang="scss" scoped>

.footer-bottom {
  height: 47px;
}

.footer-bottom-text {
  align-self: center;
}

.footer-bottom-privacy {
  text-decoration: none;

  @include hover {

    &::v-deep .text-secondary {
      text-decoration: underline;
    }
  }
}

.text-copyright {
  margin: 0 5px 0 auto;
}

@include mobile {

  .footer-bottom {
    justify-content: space-between;
    padding-top: 8px;
    height: auto;
  }

  .footer-bottom-text::v-deep .text {
    line-height: 13px;
  }

  .footer-bottom-privacy {
    padding-right: 5px;
  }

  .text-copyright {
    width: 100%;
    padding: 9px 5px 11px;
    margin: 38px 0 0;
  }
}
</style>
