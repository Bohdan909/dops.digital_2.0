<template>
  <div class="container page-container page-bg">
    <div class="socket">
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import WorkOpenTop from '~/components/works/WorkOpenTop'
import WorkMainScreen from '~/components/works/WorkMainScreen'
import WorkContent from '~/components/works/WorkContent'
import WorkDescription from '~/components/works/WorkDescription'
import WorkNext from '~/components/works/WorkNext'

export default {
  components: {
    WorkOpenTop,
    WorkMainScreen,
    WorkContent,
    WorkDescription,
    WorkNext
  },

  computed: {
    ...mapGetters({
      getWorkOpen: 'WorkOpen/getWorkOpen'
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

<style lang="scss" scoped>

</style>
