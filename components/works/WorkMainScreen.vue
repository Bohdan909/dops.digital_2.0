<template>
  <div v-if="getMainScreen" class="work-main-screen br">
    <template v-if="$mq !== 'mobile'">
      <VideoElement
        v-if="getMainScreen.type === 'video' && $mq !== 'mobile'"
        class="work-main-video screen-image"
        :video-src="getMainScreen.mediaUrl && `${api_url}${getMainScreen.mediaUrl}`"
        :poster="getMainScreen.mediaPlaceholderUrl && `${api_url}${getMainScreen.mediaPlaceholderUrl}`"
        is-lazy
      />

      <ImageElement
        v-if="getMainScreen.type === 'image' && $mq !== 'mobile'"
        class="work-main-image screen-image"
        :image-src="getMainScreen.mediaUrl && `${api_url}${getMainScreen.mediaUrl}`"
        :placeholder-src="getMainScreen.mediaPlaceholderUrl && `${api_url}${getMainScreen.mediaPlaceholderUrl}`"
        :alt="`Image ${getMainScreen.title}`"
      />
    </template>

    <ImageElement
      v-else
      class="screen-image"
      :image-src="getMainScreen.imageMobileUrl && `${api_url}${getMainScreen.imageMobileUrl}`"
      :placeholder-src="getMainScreen.imageMobilePlaceholderUrl && `${api_url}${getMainScreen.imageMobilePlaceholderUrl}`"
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
    height: 467px;
  }
}

</style>
