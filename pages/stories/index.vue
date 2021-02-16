<template>
  <div class="container page-container page-bg">
    <div class="socket">
      <!-- Stories Filter -->
      <StoriesFilter />

      <!-- Stories Stories -->
      <div v-if="!isLoading" class="row">
        <StoriesItem
          v-for="(item, index) in getStories"
          :key="index"
          :stories-item="item"
          :stories-index="index"
        />
      </div>
      <transition v-else name="fade">
        <PageLoader />
      </transition>
    </div>
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
