<template>
  <div class="container page-container page-bg">
    <div class="socket">
      <!-- Contacts -->
      <ContactMain />

      <!-- Address -->
      <ContactAddress />
    </div>
  </div>
</template>

<script>
import ContactMain from '~/components/contact/ContactMain'
import ContactAddress from '~/components/contact/ContactAddress'

export default {
  components: {
    ContactMain,
    ContactAddress
  },

  mounted () {
    this.$nextTick(() => {
      this.loadingLine()
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
