<template>
  <div class="studio-top row">
    <!-- Title Column -->
    <div class="col-tablet-s-6 col-tablet-7 col-mob-10">
      <TextElement
        class="studio-top-head fx-col text-primary text-color-s"
        text="Who we are"
      />

      <div class="studio-top-body br-top br-double">
        <Title
          element="h2"
          class="studio-top-ttl ttl-1"
          text="Digital experiences with focus on what’s essential."
        />
      </div>
    </div>

    <!-- Founded Column -->
    <div class="col-tablet-s-4 col-tablet-3 col-mob-10">
      <Title
        class="studio-top-head studio-top-head-desc fx-col ttl-4"
        text="Founded in 2016"
      />

      <div
        :class="['studio-top-body',
                 {
                   'br-top br-double br-top-end': $mq !== 'mobile'
                 }
        ]"
      >
        <div class="studio-desc-wrap">
          <PersonTeam
            v-for="(item, index) in studioDesc"
            :key="index"
            class="studio-desc"
            :name="item.label"
            :pos="item.value"
          />
        </div>
      </div>
    </div>

    <!-- Studio Screen -->
    <div class="col-mob-10">
      <div class="studio-top-screen br">
        <ImageElement
          class="screen-image"
          :image-src="require('~/assets/images/team-photo.jpg')"
          :placeholder-src="require('~/assets/images/team-photo-ph.jpg')"
          alt="Team photo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TextElement from '~/components/atoms/TextElement'
import Title from '~/components/atoms/Title'
import PersonTeam from '~/components/atoms/PersonTeam'
import ImageElement from '~/components/atoms/ImageElement'

export default {
  components: {
    TextElement,
    Title,
    PersonTeam,
    ImageElement
  },

  data () {
    return {
      studioDesc: [
        { label: 'Team', value: '21' },
        { label: 'Location', value: 'Ukraine' },
        { label: 'Focus', value: 'Design' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.studio-top {
  padding: 70px 0 0;
}

.studio-top-head {
  height: 31px;
  flex-shrink: 0;
}

.studio-top-body {
  height: 100%;
}

.studio-top-ttl {
  width: 470px;
  padding: 13px 0 43px;
}

.studio-desc-wrap {
  display: flex;
  flex-direction: row;
  padding-top: 19px;
}

.studio-desc {

  &:not(:last-child) {
    width: 135px;
  }
}

.studio-top-screen {
  height: 630px;
  margin-top: 35px;
}

@include tablet-small {

  .studio-top-screen {
    height: 630px;
  }

  .studio-desc-wrap {
    display: block;
  }

  .studio-desc {
    margin-bottom: 23px;

    &:not(:last-child) {
      width: 100%;
      margin-bottom: 32px;
    }
  }
}

@include mobile {

  .studio-top-ttl {
    width: 225px;
    padding: 7px 0 18px;
  }

  .studio-top-head-desc {
    padding-top: 14px;
  }

  .studio-desc-wrap {
    display: flex;
    padding-top: 23px;
  }

  .studio-desc {

    &:not(:last-child), &:last-child {
      margin-bottom: 18px;
    }

    &:nth-child(1) {
      width: 75px;
    }

    &:nth-child(2) {
      width: 108px;
    }
  }

  .studio-top-screen {
    margin-top: 0;
  }
}
</style>
