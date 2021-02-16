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
          :text="`Filter (All)`"
          @click.native="toggleFilter"
        />
        <div
          :class="['stories-filter-drop', { 'is-open': filterOpen }]"
        >
          <div
            v-for="(button, index) in getTags"
            :key="index"
            class="stories-filter-drop-item"
            @click="toggleFilter"
          >
            {{ button.name }}
          </div>
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
          class="stories-top-btn"
          :text="button.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
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

  methods: {
    toggleFilter () {
      this.filterOpen = !this.filterOpen
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
    color: $color-main;
    padding: 7px 0;
    font-size: 13px;
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
