<template>
  <div v-if="getStoriesOpen" class="stories-open-content">
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
        class="blog-open-part"
      >
        <div v-html-safe="$md.render(part.content)" />
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      contentReady: false,
      api_url: process.env.strapiBaseUri
    }
  },

  computed: {
    ...mapGetters({
      getStoriesOpen: 'StoriesOpen/getStoriesOpen'
    })
  },

  methods: {
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
  padding: 100px 0 0;

  &::v-deep {

    h1, h2, h3, h4, h5, h6 {
      font-family: $font-med;

      strong {
        color: $text-color-s;
      }

      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }

    h1, h2 {
      font-size: 30px;
      line-height: 34px;
      letter-spacing: -.9px;
    }
  }
}
</style>
