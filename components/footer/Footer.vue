<template>
  <footer class="footer-wrap">
    <div class="footer footer-eclipse br fx-col">
      <!-- Top -->
      <FooterTop />

      <!-- Form Email -->
      <FooterForm />

      <!-- Follow Us -->
      <FooterFollowUs />

      <!-- Bottom -->
      <FooterBottom />
    </div>
  </footer>
</template>

<script>
import FooterTop from '~/components/footer/FooterTop'
import FooterForm from '~/components/footer/FooterForm'
import FooterFollowUs from '~/components/footer/FooterFollowUs'
import FooterBottom from '~/components/footer/FooterBottom'

export default {
  components: {
    FooterTop,
    FooterForm,
    FooterFollowUs,
    FooterBottom
  }
}
</script>

<style lang="scss" scoped>

.footer-wrap {
  position: relative;
  min-height: 100vh;
  z-index: 1;
  background-color: $color-main;

  @include mobile {
    min-height: 100%;
    padding: 5px 10px 15px;
  }
}

.footer {
  position: fixed;
  padding: 0 13px;
  bottom: 15px;
  left: 10px;
  right: 10px;
  min-height: calc(100vh - 25px);
  background-color: $color-black;

  @include mobile {
    display: block;
    position: relative;
    min-height: 100%;
    padding: 0 44px;
    left: auto;
    right: auto;
    bottom: auto;
  }

  @media (max-width: 360px) {
    padding: 0 20px;
  }
}

.footer-eclipse {
  opacity: 0;
  transition: opacity .1s;

  @include mobile {
    opacity: 1;
  }
}
</style>
