<template>
  <div
    ref="hoverWrap"
    class="reviews-section"
  >
    <Title
      element="h2"
      class="ttl-1 ttl-top bb"
      text="Reviews"
    />

    <!-- Slider -->
    <div
      ref="hoverArea"
      class="reviews-hover-area"
    >
      <!-- Cursor -->
      <CursorDrag
        ref="cursor"
        :swipe="touchDevice() ? true : false"
        :class="{'cursor-swipe': touchDevice()}"
      />

      <Hooper
        :pagination="false"
        :wheel-control="false"
        :infinite-scroll="false"
      >
        <Slide
          v-for="(slide, index) in sliderData"
          :key="index"
        >
          <div class="row ha">
            <div class="col-tablet-3 col-mob-10">
              <Person
                class="reviews-person"
                :name="slide.personName"
                :pos="slide.personPos"
              />
            </div>
            <div class="col-tablet-4 col-mob-10">
              <Title
                element="h4"
                :class="['reviews-text',
                         { 'ttl-4': $mq !== 'mobile' },
                         { 'ttl-3': $mq === 'mobile' }
                ]"
                :text="slide.text"
              />
            </div>
          </div>
        </Slide>
      </Hooper>
    </div>
    <!-- Clutch -->
    <div class="reviews-rate">
      <div class="row">
        <div class="col-tablet-s-3 col-tablet-4 off-tablet-3 col-desktop-4">
          <Rate :val="5.0" />
        </div>
        <div
          v-if="$mq !== 'mobile'"
          class="col-tablet-4 off-tablet-s-reset off-tablet-3 col-desktop-3"
        >
          <Button
            class="btn-clutch"
            element="a"
            href="https://clutch.co/profile/dopsdigital-laboratory"
            text="Clutch"
            target="_blank"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import Title from '~/components/atoms/Title'
import Person from '~/components/atoms/Person'
import CursorDrag from '~/components/atoms/Cursor'
import Rate from '~/components/atoms/Rate'
import 'hooper/dist/hooper.css'

export default {
  components: {
    Title,
    Person,
    Hooper,
    Slide,
    CursorDrag,
    Rate
  },

  data () {
    return {
      sliderData: [
        {
          personName: 'Abdulmajeed',
          personPos: 'Co-Founder',
          text: 'The team is very easy to talk to and I’d definitely recommend them to anyone looking for an overseas company.'
        },
        {
          personName: 'Ivan',
          personPos: 'CEO, RocketWheel',
          text: 'Their team’s creative and has a great eye for design'
        },
        {
          personName: 'Evelyne',
          personPos: 'Co-Founder',
          text: 'I only have positive feedback for them; I couldn’t ask for a better agency'
        },
        {
          personName: 'Victoria',
          personPos: 'Co-Founder',
          text: 'They’re very creative, and I really like the ideas that they’ve brought to the business'
        },
        {
          personName: 'Alexey',
          personPos: 'Co-Founder',
          text: 'They cared about our users and wanted to make the portal interesting.'
        },
        {
          personName: '',
          text: 'We appreciate the way they created a high-quality product that’s intuitive and engaging'
        },
        {
          personName: 'Deep',
          personPos: 'Co-Founder',
          text: 'The team\'s creative skill and deep knowledge ensured excellent solutions'
        },
        {
          personName: 'Marco',
          personPos: 'Co-Founder',
          text: 'When they showed us sketches and options, they knew how everything would move and interact with everything else.'
        },
        {
          personName: 'Anastasiia',
          personPos: 'Co-Founder',
          text: 'The team is highly motivated, client-oriented, and ambitious'
        },
        {
          personName: 'Max',
          personPos: 'Co-Founder',
          text: 'They are very client-oriented and deliver invaluable work'
        },
        {
          personName: 'Masha',
          personPos: 'Co-Founder, Elevate Security',
          text: 'The quality of their design work is really amazing and emotional.'
        }, {
          personName: 'Helen',
          personPos: 'Co-Founder, DA.Collection',
          text: 'The design is compelling and users fall in love with our site'
        }
      ]
    }
  },

  mounted () {
    if (!this.touchDevice()) {
      const cursor = this.$refs.cursor.$el

      this.cursorImage(
        this.$refs.hoverWrap,
        this.$refs.hoverArea,
        cursor,
        35,
        135
      )
    }
  }
}
</script>

<style lang="scss" scoped>

.reviews-section {
  padding-top: 16px;

  @include mobile {
    padding-top: 55px;
  }
}

.reviews-hover-area {
  position: relative;
}

.hooper {
  height: 238px;
  outline: none;
  user-select: none;
  cursor: none;

  @include mobile {
    height: 350px;
    padding-bottom: 100px;
  }
}

.hooper-slide {
  padding-top: 20px;

  @include mobile {
    padding-top: 55px;
  }
}

.ttl-top {
  padding-bottom: 9px;

  @include mobile {
    font-size: 24px;
    line-height: 26px;
    letter-spacing: -.48px;
    padding-bottom: 12px;
  }
}

.reviews-person {
  @include mobile {
    padding-bottom: 14px;
  }
}

.reviews-text {
  width: 260px;

  @include mobile {
    width: auto;
    padding-top: 14px;
    border-top: 1px solid $color-border;
  }
}

.reviews-rate {
  padding-bottom: 280px;
  border-top: 1px solid $color-border;

  @include tablet-small {
    padding-bottom: 80px;
  }
}

.btn-clutch {
  width: 260px;
  margin-top: 12px;

  @include tablet-small {
    margin-top: 0;
  }
}
</style>
