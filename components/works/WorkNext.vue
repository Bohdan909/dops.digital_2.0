<template>
  <div class="work-next bt">
    <Title
      element="h3"
      class="work-next-ttl ttl-1"
      text="Next project"
    />

    <div class="row">
      <WorkItem :work-item="getWorkNext" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Title from '~/components/atoms/Title'
import WorkItem from '~/components/works/WorkItem'

export default {
  components: {
    Title,
    WorkItem
  },

  computed: {
    ...mapGetters({
      getWorkNext: 'WorkOpen/getWorkNext'
    })
  }
}
</script>

<style lang="scss" scoped>

.work-next {
  padding: 22px 0 0;
}

.work-next-ttl {
  margin-bottom: 24px;

  @include tablet-small {
    margin-bottom: 17px;
  }

  @include mobile {
    margin-bottom: 13px;
  }
}
</style>
