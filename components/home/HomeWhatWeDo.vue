<template>
  <div class="what-we-do br bg-dark">
    <div class="row">
      <div class="col-mob-10">
        <Title
          element="h4"
          class="ttl-4 ttl-top bb-d text-color-l"
          text="What we do"
        />
      </div>
    </div>

    <div class="tags-wrap">
      <div class="tags-row row">
        <div
          v-for="(tag, index) in tags"
          :key="index"
          :class="[
            'tag-col col-mob-10 col-desktop-3',
            {
              'col-desktop-6': (index + 1) % 5 === 0 || index === 0,
              'col-desktop-6 off-tablet-s-3': (index + 1) % 7 === 0,
              'col-tablet-s-5': index !== 2,
              'col-tablet-s-3': index === 2,
            }
          ]"
        >
          <Title
            element="h2"
            :class="[
              'ttl-1 tag',
              {
                'tag-highlight': index === 0,
                'text-color-l' : index !== 0
              }
            ]"
            :text="tag"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-tablet-2 off-tablet-s-3">
        <Button
          class="btn-services btn-invert"
          element="nuxt-link"
          to-page="/services"
          text="Services"
        />
      </div>
    </div>

    <div class="bottom-row row">
      <div
        class="col-tablet-4 col-tablet-s-2 off-tablet-s-3"
      >
        <TextElement
          class="text-bottom text-color-d text-primary"
          text="We work with brands far and wide, big and small with a variarity type of services."
        />
      </div>
      <div
        v-if="$mq !== 'mobile'"
        class="col-tablet-4 col-tablet-s-2 off-tablet-s-1"
      >
        <TextElement
          class="text-bottom text-color-d text-primary"
          text="We work with brands far and wide, big and small with a variarity type of services."
        />
      </div>
    </div>
  </div>
</template>

<script>
import TextElement from '~/components/atoms/TextElement'
import Button from '~/components/atoms/Button'
import Title from '~/components/atoms/Title'

export default {
  components: {
    TextElement,
    Button,
    Title
  },

  data () {
    return {
      tags: [
        'Design',
        'Mobile Apps',
        'Websites',
        'Brand Identity',
        'UX/UI Design',
        'Motion Graphic',
        'Package'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.what-we-do {
  padding: 14px 10px 25px;
}

.ttl-top {
  padding-bottom: 6px;
}

.tags-wrap {
  overflow: hidden;
  padding: 10px 0 23px;
}

.tags-row {
  position: relative;
  padding-top: 4px;
  background-image: repeating-linear-gradient(
    180deg,
    $color-black,
    $color-black  61px,
    $color-border-d 61px,
    $color-border-d 62px
  );
  background-attachment: local;

  &::before, &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 5px;
    height: 100%;
    background-color: $color-black;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
}

.tag {
  line-height: 63px;
  white-space: nowrap;
}

.tag-highlight {
  color: $color-main;
}

.btn-services {
  width: 180px;
  margin-left: 3px;
}

.bottom-row {
  margin-top: 618px;
}

.text-bottom {
  width: 215px;
}

@media screen and (max-width: 1440px) and (min-width: 1365px) {

  .tag-col:nth-child(2),
  .tag-col:nth-child(6) {
    margin-left: 10%;
  }
}

@include macbook {

  .what-we-do {
    padding-bottom: 45px;
  }

  .bottom-row {
    margin-top: 280px;
  }
}

@include tablet-small {

  .tags-wrap {
    padding-bottom: 33px;
  }

  .tags-row {
    padding-top: 0;
    background-image: repeating-linear-gradient(
      180deg,
      $color-black,
      $color-black  62px,
      $color-border-d 62px,
      $color-border-d 63px
    );
  }

  .tag {
    line-height: 64px;
  }

  .bottom-row {
    margin-top: 357px;
  }
}

@include mobile {

  .what-we-do {
    padding: 8px 7px 22px;
  }

  .tags-wrap {
    padding-top: 15px;
  }

  .tags-row {
    background-image: repeating-linear-gradient(
      180deg,
      $color-black,
      $color-black  64px,
      $color-border-d 64px,
      $color-border-d 65px
    );
  }

  .ttl.ttl-top,
  .ttl.tag {
    font-size: 24px;
    line-height: 26px;
    letter-spacing: -.48px;
  }

  .ttl-top {
    padding-bottom: 9px;
  }

  .ttl.tag {
    line-height: 65px;
  }

  .bottom-row {
    margin-top: 96px;
  }
}
</style>
