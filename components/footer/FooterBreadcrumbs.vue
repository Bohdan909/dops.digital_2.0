<template>
  <ul class="footer-breadcrumb">
    <li class="footer-breadcrumb-item">
      <nuxt-link to="/" active-class="active" class="footer-breadcrumb-link">
        Home Page
      </nuxt-link>
    </li>
    <li
      v-if="this.$route.name !== 'indexx'"
      class="footer-breadcrumb-item with-triangle"
    >
      {{ routeFirstLetterUp }}
    </li>
  </ul>
</template>

<script>

export default {

  computed: {

    routeFirstLetterUp () {
      let pageName = ''

      if (this.$route.params.slug) {
        pageName = this.setFirstLetterUp(this.$route.params.slug) + this.$route.params.slug.slice(1)
      } else if (this.$route.name) {
        pageName = this.setFirstLetterUp(this.$route.name) + this.$route.name.slice(1)
      }

      return pageName
    }
  },

  methods: {
    setFirstLetterUp (text) {
      return text.charAt(0).toUpperCase()
    }
  }
}
</script>

<style lang="scss" scoped>

.footer-breadcrumb {
  padding: 0 0 0 5px;
  width: calc(14% + 5px);
  display: flex;
  align-self: center;
  flex-direction: row;

  @media (max-width: 1900px) {
    width: calc(20% + 5px);
  }

  @include tablet-small {
    width: calc(26% + 5px);
  }

  @include mobile {
    width: auto;
  }
}

.footer-breadcrumb-link,
.footer-breadcrumb-item {
  color: $text-color-gd;
  font-size: 11px;
}

.footer-breadcrumb-link {
  position: relative;

  @include hover {
    text-decoration: underline;
  }
}

.footer-breadcrumb-item {
  white-space: nowrap;

  &:first-child {
    width: 48%;

    @include mobile {
      width: auto;
      margin-right: 12px;
    }
  }

  &.with-triangle {
    @include text-ellipse;
    position: relative;
    max-width: 120px;
    padding-left: 10px;
    overflow: hidden;
    white-space: nowrap;

    @include macbook {
      max-width: 100px;
    }

    @media (max-width: 1280px) {
      max-width: 80px;
    }

    @include tablet-small {
      max-width: 100px;
    }

    @include mobile {
      padding-left: 35px;
    }

    &::before {
      @include ctr-vert;
      @include tr-right(3px, 3px, 5px, $text-color-gd);
      position: absolute;
      content: "";
      top: 48%;
      left: 0;
      display: inline-block;
    }
  }
}
</style>
