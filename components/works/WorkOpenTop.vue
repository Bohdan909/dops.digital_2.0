<template>
  <div v-if="getWorkDesc" class="work-open-top">
    <div class="work-open-top-back fx-col">
      <LinkBack
        to-page="/works"
        text="Back to works"
      />
    </div>
    <div class="work-open-top-main row col-br-top col-br-top-end col-br-double">
      <!-- Title -->
      <div class="col-desktop-4 off-desktop-2 col-tablet-5 col-mob-10">
        <TextElement
          v-if="getWorkDesc.project"
          class="work-open-top-text text-primary"
          :text="getWorkDesc.project"
        />
        <Title
          v-if="getWorkDesc.title"
          element="h1"
          class="ttl-1 work-open-top-ttl"
          :text="getWorkDesc.title"
        />
      </div>
      <!-- Description -->
      <div class="col-desktop-2 col-tablet-3">
        <TextElement
          v-if="getWorkDesc.location"
          class="text-primary"
          :text="`${getWorkDesc.location}`"
        />
        <TextElement
          v-if="getWorkDesc.client"
          class="text-primary"
          :text="`Client: ${getWorkDesc.client}`"
        />
        <TextElement
          v-if="getWorkDesc.project"
          class="text-primary"
          :text="`Project: ${getWorkDesc.project}`"
        />
        <TextElement
          v-if="getWorkDesc.year"
          class="text-primary"
          :text="`Year: ${getWorkDesc.year}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TextElement from '~/components/atoms/TextElement'
import Title from '~/components/atoms/Title'
import LinkBack from '~/components/atoms/LinkBack'

export default {
  components: {
    TextElement,
    Title,
    LinkBack
  },

  computed: {
    ...mapGetters({
      getWorkDesc: 'WorkOpen/getWorkDesc'
    })
  }
}
</script>

<style lang="scss" scoped>

.work-open-top {
  padding-bottom: 13px;

  @include mobile {
    padding-bottom: 40px;
  }
}

.work-open-top-back {
  justify-content: flex-end;
  height: 85px;
  padding-bottom: 10px;
}

.work-open-top-main {
  padding: 32px 0 24px;

  @include mobile {
    padding-bottom: 37px;
  }
}

.work-open-top-text {
  padding-left: 3px;
  margin-bottom: 9px;
  color: #8a8a8a;

  @include mobile {
    padding-left: 0;
  }
}

.work-open-top-ttl {
  @include mobile {
    margin-bottom: 128px;
  }
}
</style>
