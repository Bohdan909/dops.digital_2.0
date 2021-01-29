<template>
  <video
    v-if="isLazy"
    v-lazy-load
    :loop="loop"
    :autoplay="autoplay"
    :poster="poster"
    :preload="preload"
    :data-src="videoSrc"
    muted
    playsinline
  />

  <video
    v-else
    :loop="loop"
    :autoplay="autoplay"
    :poster="poster"
    :preload="preload"
    :src="videoSrc"
    muted
    playsinline
  />
</template>

<script>

export default {

  props: {
    videoSrc: {
      type: String,
      default: ''
    },

    poster: {
      type: String,
      default: '',
      reqiured: false
    },

    autoplay: {
      type: Boolean,
      default: true
    },

    loop: {
      type: Boolean,
      default: true
    },

    preload: {
      type: String,
      default: 'auto'
    },

    isLazy: {
      type: Boolean
    }
  }
}
</script>
