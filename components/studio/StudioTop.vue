<template>
  <div class="studio-top row">
    <!-- Title Column -->
    <div class="col-desktop-6">
      <TextElement
        class="studio-top-head text-primary text-color-s"
        text="Who we are"
      />
      <div class="studeio-top-ttl-wrap col-br-top col-br-top-end">
        <Title
          element="h1"
          class="studio-top-ttl ttl-1"
          text="Digital experiences with focus on what’s essential."
        />
      </div>
    </div>
  </div>
</template>

<script>
import TextElement from '~/components/atoms/TextElement'

export default {
  components: {
    TextElement
  }
}
</script>

<style lang="scss" scoped>

.studio-top {
  padding: 70px 0 35px;
}

.studio-top-head {
  padding-bottom: 14px;
}

.studio-top-ttl {
  width: 470px;
  padding: 12px 0 43px;
}
</style>
