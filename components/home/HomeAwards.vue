<template>
  <div class="awards-section">
    <!-- Image -->
    <div class="screen br">
      <ImageElement
        class="awards-screen screen-image"
        :image-src="require('~/assets/images/about-screen.jpg')"
        alt="Awards image"
      />
    </div>

    <!-- Awards -->
    <div class="awards-table awards-table-1">
      <!-- Awards Head -->
      <div class="awards-head">
        <TextElement
          class="awards-head-text text-primary text-color-l"
          text="2 Awards"
        />

        <div class="awards-head-right">
          <Title
            v-if="$mq !== 'mobile'"
            class="ttl-1"
            text="2"
          />

          <Flag class="awards-flag" text="W." />
        </div>
      </div>

      <!-- Awards Tablet -->
      <div class="row">
        <!-- Awards Tablet Title -->
        <div class="col-desktop-2 col-tablet-s-4 col-mob-10">
          <Title
            element="h2"
            :class="[
              'awards-ttl ttl-not-r',
              { 'ttl-3': $mq === 'mobile', 'ttl-1': $mq !== 'mobile' }
            ]"
            text="Awards"
          />
        </div>

        <!-- Awards Tablet Body -->
        <div class="col-desktop-8 col-tablet-s-6 col-mob-10">
          <div
            v-for="(item, index) in awardsData"
            :key="index"
            :class="[
              'awards-table-row row ha col-br-top-end',
              { 'col-br-double': index === (awardsData.length - 1) }
            ]"
          >
            <div class="awards-table-col col-desktop-4 col-tablet-s-3 col-tablet-2 col-mob-4">
              <TextElement
                class="text-primary"
                :text="item.winner"
              />
            </div>
            <div
              v-if="$mq !== 'mobile'"
              class="awards-table-col col-desktop-3 col-tablet-s-5 col-tablet-4"
            >
              <TextElement
                class="text-primary text-color-l"
                :text="item.nomination"
              />
            </div>
            <div
              v-if="$mq !== 'tablet'"
              class="awards-table-col col-desktop-2 col-tablet-2 col-mob-4"
            >
              <TextElement
                class="text-primary text-color-l"
                :text="item.name"
              />
            </div>
            <div class="awards-table-col col-desktop-1 col-tablet-2 col-mob-2">
              <div class="awards-tags">
                <AwardsTag
                  v-for="(tag, i) in item.tags"
                  :key="i"
                  class="awards-tag"
                  :text="tag"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Vertical Lines -->
    <Lines />

    <!-- Behance -->
    <div class="awards-table awards-table-2">
      <!-- Behance Head -->
      <div class="awards-head">
        <TextElement
          class="awards-head-text text-primary text-color-l"
          text="14 Awards"
        />

        <div class="awards-head-right">
          <Title
            v-if="$mq !== 'mobile'"
            class="ttl-1"
            text="14"
          />

          <Flag class="awards-flag" text="UI" />
          <Flag class="awards-flag grey" text="Xd" />
        </div>
      </div>

      <!-- Behance Tablet -->
      <div class="row">
        <!-- Behance Tablet Title -->
        <div class="col-desktop-2 col-tablet-s-4 col-mob-10">
          <Title
            element="h2"
            class="awards-ttl ttl-1"
            text="Behance"
          />
        </div>

        <!-- Behance Tablet Body -->
        <div class="col-desktop-8 col-tablet-s-6 col-mob-10">
          <div
            v-for="(item, index) in behanceData"
            :key="index"
            :class="[
              'awards-table-row row ha col-br-top-end',
              { 'col-br-double': index === (behanceData.length - 1) }
            ]"
          >
            <div class="awards-table-col col-desktop-4 col-tablet-s-3 col-tablet-6 col-mob-5">
              <TextElement
                class="text-primary"
                :text="item.winner"
              />
            </div>
            <div class="awards-table-col col-desktop-6 col-tablet-s-7 col-tablet-4 col-mob-5">
              <div class="awards-table-col-row">
                <TextElement
                  class="text-primary text-color-l"
                  :text="item.nomination"
                />

                <div v-if="item.ui" class="awards-point orange" />
                <div v-if="item.xd" class="awards-point" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextElement from '~/components/atoms/TextElement'
