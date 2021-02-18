<template>
  <div class="careers-vacancies row">
    <div class="off-tablet-3 off-tablet-s-2 col-desktop-3 col-tablet-s-4 col-tablet-5 col-mob-10">
      <TextElement
        class="text-primary text-color-s"
        :text="`${getCareers.length} Vacancies`"
      />

      <Title
        element="h1"
        class="careers-vacancies-ttl ttl-1"
        text="Careers"
      />

      <Vacancy
        v-for="(vacancy, index) in getCareers"
        :key="index"
        :vac-data="vacancy"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TextElement from '~/components/atoms/TextElement'
import Title from '~/components/atoms/Title'
import Vacancy from '~/components/careers/Vacancy'

export default {
  components: {
    TextElement,
    Title,
    Vacancy
  },

  computed: {
    ...mapGetters({
      getCareers: 'Careers/getCareers'
    })
  }
}
</script>

<style lang="scss" scoped>

.careers-vacancies {
  padding: 26px 0 100px;
}

.careers-vacancies-ttl {
  padding-top: 7px;
  margin-bottom: 67px;
}
</style>
