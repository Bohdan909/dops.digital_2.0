<template>
  <div class="person-avatar">
    <ImageElement
      class="avatar"
      :image-src="avatar"
    />

    <Person
      class="person"
      :name="name"
      :pos="pos"
    />
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      default: ''
    },

    name: {
      type: String,
      default: ''
    },

    pos: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

.person-avatar {
  position: relative;
  min-height: 50px;
  padding: 17px 0 0 66px;

  @include mobile {
    padding-top: 8px;
  }
}

.avatar {
  @include ctr-vert;
  position: absolute;
  left: 0;
  width: 50px;
  height: 50px;
}

.person {

  &::v-deep {

    .text-secondary {
      line-height: 15px;
    }
  }
}
</style>
