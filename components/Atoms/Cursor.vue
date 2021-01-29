<template>
  <div class="cursor">
    <div class="cursor-icon" />
    <div class="cursor-text-wrap">
      <div class="cursor-text-column">
        <div class="cursor-text-drag">
          DRAG
        </div>
        <div class="cursor-text-dragging">
          DRAGGING
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: 'DRAG'
    }
  }
}
</script>

<style lang="scss" scoped>

.cursor {
  width: 70px;
  cursor: none;
  position: absolute;
  z-index: 100;
  transition: opacity .35s;
  opacity: 0;
  pointer-events: none;
  backface-visibility: hidden;
  perspective: 1000px;
  will-change: transform;

  &.show {
    opacity: 1;
  }
}

.cursor-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto;
  transition: transform .2s;
  background-size: 100% 100% !important;
  background-repeat: no-repeat !important;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48Zz48Zz48cGF0aCBmaWxsPSIjZWUyOTEyIiBkPSJNMCAyNEMwIDEwLjc0NSAxMC43NDUgMCAyNCAwczI0IDEwLjc0NSAyNCAyNC0xMC43NDUgMjQtMjQgMjRTMCAzNy4yNTUgMCAyNHoiLz48L2c+PGc+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTMxLjg5MyAyMC4zOTNsLTEuMTU4IDEuMTU4IDIuMTE5IDIuMTI4SDI1LjMydi03LjUzM2wyLjEyOCAyLjEyIDEuMTU4LTEuMTU5TDI0LjUgMTNsLTQuMTA3IDQuMTA3IDEuMTU4IDEuMTU4IDIuMTI4LTIuMTE5djcuNTMzaC03LjUzM2wyLjEyLTIuMTI4LTEuMTU5LTEuMTU4TDEzIDI0LjVsNC4xMDcgNC4xMDcgMS4xNTgtMS4xNTgtMi4xMTktMi4xMjhoNy41MzN2Ny41MzNsLTIuMTI4LTIuMTItMS4xNTggMS4xNTlMMjQuNSAzNmw0LjEwNy00LjEwNy0xLjE1OC0xLjE1OC0yLjEyOCAyLjExOVYyNS4zMmg3LjUzM2wtMi4xMiAyLjEyOCAxLjE1OSAxLjE1OEwzNiAyNC41eiIvPjwvZz48L2c+PC9zdmc+");

  .dragging & {
    transform: rotate(-45deg);
  }
}

.cursor-text-wrap {
  margin-top: 9px;
  height: 20px;
  overflow: hidden;
}

.cursor-text-column {
  position: relative;

  .dragging & .cursor-text-dragging {
    opacity: 1;
  }

  .dragging & .cursor-text-drag {
    opacity: 0;
  }
}

.cursor-text-drag,
.cursor-text-dragging {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20px;
  text-align: center;
  font-size: 12px;
  transition: opacity .2s;
  text-transform: uppercase;
}

.cursor-text-dragging {
  opacity: 0;
}

.cursor-play {
  background: url("https://d197cwgxgz2ypb.cloudfront.net/cursor-play.svg");
}

.cursor-close {
  width: 60px;
  height: 60px;
  background: url("https://d197cwgxgz2ypb.cloudfront.net/cursor-close.svg");
}
</style>
