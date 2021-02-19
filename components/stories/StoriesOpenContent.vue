<template>
  <div
    v-if="getStoriesOpen"
    ref="contentWrap"
    class="stories-open-content content-main"
  >
    <section
      v-for="(section, index) in getStoriesOpen.articleSection"
      :key="index"
      class="stories-open-section"
    >
      <!-- Section Title -->
      <Title
        v-if="section.title"
        class="ttl-stories"
        :element="section.title_tag ? section.title_tag: 'h2'"
        :text="section.title"
      />

      <!-- Section Content -->
      <div
        v-for="(part, i) in contentParse(section.content)"
        :key="i"
        class="stories-open-part"
      >
        <div v-html-safe="$md.render(part.content)" />

        <!-- Video Part -->
        <client-only>
          <vimeo-player
            v-if="part.id"
            class="vimeo"
            :video-id="Number(part.id)"
            :controls="false"
            :loop="true"
            :options="{
              responsive: true,
              autoplay: true,
              background: true,
              autopause: false
            }"
            @ready="onReady"
          />
        </client-only>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Title from '~/components/atoms/Title'

export default {
  components: {
    Title
  },

  data () {
    return {
      playerReady: false,
      contentReady: false,
      api_url: process.env.strapiBaseUri
    }
  },

  computed: {
    ...mapGetters({
      getStoriesOpen: 'StoriesOpen/getStoriesOpen'
    }),

    getContentWrap () {
      return this.$refs.contentWrap
    }
  },

  watch: {
    contentReady (newVal) {
      // Parse content and add 'nofollow' to Links
      if (newVal) {
        const links = this.getContentWrap.querySelectorAll('a')

        links.forEach((link) => {
          const href = link.href

          if (href.includes('~~')) {
            const newHref = href.replace('~~', '')
            link.rel = 'nofollow'
            link.href = newHref
          }
        })
      }
    }
  },

  methods: {
    onReady () {
      this.playerReady = true
    },

    setContentImageUrl (content) {
      return content.split('/uploads/').join(`${this.api_url}/uploads/`)
    },

    contentParse (content) {
      if (content) {
        const partArray = []
        const part = content.split('}}')

        part.forEach((item) => {
          if (item) {
            const res = item.split('{{')
            partArray.push({
              content: this.setContentImageUrl(res[0]),
              id: res[1]
            })
          }
        })

        this.contentReady = true

        return partArray
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.stories-open-content {
  width: 600px;
  margin: 0 auto;
  padding-bottom: 90px;

  @include mobile {
    width: auto;
    padding-bottom: 55px;
  }
}
</style>
