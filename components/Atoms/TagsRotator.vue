<template>
  <div class="tags-hooper">
    <client-only>
      <Hooper
        :auto-play="true"
        :play-speed="800"
        :transition="0"
        :hover-pause="false"
        :touch-drag="false"
        :mouse-drag="false"
      >
        <Slide v-for="(tag, index) in tagsList" :key="index">
          <OutlineCell
            class="tag"
            element="div"
            :cell-text="tag"
          />
        </Slide>
      </Hooper>
    </client-only>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import OutlineCell from '~/components/atoms/OutlineCell'
import 'hooper/dist/hooper.css'

export default {
  components: {
    Hooper,
    Slide,
    OutlineCell
  },

  data () {
    return {
      tagsList: [
        'Branding',
        'Logotype',
        'Web Design',
        'Strategy',
        'Mobile App',
        'Motion Design',
        'Design System'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.hooper {
  height: auto;
  cursor: default;
}

.tags-hooper {
  width: 109px;
  height: 21px;
  align-self: flex-start;
}

.hooper-slide {
  display: flex;

  &::v-deep .tag {
    margin-left: 1px;
  }
}
</style>
