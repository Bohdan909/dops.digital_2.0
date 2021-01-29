<template>
  <div class="screen screen-main screen-fixed">
    <VideoElement
      class="screen-video"
      :video-src="setVideoMq(introVideoArr)"
      :poster="setVideoMq(introVideoArr, 'poster')"
      is-lazy
    />
  </div>
</template>

<script>
import VideoElement from '~/components/atoms/VideoElement'

export default {
  components: {
    VideoElement
  },

  data () {
    return {
      introVideoArr: [
        {
          screen: 'default',
          src: 'https://d197cwgxgz2ypb.cloudfront.net/intro_.mp4',
          poster: 'https://d197cwgxgz2ypb.cloudfront.net/poster-intro.jpg'
        },
        {
          screen: 'mobile',
          src: 'https://d197cwgxgz2ypb.cloudfront.net/intro-mobile_.mp4',
          poster: 'https://d197cwgxgz2ypb.cloudfront.net/poster-intro-mob.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.screen.screen-fixed {
  z-index: 0;
}

.screen-main {

  .menu-open & {
    display: none;
  }

  // @include mobile {
  //   height: 86vh;
  //   min-height: 600px;
  // }
}

</style>
