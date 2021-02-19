<template>
  <div class="container page-container page-bg">
    <div v-if="!isLoading" class="socket">
      <!-- Top Section -->
      <WorkOpenTop />

      <!-- Main Screen -->
      <WorkMainScreen />

      <!-- Content -->
      <WorkContent />

      <!-- Description -->
      <WorkDescription />

      <!-- Next Project -->
      <WorkNext />
    </div>
    <PageLoader v-else />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import WorkOpenTop from '~/components/works/WorkOpenTop'
import WorkMainScreen from '~/components/works/WorkMainScreen'
import WorkContent from '~/components/works/WorkContent'
import WorkDescription from '~/components/works/WorkDescription'
import WorkNext from '~/components/works/WorkNext'
import PageLoader from '~/components/atoms/PageLoader'

export default {
  components: {
    WorkOpenTop,
    WorkMainScreen,
    WorkContent,
    WorkDescription,
    WorkNext,
    PageLoader
  },

  computed: {
    ...mapState({
      isLoading: store => store.StoriesOpen.isLoading
    })
  },

  created () {
    const { slug } = this.$route.params
    this.InitWorkOpen(slug)
    this.InitWorkNext()
  },

  methods: {
    ...mapActions({
      InitWorkOpen: 'WorkOpen/actionWorkOpen',
      InitWorkNext: 'WorkOpen/actionWorkNext'
    })
  }
}
</script>
