<template>
  <div class="studio-bottom">
    <TextElement
      class="studio-bottom-text text-primary bb"
      text="Who we are"
    />
    <div class="studio-bottom-ttl-wrap bb">
      <Title
        element="h2"
        class="studio-bottom-ttl ttl-1"
        text="Laboratory is a diverse team of thinkers and doers."
      />
    </div>
    <ImageElement
      class="screen-image br"
      :image-src="$mq !== 'mobile' ? require('~/assets/images/team-bottom.jpg') : require('~/assets/images/team-bottom-p.jpg')"
      :placeholder-src="$mq !== 'mobile' ? require('~/assets/images/team-bottom-ph.jpg') : require('~/assets/images/team-bottom-p-ph.jpg')"
      alt="Team photo"
    />
  </div>
</template>

<script>
import Title from '~/components/atoms/Title'
import TextElement from '~/components/atoms/TextElement'
import ImageElement from '~/components/atoms/ImageElement'

export default {
  components: {
    Title,
    TextElement,
    ImageElement
  }
}
</script>

<style lang="scss" scoped>

.studio-bottom {
  padding: 40px 0 10px;
}

.studio-bottom-text {
  padding-bottom: 13px;
  margin-bottom: 6px;
}

.studio-bottom-ttl-wrap {
  padding-bottom: 105px;
  margin-bottom: 35px;
}

.studio-bottom-ttl {
  width: 750px;
}

.screen-image {
  height: 630px;
}

@include tablet {

  .studio-bottom {
    padding-top: 55px;
  }

  .studio-bottom-ttl-wrap {
    padding-bottom: 55px;
  }

  .studio-bottom-ttl {
    width: 460px;
  }
}

@include tablet-small {

  .screen-image {
    object-position: 80% 0;
  }
}

@include mobile {

  .studio-bottom {
    padding-bottom: 0;
  }

  .studio-bottom-text {
    margin-bottom: 10px;
  }

  .studio-bottom-ttl-wrap {
    padding-bottom: 20px;
    margin-bottom: 15px;
  }
}
</style>
