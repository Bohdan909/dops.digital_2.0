<template>
  <div class="lines" />
</template>

<style lang="scss" scoped>

.lines {
  height: 90px;
  background-image: repeating-linear-gradient(90deg,
  $color-border,
  $color-border  1px,
  $color-main 1px,
  $color-main 8px
);
}
</style>
