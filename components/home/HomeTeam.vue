<template>
  <div class="team-section">
    <div class="row">
      <!-- Main Block -->
      <div class="col-tablet-8 col-tablet-s-7 col-mob-10">
        <div class="team-main-block fx-col br">
          <div class="team-top">
            <TextElement
              class="text-primary text-color-w"
              text="Design Lab"
            />
            <Year class="team-top-year" text="2021" />
          </div>

          <Title
            element="h2"
            :class="[
              'team-ttl text-color-w',
              {
                'ttl-1': $mq !== 'mobile',
                'ttl-3': $mq === 'mobile'
              }
            ]"
            text="We work together and toward. To bring ideas to life. With intention and meaning. For today, tomorrow, and beyond."
          />

          <Button
            :class="['btn-team btn-light', { 'btn-full': $mq === 'mobile' }]"
            element="nuxt-link"
            to-page="/about"
            text="Team"
          />
        </div>
      </div>
      <!-- Image Block -->
      <div class="col-tablet-2 col-tablet-s-3 col-mob-10">
        <div class="team-image-block br">
          <ImageElement
            class="team-image"
            :image-src="$mq === 'mobile' ? imageMob : imageDesktop"
            :placeholder-src="require('~/assets/images/home-team-ph.jpg')"
            alt="Team Image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextElement from '~/components/atoms/TextElement'
import Year from '~/components/atoms/Year'
import Title from '~/components/atoms/Title'
import Button from '~/components/atoms/Button'

export default {
  components: {
    TextElement,
    Year,
    Title,
    Button
  },

  data () {
    return {
      imageDesktop: require('~/assets/images/home-team.jpg'),
      imageMob: require('~/assets/images/home-team-mob.jpg'),
      phDesktop: require('~/assets/images/home-team.jpg'),
      phMob: require('~/assets/images/home-team-mob.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>

.team-main-block,
.team-image-block {
  min-height: 100vh;

  @include tablet-small {
    min-height: 750px;
  }

  @include mobile {
    min-height: auto;
  }
}

.team-main-block {
  padding: 29px 0 18px 10px;
  background-color: $text-color-g;

  @include mobile {
    padding: 16px 35px 17px;
    margin-bottom: 10px;
  }
}

.team-top {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 19px;

  @include mobile {
    margin-bottom: 13px;
  }
}

.team-top-year {
  margin-left: 9px;
}

.team-ttl {
  width: 520px;

  @include mobile {
    width: auto;
    margin-bottom: 28px;
  }
}

.btn-team {
  width: 385px;
  margin-top: auto;

  @include mobile {
    width: auto;
  }
}

.team-image-block {
  @include mobile {
    min-height: auto;
    height: 435px;
  }
}

.team-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
