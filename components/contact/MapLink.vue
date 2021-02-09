<template>
  <a
    class="contact-map-link"
    :href="link"
    target="_blank"
  >
    <span class="contact-map-icon" />
    <span class="contact-map-text trans-color">
      {{ text }}
    </span>
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    }
  }
}
</script>

<style lang="scss" scoped>

.contact-map-link {
  display: flex;
  flex-direction: row;
  align-self: flex-start;

  @include hover {

    &::v-deep .contact-map-text {
      text-decoration: none;
      color: $color-orange;
    }
  }
}

.contact-map-icon {
  display: block;
  width: 22px;
  height: 28px;
  margin-right: 11px;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDIyIDI4Ij48Zz48Zz48cGF0aCBmaWxsPSIjZWUyOTEyIiBkPSJNMTAgOWExIDEgMCAxIDEgMiAwIDEgMSAwIDAgMS0yIDB6Ii8+PC9nPjxnPjxwYXRoIGZpbGw9IiNlZTI5MTIiIGQ9Ik0xNSAxN2gtMnYtMkg5djJIN3YtMmEyLjAwMiAyLjAwMiAwIDAgMSAyLTJoNGEyLjAwMiAyLjAwMiAwIDAgMSAyIDJ6TTExIDZhMyAzIDAgMSAxIDAgNiAzIDMgMCAwIDEgMC02em0wLTZDNC45MjguMDA3LjAwNyA0LjkyOCAwIDExYTEwLjg4OSAxMC44ODkgMCAwIDAgMi4yMTYgNi42cy4zLjM5NS4zNDguNDUyTDExIDI4bDguNDM5LTkuOTUzYy4wNDQtLjA1My4zNDUtLjQ0Ny4zNDUtLjQ0N2wuMDAxLS4wMDNBMTAuODg1IDEwLjg4NSAwIDAgMCAyMiAxMUMyMS45OTMgNC45MjggMTcuMDcyLjAwNyAxMSAweiIvPjwvZz48L2c+PC9zdmc+");
  background-size: 100% 100%;
}

.contact-map-text {
  display: block;
  padding-top: 6px;
  text-decoration: underline;
}
</style>
