<template>
  <div
    ref="input"
    :class="['input-item', { 'input-focus': inputFocus }]"
  >
    <textarea
      v-if="isTextarea"
      maxlength="440"
      :placeholder="placeholder"
      class="textarea"
    />
    <input
      v-else
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
    },

    isTextarea: {
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
    transition: transform .2s ease-out;
    transform: translateX(-105%);
    background-color: $color-border;
  }

  &.input-focus {

    &::after {
      transform: translateX(0);
    }
  }
}

.input-textarea {
  width: 100%;

  &::before,
  &::after {
    display: none;
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

.input,
.textarea {
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  border: none;
  background: none;
  font-family: $font-med;

  @include ph {
    color: $text-color;
  }

  &:focus {
    @include ph {
      opacity: .5;
    }
  }
}

.input {
  padding-bottom: 12px;
  height: 27px;
  font-size: 14px;
  line-height: 18px;

  .input-item-d & {
    @include ph {
      color: $text-color-g;
    }
  }

  .input-item-big & {
    height: 34px;
    font-size: 18px;
    color: $text-color-g;
  }
}

.textarea {
  height: 185px;
  line-height: 37px;
  resize: none;
  overflow: hidden;
  background-image: repeating-linear-gradient(
    180deg,
    $color-main,
    $color-main  36px,
    #8a8a8a 36px,
    #8a8a8a 37px
  );
}
</style>
