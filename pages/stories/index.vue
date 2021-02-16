<template>
  <div class="container page-container page-bg">
    <div v-if="!isLoading" class="socket">
      <!-- Stories Filter -->
      <StoriesFilter />

      <!-- Stories Stories -->
      <div class="row">
        <StoriesItem
          v-for="(item, index) in getStories"
          :key="index"
          :stories-item="item"
          :stories-index="index"
        />
      </div>
    </div>
    <PageLoader v-else />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import StoriesFilter from '~/components/stories/StoriesFilter'
import StoriesItem from '~/components/stories/StoriesItem'
import PageLoader from '~/components/atoms/PageLoader'

export default {
  components: {
    StoriesFilter,
    StoriesItem,
    PageLoader
  },

  computed: {
    ...mapGetters({
      getStories: 'Stories/getStories'
    }),

    ...mapState({
      isLoading: store => store.Stories.isLoading
    })
  },

  created () {
    this.InitStories()
  },

  mounted () {
    this.$nextTick(() => {
      this.loadingLine()
    })
  },

  methods: {
    ...mapActions({
      InitStories: 'Stories/actionStories'
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
