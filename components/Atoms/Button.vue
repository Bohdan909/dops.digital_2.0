<template>
  <div
    :is="element"
    :to="toPage"
    :href="link"
    :type="type"
    :target="target"
    class="btn"
  >
    <span class="btn-text fx-col ttl ttl-4 trans-color">
      {{ text }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: ''
    },

    type: {
      type: String,
      default: ''
    },

    element: {
      type: String,
      default: 'div'
    },

    toPage: {
      type: String,
      default: ''
    },

    target: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>

.btn {
  position: relative;
  display: inline-flex;
  height: 44px;
  padding: 0 23px 0 9px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid $text-color-g;
  transition: border-color .2s, background-color .2s;

  &:not(.btn-full) {
    align-self: flex-start;
  }

  &::after {
    @include tr-right(4px, 4px, 5px, $color-orange);
    @include ctr-vert;
    content: "";
    position: absolute;
    right: 9px;
    display: block;
    transition: border-color .2s;
  }

  @include hover {
    border-color: $color-black;
    background-color: $color-black;

    &::v-deep {

      .btn-text {
        color: $color-main;
      }

      &::after {
        border-color: transparent transparent transparent $color-main;
      }
    }
  }
}

.btn-text {
  height: 100%;
  padding-top: 2px;
  white-space: nowrap;
  justify-content: center;
}

.btn-invert {

  &::v-deep {

    .btn-text {
      color: $text-color-g;
    }
  }

  &::after {
    border-color: transparent transparent transparent $text-color-g;
  }

  @include hover {
    border-color: $text-color-g;

    &::after {
      border-color: transparent transparent transparent $color-orange;
    }
  }
}

.btn-light {
  border-color: #ebebeb;

  &::v-deep {

    .btn-text {
      color: $color-main;
    }
  }

  &::after {
    border-color: transparent transparent transparent $color-main;
  }

  @include hover {
    border-color: $text-color-g;

    &::after {
      border-color: transparent transparent transparent $color-orange;
    }
  }
}
</style>
