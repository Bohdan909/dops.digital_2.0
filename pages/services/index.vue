<template>
  <div class="container page-container page-bg">
    <div v-if="!isLoading" class="socket">
      <!-- Top -->
      <ServicesTop />

      <!-- Items -->
      <ServicesItem
        v-for="(item, index) in getServices"
        :key="index"
        :services-data="item"
      />
    </div>
    <PageLoader v-else />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import ServicesTop from '~/components/services/ServicesTop'
import ServicesItem from '~/components/services/ServicesItem'
import PageLoader from '~/components/atoms/PageLoader'

export default {
  components: {
    ServicesTop,
    ServicesItem,
    PageLoader
  },

  computed: {
    ...mapGetters({
      getServices: 'Services/getServices'
    }),

    ...mapState({
      isLoading: store => store.StoriesOpen.isLoading
    })
  },

  created () {
    this.InitServices()
  },

  mounted () {
    this.$nextTick(() => {
      this.loadingLine()
    })
  },

  methods: {
    ...mapActions({
      InitServices: 'Services/actionServices'
    })
  }
}
</script>
