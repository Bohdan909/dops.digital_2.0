<template>
  <div v-if="getWorkContent" class="work-content">
    <div
      v-for="(section, index) in getWorkContent"
      :key="index"
      class="work-section"
    >
      <!-- Title -->
      <Title
        v-if="section.Title"
        element="h2"
        class="work-ttl ttl-5 text-color-s"
        :text="section.Title"
      />
      <!-- Text Columns -->
      <div class="row">
        <div
          v-for="(column, i) in [section.TextColumn1, section.TextColumn2]"
          :key="i"
          class="col-tablet-5 col-mob-10"
        >
          <TextElement
            v-if="`${column}`"
            class="work-text text-primary"
            :text="`${column}`"
          />
        </div>
      </div>

      <!-- Images -->
      <div class="row">
        <div
          v-for="(element, j) in section.Image"
          :key="j"
          :class="['col-mob-10', {
            'col-tablet-10': element.ImageFull,
            'col-tablet-5': !element.ImageFull
          }]"
        >
          <div v-if="element.ImageSrc" class="work-image-wrap br">
            <VideoElement
              v-if="element.ImageSrc.url.substr(element.ImageSrc.url.length - 3) === 'mp4'"
              class="work-video screen-image"
              :video-src="element.ImageSrc && `${api_url}${element.ImageSrc.url}`"
            />

            <ImageElement
              v-else
              class="work-image screen-image"
              :image-src="element.ImageSrc && `${api_url}${element.ImageSrc.url}`"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Title from '~/components/atoms/Title'
import TextElement from '~/components/atoms/TextElement'
import ImageElement from '~/components/atoms/ImageElement'

export default {
  components: {
    Title,
    TextElement,
    ImageElement
  },

  data () {
    return {
      api_url: process.env.strapiBaseUri
    }
  },

  computed: {
    ...mapGetters({
      getWorkContent: 'WorkOpen/getWorkContent'
    })
  }
}
</script>

<style lang="scss" scoped>

.work-ttl {
  padding: 22px 0 10px;
  margin-bottom: 26px;
  border-bottom: 1px solid $color-border;

  @include tablet-small {
    margin-bottom: 41px;
  }

  @include mobile {
    padding-top: 5px;
  }
}

.work-text {
  width: 340px;
  padding-bottom: 40px;

  @include tablet-small {
    padding-bottom: 52px;
  }

  @include mobile {
    width: auto;
    padding-right: 15px;
  }
}

.work-image-wrap {
  height: 1066px;
  width: 100%;
  margin-bottom: 10px;

  @include macbook {
    height: 750px;
  }

  @include tablet {
    height: 560px;
  }

  @include tablet-small {
    height: 410px;
  }

  @include mobile {
    height: 197px;
  }
}
</style>
