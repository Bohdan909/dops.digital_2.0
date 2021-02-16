<template>
  <div
    v-if="getStoriesOpen"
    ref="contentWrap"
    class="stories-open-content"
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
        class="blog-open-part"
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

export default {
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

  &::v-deep {

    section {
      padding-top: 100px;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: $font-med;

      strong {
        color: $text-color-s;
      }

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }

    h1, h2 {
      font-size: 30px;
      line-height: 34px;
      letter-spacing: -.9px;
    }

    h3 {
      font-size: 25px;
      line-height: 29px;
    }

    h4 {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 12px;
    }

    h5 {
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 8px;
    }

    h6 {
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 5px;
    }

    p, li, code {
      font-size: 15px;
      line-height: 24px;
      letter-spacing: -.3px;
    }

    p, ul, ol {

      &:not(:last-child) {
        margin-bottom: 25px;
      }
    }

    p {

      img {
        display: block;
        width: 100%;
      }

      img[alt="avatar"] {
        float: left;
        width: 150px;
        height: 150px;
        margin: 0 30px 10px 0;
      }
    }

    ul {

      li {
        position: relative;
        padding-left: 20px;

        &::before {
          content: "";
          position: absolute;
          display: block;
          left: 0;
          top: 9px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: $text-color;
        }
      }
    }

    a {
      text-decoration: underline;

      @include hover () {
        text-decoration: none;
      }
    }

    blockquote {
      padding-left: 20px;
      margin: 0 0 20px;
      border-left: 2px solid $text-color;
    }

    pre {
      overflow: unset;
      white-space: normal;
    }

    code {
      display: block;
      padding: 28px 50px 28px 30px;
      color: $text-color;
      background-color: $color-border;
    }

    .vimeo {
      margin: 25px 0;
    }
  }
}
</style>
