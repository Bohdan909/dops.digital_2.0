<template>
  <div class="container page-container page-bg">
    <div class="socket">
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import StoriesFilter from '~/components/stories/StoriesFilter'
import StoriesItem from '~/components/stories/StoriesItem'

export default {
  components: {
    StoriesFilter,
    StoriesItem
  },

  computed: {
    ...mapGetters({
      getStories: 'Stories/getStories'
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
