<template>
  <div class="flag">
    <div class="flag-text">
      {{ text }}
    </div>
  </div>
</template>

<script>

export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

.flag {
  position: relative;
  width: 32px;
  height: 41px;
  padding: 0 0 5px 1px;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDMyIDQwIj48Zz48Zz48cGF0aCBmaWxsPSIjZWUyOTEyIiBkPSJNLjg0NyA0MFYtLjA3OGgzMS4wNzdWNDBMMTYuODMgMzEuMjQyeiIvPjwvZz48L2c+PC9zdmc+");
  background-size: 100% 100%;

  &.grey {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDMyIDQwIj48Zz48Zz48cGF0aCBmaWxsPSIjYTNhNGE4IiBkPSJNLjkyNCA0MFYtLjA3OEgzMlY0MGwtMTUuMDk0LTguNzU4eiIvPjwvZz48L2c+PC9zdmc+");
  }
}

.flag-text {
  @include ctr-vert;
  position: absolute;
  top: 47%;
  width: 100%;
  text-align: center;
  color: $color-main;
  font-size: 12px;
}
</style>
