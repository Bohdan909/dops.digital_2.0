<template>
  <div class="container page-container page-bg">
    <div class="socket">
      <!-- Vacancies -->
      <CareersVacancies />

      <!-- Departments -->
      <CareersDepartments />

      <!-- Content -->
      <CareersContent />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CareersVacancies from '~/components/careers/CareersVacancies'
import CareersDepartments from '~/components/careers/CareersDepartments'
import CareersContent from '~/components/careers/CareersContent'

export default {
  components: {
    CareersVacancies,
    CareersDepartments,
    CareersContent
  },

  created () {
    this.InitCareers()
    this.InitDepartmens()
  },

  mounted () {
    this.$nextTick(() => {
      this.loadingLine()
    })
  },

  methods: {
    ...mapActions({
      InitCareers: 'Careers/actionCareers',
      InitDepartmens: 'Careers/actionDepartments'
    })
  }
}
</script>
