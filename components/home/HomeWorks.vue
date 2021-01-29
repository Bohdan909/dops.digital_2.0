<template>
  <div class="home-works">
    <Items num="15" />
    <Title
      element="h2"
      class="ttl-1 bb"
      text="Works"
    />

    <div class="row">
      <WorkItem
        v-for="(item, index) in getWorksLimit"
        :key="index"
        :work-item="item"
        :work-index="index + 1"
      />
    </div>

    <div class="row">
      <div class="col-desktop-2 col-tablet-4 col-mob-10">
        <Button
          class="btn-works btn-full"
          element="nuxt-link"
          to-page="/works"
          text="More works"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Title from '~/components/atoms/Title'
import Items from '~/components/atoms/Items'
import WorkItem from '~/components/works/WorkItem'

export default {
  components: {
    Title,
    Items,
    WorkItem
  },

  data () {
    return {
      listOfWorks: [0, 1, 2, 3, 4]
    }
  },

  computed: {
    ...mapGetters({
      getWorksLimit: 'Works/getWorksLimit'
    })
  },

  created () {
    this.InitWorks()
    this.setWorklimit(this.listOfWorks)
  },

  methods: {
    ...mapActions({
      InitWorks: 'Works/actionWorks',
      setWorklimit: 'Works/actionWorksLimit'
    })
  }
}
</script>

<style lang="scss" scoped>

.home-works {
  padding: 25px 0 135px;

  @include macbook {
    padding-bottom: 62px;
  }

  @include tablet {
    padding-bottom: 379px;
  }

  @include tablet-small {
    padding-bottom: 60px;
  }

  @include mobile {
    padding-bottom: 127px;
  }
}

.ttl-1 {
  margin-bottom: 43px;
}

.btn-works {
  margin-top: -27px;

  @include tablet {
    width: 260px;
  }

  @include mobile {
    margin: 0;
  }
}
</style>
