<template>
  <div class="audience-section">
    <div class="row">
      <!-- Title Side -->
      <div
        :class="['audience-title-side col-mob-10 col-tablet-s-3',
                 { 'col-br-top col-br-double': $mq === 'mobile' }
        ]"
      >
        <Title
          element="h2"
          class="ttl-1 audience-ttl"
          text="Audience"
        />

        <TextElement
          v-if="$mq === 'mobile'"
          class="audience-title-desc text-primary"
          text="We <br/> have a huge audience."
        />
      </div>

      <!-- Main Side -->
      <div
        v-for="(item, index) in audienceList"
        :key="index"
        :class="
          [
            'audience-col col-mob-10',
            {
              'col-br-double': $mq !== 'mobile',
              'col-tablet-5 col-tablet-s-4 col-desktop-2 col-br-top': (index + 1) % 2 !== 0,
              'col-tablet-5 col-tablet-s-3 col-desktop-5 col-br-top-end': (index + 1) % 2 === 0,
              'off-tablet-s-3': (index + 1) % 2 !== 0 && index !== 0
            }
          ]"
      >
        <div class="audience-block">
          <LinkSt
            class="audience-link"
            :name="item.name"
            :link="item.link"
          />

          <TextElement
            class="audience-views text-primary text-color-r"
            text="Views"
          />

          <Title
            class="ttl-1"
            :text="item.views"
          />
        </div>
      </div>
    </div>

    <!-- Description -->
    <div
      v-if="$mq !== 'mobile'"
      class="row"
    >
      <div class="col-mob-1 off-tablet-s-3">
        <TextElement
          class="audience-desc text-primary text-color-l"
          text="We <br/> have a huge audience."
        />
      </div>
    </div>
  </div>
</template>

<script>
import Title from '~/components/atoms/Title'
import LinkSt from '~/components/atoms/LinkSt'

export default {
  components: {
    Title,
    LinkSt
  },

  data () {
    return {
      audienceList: [
        {
          name: 'Behance',
          views: '349,419',
          link: 'https://www.behance.net/dops-digitdeff/'
        },
        {
          name: 'Instagram',
          views: '152,301',
          link: 'https://www.instagram.com/dops.digital/'
        },
        {
          name: 'Dribbble',
          views: '42,448',
          link: 'https://dribbble.com/dopsdigital/'
        },
        {
          name: 'Vimeo',
          views: '355,390',
          link: 'https://vimeo.com/dopsdigital/'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.audience-section {
  padding: 100px 0 50px;
}

.audience-ttl {
  margin-top: -7px;
}

.audience-col {
  margin-bottom: 84px;

  &::before {
    top: 38px;
  }

  &::after {
    top: auto;
    bottom: 0;
  }
}

@media screen and (min-width: 1025px) and (max-width: 1440px) {

  .audience-col {

    &.col-desktop-2 {

      flex-basis: 30%;
      max-width: 30%;
    }

    &.col-desktop-5 {
      flex-basis: 40%;
      max-width: 40%;
    }
  }
}

.audience-block {
  padding-bottom: 12px;
}

.audience-link {
  margin-bottom: 28px;
}

.audience-views {
  margin-bottom: 5px;
}

.audience-desc {
  width: 75px;
}

@include tablet-small {

  .audience-section {
    padding-top: 78px;
  }

  .audience-ttl {
    margin: 0 0 55px;
  }
}

@include mobile {

  .audience-section {
    padding: 55px 0 20px;
  }

  .audience-title-side {
    flex-direction: row;
    padding-top: 31px;
    padding-bottom: 20px;
  }

  .audience-ttl,
  .audience-title-desc {
    align-self: flex-start;
  }

  .audience-ttl {
    @include ctr-vert;
    width: 215px;
    margin-bottom: 0;
  }

  .audience-title-desc {
    width: 75px;
  }

  .audience-col {
    margin-bottom: 0;

    &::before {
      top: auto;
      bottom: 0;
    }
  }

  .audience-block {
    position: relative;
    padding: 12px 140px 13px 0;
  }

  .audience-views {
    margin-bottom: 2px;
  }

  .audience-link {
    position: absolute;
    bottom: 15px;
    left: calc(100% - 131px);
    margin-bottom: 0;
  }
}
</style>
