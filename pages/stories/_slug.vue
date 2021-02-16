<template>
  <div class="container page-container page-bg">
    <div v-if="!isLoading" class="socket">
      <!-- Top Section -->
      <StoriesOpenTop />

      <!-- Descriptions And Socials -->
      <StoriesOpenDesc />

      <!-- Content -->
      <StoriesOpenContent />

      <!-- Next -->
      <StoriesNext />
    </div>
    <PageLoader v-else />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import StoriesOpenTop from '~/components/stories/StoriesOpenTop'
import StoriesOpenDesc from '~/components/stories/StoriesOpenDesc'
import StoriesOpenContent from '~/components/stories/StoriesOpenContent'
import StoriesNext from '~/components/stories/StoriesNext'
import PageLoader from '~/components/atoms/PageLoader'

export default {
  components: {
    StoriesOpenTop,
    StoriesOpenDesc,
    StoriesOpenContent,
    StoriesNext,
    PageLoader
  },

  computed: {
    ...mapState({
      isLoading: store => store.StoriesOpen.isLoading
    })
  },

  mounted () {
    this.$nextTick(() => {
      this.loadingLine()
    })
  },

  created () {
    const { slug } = this.$route.params
    this.InitStoriesOpen(slug)
    this.InitStoriesNext()
  },

  methods: {
    ...mapActions({
      InitStoriesOpen: 'StoriesOpen/actionStoriesOpen',
      InitStoriesNext: 'StoriesOpen/actionStoriesNext'
    })
  }
}
</script>
