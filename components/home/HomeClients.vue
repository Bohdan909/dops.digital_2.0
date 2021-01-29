<template>
  <div class="clients-section">
    <div class="row">
      <!-- Title Side -->
      <div class="clients-title-side col-mob-10 col-tablet-s-3">
        <Title
          element="h2"
          class="ttl-1 clients-ttl"
          text="Clients"
        />
        <div
          v-if="$mq !== 'mobile'"
          class="clients-title-sub"
        >
          <TextElement
            class="text-secondary text-color-r"
            text="2016-2021"
          />
          <TextElement
            class="text-primary"
            text="32 Projects"
          />
        </div>
      </div>

      <!-- Main Side -->
      <div
        v-for="(item, index) in projects"
        :key="index"
        :class="
          ['col-mob-10',
           {
             'col-tablet-2 col-br-top': (index + 1) % 3 !== 0,
             'col-tablet-3 col-br-top-end': (index + 1) % 3 === 0,
             'off-tablet-s-reset': index === 0,
             'off-tablet-3': [0, 3, 6, 9].some(el => el === index)
           }
          ]"
      >
        <div class="clients-project">
          <TextElement
            v-if="$mq !== 'mobile'"
            class="text-secondary text-color-l"
            :text="item.year"
          />
          <Title
            element="h4"
            :class="{
              'ttl-4': $mq !== 'mobile',
              'ttl-3': $mq === 'mobile'
            }"
            :text="item.name"
          />
        </div>
      </div>
    </div>

    <!-- Text -->
    <div class="row">
      <div class="col-mob-10 col-tablet-5 off-tablet-3">
        <TextElement
          v-if="$mq === 'mobile'"
          class="clients-desc-year text-secondary text-color-l bt"
          text="2016-2021"
        />
        <TextElement
          :class="[
            'clients-desc text-primary',
            { 'text-color-l': $mq !== 'mobile' }
          ]"
          text="We actively manage a range of different brands for our clients. While many of these are for major national companies, we’re equally as fond of our smaller clients and their brands."
        />
      </div>
    </div>

    <!-- Vertical Lines -->
    <Lines />
  </div>
</template>

<script>
import Title from '~/components/atoms/Title'
import TextElement from '~/components/atoms/TextElement'
import Lines from '~/components/atoms/Lines'

export default {
  components: {
    Title,
    TextElement,
    Lines
  },

  data () {
    return {
      projects: [
        { name: 'Hitoshin', year: '2021' },
        { name: 'Macropay', year: '2021' },
        { name: 'Soba', year: '2021' },
        { name: 'Petainer', year: '2020' },
        { name: 'Just Whiskey', year: '2020' },
        { name: 'Elogic', year: '2020' },
        { name: 'Visa & Fifa', year: '2018' },
        { name: 'BBDO', year: '2018' },
        { name: 'Peculium', year: '2018' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.clients-section {
  position: relative;
}

.clients-title-side {
  margin-top: -7px;
}

.clients-ttl {
  margin-bottom: 9px;
}

.clients-project {
  padding: 7px 0 0;
  min-height: 100px;

  &::v-deep .text-secondary {
    margin-bottom: 2px;
  }
}

.clients-desc {
  width: 345px;
  padding: 50px 0 65px;
}

@include tablet-small {

  .col-br-top {

    &:nth-child(3n + 2)::before {
      left: calc(-150% + 5px);
    }
  }

  .clients-title-side {
    display: flex;
    flex-direction: row;
    margin-top: 0;
  }

  .clients-ttl {
    width: 30%;
    margin-bottom: 19px;
  }

  .clients-title-sub {
    padding-top: 8px;
  }

  .clients-desc {
    padding: 10px 0 50px;
  }
}

@include mobile {

  .clients-ttl {
    width: auto;
    margin-bottom: 15px;
  }

  .col-br-top {

    &:nth-child(3n + 2)::before {
      left: 5px;
    }
  }

  .clients-project {
    padding: 16px 0 14px;
    min-height: auto;
  }

  .clients-desc-year {
    padding-top: 15px;
  }

  .clients-desc {
    width: auto;
    padding: 15px 0 42px;
  }
}
</style>
