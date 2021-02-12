<template>
  <div class="social-share">
    <ShareNetwork
      v-for="(item, index) in socialArray"
      :key="index"
      class="social-item"
      :network="item.network"
      :url="urlPage"
      :title="titlePage"
      :description="descPage"
      :quote="quotePage"
      :style="`background-color: ${item.backgroundColor}`"
    >
      <img
        class="social-icon"
        :src="item.icon"
        alt="social icon"
      >
    </ShareNetwork>
  </div>
</template>

<script>

export default {
  props: {
    socialArray: {
      type: Array,
      default: () => []
    },

    hashtags: {
      type: Array,
      default: () => []
    },

    titlePage: {
      type: String,
      default: ''
    },

    urlPage: {
      type: String,
      default: ''
    },

    descPage: {
      type: String,
      default: ''
    },

    quotePage: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

.social-share {
  display: flex;
  padding-top: 8px;
}

.social-item {
  position: relative;
  display: block;
  width: 30px;
  height: 30px;
  margin-left: 7px;
  border-radius: 50%;
  transition: opacity .2s;

  @include hover {
    opacity: .7;
  }
}

.social-icon {
  @include ctr;
  position: absolute;
}
</style>
