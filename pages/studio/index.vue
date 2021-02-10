<template>
  <div class="container page-container page-bg">
    <div class="socket">
      <!-- Studio Top -->
      <StudioTop />

      <!-- Studio Team -->
      <StudioTeam />

      <!-- Studio Bottom -->
      <StudioBottom />
    </div>
  </div>
</template>

<script>
import StudioTop from '~/components/studio/StudioTop'
import StudioTeam from '~/components/studio/StudioTeam'
import StudioBottom from '~/components/studio/StudioBottom'

export default {
  components: {
    StudioTop,
    StudioTeam,
    StudioBottom
  },

  mounted () {
    this.$nextTick(() => {
      this.loadingLine()
    })
  }
}
</script>
