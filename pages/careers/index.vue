<template>
  <div class="container page-container page-bg">
    <div class="socket">
      <!-- Vacancies -->
      <CareersVacancies />
    </div>
  </div>
</template>

<script>
import CareersVacancies from '~/components/careers/CareersVacancies'

export default {
  components: {
    CareersVacancies
  },

  mounted () {
    this.$nextTick(() => {
      this.loadingLine()
    })
  }
}
</script>
