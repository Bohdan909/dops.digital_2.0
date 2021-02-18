<template>
  <div class="container page-container page-bg">
    <div v-if="!isLoading" class="socket">
      <!-- Top -->
      <CareersOpenTop />

      <!-- Content -->
      <CareersOpenContent />
    </div>
    <PageLoader v-else />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import PageLoader from '~/components/atoms/PageLoader'
import CareersOpenTop from '~/components/careers/CareersOpenTop'
import CareersOpenContent from '~/components/careers/CareersOpenContent'

export default {
  components: {
    PageLoader,
    CareersOpenTop,
    CareersOpenContent
  },

  computed: {
    ...mapState({
      isLoading: store => store.StoriesOpen.isLoading
    })
  },

  created () {
    const { slug } = this.$route.params
    this.InitCareersOpen(slug)
  },

  methods: {
    ...mapActions({
      InitCareersOpen: 'CareersOpen/actionCareersOpen'
    })
  }
}
</script>
