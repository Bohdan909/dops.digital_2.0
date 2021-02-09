<template>
  <div class="contact-item">
    <TextElement
      v-if="contactObject.title"
      class="contact-ttl text-primary"
      :text="contactObject.title"
    />

    <div class="contact-body">
      <PersonAvatar
        :avatar="contactObject.avatar"
        :name="contactObject.name"
        :pos="contactObject.pos"
      />

      <a class="contact-mail" :href="`mailto:${contactObject.mail}`">
        <TextElement
          v-if="contactObject.mail"
          :class="['text-primary', {
            'text-color-s': $mq !== 'mobile'
          }]"
          :text="contactObject.mail"
        />
      </a>
    </div>
  </div>
  </div>
</template>

<script>
import TextElement from '~/components/atoms/TextElement'
import PersonAvatar from '~/components/atoms/PersonAvatar'

export default {
  components: {
    TextElement,
    PersonAvatar
  },

  props: {
    contactObject: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>

.contact-item  {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.contact-ttl {
  margin-bottom: 12px;
}

.contact-body {
  position: relative;
  flex: 1;
  min-height: 75px;
  padding: 13px 140px 12px 0;
  border-top: 1px solid $color-border;
  border-bottom: 1px solid $color-border;
}

.contact-mail {
  position: absolute;
  display: inline-block;
  right: -17px;
  bottom: 9px;
}

@include macbook {

  .contact-mail {
    right: 0;
  }
}

@include mobile {

  .contact-mail {
    position: static;
    margin: 27px 0 0 66px;
  }
}
</style>
