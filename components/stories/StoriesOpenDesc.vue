<template>
  <div
    v-if="getStoriesOpen"
    class="stories-open-desc row"
  >
    <!-- Back Button -->
    <div class="stories-open-back col-tablet-s-2 col-tablet-3 col-mob-10">
      <LinkBack
        class="link-back-big"
        to-page="/stories"
        text="Back to blog"
      />
    </div>

    <!-- Author -->
    <div class="col-tablet-s-6 col-tablet-4 col-mob-5">
      <PersonAvatar
        v-if="getStoriesOpen.articleAuthor"
        class="min"
        :avatar="getStoriesOpen.articleAuthor.avatar[0] &&
          `${api_url}${getStoriesOpen.articleAuthor.avatar[0].url}`"
        :name="getStoriesOpen.articleAuthor.name"
        :pos="getStoriesOpen.articleAuthor.pos"
        pos-top
      />
    </div>

    <!-- Social -->
    <div class="col-tablet-s-2 col-tablet-3 col-mob-5">
      <SocialShare
        class="stories-open-social"
        :social-array="socialArray"
        :url-page="urlPage"
        :title-page="getStoriesOpen.articleTitle"
        :desc-page="descPage"
        :quote-page="quotePage"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LinkBack from '~/components/atoms/LinkBack'
import PersonAvatar from '~/components/atoms/PersonAvatar'
import SocialShare from '~/components/atoms/SocialShare'

export default {
  components: {
    LinkBack,
    PersonAvatar,
    SocialShare
  },

  data () {
    return {
      api_url: process.env.strapiBaseUri,
      descPage: '',
      quotePage: '',
      urlPage: this.getUrl(),
      socialArray: [
        {
          icon: require('~/assets/images/ico-telegram.svg'),
          network: 'Telegram',
          backgroundColor: '#039be5'
        },
        {
          icon: require('~/assets/images/ico-pin.svg'),
          network: 'pinterest',
          backgroundColor: '#ee2912'
        },
        {
          icon: require('~/assets/images/ico-facebook.svg'),
          network: 'facebook',
          backgroundColor: '#3f67d8'
        },
        {
          icon: require('~/assets/images/ico-twitter.svg'),
          network: 'twitter',
          backgroundColor: '#46afff'
        }
      ]
    }
  },

  computed: {
    ...mapGetters({
      getStoriesOpen: 'StoriesOpen/getStoriesOpen'
    })
  },

  methods: {
    getUrl () {
      return (process.env.baseUrl).slice(0, -1) + this.$route.fullPath
    }
  }
}
</script>

<style lang="scss" scoped>

.stories-open-desc {
  padding: 22px 0 0;
}

.stories-open-social {
  align-self: flex-end;
}

.stories-open-back {
  justify-content: center;
}

@include mobile {

  .stories-open-back {
    padding-bottom: 35px;
  }
}
</style>
