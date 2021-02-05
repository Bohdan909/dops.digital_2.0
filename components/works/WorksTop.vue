<template>
  <div class="works-top">
    <div class="row">
      <div class="col-tablet-s-8 off-tablet-s-2 col-mob-10">
        <div class="works-top-title">
          <Title
            element="h1"
            class="ttl-1"
            :text="title"
          />
        </div>
      </div>
    </div>

    <div class="row col-br-top col-br-top-end">
      <div class="col-tablet-s-8 off-tablet-s-2 col-mob-10">
        <TextElement
          class="works-top-text text-primary"
          text="We work with clients from all sectors based on a shared value set and vision for how to create a better future though design."
        />
      </div>
    </div>
  </div>
</template>

<script>
import Title from '~/components/atoms/Title'
import TextElement from '~/components/atoms/TextElement'

export default {
  components: {
    Title,
    TextElement
  },

  data () {
    return {
      title: `Projects (15) </br> 
              Brand design (4), Digital design (8) </br> 
              & Experience design (3) </br> 2016—2021.`
    }
  }
}
</script>

<style lang="scss" scoped>

.works-top-title {
  min-height: 435px;
  padding: 5px 0 25px;

  @include macbook {
    padding: 25px 0;
  }

  @include tablet {
    min-height: 345px;
  }

  @include tablet-small {
    width: 600px;
  }

  @include mobile {
    width: 270px;
  }
}

.works-top-text {
  min-height: 100px;
  width: 280px;
  padding: 18px 0;
}
</style>
