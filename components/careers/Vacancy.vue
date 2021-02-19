<template>
  <nuxt-link
    class="vacancy"
    :to="`/careers/${vacData.slug}`"
  >
    <TextElement
      v-if="vacData.carrers_department"
      class="text-primary text-color-s"
      :text="vacData.carrers_department.Name"
    />
    <div class="vacancy-name">
      <TextElement
        v-if="vacData.Title"
        class="text-primary"
        :text="vacData.Title"
      />
      <div v-if="vacData.Hot" class="vacancy-fire" />
    </div>
    <div class="vacancy-play" />
  </nuxt-link>
</template>

<script>
import TextElement from '~/components/atoms/TextElement'

export default {
  components: {
    TextElement
  },

  props: {
    vacData: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>

.vacancy {
  position: relative;
  padding: 17px 0 6px;
  border-top: 1px solid $color-border;

  &:last-child {
    border-bottom: 1px solid $color-border;
  }

  @include hover {

    &::v-deep {

      .vacancy-name .text-primary {
        text-decoration: underline;
      }

      .vacancy-play {
        transform: scale(1.16);
      }
    }

    .vacancy-fire {
      animation: fire 2.4s infinite;
    }
  }
}

.vacancy-name {
  display: inline-block;
  position: relative;
  padding-right: 23px;
}

.vacancy-fire {
  position: absolute;
  right: 0;
  bottom: 4px;
  width: 17px;
  height: 22px;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNyIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDE3IDIyIj48Zz48Zz48cGF0aCBmaWxsPSIjZWUyOTEyIiBkPSJNOC43NSAyMC43NWMtMS40NjcgMC0yLjY2LTEuMjctMi42Ni0yLjgzMyAwLS4wNTMgMC0uMTA2LjAwNC0uMTcyLjAxOC0uNjU5LjE0My0xLjEwOS4yOC0xLjQwOC4yNTcuNTUzLjcxNyAxLjA2IDEuNDY0IDEuMDZhLjQ0My40NDMgMCAwIDAgLjQ0My0uNDQzYzAtLjYzLjAxMy0xLjM1OS4xNy0yLjAxNi4xNC0uNTgyLjQ3NC0xLjIwMi44OTctMS43LjE4OC42NDYuNTU1IDEuMTY4LjkxNCAxLjY3Ny41MTMuNzI5IDEuMDQzIDEuNDgyIDEuMTM2IDIuNzY3LjAwNi4wNzcuMDExLjE1My4wMTEuMjM1IDAgMS41NjItMS4xOTMgMi44MzMtMi42NiAyLjgzM3ptNy45MzItNy45MzFjLS4yNDMtMy4xNzMtMS43Mi01LjE2MS0zLjAyNC02LjkxNkMxMi40NTEgNC4yOCAxMS40MSAyLjg3NiAxMS40MS44MDdhLjQ0NC40NDQgMCAwIDAtLjcwMS0uMzZjLTEuOTU3IDEuNC0zLjU5IDMuNzYtNC4xNiA2LjAxMy0uMzk3IDEuNTY4LS40NSAzLjMzLS40NTYgNC40OTUtMS44MDgtLjM4Ni0yLjIxNy0zLjA5LTIuMjIyLTMuMTJhLjQ0NS40NDUgMCAwIDAtLjYzMi0uMzM2QzMuMTQzIDcuNTQ1LjkxMiA4LjY4Ljc4MiAxMy4yMDZjLS4wMS4xNTEtLjAxLjMwMi0uMDEuNDUzIDAgNC4zOTkgMy41OCA3Ljk3NyA3Ljk3OCA3Ljk3Ny4wMDYgMCAuMDEyLjAwMi4wMTggMGguMDA1YzQuMzg4LS4wMTIgNy45NTUtMy41ODYgNy45NTUtNy45NzcgMC0uMjIxLS4wNDYtLjg0LS4wNDYtLjg0eiIvPjwvZz48L2c+PC9zdmc+");
  background-size: 100% 100%;
}

.vacancy-play {
  position: absolute;
  right: 0;
  bottom: 8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: $color-orange;
  transition: transform .2s;

  &::after {
    @include tr-right(4px, 4px, 5px, $color-main);
    @include ctr;
    content: "";
    display: block;
    position: absolute;
    left: 53%;
  }
}

@keyframes fire {

  0% {
    transform: translate(0, 0)
  }

  25% {
    transform: translate(1px, -1px) scale(1.08)
  }

  50% {
    transform: translate(1px, 0) scale(1.02)
  }

  75% {
    transform: translate(0, -1px) scale(1.13)
  }

  100% {
    transform: translate(0, 0)
  }
}
</style>
