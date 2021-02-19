<template>
  <div
    v-if="getStoriesOpen"
    class="stories-open-top"
  >
    <!-- Title -->
    <div class="stories-open-top-text row">
      <div class="col-tablet-s-2 col-tablet-3 col-mob-10">
        <Tag
          v-if="getStoriesOpen.Tag"
          class="stories-open-tag"
          :tag="getStoriesOpen.Tag"
        />
      </div>
      <div class="col-tablet-s-8 col-tablet-7 col-mob-10">
        <TextElement
          v-if="getStoriesOpen.articleDate"
          class="text-secondary text-color-s"
          :text="$moment(getStoriesOpen.articleDate).format('DD.MM.YYYY')"
        />
        <Title
          v-if="getStoriesOpen.articleTitle"
          element="h1"
          :class="['stories-open-ttl',
                   {
                     'ttl-2': $mq !== 'mobile',
                     'ttl-3': $mq === 'mobile'
                   }
          ]"
          :text="getStoriesOpen.articleTitle"
        />
      </div>
    </div>

    <!-- Screen -->
    <div class="stories-open-top-image br">
      <ImageElement
        v-if="getStoriesOpen.articleImage"
        class="screen-image"
        :image-src="getStoriesOpen.articleImage[0] &&
          `${api_url}${getStoriesOpen.articleImage[0].url}`"
        :placeholder-src="getStoriesOpen.articleImagePlaceholder[0] &&
          `${api_url}${getStoriesOpen.articleImagePlaceholder[0].url}`"
        :alt="`Image ${getStoriesOpen.articleTitle}`"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Tag from '~/components/atoms/Tag'
import TextElement from '~/components/atoms/TextElement'
import ImageElement from '~/components/atoms/ImageElement'
import Title from '~/components/atoms/Title'

export default {
  components: {
    Tag,
    TextElement,
    ImageElement,
    Title
  },

  data () {
    return {
      api_url: process.env.strapiBaseUri
    }
  },

  computed: {
    ...mapGetters({
      getStoriesOpen: 'StoriesOpen/getStoriesOpen'
    })
  },

  destroyed () {
    this.setReset()
  },

  methods: {
    ...mapMutations({
      setReset: 'StoriesOpen/setResetState'
    })
  }
}
</script>

<style lang="scss" scoped>

.stories-open-top-text {
  min-height: 270px;
  padding: 70px 0 30px;

  @include mobile {
    min-height: 100%;
    padding: 18px 0 75px;
  }
}

.stories-open-ttl {
  width: 270px;
  padding-top: 10px;

  @include mobile {
    width: 87%;
    padding-top: 6px;
  }
}

.stories-open-top-image {
  height: 365px;

  @include mobile {
    height: 141px;
  }
}

.stories-open-tag {
  @include mobile {
    padding-bottom: 39px;
  }
}
</style>
