<template>
  <div class="container-error">
    <div class="error">
      <div
        v-if="error.statusCode === 404"
      >
        Sorry the page you were looking for was not found.
      </div>

      <div v-else class="ttl ttl-1">
        An error occurred
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
