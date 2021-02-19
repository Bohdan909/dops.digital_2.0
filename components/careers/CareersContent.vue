<template>
  <div class="careers-content">
    <!-- Text Column -->
    <div class="row careers-text">
      <div class="off-tablet-s-2 off-tablet-3 col-tablet-4 col-mob-10">
        <TextElement
          class="careers-text-item text-primary"
          text="Nearly half our company is made up of developers and engineers who help concept, prototype, build, and ship new digital products."
        />
        <TextElement
          class="careers-text-item text-primary"
          text="We’re united by our passion for creating breakthrough web, mobile, e-commerce, and other digital experiences."
        />
      </div>
    </div>

    <!-- Description -->
    <div class="row careers-desc col-br-top col-br-top-end">
      <!-- Location -->
      <div class="col-tablet-3 col-tablet-s-2 col-mob-5">
        <TextElement
          class="text-primary text-color-s"
          text="Location:"
        />
        <TextElement
          class="text-primary"
          text="Lviv"
        />
      </div>

      <!-- Peoples -->
      <div class="col-tablet-s-2 col-tablet-7 col-mob-5">
        <TextElement
          class="text-primary text-color-s"
          text="Peoples :"
        />
      </div>

      <div class="col-tablet-s-6 col-tablet-7 off-tablet-3 col-mob-10">
        <div class="careers-items ttl">
          21
        </div>
        <TextElement
          class="careers-who text-primary text-color-s"
          text="Who we are :"
        />
      </div>
    </div>

    <!-- Finish Text -->
    <div class="row col-br-top col-br-top-end col-br-double">
      <div class="col-tablet-s-6 off-tablet-s-4 col-tablet-7 off-tablet-3">
        <Title
          class="careers-fin-text ttl-4"
          text="Laboratory is a diverse team of thinkers and doers."
        />
      </div>
    </div>

    <!-- Screen -->
    <div class="careers-screen br">
      <ImageElement
        class="screen-image"
        :image-src="$mq === 'mobile' ? imageMob : image"
        :placeholder-src="$mq === 'mobile' ? imageMobPlaceholder : imagePlaceholder"
        alt="Careers photo"
      />
    </div>
  </div>
</template>

<script>
import TextElement from '~/components/atoms/TextElement'
import Title from '~/components/atoms/Title'
import ImageElement from '~/components/atoms/ImageElement'

export default {
  components: {
    TextElement,
    Title,
    ImageElement
  },

  data () {
    return {
      image: require('~/assets/images/careers-image.jpg'),
      imagePlaceholder: require('~/assets/images/careers-image-ph.jpg'),
      imageMob: require('~/assets/images/careers-image-mob.jpg'),
      imageMobPlaceholder: require('~/assets/images/careers-image-mob-ph.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>

.careers-text {
  padding: 78px 0 45px;
}

.careers-text-item {
  width: 250px;

  &:not(:last-child) {
    margin-bottom: 18px;
  }
}

.careers-desc {
  padding-top: 14px;
}

.careers-items {
  font-size: 226px;
  line-height: 235px;
  padding-bottom: 88px;
}

.careers-who {
  padding-bottom: 12px;
}

.careers-fin-text {
  width: 130px;
  padding: 15px 0 110px;
}

.careers-screen {
  height: 628px;
  margin-top: 14px;
}

@include tablet-small {

  .careers-items {
    padding-bottom: 30px;
  }

  .careers-fin-text {
    padding-bottom: 97px;
  }

  .careers-screen {

    &::v-deep .screen-image {
      object-position: 70% 0;
    }
  }
}

@include mobile {

  .careers-vacancies-ttl {
    margin-bottom: 85px;
  }

  .careers-items {
    padding-top: 8px;
    text-align: center;
  }
}
</style>
