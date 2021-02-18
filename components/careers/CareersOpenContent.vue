<template>
  <div
    v-if="getCareersOpen"
    class="careers-content-wrap"
  >
    <div
      v-for="(section, index) in getCareersOpen.Text_section"
      :key="index"
      class="careers-content-section content-main row col-br-top col-br-top-end"
    >
      <div class="col-desktop-2 col-tablet-s-3 col-tablet-2 col-mob-10">
        <Title
          v-if="section.Title"
          element="h2"
          class="careers-content-ttl ttl-2"
          :text="section.Title"
        />
      </div>

      <div class="col-desktop-8 col-tablet-s-7 col-tablet-8 col-mob-10">
        <div
          v-html-safe="$md.render(section.Text)"
          class="careers-content"
        />
      </div>
    </div>

    <div class="row col-br-top col-br-top-end">
      <div class="col-desktop-4 off-tablet-s-3 col-tablet-s-6 col-tablet-8 off-tablet-1 col-mob-10">
        <Title
          class="careers-form-ttl ttl-3"
          element="h3"
          text="Sound like you? Get in touch"
        />

        <form
          ref="formCareers"
          class="careers-form"
          enctype="multipart/form-data"
          autocomplete="off"
          @submit="submitForm"
        >
          <InputElement
            class="careers-form-input"
            placeholder="Name"
            :required="true"
            name="name"
          />

          <InputElement
            class="careers-form-input"
            placeholder="E-mail"
            type="email"
            :required="true"
            name="email"
          />

          <InputElement
            class="careers-form-input"
            placeholder="Phone"
            type="number"
            :required="true"
            name="phone"
          />

          <InputElement
            class="input-textarea"
            placeholder="Tell us a bit about you"
            is-textarea
            name="msg"
          />

          <client-only>
            <CareersDropZone @add-file-form="addFileForm" />
          </client-only>

          <div class="careers-form-text-wrap">
            <TextElement
              class="careers-form-text text-primary"
              text="By clicking on the “Send Application” button, you consent to the processing of your personal data."
            />
          </div>

          <Button
            ref="btnSubmit"
            element="button"
            class="careers-form-btn"
            :text="submitText"
            type="submit"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import Title from '~/components/atoms/Title'
import TextElement from '~/components/atoms/TextElement'
import InputElement from '~/components/atoms/InputElement'
import CareersDropZone from '~/components/careers/CareersDropZone'
import Button from '~/components/atoms/Button'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  components: {
    Title,
    TextElement,
    InputElement,
    Button,
    CareersDropZone
  },

  data () {
    return {
      submitText: 'Send',
      submitDefault: 'Send',
      submitSending: 'Sending! Thanx!',

      formData: {
        name: ' ',
        email: ' ',
        phone: ' ',
        msg: ' ',
        files: []
      }
    }
  },

  computed: {
    ...mapGetters({
      getCareersOpen: 'CareersOpen/getCareersOpen'
    })
  },

  methods: {

    addFileForm (files) {
      this.formData.files = files
    },

    removeFiles () {
      this.$refs.myVueDropzone.removeAllFiles()
    },

    submitForm (e) {
      e.preventDefault()

      const baseUrl = process.env.baseUrl
      const formData = new FormData()
      this.formData.files.map((item, index) => {
        formData.append('file[' + index + ']', item)
      })

      for (const key in this.formData) {
        formData.append(key, this.formData[key])
      }

      axios.post(baseUrl + '/api/vacancy', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

        .then(() => {
          formData.forEach((val, key) => {
            formData.delete(key)
          })

          this.submitText = this.submitSending
          this.$refs.btnSubmit.$el.classList.add('sending')

          setTimeout(() => {
            this.$refs.formCareers.reset()
            this.removeFiles()

            this.$refs.btnSubmit.$el.classList.remove('sending')
            this.submitText = this.submitDefault
          }, 2000)
        })

        .catch((e) => {
          console.log('ERROR FORM: ', e)
        })
    }
  }
}
</script>

<style lang="scss" scoped>

.careers-content-section {
  padding: 22px 0 74px;

  @include mobile {
    padding: 17px 0 44px;
  }

  &::v-deep {

    p, li, code {
      font-size: 13px;
      line-height: 18px;
    }

    li {
      margin-bottom: 7px;
    }

    ul li {
      padding-left: 13px;

      &:not(:last-child) {
        margin-bottom: 11px;
      }

      &::before {
        top: 5px;
      }
    }
  }
}

.careers-content {
  width: 550px;

  @include tablet-small {
    width: auto;
  }
}

.careers-content-ttl {
  @include mobile {
    margin-bottom: 23px;
  }
}

.careers-form {
  display: flex;
  padding-bottom: 40px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  @include mobile {
    padding-bottom: 20px;
  }
}

.careers-form-ttl {
  padding: 25px 0 83px;

  @include tablet-small {
    margin-left: calc(-12% - 5px);
  }

  @include mobile {
    margin: 0 0 140px;
  }
}

.careers-form-input {
  width: calc(50% - 5px);
  margin-bottom: 39px;

  @include mobile {
    width: 100%;
  }
}

.careers-form-btn {
  width: 260px;
}

.input-textarea {
  margin-bottom: 20px;

  @include mobile {
    margin-bottom: 35px;
  }
}

.careers-form-text-wrap {
  width: 100%;
}

.careers-form-text {
  width: 250px;
  margin-bottom: 23px;
}
</style>
