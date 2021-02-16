<template>
  <div class="next-up">
    {{ text }}
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

.next-up {
  position: relative;
  display: inline-block;
  align-self: flex-start;
  padding-right: 21px;
  font-size: 13px;
  font-family: $font-med;

  &::after {
    @include ctr-vert;
    content: "";
    display: block;
    position: absolute;
    right: 0;
    width: 15px;
    height: 8px;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgMTUgOCI+PGc+PGc+PHBhdGggZD0iTTE1IDMuNjVMMTEuMzUgMGwtLjg1OC44NTggMi4xNzggMi4xODRILjM5OHYxLjIxN0gxMi42N2wtMi4xNzggMi4xODQuODU4Ljg1OHoiLz48L2c+PC9nPjwvc3ZnPg==");
    background-size: 100% 100%;
  }

  @include mobile {
    padding-right: 17px;
    font-size: 24px;
    line-height: 26px;
    letter-spacing: -.48px;

    &::after {
      top: 9px;
      transform: rotate(90deg);
    }
  }
}
</style>