import Title from '~/components/atoms/Title'
import Flag from '~/components/atoms/Flag'
import AwardsTag from '~/components/atoms/AwardsTag'

export default {
  components: {
    TextElement,
    Title,
    AwardsTag,
    Flag
  },

  data () {
    return {
      awardsData: [
        {
          winner: 'Beans Agency',
          nomination: 'Site of the day & Honorable Mention',
          name: 'Awwwards',
          tags: ['HM', 'SOTD']
        },
        {
          winner: 'Beans Agency',
          nomination: 'Website of the day',
          name: 'CSS Design Awards',
          tags: ['WOTD']
        }
      ],

      behanceData: [
        {
          winner: 'National Geographic',
          nomination: 'UI/UX & XD',
          ui: true,
          xd: true
        },
        {
          winner: 'Museum of the Prado',
          nomination: 'UI/UX & XD',
          ui: true,
          xd: true
        },
        {
          winner: 'Designmark Group',
          nomination: 'UI/UX & XD',
          ui: true,
          xd: true
        },
        {
          winner: 'Keenethics',
          nomination: 'UI/UX & XD',
          ui: true,
          xd: true
        },
        {
          winner: 'Peculium',
          nomination: 'XD',
          ui: false,
          xd: true
        },
        {
          winner: 'Bolo cases',
          nomination: 'XD',
          ui: false,
          xd: true
        },
        {
          winner: 'Debt Market',
          nomination: 'XD',
          ui: false,
          xd: true
        },
        {
          winner: 'Keenethics',
          nomination: 'XD',
          ui: false,
          xd: true
        },
        {
          winner: 'DA.Collection',
          nomination: 'XD',
          ui: false,
          xd: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.awards-head,
.awards-head-right,
.awards-table-col-row {
  display: flex;
}

.awards-section {
  padding-bottom: 45px;
}

.awards-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
}

.awards-head-text {
  align-self: flex-end;
  padding-bottom: 6px;
}

.awards-table-1 {
  padding-top: 11px;
  margin-bottom: 85px;
}

.awards-flag {
  margin: 1px 0 0 6px;
}

.awards-ttl {
  margin-top: -7px;
}

.awards-table-row {
  position: relative;
  padding-top: 2px;
  min-height: 48px;
}

.awards-table-col {
  justify-content: center;
}

.awards-tags {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.awards-tag {
  margin-left: 5px;
}

.awards-table-2 {
  margin-top: 72px;
}

.awards-table-col-row {
  flex-direction: row;

  &::v-deep .text-primary {
    margin-right: auto;
  }
}

.awards-point {
  width: 15px;
  height: 15px;
  margin-left: 4px;
  border-radius: 50%;
  background-color: $text-color-g;

  &.orange {
    background-color: $text-color-r;
  }
}

@include macbook {

  .awards-table-1 {
    padding-top: 15px;
    margin-bottom: 107px;
  }

  .awards-table-2 {
    margin-top: 45px;
  }
}

@media (min-width: 1025px) and (max-width: 1200px) {

  .awards-ttl {
    font-size: 40px;
  }
}

@include tablet-small {

  .awards-section {
    padding-bottom: 26px;
  }

  .awards-table-1 {
    margin-bottom: 70px;
  }

  .awards-head {
    position: relative;
    margin-bottom: 11px;
  }

  .awards-head-right {
    position: absolute;
    right: 0;
    top: 30px;
  }

  .awards-head-text {
    padding-bottom: 0;
  }

  .awards-ttl {
    padding-right: 120px;
    margin: 0 0 12px;
  }
}

@include mobile {

  .awards-section {
    padding-bottom: 40px;
  }

  .awards-table-1 {
    padding-top: 40px;
    margin-bottom: 60px;
  }

  .awards-head {
    margin-bottom: 6px;
  }

  .awards-head-right {
    top: 10px;
  }

  .awards-ttl {
    margin-bottom: 18px;
  }

  .awards-tags {
    position: relative;
    top: -2px;
  }
}
</style>
