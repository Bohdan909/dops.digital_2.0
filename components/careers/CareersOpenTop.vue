<template>
  <div class="careers-open-top">
    <!-- Back -->
    <LinkBack
      to-page="/careers"
      class="link-back-big"
      text="Back to careers"
    />

    <!-- Title Section -->
    <div class="careers-open-top-main row col-br-top col-br-top-end">
      <div class="col-desktop-8 off-desktop-2 col-tablet-s-7 off-tablet-s-3 col-mob-10">
        <TextElement
          v-if="getCareersOpen.carrers_department"
          class="text-primary text-color-s"
          :text="getCareersOpen.carrers_department.Name"
        />
        <Title
          v-if="getCareersOpen.Title"
          element="h1"
          class="careers-open-top-ttl ttl-1"
          :text="getCareersOpen.Title"
        />
        <TextElement
          v-if="getCareersOpen.Short_description"
          class="careers-open-top-text text-primary"
          :text="getCareersOpen.Short_description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LinkBack from '~/components/atoms/LinkBack'
import TextElement from '~/components/atoms/TextElement'
import Title from '~/components/atoms/Title'

export default {
  components: {
    LinkBack,
    TextElement,
    Title
  },

  computed: {
    ...mapGetters({
      getCareersOpen: 'CareersOpen/getCareersOpen'
    })
  }
}
</script>

<style lang="scss" scoped>

.careers-open-top {
  padding: 55px 0 0;
}

.link-back-big {
  margin-bottom: 11px;
}

.careers-open-top-main {
  padding: 33px 0 55px;
}

.careers-open-top-ttl {
  padding: 10px 0 76px;
}

.careers-open-top-text {
  width: 260px;
}
</style>
