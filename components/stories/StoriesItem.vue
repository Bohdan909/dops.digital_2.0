<template>
  <div
    :class="['stories-item col-mob-10',
             {
               'col-tablet-10 stories-item-big': previewHandler('big', storiesIndex),
               'col-tablet-s-2 col-tablet-5': !previewHandler('big', storiesIndex) && storiesIndex,
               'col-tablet-s-4': previewHandler('midle', storiesIndex),
               'off-desktop-2': previewHandler('off', storiesIndex),
               'off-tablet-s-2': previewHandler('off-tablet', storiesIndex),
               'off-desktop-reset': !previewHandler('off', storiesIndex) && storiesIndex,
               'col-tablet-4': !storiesIndex
             }
    ]"
  >
    <!-- Tag  -->
    <div
      v-if="!previewHandler('big', storiesIndex)"
      class="stories-tag"
    >
      <Tag v-if="storiesItem.Tag" :tag="storiesItem.Tag" />
    </div>

    <!-- Images -->
    <nuxt-link
      class="stories-image br"
      :to="`/stories/${storiesItem.slug}`"
    >
      <ImageElement
        class="screen-image"
        :image-src="storiesItem.articleImage[0] &&
          `${api_url}${storiesItem.articleImage[0].url}`"
        :placeholder-src="storiesItem.articleImagePlaceholder[0] &&
          `${api_url}${storiesItem.articleImagePlaceholder[0].url}`"
      />
    </nuxt-link>

    <!-- Descrition Big -->
    <div
      v-if="previewHandler('big', storiesIndex)"
      class="stories-desc-big row ha"
    >
      <div class="col-mob-2">
        <Tag v-if="storiesItem.Tag" :tag="storiesItem.Tag" />
      </div>
      <div class="col-tablet-s-4 col-tablet-3 col-mob-6">
        <TextElement
          v-if="storiesItem.articleDate"
          class="text-primary text-color-s"
          :text="$moment(storiesItem.articleDate).format('DD.MM.YYYY')"
        />
        <Title
          v-if="storiesItem.articleTitle"
          element="h3"
          :to-page="`/stories/${storiesItem.slug}`"
          :class="['stories-ttl',
                   {
                     'ttl-4': $mq !== 'mobile',
                     'ttl-3': $mq === 'mobile'
                   }]"
          :text="storiesItem.articleTitle"
        />
      </div>
      <div class="col-tablet-s-4 col-tablet-5 col-mob-8 off-mob-2 off-tablet-reset">
        <PersonAvatar
          v-if="storiesItem.articleAuthor"
          :avatar="storiesItem.articleAuthor.avatar[0] &&
            `${api_url}${storiesItem.articleAuthor.avatar[0].url}`"
          :name="storiesItem.articleAuthor.name"
          :pos="storiesItem.articleAuthor.pos"
          pos-top
        />
      </div>
    </div>

    <!-- Descrition Regular -->
    <div
      v-if="!previewHandler('big', storiesIndex)"
      class="stories-desc"
    >
      <TextElement
        v-if="storiesItem.articleAuthor.name"
        class="text-secondary text-color-s"
        :text="`Words by ${storiesItem.articleAuthor.name}`"
      />
      <Title
        v-if="storiesItem.articleTitle"
        :to-page="`/stories/${storiesItem.slug}`"
        element="h3"
        :class="['stories-ttl',
                 {
                   'ttl-4': $mq !== 'mobile',
                   'ttl-3': $mq === 'mobile'
                 }]"
        :text="storiesItem.articleTitle"
      />
    </div>
  </div>
</template>

<script>
import ImageElement from '~/components/atoms/ImageElement'
import PersonAvatar from '~/components/atoms/PersonAvatar'
import Title from '~/components/atoms/Title'
import Tag from '~/components/atoms/Tag'

export default {
  components: {
    ImageElement,
    PersonAvatar,
    Title,
    Tag
  },

  props: {
    storiesItem: {
      type: Object,
      default: () => {}
    },

    storiesIndex: {
      type: Number,
      default: null
    }
  },

  data () {
    return {
      api_url: process.env.strapiBaseUri
    }
  },

  methods: {
    previewHandler (type, index) {
      if (index !== null) {
        index++
        switch (type) {
          case 'big':
            return [1, 7, 13, 19, 26, 32, 38].some(el => el === index)
          case 'midle':
            return [2, 5, 8, 11, 14, 17, 20, 23, 26, 29].some(el => el === index)
          case 'off':
            return [4, 5, 10, 11, 15, 16, 21, 22, 26, 27].some(el => el === index)
          case 'off-tablet':
            return [4, 5, 6, 10, 11, 12, 16, 17, 18, 22, 23, 24, 28, 29, 30].some(el => el === index)
        }
      } else {

      }
    }
  }
}
</script>

<style lang="scss" scoped>

.stories-item {
  margin-bottom: 45px;

  @include tablet-small {
    margin-bottom: 10px;
  }
}

.stories-item-big {
  margin-bottom: 115px;

  @include tablet-small {
    margin-bottom: 55px;
  }

  &::v-deep {

    .stories-image {
      height: 400px;

      @include mobile {
        height: 300px;
      }
    }
  }
}

.stories-tag {
  padding: 8px 0;
  border-top: 1px solid $color-border;
}

.stories-image {
  height: 300px;
}

.stories-desc-big,
.stories-desc {
  min-height: 150px;
}

.stories-desc-big {
  position: relative;
  padding: 21px 0 15px;

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 5px;
    right: 5px;
    bottom: 0;
    height: 1px;
    background-color: $color-border;
  }

  &::v-deep {

    .stories-ttl {
      width: 30%;
      padding-top: 5px;

      @include tablet {
        width: 95%;
      }

      @include mobile {
        margin-bottom: 35px;
      }
    }
  }
}

.stories-desc {
  padding: 15px 45px 15px 0;

  &::v-deep {

    .stories-ttl {
      padding-top: 5px;
    }
  }
}

@include mobile {

  .stories-item-big,
  .stories-item {
    margin-bottom: 0;
  }

  .stories-desc-big {
    padding-bottom: 25px;

    &::v-deep {

      .stories-ttl {
        padding-top: 0;
      }
    }

    &::after {
      display: none;
    }
  }

  .stories-desc {
    min-height: 132px;
    padding-bottom: 22px;
  }
}
</style>
