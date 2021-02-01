<template>
  <div class="cursor">
    <div class="cursor-icon" />
    <div class="cursor-text-wrap">
      <div class="cursor-text-column">
        <div class="cursor-text-drag">
          {{ swipe ? 'SWIPE' : 'DRAG' }}
        </div>
        <div v-if="!swipe" class="cursor-text-dragging">
          DRAGGING
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    swipe: Boolean
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
  position: relative;
  width: 48px;
  height: 48px;
  margin: 0 auto;
  border-radius: 50%;
  background-color: $color-orange;

  &::after {
    content: "";
    position: absolute;
    top: 13px;
    left: 12px;
    display: block;
    width: 23px;
    height: 23px;
    transition: transform .2s;
    background-size: 100% 100% !important;
    background-repeat: no-repeat !important;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIyMyIgdmlld0JveD0iMCAwIDIzIDIzIj48Zz48Zz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTguODkzIDcuMzkzTDE3LjczNSA4LjU1bDIuMTE5IDIuMTI4SDEyLjMyVjMuMTQ2bDIuMTI4IDIuMTIgMS4xNTgtMS4xNTlMMTEuNSAwIDcuMzkzIDQuMTA3IDguNTUgNS4yNjVsMi4xMjgtMi4xMTl2Ny41MzNIMy4xNDZsMi4xMi0yLjEyOC0xLjE1OS0xLjE1OEwwIDExLjVsNC4xMDcgNC4xMDcgMS4xNTgtMS4xNTgtMi4xMTktMi4xMjhoNy41MzN2Ny41MzNsLTIuMTI4LTIuMTItMS4xNTggMS4xNTlMMTEuNSAyM2w0LjEwNy00LjEwNy0xLjE1OC0xLjE1OC0yLjEyOCAyLjExOVYxMi4zMmg3LjUzM2wtMi4xMiAyLjEyOCAxLjE1OSAxLjE1OEwyMyAxMS41eiIvPjwvZz48L2c+PC9zdmc+");
  }

  .dragging &::after {
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

.cursor-swipe {
  opacity: 1;
  right: -10px;
  bottom: 7px;

  &::v-deep .cursor-icon::after {
    width: 24px;
    height: 14px;
    top: 18px;
    left: 12px;
    // background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDI0IDE0Ij48Zz48ZyB0cmFuc2Zvcm09InJvdGF0ZSg5MCA3MzEgNTQ4MCkiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAxOWwtNy03IDEuNDEtMS40MUwxMiAxNi4xN2w1LjU5LTUuNThMMTkgMTJ6Ii8+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDkwIDczMSA1NDgwKSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyLTVsNyA3LTEuNDEgMS40MUwxMi0yLjE3IDYuNDEgMy40MSA1IDJ6Ii8+PC9nPjwvZz48L3N2Zz4=");  }
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAOCAMAAAACJixMAAAAAXNSR0IB2cksfwAAADxQTFRFAAAA////////////////////////////////////////////////////////////////////////////2EloEwAAABR0Uk5TAH93eXr/Jyl0/l5Y/FGAi4UmKoT4CVMCAAAAa0lEQVR4nG2QWRKAIAxDqxJlk6Le/66igCySHzJ5nRQgejXNlLRMVEkAa3QbIEouoXT2WkGO8pqE3NS9JhEJ2+SZhHynTsYG4sbAEfGoip+T/8s5Ou6vy9lz+0AuUx44ojsBX/de3zcsaf4GNmYDmzqUzWgAAAAASUVORK5CYII=");
  }
}
</style>
