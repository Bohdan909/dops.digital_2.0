<template>
  <div class="container page-container page-bg">
    <div v-if="!isLoading" class="socket">
      <!-- Top Section -->
      <WorksTop />

      <!-- Works -->
      <div class="row">
        <WorkItem
          v-for="(item, index) in getWorks"
          :key="index"
          :work-item="item"
          :work-index="index + 1"
        />
      </div>
    </div>
    <PageLoader v-else />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import WorksTop from '~/components/works/WorksTop'
import WorkItem from '~/components/works/WorkItem'
import PageLoader from '~/components/atoms/PageLoader'

export default {
  components: {
    WorksTop,
    WorkItem,
    PageLoader
  },

  computed: {
    ...mapGetters({
      getWorks: 'Works/getWorks'
    }),

    ...mapState({
      isLoading: store => store.StoriesOpen.isLoading
    })
  },

  created () {
    this.InitWorks()
  },

  mounted () {
    this.$nextTick(() => {
      this.loadingLine()
    })
  },

  methods: {
    ...mapActions({
      InitWorks: 'Works/actionWorks'
    })
  }
}
</script>
