<template>
  <div
    :is="isCheckbox ? 'label' : 'div'"
    :class="{
      'button-filter-massive': isMassive,
      'button-filter': !isMassive,
    }"
  >
    <TextElement
      :class="['text-primary', {
        'button-filter-massive-text text-color-s trans-color': isMassive,
        'button-filter-text': !isMassive
      }]"
      :text="text"
    />
    <input
      v-if="isCheckbox"
      class="button-filter-checkbox"
      type="checkbox"
      :checked="checked"
      @change="checkchange($event, id)"
    >
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
    },

    isCheckbox: {
      type: Boolean,
      default: false
    },

    isMassive: {
      type: Boolean,
      default: false
    },

    checked: {
      type: Boolean,
      default: false
    },

    checkchange: {
      type: Function,
      default: () => null
    },

    id: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

.button-filter,
.button-filter-massive {
  position: relative;
  display: inline-flex;
}

.button-filter-massive {
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

.button-filter-massive-text {
  align-self: center;
}

.button-filter-massive.is-active {
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

    .button-filter-massive-text {
      color: $color-main;
    }
  }
}

.button-filter-checkbox {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>
