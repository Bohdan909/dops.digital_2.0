<template>
  <div
    :class="['work-item col-mob-10 col-tablet-5',
             {
               'col-tablet-s-10 work-item-full' : itemMain && desktopAndTablet,
               'col-tablet-s-4 work-item-middle' : itemMiddle && desktopAndTablet,
               'col-tablet-s-2 work-item-small' : !itemMain && !itemMiddle && desktopAndTablet,
               'ffo-tablet-s-2': ItemMargin,
               'col-tablet-10 work-item-full itm': itemMainTablet && $mq === 'tabletSmall'
             }
    ]"
  >
    <!-- Visual -->
    <nuxt-link
      class="work-visual br"
      :to="`/works/${workItem.Slug}`"
    >
      <!-- Desktop -->
      <div v-if="$mq !== 'mobile'">
        <!-- Image Desktop -->
        <ImageElement
          v-if="workItem.WorkPreview && workItem.WorkPreview.PreviewType === 'image'"
          class="work-visual-img"
          :image-src="
            workItem.WorkPreview[getOrientation] &&
              `${api_url}${workItem.WorkPreview[getOrientation].url}`
          "
          :placeholder-src="
            workItem.WorkPreview[`${getOrientation}Placeholder`] &&
              api_url + workItem.WorkPreview[`${getOrientation}Placeholder`].url
          "
          :alt="`Image ${workItem.WorkTitle}`"
        />

        <!-- Video Desktop -->
        <VideoElement
          v-if="workItem.WorkPreview && workItem.WorkPreview.PreviewType === 'video'"
          class="work-visual-video"
          :video-src="workItem.WorkPreview[getOrientation] &&
            `${api_url}${workItem.WorkPreview[getOrientation].url}`
          "
          :poster="workItem.WorkPreview[`${getOrientation}Placeholder`] &&
            api_url + workItem.WorkPreview[`${getOrientation}Placeholder`].url
          "
          is-lazy
        />
      </div>

      <!-- Image Mobile -->
      <div v-else>
        <ImageElement
          v-if="workItem.WorkPreview.PreviewMobile"
          class="work-visual-img"
          :image-src="workItem.WorkPreview.PreviewMobile &&
            `${api_url}${workItem.WorkPreview.PreviewMobile.url}`
          "
          :placeholder-src="workItem.WorkPreview.PreviewMobilePlaceholder &&
            api_url + workItem.WorkPreview.PreviewMobilePlaceholder.url
          "
          :alt="`Image ${workItem.WorkTitle}`"
        />
      </div>
    </nuxt-link>

    <!-- Description For Main -->
    <div
      v-if="(itemMain && desktopAndTablet) || (itemMainTablet && $mq === 'tabletSmall')"
      class="work-desc socket ha"
    >
      <div class="row work-desc-row bb ha">
        <div class="col-tablet-6 col-tablet-s-3 off-tablet-s-2">
          <TextElement
            class="text-primary text-color-s"
            text="Name"
          />
        </div>
        <div class="col-tablet-2">
          <TextElement
            class="text-primary text-color-s"
            text="Type"
          />
        </div>
        <div class="col-tablet-2 col-tablet-s-3">
          <TextElement
            v-if="workItem.WorkDescription"
            class="text-primary text-color-s"
            text="Year"
          />
        </div>
      </div>

      <div class="row work-desc-row bb ha">
        <div class="col-tablet-6 col-tablet-s-3 off-tablet-s-2">
          <Title
            class="ttl-4"
            :text="workItem.WorkTitle"
          />
        </div>
        <div class="col-tablet-2">
          <TextElement
            class="text-primary text-color-s"
            text="Website, Identity"
          />
        </div>
        <div class="col-tablet-2 col-tablet-s-3">
          <TextElement
            v-if="workItem.WorkDescription"
            class="text-primary text-color-s"
            :text="workItem.WorkDescription.Year"
          />
        </div>
      </div>
    </div>
    <!-- Description For Others -->
    <div v-else class="work-desc ha">
      <div class="work-desc-row bb ha">
        <TextElement
          v-if="workItem.WorkDescription"
          class="text-primary text-color-s"
          :text="workItem.WorkDescription.Year"
        />
      </div>
      <div class="work-desc-row bb ha">
        <Title
          class="ttl-4"
          :text="workItem.WorkTitle"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ImageElement from '~/components/atoms/ImageElement'
import VideoElement from '~/components/atoms/VideoElement'
import TextElement from '~/components/atoms/TextElement'
import Title from '~/components/atoms/Title'

export default {
  components: {
    ImageElement,
    VideoElement,
    TextElement,
    Title
  },

  props: {
    workItem: {
      type: Object,
      default: () => {}
    },

    workIndex: {
      type: Number,
      default: 1
    }
  },

  data () {
    return {
      api_url: process.env.strapiBaseUri,
      itemMainTablet: [1, 6, 11, 16, 21, 26, 31].some(el => el === this.workIndex),
      itemMain: [1, 5, 9, 13, 17, 21, 25, 29].some(el => el === this.workIndex),
      itemMiddle: [2, 8, 10, 16, 18, 24, 26, 30].some(el => el === this.workIndex),
      ItemMargin: [2, 6, 10, 14, 18, 22, 26, 30].some(el => el === this.workIndex)
    }
  },

  computed: {
    getMarginIndex (exp) {
      const indexArray = []
      const indexExp = (i) => {
        return (4 * i) + 2
      }
      for (let i = 0; i < 30; i++) {
        indexArray.push(indexExp(i))
      }
      return indexArray
    },

    getOrientation () {
      let image = ''
      this.itemMain ? image = 'Preview' : image = 'PreviewPortrait'
      return image
    },

    desktopAndTablet () {
      return (this.mqDetect() === 'tablet' || this.mqDetect() === 'desktop')
    }
  },

  mounted () {
    this.$nextTick(() => {
      console.log(this.workIndex)
    })
  }
}
</script>

<style lang="scss" scoped>

.work-visual {
  position: relative;
  overflow: hidden;

  .work-item-full & {
    height: 540px;
  }

  .work-item-middle & {
    height: 890px;
  }

  .work-item-small & {
    height: 543px;
  }
}

.work-visual-img,
.work-visual-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.work-desc {
  padding: 8px 0 83px;

  @include mobile {
    padding-bottom: 20px;
  }
}

.work-desc-row {
  padding: 3px 0 2px;

  &::v-deep > div {
    justify-content: center;
  }
}

@include macbook {

  .work-visual {

    .work-item-full &,
    .work-item-small & {
      height: 380px;
    }

    .work-item-middle & {
      height: 625px;
    }
  }
}

@include tablet {

  .work-visual {

    .work-item-middle & {
      height: 467px;
    }

    .work-item-small & {
      height: 280px;
    }
  }
}

@include tablet-small {

  .work-visual {
    height: 467px;

    .work-item-full & {
      height: 380px;
    }
  }
}

@include mobile {

  .text-color-l {
    font-size: 11px;
  }
}
</style>
