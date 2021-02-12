<template>
  <div class="container page-container page-bg">
    <div class="socket">
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import WorksTop from '~/components/works/WorksTop'
import WorkItem from '~/components/works/WorkItem'

export default {
  components: {
    WorksTop,
    WorkItem
  },

  computed: {
    ...mapGetters({
      getWorks: 'Works/getWorks'
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
