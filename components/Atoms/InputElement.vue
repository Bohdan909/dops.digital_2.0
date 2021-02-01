<template>
  <div
    ref="input"
    :class="['input-item', { 'input-focus': inputFocus }]"
  >
    <input
      class="input"
      :placeholder="placeholder"
      :type="type"
      :required="required"
      @focus="inputFocus = true"
      @blur="inputFocus = false"
    >
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },

    placeholder: {
      type: String,
      default: ''
    },

    required: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      inputFocus: false
    }
  }
}
</script>

<style lang="scss" scoped>

.input-item {
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    height: 1px;
    width: 100%;
  }

  &::before {
    background-color: #8a8a8a;
  }

  &::after {
    transition: transform .3s ease-out;
    transform: translateX(-105%);
  }

  &.input-focus {

    &::after {
      transform: translateX(0);
    }
  }
}

.input-item-d {

  &::before {
    background-color: #4f5154;
  }

  &::after {
    background-color: $text-color-g;
  }
}

.input {
  width: 100%;
  padding-bottom: 12px;
  height: 34px;
  font-size: 14px;
  line-height: 18px;
  border: none;
  background: none;
  font-family: $font-med;

  .input-item-big & {
    font-size: 18px;
    color: $text-color-g;
  }

  &:focus {
    @include ph {
      opacity: .5;
    }
  }
}
</style>
