<template>
  <div class="button-filter">
    <TextElement
      class="button-filter-text text-primary text-color-s trans-color"
      :text="text"
    />
  </div>
</template>

<script>
import TextElement from '~/components/atoms/TextElement'

export default {
  components: {
    TextElement
  },

  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

.button-filter {
  position: relative;
  display: inline-flex;
  align-self: flex-start;
  padding: 1px 25px 0 14px;
  min-width: 125px;
  height: 34px;
  border-radius: 150px;
  cursor: pointer;
  transition: background-color .2s;

  @include laptop {
    min-width: 76px;
  }

  @include tablet-small {
    min-width: 90px;
  }

  @include hover {

    &:not(.is-active)::v-deep {

      .button-filter-text {
        color: $text-color;
      }
    }
  }
}

.button-filter-text {
  align-self: center;
}

.button-filter.is-active {
  background-color: $color-black;

  &::after {
    @include ctr-vert;
    content: "";
    display: block;
    position: absolute;
    right: 12px;
    width: 6px;
    height: 6px;
    background-color: $text-color-g;
  }

  &::v-deep {

    .button-filter-text {
      color: $color-main;
    }
  }
}
</style>
