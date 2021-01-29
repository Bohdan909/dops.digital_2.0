<template>
  <div class="home-top">
    <div class="socket">
      <!-- Head -->
      <div :class="['home-top-head', { 'bb' : $mq !== 'mobile' }]">
        <div class="row">
          <div :class="colsClassesLeft">
            <div :class="['text-row', { 'bb' : $mq === 'mobile' }]">
              <TextElement
                class="text-primary"
                text="What we do"
              />

              <ImageElement
                class="text-arrow"
                :image-src="require('~/assets/images/arrow.png')"
                alt="arrow"
              />

              <TagsRotator />
            </div>
          </div>
          <div :class="colsClassesRight">
            <TextElement
              v-if="$mq !== 'mobile'"
              class="text-primary"
              text="Founded in 2016"
            />
            <Title
              v-else
              element="h1"
              class="ttl-1"
              :text="title"
            />
          </div>
        </div>
      </div>

      <!-- Main -->
      <div class="home-top-main">
        <div class="row">
          <div :class="colsClassesLeft">
            <Title
              v-if="$mq !== 'mobile'"
              element="h1"
              class="ttl-1"
              :text="title"
            />
            <TextElement
              v-else
              class="text-primary"
              text="Founded in 2016"
            />
          </div>
          <div :class="colsClassesRight">
            <Title
              element="h4"
              class="ttl-4"
              text="We believe in the <br/> power of design and <br/> storytelling."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageElement from '~/components/atoms/ImageElement'
import TextElement from '~/components/atoms/TextElement'
import TagsRotator from '~/components/atoms/TagsRotator'
import Title from '~/components/atoms/Title'

export default {
  components: {
    TextElement,
    ImageElement,
    TagsRotator,
    Title
  },

  data () {
    return {
      title: `dops.digital <br />
              <strong class='circle'>c</strong>
              <i>is a</i>
              design <br /> laboratory.`,
      colsClassesLeft: 'col-desktop-6 col-tablet-5 col-mob-10',
      colsClassesRight: 'col-desktop-4 col-tablet-5 col-mob-10'
    }
  }
}
</script>

<style lang="scss" scoped>

.home-top {
  position: relative;
  z-index: 1;
  padding: 127px 0 17px;
  background-color: $color-main;
  margin-bottom: 100vh;

  @include mobile {
    padding: 51px 0 50px;
  }
}

.home-top-head {
  padding-bottom: 9px;

  @include mobile {
    padding: 0;

    &::v-deep .ttl {
      width: 350px;

      i {
        color: $text-color;
      }

      br {
        display: none;
      }
    }
  }
}

.text-row {
  display: flex;
  align-items: flex-start;

  @include mobile {
    padding-bottom: 9px;
    margin-bottom: 14px;
  }

  &::v-deep {

    .text-primary {
      margin-right: 40px;
    }

    .text-arrow {
      margin-right: 10px;
    }
  }
}

.text-primary {
  line-height: 21px;
}

.text-arrow {
  align-self: center;
}

.home-top-main {
  padding-top: 9px;

  @include mobile {
    padding-top: 120px;

    &::v-deep {

      .ttl {
        padding-top: 6px;
        font-size: 30px;
        letter-spacing: -.9px;
        line-height: 34px;

        br {
          display: none;
        }
      }
    }
  }
}
</style>
