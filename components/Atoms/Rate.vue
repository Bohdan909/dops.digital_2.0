<template>
  <div class="rate">
    <Title
      class="ttl-1 rate-value ttl-not-r"
      :text="val.toFixed(1).toString()"
    />
    <div class="rate-body">
      <TextElement
        class="rate-text text-primary"
        :text="`Rating ${val.toFixed(1).toString()}`"
      />
      <Stars :rate="parseInt(val.toFixed(1))" />
    </div>
  </div>
</template>

<script>
import Title from '~/components/atoms/Title'
import TextElement from '~/components/atoms/TextElement'
import Stars from '~/components/atoms/Stars'

export default {
  components: {
    Title,
    TextElement,
    Stars
  },

  props: {
    val: {
      type: Number,
      default: 5.0
    }
  }
}
</script>

<style lang="scss" scoped>

.rate {
  display: flex;
  padding-top: 18px;

  @include tablet-small {
    margin-bottom: 20px;
  }

  @include mobile {
    margin-bottom: 38px;
  }
}

.rate-value {
  display: block;
  width: 89px;
}

.rate-body {
  padding-top: 2px;
}
</style>
