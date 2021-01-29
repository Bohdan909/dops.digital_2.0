<template>
  <div class="rate-stars">
    <!-- Empty Stars -->
    <div class="rate-stars-empty">
      <i
        v-for="(star, index) in 5"
        :key="index"
        class="rate-star"
      />
    </div>
    <!-- Filled Stars -->
    <div
      class="rate-stars-filled"
      :style="`width: ${(rate * 20.0).toFixed(1)}%`"
    >
      <i
        v-for="(star, index) in 5"
        :key="index"
        class="rate-star"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rate: {
      type: Number,
      default: 5.0
    }
  }
}
</script>

<style lang="scss" scoped>

.rate-stars {
  position: relative;
  left: -3px;
  top: 2px;
  width: 120px;
  height: 18px;
}

.rate-stars-empty,
.rate-stars-filled {
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
}

.rate-stars-filled {
  z-index: 1;
  overflow: hidden;
}

.rate-star {
  display: inline-block;
  width: 18px;
  height: 18px;
  margin: 0 3px;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE4IDE2Ij48Zz48Zz48cGF0aCBmaWxsPSIjZGJkYmRiIiBkPSJNOS4yNi4xNzhMNi42MzMgNS40NDZsLTUuODczLjg0IDQuMjUgNC4xMDMtMS4wMDQgNS43ODkgNS4yNTQtMi43MzIgNS4yNTUgMi43MzItMS4wMDUtNS43ODkgNC4yNS00LjA5Ny01Ljg3Mi0uODQ2eiIvPjwvZz48L2c+PC9zdmc+");
  background-size: 100% 100%;

  .rate-stars-filled & {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE4IDE2Ij48Zz48Zz48cGF0aCBmaWxsPSIjZWUyOTEyIiBkPSJNOS4yNi4xNzhMNi42MzMgNS40NDZsLTUuODczLjg0IDQuMjUgNC4xMDMtMS4wMDQgNS43ODkgNS4yNTQtMi43MzIgNS4yNTUgMi43MzItMS4wMDUtNS43ODkgNC4yNS00LjA5Ny01Ljg3Mi0uODQ2eiIvPjwvZz48L2c+PC9zdmc+");
  }
}
</style>
