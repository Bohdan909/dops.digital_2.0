<template>
  <div v-if="servicesData" class="services-item">
    <!-- Preview -->
    <div
      v-if="$mq !== 'mobile'"
      class="services-item-preview br"
    >
      <VideoElement
        v-if="servicesData.Preview.url.substr(servicesData.Preview.url.length - 3) === 'mp4'"
        class="screen-image"
        :video-src="servicesData.Preview && `${api_url}${servicesData.Preview.url}`"
        :poset="servicesData.PreviewPlaceholder && `${api_url}${servicesData.PreviewPlaceholder.url}`"
      />

      <ImageElement
        v-else
        class="screen-image"
        :image-src="servicesData.Preview && `${api_url}${servicesData.Preview.url}`"
        :image-placeholder="servicesData.PreviewPlaceholder && `${api_url}${servicesData.PreviewPlaceholder.url}`"
      />
    </div>

    <div
      v-else
      class="services-item-preview br"
    >
      <ImageElement
        class="screen-image"
        :image-src="servicesData.PreviewMobile && `${api_url}${servicesData.PreviewMobile.url}`"
        :image-placeholder="servicesData.PreviewMobilePlaceholder && `${api_url}${servicesData.PreviewMobilePlaceholder.url}`"
      />
    </div>

    <!-- Description -->
    <div class="services-item-desc row">
      <div class="col-tablet-4 col-mob-10 col-br-top col-br-top-end">
        <Title
          v-if="servicesData.Title"
          element="h2"
          class="services-item-ttl ttl-3"
          :text="servicesData.Title"
        />
      </div>

      <div class="col-tablet-6 col-mob-10">
        <div class="services-item-points">
          <div
            v-for="(point, index) in servicesData.ServiceItem"
            :key="index"
            :class="['services-item-point br-top br-top-end',
                     {
                       'br-double': ![0, 1, 2].some(el => el === index)
                     }
            ]"
          >
            <TextElement
              class="text-secondary text-color-s"
              :text="`${index + 1}.0`"
            />
            <TextElement
              v-if="point.Name"
              class="text-primary"
              :text="point.Name"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '~/components/atoms/Title'
import ImageElement from '~/components/atoms/ImageElement'
import VideoElement from '~/components/atoms/VideoElement'

export default {
  components: {
    ImageElement,
    VideoElement,
    Title
  },

  props: {
    servicesData: {
      type: Object,
      default: () => {}
    }
  },

  data () {
    return {
      api_url: process.env.strapiBaseUri
    }
  }
}
</script>

<style lang="scss" scoped>

.services-item-preview {
  height: 465px;
}

.services-item-desc {
  position: relative;
  padding: 9px 0 73px;

  @include mobile {
    padding-bottom: 57px;
  }
}

.services-item-ttl {
  padding-top: 9px;

  @include mobile {
    padding: 12px 0 44px;
  }
}

.services-item-points {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}

.services-item-point {
  width: calc(33.3% - 5px);
  min-height: 79px;
  padding: 13px 0;

  @include mobile {
    width: calc(50% - 5px);
  }
}

</style>
