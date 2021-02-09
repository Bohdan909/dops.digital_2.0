<template>
  <div class="contact-address-section row">
    <div v-if="$mq === 'desktop'" class="col-desktop-2">
      <MapLink
        link="https://www.google.com/maps/place/dops.digital/@49.8544188,24.0319653,20z/data=!4m13!1m7!3m6!1s0x0:0x0!2zNDnCsDUxJzE2LjQiTiAyNMKwMDEnNTYuNyJF!3b1!8m2!3d49.854545!4d24.032413!3m4!1s0x0:0x8574dbaa59ffb003!8m2!3d49.8545066!4d24.0324073"
        text="On map"
      />
    </div>

    <div class="col-desktop-4 col-tablet-s-5 col-mob-10">
      <MapLink
        v-if="$mq !== 'desktop'"
        class="contact-address-link"
        link="https://www.google.com/maps/place/dops.digital/@49.8544188,24.0319653,20z/data=!4m13!1m7!3m6!1s0x0:0x0!2zNDnCsDUxJzE2LjQiTiAyNMKwMDEnNTYuNyJF!3b1!8m2!3d49.854545!4d24.032413!3m4!1s0x0:0x8574dbaa59ffb003!8m2!3d49.8545066!4d24.0324073"
        text="On map"
      />
      <Title
        :class="['contact-address ttl-1', {
          'ttl-3': $mq === 'tabletSmall' || $mq === 'mobile'
        }]"
        :text="`31 Zavodska street, 5th floor <br> Lviv, Ukraine, 79019`"
      />
    </div>

    <div class="col-desktop-3 col-tablet-s-5 col-mob-10 col-br-top col-br-top-end">
      <Title
        element="h2"
        :class="['contact-address-ttl ttl-1', {
          'ttl-3': $mq === 'tabletSmall' || $mq === 'mobile'
        }]"
        text="Follow us"
      />

      <div class="contact-social-wrap">
        <ContactSocial
          v-for="(item, index) in socialData"
          :key="index"
          class="contact-social"
          :followers="item.followers"
          :name="item.name"
          :link="item.link"
        />
      </div>
    </div>
  </div>
</template>

<script>
import socialData from '~/static/socialData'
import MapLink from '~/components/contact/MapLink'
import Title from '~/components/atoms/Title'
import ContactSocial from '~/components/contact/ContactSocial'

export default {
  components: {
    MapLink,
    Title,
    ContactSocial
  },

  data () {
    return {
      socialData
    }
  }
}
</script>

<style lang="scss" scoped>

.contact-address-section {
  padding-top: 80px;
}

.contact-address {
  width: 360px;
}

.contact-address-ttl {
  margin: 18px 0 52px;
}

.contact-social-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.contact-social {
  width: 33.3%;
}

@include tablet {

  .contact-address-section {
    padding-top: 105px;
  }

  .contact-address-link {
    margin-bottom: 26px;
  }

  .contact-address-ttl {
    margin: 51px 0 80px;
  }

  .contact-social {
    width: 135px;

    &:last-child {
      width: auto;
    }
  }
}

@include tablet-small {

  .contact-address-section {
    padding-top: 55px;
  }

  .contact-address {
    width: 255px;
    padding-bottom: 14px;
  }

  .contact-address-ttl {
    margin: 25px 0 24px;
  }

  .contact-social {
    margin-bottom: 7px;
  }
}

@include mobile {

  .contact-address-section {
    padding-top: 35px;
  }

  .contact-address-link {
    margin-bottom: 12px;
  }

  .contact-address-ttl {
    margin-bottom: 28px;
  }

  .contact-social {
    width: 40%;
    margin-bottom: 35px;

    &:nth-child(3n) {
      width: 20%;
    }
  }
}
</style>
