<template>
  <myVueDropzone
    id="files-drop"
    ref="myVueDropzone"
    class="files-drop"
    :options="dropOptions"
    :use-custom-slot="true"
    :accepted-file-types="dropOptions.acceptedFileTypes"
    @vdropzone-complete="addFiles"
  >
    <div class="files-drop-text">
      <TextElement
        class="files-drop-upload text-color-s"
        text="Upload CV"
      />

      <Title
        class="ttl-2 files-drop-ttl"
        text="Drop files"
      />
    </div>

    <TextElement
      class="files-drop-names text-color-s"
      text=".pdf .doc"
    />
  </myVueDropzone>
</template>

<script>
export default {
  data () {
    return {
      dropOptions: {
        url: 'https://httpbin.org/post',
        maxFilesize: 5, // MB
        maxFiles: 10,
        thumbnailWidth: 60, // px
        thumbnailHeight: 60,
        addRemoveLinks: true,
        acceptedFiles: '.pdf, .doc'
      }
    }
  },

  methods: {
    addFiles () {
      const files = this.$refs.myVueDropzone.getAcceptedFiles()
      this.$emit('add-file-form', files)
    }
  }
}
</script>

<style lang="scss" scoped>

.files-drop {
  width: 100%;
  height: 128px;
  min-height: 128px;
  margin-bottom: 35px;
  padding: 10px;
  border-radius: 8px;
  border: 1px dashed #8a8a8a;

  @include mobile {
    margin-bottom: 45px;
  }

  &::v-deep {

    .dz-message {
      display: flex;
      height: 100%;
      justify-content: space-between;
      text-align: left;
      margin: 0;
    }

    .dz-preview {
      min-height: 96px;
      margin: 5px;

      .dz-image img:not([src]) {
        width: 130px;
        height: 96px;
      }

      .dz-details {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 8px;
        padding: 7px 5px;
        background-color: $color-orange;

        .dz-size {
          font-size: 14px;
          margin-bottom: 0;
        }
      }

      .dz-progress {
        height: 10px;
        margin-top: -5px;
      }

      .dz-remove {
        border-radius: 8px;
        padding: 5px;
        border-width: 1px;
        font-size: 13px;
        margin: 0;
        top: 50%;
        left: 10px;
        right: 10px;
        transform: translateY(-50%);
        bottom: auto;
        text-transform: none;
        font-weight: 300;
        font-family: $font-med;
      }

      .dz-progress .dz-upload {
        background-color: $color-main;
      }

      > .dz-success-mark,
      > .dz-error-mark {
        top: 38%;
        transform: translateY(-50%);

        svg {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
}

.files-drop-text,
.files-drop-names {
  align-self: flex-end;
}

.files-drop-upload {
  margin-bottom: 3px;
}

.files-drop-ttl {
  color: $text-color;
}
</style>
