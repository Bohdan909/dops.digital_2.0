<template>
  <nuxt-link
    :to="toPage"
    class="link-back trans-color"
  >
    {{ text }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },

    toPage: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

.link-back {
  display: inline-block;
  align-self: flex-start;
  position: relative;
  padding-left: 19px;
  white-space: nowrap;
  text-decoration: underline;

  &:not(.link-back-big) {
    font-size: 14px;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 4px;
    width: 10px;
    height: 8px;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgMTAgOCI+PGc+PGc+PHBhdGggZD0iTTQuMDYxIDcuNjg3bC41NDQtLjU0My0yLjkyMi0yLjkyNmg3Ljc3NXYtLjc3SDEuNjgzTDQuNjA1LjUyMSA0LjA2LS4wMjEuMjA3IDMuODMzeiIvPjwvZz48L2c+PC9zdmc+");
    background-size: 100% 100%;
  }

  @include hover {
    color: $text-color-r;
  }
}

.link-back-big {
  font-size: 18px;
}
</style>
