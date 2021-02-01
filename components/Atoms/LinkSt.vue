<template>
  <a
    class="link-st"
    :href="link"
    target="_blank"
  >
    {{ name }}
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '#'
    },

    name: {
      type: String,
      default: '#'
    }
  }
}
</script>

<style lang="scss" scoped>

.link-st {
  display: inline-block;
  padding-right: 20px;
  align-self: flex-start;
  position: relative;
  font-size: 18px;
  line-height: 23px;
  text-decoration: underline;

  @include hover {
    text-decoration: none;
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    top: 2px;
    right: 0;
    width: 14px;
    height: 16px;
    background-size: 100% 100%;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE0IDE2Ij48Zz48Zz48cGF0aCBkPSJNNC4xMTMgOS4yNTlsMy40NTggMy40NTdWMi4wMzFILjAzVi41MjRoNy41NEExLjUxIDEuNTEgMCAwIDEgOS4wNzkgMi4wM3YxMC42ODVsMy40NTctMy40NTcgMS4wNjYgMS4wNjYtNS4yNzcgNS4yNzctNS4yNzgtNS4yNzd6Ii8+PC9nPjwvZz48L3N2Zz4=");
  }
}

@include mobile {

  .link-st {
    padding: 0 0 0 24px;

    &::after {
      width: 16px;
      height: 14px;
      right: auto;
      left: 0;
      top: 3px;
      background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE2IDE0Ij48Zz48Zz48cGF0aCBkPSJNOS4yNTkgOS44ODdsMy40NTctMy40NThIMi4wMzF2Ny41NEguNTI0di03LjU0QTEuNTEgMS41MSAwIDAgMSAyLjAzIDQuOTIxaDEwLjY4NUw5LjI2IDEuNDY0IDEwLjMyNS4zOThsNS4yNzcgNS4yNzctNS4yNzcgNS4yNzh6Ii8+PC9nPjwvZz48L3N2Zz4=");
    }
  }
}
</style>
