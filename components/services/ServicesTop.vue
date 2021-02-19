<template>
  <div class="services-top">
    <TextElement
      class="services-top-lbl text-primary text-color-s"
      text="Services"
    />

    <div class="services-top-main br-top br-top-end br-double">
      <Title
        element="h1"
        :class="['services-top-ttl', {
          'ttl-1': $mq !== 'mobile',
          'ttl-3': $mq === 'mobile'
        }]"
        text="Digital experiences with focus on what’s essential."
      />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.services-top {
  padding: 73px 0 8px;
}

.services-top-lbl {
  margin-bottom: 13px;
}

.services-top-main {
  padding: 13px 0 84px;
}

.services-top-ttl {
  width: 530px;
}

@include mobile {

  .services-top-main {
    padding-bottom: 137px;
  }

  .services-top-ttl {
    width: 180px;
  }
}
</style>
