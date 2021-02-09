<template>
  <div class="container page-container page-bg">
    <div class="socket">
      <!-- Studio Top -->
      <StudioTop />
    </div>
  </div>
</template>

<script>
import StudioTop from '~/components/studio/StudioTop'

export default {
  components: {
    StudioTop
  },

  mounted () {
    this.$nextTick(() => {
      this.loadingLine()
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
