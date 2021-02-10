<template>
  <div class="studio-team-wrap">
    <div class="studio-team-head bb">
      <Title
        element="h1"
        class="studio-team-ttl ttl-1"
        text="Creators"
      />
      <TextElement
        class="text-primary text-color-s"
        text="[2016-2021]"
      />
    </div>

    <!-- CEO -->
    <div class="studio-team-ceo row">
      <div class="off-tablet-s-2 col-tablet-s-2 col-mob-5">
        <TeamUnit :unit-data="teamDataCEO[0]" />
      </div>
      <div class="col-tablet-s-2 col-mob-5">
        <TeamUnit :unit-data="teamDataCEO[1]" />
      </div>
      <div
        v-if="$mq === 'tablet' || $mq === 'desktop'"
        class="off-tablet-s-1 col-tablet-s-3 col-mob-10"
      >
        <TextElement
          class="studio-team-text text-primary"
          text="We combine analytical minds and artistic skills to understand and create. We ask questions, uncover insights, imagine and design clear outcomes. Big and small."
        />
      </div>
    </div>

    <!-- Team -->
    <div class="row">
      <div
        v-for="(unit, index) in teamData"
        :key="index"
        :class="['col-unit col-mob-5',
                 {
                   'off-tablet-s-2': unitHandler('off', index),
                   'col-tablet-s-4': unitHandler('big', index) && ($mq === 'tablet' || $mq === 'desktop'),
                   'col-tablet-s-2': !unitHandler('big', index) && ($mq === 'tablet' || $mq === 'desktop'),
                   'col-unit-bottom': unitHandler('bottom', index)
                 }
        ]"
      >
        <TeamUnit
          :class="{
            'team-unit-big': unitHandler('big', index) && ($mq === 'tablet' || $mq === 'desktop')
          }"
          :unit-data="unit"
        />
      </div>
    </div>
  </div>
</template>

<script>
import teamDataCEO from '~/static/teamDataCEO'
import teamData from '~/static/teamData'
import Title from '~/components/atoms/Title'
import TextElement from '~/components/atoms/TextElement'
import TeamUnit from '~/components/studio/TeamUnit'

export default {
  components: {
    Title,
    TextElement,
    TeamUnit
  },

  data () {
    return {
      teamDataCEO,
      teamData
    }
  },

  methods: {
    unitHandler (type, index) {
      index++

      switch (type) {
        case 'big':
          return [3, 5, 9, 12, 14, 18, 21].some(el => el === index)
        case 'off':
          return [2, 6, 9, 11, 15, 18, 20].some(el => el === index)
        case 'bottom':
          return [4, 13].some(el => el === index)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.studio-team-head {
  padding: 18px 0 13px;
}

.studio-team-ttl {
  margin-left: -2px;
}

.studio-team-ceo {
  padding: 95px 0 0;
}

.col-unit {
  margin-top: 185px;
}

.col-unit-bottom {
  justify-content: flex-end;
}

.studio-team-text {
  width: 260px;
}

@include tablet {

  .studio-team-ceo {
    padding: 40px 0 0;
  }

  .col-unit {
    margin-top: 90px;
  }
}

@include tablet-small {

  .col-unit {
    margin-top: 20px;
  }
}

@include mobile {

  .studio-team-head {
    padding-top: 40px;
  }

  .studio-team-ttl {
    margin-bottom: 9px;
  }

  .studio-team-ceo {
    padding: 40px 0 0;
  }
}
</style>
