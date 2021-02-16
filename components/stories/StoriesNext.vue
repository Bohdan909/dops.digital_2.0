<template>
  <div class="stories-open-next row">
    <div class="col-tablet-2">
      <div class="stories-open-next-helper">
        <NextUp text="Up Next" />
      </div>
    </div>
    <StoriesItem
      v-for="(item, index) in getStoriesNext"
      :key="index"
      class="stories-open-next-item"
      :stories-item="item"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import StoriesItem from '~/components/stories/StoriesItem'
import NextUp from '~/components/atoms/NextUp'

export default {
  components: {
    StoriesItem,
    NextUp
  },

  computed: {
    ...mapGetters({
      getStoriesNext: 'StoriesOpen/getStoriesNext'
    })
  }
}
</script>

<style lang="scss" scoped>

.stories-open-next-helper {
  padding-top: 9px;
  border-top: 1px solid $color-border;
}

.stories-open-next-item {
  margin-bottom: 0;

  @include mobile {
    margin-bottom: 20px;
  }
}

@include mobile {

  .stories-open-next-helper {
    padding: 0 0 22px;
    border: none;
  }
}
</style>
