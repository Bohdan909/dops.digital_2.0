<template>
  <div v-if="getMainScreen" class="work-main-screen br">
    <VideoElement
      v-if="getMainScreen.video && $mq !== 'mobile'"
      class="work-main-video screen-image"
      :video-src="getMainScreen.videoUrl && `${api_url}${getMainScreen.videoUrl}`"
      :poster="getMainScreen.placeholderUrl && `${api_url}${getMainScreen.placeholderUrl}`"
      is-lazy
    />

    <ImageElement
      v-if="!getMainScreen.video || $mq === 'mobile'"
      class="work-main-image screen-image"
      :image-src="getMainScreen.imageUrl && `${api_url}${getMainScreen.imageUrl}`"
      :placeholder-src="getMainScreen.placeholderUrl && `${api_url}${getMainScreen.placeholderUrl}`"
      :alt="`Image ${getMainScreen.title}`"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ImageElement from '~/components/atoms/ImageElement'
import VideoElement from '~/components/atoms/VideoElement'

export default {
  components: {
    ImageElement,
    VideoElement
  },

  data () {
    return {
      api_url: process.env.strapiBaseUri
    }
  },

  computed: {
    ...mapGetters({
      getMainScreen: 'WorkOpen/getMainScreen'
    })
  }
}
</script>

<style lang="scss" scoped>

.work-main-screen {
  height: 100vh;
  margin-bottom: 10px;

  @include tablet {
    height: 563px;
  }

  @include tablet-small {
    height: 417px;
  }

  @include mobile {
    height: 197px;
  }
}
</style>
