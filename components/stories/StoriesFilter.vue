<template>
  <div class="stories-top bb">
    <div class="row">
      <div class="col-tablet-s-2 col-tablet-3">
        <Items :num="storiesLength" />
        <Title
          element="h1"
          class="ttl-3"
          text="Stories"
        />
      </div>

      <!-- Filter Button Mobile -->
      <div
        v-if="$mq === 'mobile'"
        class="stories-filter-mobile"
      >
        <ButtonFilter
          class="stories-filter-btn is-active"
          :text="`Filter (${getTags.filter(item => item.active === true).map(item => item.name)})`"
          is-massive
          @click.native="toggleFilter"
        />
        <div
          :class="['stories-filter-drop',
                   { 'is-open': filterOpen }
          ]"
        >
          <ButtonFilter
            v-for="(button, index) in getTags"
            :id="button.name"
            :key="index"
            class="stories-filter-drop-item"
            :text="button.name"
            is-checkbox
            :checked="button.active"
            :checkchange="onChangeFilter"
          />
        </div>
      </div>

      <!-- Filter Button Not Mobile -->
      <div
        v-for="(button, index) in getTags"
        v-else
        :key="index"
        class="stories-top-col col-tablet-s-1"
      >
        <ButtonFilter
          :id="button.name"
          :class="['stories-top-btn',
                   { 'is-active': button.active }
          ]"
          :text="button.name"
          :checked="button.active"
          :checkchange="onChangeFilter"
          is-checkbox
          is-massive
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'
import Items from '~/components/atoms/Items'
import Title from '~/components/atoms/Title'
import ButtonFilter from '~/components/atoms/ButtonFilter'

export default {
  components: {
    Items,
    Title,
    ButtonFilter
  },

  data () {
    return {
      filterOpen: false
    }
  },

  computed: {
    ...mapGetters({
      getTags: 'Stories/getTags'
    }),

    ...mapState({
      storiesLength: store => store.Stories.storiesLength
    })
  },

  beforeDestroy () {
    this.setSelectedAll()
  },

  methods: {
    ...mapMutations({
      setSelected: 'Stories/setTagSelected',
      setSelectedAll: 'Stories/setTagSelectedAll'
    }),

    ...mapActions({
      loadStories: 'Stories/actionStories'
    }),

    toggleFilter () {
      this.filterOpen = !this.filterOpen
    },

    getActiveTag () {

    },

    onChangeFilter ({ target }, id) {
      if (id === this.getTags[0].name) { // All
        this.setSelectedAll()
      } else {
        this.setSelected({
          id,
          active: target.checked
        })
      }

      this.loadStories()
    }
  }
}
</script>

<style lang="scss" scoped>

.stories-top {
  padding: 16px 0 8px;
  margin-bottom: 18px;
}

.stories-top-col {
  padding-top: 4px;
}

.stories-top-btn {
  left: -14px;
}

@include mobile {

  .stories-filter-mobile {
    position: absolute;
    right: 0;
    top: 20px;
  }

  .stories-filter-btn {
    width: 150px;
    z-index: 1;

    &::v-deep .button-filter-massive-text {
      color: $color-main;
    }
  }

  .stories-filter-drop {
    position: absolute;
    width: 100%;
    padding: 27px 14px 13px;
    top: 16px;
    left: 0;
    background-color: $color-black;
    border-radius: 0 0 18px 18px;
    animation: fadeOut-l .1s forwards;

    &.is-open {
      animation: fadeIn-l .1s forwards;
    }
  }

  .stories-filter-drop-item {
    width: 100%;
    color: $color-main;
    padding: 7px 0;
  }
}

@keyframes fadeIn-l {

  0% {
    opacity: 0;
    visibility: hidden;
  }

  5% {
    opacity: 0;
    visibility: visible;
  }

  100% {
    opacity: 1;
    visibility: visible;
  }
}

@keyframes fadeOut-l {

  0% {
    opacity: 1;
    visibility: visible;
  }

  95% {
    opacity: 0;
    visibility: visible;
  }

  100% {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
