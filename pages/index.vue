<template>
  <div class="container page-container">
    <!-- Top Section -->
    <HomeTop />

    <!-- Screen Video -->
    <HomeScreenVideo />

    <div class="page-bg">
      <div class="socket">
        <!-- Works -->
        <HomeWorks />

        <!-- What We do -->
        <HomeWhatWeDo />

        <!-- Reviews -->
        <HomeReviews />

        <!-- Clients -->
        <HomeClients />

        <!-- Audience -->
        <HomeAudience />

        <!-- Awards -->
        <HomeAwards />

        <!-- Team -->
        <HomeTeam />
      </div>
    </div>
  </div>
</template>

<script>

import HomeTop from '~/components/home/HomeTop'
import HomeScreenVideo from '~/components/home/HomeScreenVideo'
import HomeWorks from '~/components/home/HomeWorks'
import HomeWhatWeDo from '~/components/home/HomeWhatWeDo'
import HomeReviews from '~/components/home/HomeReviews'
import HomeClients from '~/components/home/HomeClients'
import HomeAudience from '~/components/home/HomeAudience'
import HomeAwards from '~/components/home/HomeAwards'
import HomeTeam from '~/components/home/HomeTeam'

export default {
  components: {
    HomeTop,
    HomeScreenVideo,
    HomeWorks,
    HomeWhatWeDo,
    HomeReviews,
    HomeClients,
    HomeAudience,
    HomeAwards,
    HomeTeam
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
