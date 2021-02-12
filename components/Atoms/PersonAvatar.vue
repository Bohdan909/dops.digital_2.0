<template>
  <div
    :class="['person-avatar-block',
             { 'person-avatar-postop': posTop }]"
  >
    <ImageElement
      class="person-avatar"
      :image-src="avatar"
    />

    <!-- If Name Top -->
    <Person
      v-if="!posTop && name"
      class="person-text"
      :name="name"
      :pos="pos"
    />

    <!-- If Position Top -->
    <PersonTeam
      v-if="posTop && name"
      :name="name"
      :pos="pos"
      pos-small
    />
  </div>
</template>

<script>
export default {
  props: {
    posTop: {
      type: Boolean,
      default: false
    },

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

.person-avatar-block {
  position: relative;
  min-height: 50px;
  padding: 17px 0 0 66px;

  @include mobile {
    padding-top: 8px;
  }
}

.person-avatar-postop {
  padding-top: 8px;
}

.person-avatar {
  @include ctr-vert;
  position: absolute;
  left: 0;
  width: 50px;
  height: 50px;
}

.person-text {

  &::v-deep {

    .text-secondary {
      line-height: 15px;
    }
  }
}
</style>
