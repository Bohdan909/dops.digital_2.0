<template>
  <div class="container page-container page-bg">
    <div class="socket">
      <!-- Top Section -->
      <StoriesOpenTop />

      <!-- Descriptions And Socials -->
      <StoriesOpenDesc />

      <!-- Content -->
      <StoriesOpenContent />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import StoriesOpenTop from '~/components/stories/StoriesOpenTop'
import StoriesOpenDesc from '~/components/stories/StoriesOpenDesc'
import StoriesOpenContent from '~/components/stories/StoriesOpenContent'

export default {
  components: {
    StoriesOpenTop,
    StoriesOpenDesc,
    StoriesOpenContent
  },

  mounted () {
    this.$nextTick(() => {
      this.loadingLine()
    })
  },

  created () {
    const { slug } = this.$route.params
    this.InitStoriesOpen(slug)
    // this.InitStoriesNext()
  },

  methods: {
    ...mapActions({
      InitStoriesOpen: 'StoriesOpen/actionStoriesOpen'
      // InitStoriesNext: 'StoriesOpen/actionStoriesNext'
    })
  }
}
</script>
