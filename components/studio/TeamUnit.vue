<template>
  <div v-if="unitData" class="team-unit-block">
    <div class="team-unit-image br">
      <ImageElement
        class="screen-image"
        :image-src="$mq === 'tabletSmall' ? unitData.imageTablet : unitData.image"
        :placeholder-src="$mq === 'tabletSmall' ? unitData.placeholderTablet : unitData.placeholder"
        :alt="`${unitData.name} photo`"
      />
    </div>

    <div class="team-unit-desc fx-col bb">
      <Person
        :name="unitData.name"
        :pos="unitData.pos"
        pos-big
      />

      <TextElement
        class="text-primary text-color-s"
        :text="unitData.age"
      />
    </div>
  </div>
</template>

<script>
import ImageElement from '~/components/atoms/ImageElement'
import TextElement from '~/components/atoms/TextElement'
import Person from '~/components/atoms/Person'

export default {
  components: {
    ImageElement,
    TextElement,
    Person
  },

  props: {
    unitData: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>

.team-unit-image {
  height: 623px;

  .team-unit-big & {
    height: 890px;
  }
}

.team-unit-desc {
  height: 116px;
  padding: 13px 0 6px;
  justify-content: space-between;
}

.screen-image {
  object-position: top;
}

@include macbook {

  .team-unit-image {
    height: 435px;

    .team-unit-big & {
      height: 625px;
    }
  }

  .team-unit-desc {
    height: 121px;
    padding-top: 18px;
  }
}

@include tablet {

  .team-unit-image {
    height: 320px;

    .team-unit-big & {
      height: 465px;
    }
  }

  .team-unit-desc {
    height: 116px;
    padding-top: 10px;
  }
}
</style>
